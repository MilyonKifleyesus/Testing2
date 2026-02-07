import { Component, input, output, AfterViewInit, OnDestroy, inject, effect, signal, computed, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Node as WarRoomNode, FleetSelection, TransitRoute } from '../../../../models/war-room.interface';
import { WarRoomService } from '../../../../services/war-room.service';
import { AppStateService } from '../../../../services/app-state.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { WarRoomMapControlsComponent } from './controls/war-room-map-controls.component';
import { WarRoomMapRoutesComponent, RouteVm } from './routes/war-room-map-routes.component';
import { WarRoomMapMarkersComponent, MarkerVm } from './markers/war-room-map-markers.component';
import { WarRoomMapTooltipComponent, TooltipVm } from './tooltip/war-room-map-tooltip.component';
import { WarRoomMapMathService } from './services/war-room-map-math.service';
import { WarRoomMapAssetsService } from './services/war-room-map-assets.service';
import { WarRoomMapLoaderService } from './services/war-room-map-loader.service';

declare global {
  interface Window {
    jsVectorMap: any;
  }
}

@Component({
  selector: 'app-war-room-map',
  imports: [CommonModule, WarRoomMapControlsComponent, WarRoomMapRoutesComponent, WarRoomMapMarkersComponent, WarRoomMapTooltipComponent],
  templateUrl: './war-room-map.component.html',
  styleUrls: ['./war-room-map.component.scss'],
})
export class WarRoomMapComponent implements AfterViewInit, OnDestroy {
  // Inputs
  nodes = input<WarRoomNode[]>([]);
  selectedEntity = input<FleetSelection | null>(null);
  transitRoutes = input<TransitRoute[]>([]);
  filterStatus = input<'all' | 'active' | 'inactive'>('all');

  // Outputs
  nodeSelected = output<WarRoomNode | undefined>();

  // State
  private mapInstance: any;
  private isInitializing = true;
  private destroyed = false;
  private isFullscreen = false;
  private isDragging = false;
  private userHasZoomed = false;
  private pendingZoomCompanyId: string | null = null;
  // Milli: default view should show the full world map on every device size.
  private readonly defaultZoomFill = 1;
  private readonly defaultZoomMin = 1;
  private readonly defaultZoomMax = 1;
  private readonly defaultZoomCenter = { lat: 0, lng: 0 };
  private readonly BASE_VIEWBOX_WIDTH = 950;
  private readonly BASE_VIEWBOX_HEIGHT = 550;
  private readonly LOD_LOGO_ONLY_THRESHOLD = 1.2;
  private readonly LOD_FULL_DETAIL_THRESHOLD = 2.5;

  // Caches and Observers
  private geocodeCache = new Map<string, { latitude: number; longitude: number }>();
  private geocodeInFlight = new Map<string, Promise<{ latitude: number; longitude: number }>>();
  private logoFailureCache = new Map<string, Set<string>>();
  private viewBoxObserver: MutationObserver | null = null;
  private transformObserver: MutationObserver | null = null;
  private initialViewportMetrics: {
    container: { width: number; height: number };
    viewBox: string;
  } | null = null;

  // Signals
  mapViewBox = signal<string>(`0 0 ${this.BASE_VIEWBOX_WIDTH} ${this.BASE_VIEWBOX_HEIGHT}`);
  readonly mapTransform = signal<string>('');
  readonly fullscreenState = signal<boolean>(false);
  private readonly hoveredNode = signal<WarRoomNode | null>(null);
  private readonly containerRect = signal<DOMRect | null>(null);
  private readonly markerPixelCoordinates = signal<Map<string, { x: number; y: number }>>(new Map());
  private readonly logoFailureVersion = signal(0);

  // Bound Handlers
  private boundFullscreenHandler: (() => void) | null = null;
  private boundResizeHandler: (() => void) | null = null;
  private boundWheelHandler: ((e: WheelEvent) => void) | null = null;
  private boundPanSyncMouseDownHandler: ((e: MouseEvent) => void) | null = null;
  private boundPanSyncMouseMoveHandler: (() => void) | null = null;
  private boundPanSyncMouseUpHandler: (() => void) | null = null;

  // Color Schemes
  private colorSchemes = {
    dark: {
      backgroundColor: '#1a1a1a',
      regionFill: '#2d2d2d',
      regionStroke: '#3d3d3d',
      regionHoverFill: '#404040',
      regionFillOpacity: 0.7,
      markerFill: '#00ffcc',
      markerStroke: '#ffffff',
    },
    light: {
      backgroundColor: '#f5f5f5',
      regionFill: '#e0e0e0',
      regionStroke: '#d0d0d0',
      regionHoverFill: '#d5d5d5',
      regionFillOpacity: 0.8,
      markerFill: '#00887a',
      markerStroke: '#333333',
    },
  };

  private currentTheme = signal<'light' | 'dark'>('dark');

  // Helper methods for template
  getSelectedNode(): WarRoomNode | undefined {
    const selectedId = this.selectedEntity()?.id;
    if (!selectedId) return undefined;
    return this.nodes().find(n => n.companyId === selectedId);
  }

  getSelectedNodePosition(): { top: number; left: number } {
    const node = this.getSelectedNode();
    if (!node) return { top: 0, left: 0 };
    return this.getNodePosition(node);
  }

  getSelectedNodeCity(): string {
    return this.getSelectedNode()?.city || '';
  }

  private getCompanyLogoSource(node: WarRoomNode): string | null {
    const customLogo = typeof node.logo === 'string' ? node.logo.trim() : '';
    if (customLogo) {
      return customLogo;
    }
    return null;
  }

  private getCompanyDescription(node: WarRoomNode): string {
    return this.assetsService.getCompanyDescription(node);
  }

  private getCompanyDisplayName(node: WarRoomNode): string {
    return this.assetsService.getCompanyDisplayName(node);
  }

  getTypeLabel(node: WarRoomNode): string {
    return this.assetsService.getTypeLabel(node);
  }

  private getNodeIndex(node: WarRoomNode): number {
    const nodes = this.getNodesWithValidCoordinates(this.nodes());
    const nodeId = node.id;
    if (nodeId === undefined || nodeId === null) {
      return nodes.indexOf(node);
    }
    return nodes.findIndex((n) => n.id === nodeId);
  }

  private async ensureNodeCoordinates(nodes: WarRoomNode[]): Promise<void> {
    const candidates = nodes
      .map((node) => ({ node, label: this.getLocationLabel(node) }))
      .filter((item) => !!item.label);
    if (candidates.length === 0) return;

    await Promise.all(
      candidates.map(async ({ node, label }) => {
        if (this.isValidCoordinates(node.coordinates)) {
          return;
        }
        try {
          const coords = await this.geocodeLocation(label);
          if (this.isValidCoordinates(coords)) {
            node.coordinates = { latitude: coords.latitude, longitude: coords.longitude };
          } else {
            this.logWarn('Geocoding returned invalid coordinates for node location:', label, coords);
          }
        } catch (error) {
          this.logWarn('Geocoding failed for node location:', label, error);
        }
      })
    );
  }

  private getLocationLabel(node: WarRoomNode): string {
    const city = (node.city || '').trim();
    const country = (node.country || '').trim();
    if (city && country) return `${city}, ${country}`;
    return city || country || '';
  }

  private isValidCoordinates(coords?: { latitude: number; longitude: number } | null): boolean {
    if (!coords) return false;
    if (!Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) return false;
    if (coords.latitude === 0 && coords.longitude === 0) return false;
    return true;
  }

  private getNodesWithValidCoordinates(nodes: WarRoomNode[]): WarRoomNode[] {
    return nodes.filter((node) => this.isValidCoordinates(node.coordinates));
  }

  private async geocodeLocation(location: string): Promise<{ latitude: number; longitude: number }> {
    const cached = this.geocodeCache.get(location);
    if (cached) return cached;

    const inflight = this.geocodeInFlight.get(location);
    if (inflight) return inflight;

    const request = (async () => {
      const geocodeUrl =
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}` +
        `&count=1&language=en&format=json`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      try {
        const response = await fetch(geocodeUrl, { cache: 'no-store', signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Geocoding request failed with status ${response.status}`);
        }
        const data = (await response.json()) as { results?: Array<{ latitude: number; longitude: number }> };
        const result = data.results?.[0];
        if (!result) {
          throw new Error('No geocoding results found for location.');
        }
        const coords = { latitude: result.latitude, longitude: result.longitude };
        this.geocodeCache.set(location, coords);
        return coords;
      } finally {
        clearTimeout(timeoutId);
      }
    })();

    this.geocodeInFlight.set(location, request);
    try {
      return await request;
    } finally {
      this.geocodeInFlight.delete(location);
    }
  }

  private getTooltipBounds(): { left: number; right: number; top: number; bottom: number } {
    const padding = 12;
    const viewportBounds = {
      left: padding,
      top: padding,
      right: window.innerWidth - padding,
      bottom: window.innerHeight - padding
    };

    const containerRect = this.containerRect();
    if (!containerRect) {
      return viewportBounds;
    }

    const bounds = {
      left: Math.max(viewportBounds.left, containerRect.left + padding),
      top: Math.max(viewportBounds.top, containerRect.top + padding),
      right: Math.min(viewportBounds.right, containerRect.right - padding),
      bottom: Math.min(viewportBounds.bottom, containerRect.bottom - padding)
    };

    if (bounds.right <= bounds.left || bounds.bottom <= bounds.top) {
      return viewportBounds;
    }

    return bounds;
  }

  private syncMapViewport(force: boolean = false): void {
    if (!force && (this.userHasZoomed || this.pendingZoomCompanyId)) {
      return;
    }

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const fullWorldViewBox = this.getResponsiveWorldViewBox(container);

    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.maxWidth = '100%';
    svg.style.maxHeight = '100%';
    svg.style.display = 'block';
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    if (force || this.isInitializing || svg.getAttribute('viewBox') !== fullWorldViewBox) {
      svg.setAttribute('viewBox', fullWorldViewBox);
      this.mapViewBox.set(fullWorldViewBox);
    }

    const regionsGroup = svg.querySelector('#jvm-regions-group') as SVGGElement | null;
    if (regionsGroup) {
      const transform = 'translate(0, 0) scale(1)';
      regionsGroup.setAttribute('transform', transform);
      this.mapTransform.set(transform);
    }

    const mapAny = this.mapInstance as any;
    if (mapAny) {
      const fullWorldScale = 1;
      try {
        if (typeof mapAny.updateSize === 'function') {
          mapAny.updateSize();
        }
      } catch (e) {
        this.logWarn('updateSize failed:', e);
      }
      try {
        if (typeof mapAny.setFocus === 'function') {
          mapAny.setFocus({ lat: 0, lng: 0, scale: fullWorldScale, animate: false });
        }
      } catch (e) {
        this.logWarn('setFocus reset failed:', e);
      }
      try {
        if (typeof mapAny.setZoom === 'function') {
          mapAny.setZoom(fullWorldScale);
        }
      } catch (e) {
        this.logWarn('setZoom reset failed:', e);
      }
      try {
        if (typeof mapAny._applyTransform === 'function') {
          mapAny.scale = fullWorldScale;
          mapAny.transX = 0;
          mapAny.transY = 0;
          mapAny._applyTransform();
        }
      } catch (e) {
        this.logWarn('internal transform reset failed:', e);
      }

      const internalMap = mapAny.map as any;
      if (internalMap && typeof internalMap._applyTransform === 'function') {
        try {
          internalMap.scale = fullWorldScale;
          internalMap.transX = 0;
          internalMap.transY = 0;
          internalMap._applyTransform();
        } catch (e) {
          this.logWarn('internal map transform reset failed:', e);
        }
      }
    }
  }

  onPopupClose(event: Event): void {
    event.stopPropagation();
    this.nodeSelected.emit(undefined);
  }

  onPopupViewDetails(event: Event): void {
    event.stopPropagation();
    const node = this.getSelectedNode();
    if (node) {
      this.nodeSelected.emit(node);
    }
  }

  onMarkerHovered(node: WarRoomNode | null): void {
    this.hoveredNode.set(node);
    if (node) {
      const selection: FleetSelection = {
        level: node.level ?? 'factory',
        id: node.companyId,
        parentGroupId: node.parentGroupId,
        subsidiaryId: node.subsidiaryId,
        factoryId: node.factoryId,
      };
      this.warRoomService.setHoveredEntity(selection);
    } else {
      this.warRoomService.setHoveredEntity(null);
    }
  }

  onMarkerLogoError(event: { node: WarRoomNode; logoPath: string }): void {
    const logoSource = this.getCompanyLogoSource(event.node);
    if (!logoSource || !event.logoPath) return;
    this.recordLogoFailure(logoSource, event.logoPath);
  }

  onTooltipLogoError(event: { nodeId: string; logoPath: string }): void {
    const node = this.nodes().find((n) => n.id === event.nodeId);
    if (!node) return;
    const logoSource = this.getCompanyLogoSource(node);
    if (!logoSource || !event.logoPath) return;
    this.recordLogoFailure(logoSource, event.logoPath);
  }

  private recordLogoFailure(logoSource: string, logoPath: string): void {
    const failures = this.logoFailureCache.get(logoSource) ?? new Set<string>();
    failures.add(logoPath);
    this.logoFailureCache.set(logoSource, failures);
    this.logoFailureVersion.update((value) => value + 1);
  }

  // Services
  private warRoomService = inject(WarRoomService);
  private appStateService = inject(AppStateService);
  private mathService = inject(WarRoomMapMathService);
  private assetsService = inject(WarRoomMapAssetsService);
  private loaderService = inject(WarRoomMapLoaderService);

  private logDebug(message: string, ...args: unknown[]): void {
    if (isDevMode()) {
      console.debug(message, ...args);
    }
  }

  private logWarn(message: string, ...args: unknown[]): void {
    if (isDevMode()) {
      console.warn(message, ...args);
    }
  }

  private logError(message: string, ...args: unknown[]): void {
    if (isDevMode()) {
      console.error(message, ...args);
    }
  }

  // Theme management
  private appState = toSignal(this.appStateService.state$, {
    initialValue: {
      theme: 'light',
      direction: 'ltr',
      navigationStyles: 'vertical',
      menuStyles: '',
      layoutStyles: 'default',
      pageStyles: 'regular',
      widthStyles: 'fullwidth',
      menuPosition: 'fixed',
      headerPosition: 'fixed',
      menuColor: 'dark',
      headerColor: 'light',
      themePrimary: '',
      themeBackground: '',
      backgroundImage: ''
    }
  });
  /*
  // Company descriptions - single source of truth
  private readonly companyDescriptions: Record<string, string> = {
    'creative carriage': `Creative Carriage has been a leader in wheelchair accessible vehicle manufacturing and conversions since 1988, when they built Canada's first fully-compliant wheelchair accessible taxi. Based near Brantford, Ontario, they specialize in custom, low-floor van conversions and serve as the exclusive Ontario dealer for six major US manufacturers of accessible and specialty vehicles. Their mission is to improve design and safety standards for wheelchair accessible vehicles.`,
    'alexander dennis': `Alexander Dennis is a world-class bus manufacturer with over 130 years of heritage in design and engineering excellence. Operating 16 facilities across 10 countries and operating North America's only double-deck bus facility in Las Vegas, they lead the industry's transition to zero-emission mobility with 3,000+ electric buses delivered globally.`,
    'karsan': `Karsan is a leading Turkish commercial vehicle manufacturer with over 58 years of industry experience. We specialize in innovative public transportation solutions, including electric buses like the e-JEST and e-ATAK, as well as hydrogen-powered and autonomous vehicles. As Turkey's only independent multi-brand vehicle manufacturer, we manage the entire value chain from R&D to after-sales service. Our state-of-the-art manufacturing facilities in Bursa can produce up to 20,000 vehicles annually.`,
    'arbroc': `ARBOC Specialty Vehicles is North America's pioneer and industry leader in low-floor cutaway bus technology, founded in 2008 and based in Middlebury, Indiana. With 5,000+ buses produced and a 70% market share in Canada and the US, they specialize in fully accessible paratransit, transit, and shuttle vehicles that exceed federal fuel economy and accessibility standards.`,
    'tam': `TAM-Europe is a leading bus and commercial vehicle manufacturer founded in 1947 and based in Maribor, Slovenia. With over 77 years of experience, they specialize in airport buses (VivAir with 40% global market share), electric city buses, and coaches serving markets globally, with strong commitment to product efficiency and environmental sustainability.`,
    'nfl': `New Flyer is North America's largest transit bus manufacturer, founded in 1930 and headquartered in Winnipeg, Manitoba. Operating under parent company NFI Group, they offer the advanced Xcelsior family of buses including battery-electric (Xcelsior CHARGE NGÃ¢â€žÂ¢), hydrogen fuel cell (Xcelsior CHARGE FCÃ¢â€žÂ¢), and hybrid options, with 35,000+ buses in service globally and 265+ million zero-emission miles traveled.`,
    'new flyer': `New Flyer is North America's largest transit bus manufacturer, founded in 1930 and headquartered in Winnipeg, Manitoba. Operating under parent company NFI Group, they offer the advanced Xcelsior family of buses including battery-electric (Xcelsior CHARGE NGÃ¢â€žÂ¢), hydrogen fuel cell (Xcelsior CHARGE FCÃ¢â€žÂ¢), and hybrid options, with 35,000+ buses in service globally and 265+ million zero-emission miles traveled.`,
    'nova': `Nova Bus is Canada's leading transit bus manufacturer, founded in 1993 and based in Saint-Eustache, Quebec. As part of the Volvo Group, they deliver innovative mobility solutions including the 100% electric LFSe+ bus with dual charging options, CNG, diesel-electric hybrid, and conventional vehicles, supporting transit agencies across North America with proven expertise and industry-leading parts and service support.`,
    'nova bus': `Nova Bus is Canada's leading transit bus manufacturer, founded in 1993 and based in Saint-Eustache, Quebec. As part of the Volvo Group, they deliver innovative mobility solutions including the 100% electric LFSe+ bus with dual charging options, CNG, diesel-electric hybrid, and conventional vehicles, supporting transit agencies across North America with proven expertise and industry-leading parts and service support.`
  };
  */

  // Private properties
  private scriptsLoaded = false;
  private zoomTimeoutId: any = null;
  private updateMarkersTimeoutId: any = null;
  private resizeDebounceId: any = null;
  private lastResizeDimensions: { width: number; height: number } | null = null;
  private updateLabelsRAFId: number | null = null;
  private mapReadyRetryInterval: any = null;
  private labelObserver: MutationObserver | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private lastNodesSignature: string | null = null;
  private mapInitAttempts = 0;
  private readonly maxMapInitRetries = 10;
  private labelsUpdateDirty: boolean = false;

  // Map transform for synchronizing transit routes overlay with internal map transforms

  // Signal for marker SVG coordinates to ensure perfect alignment
  private markerCoordinates = signal<Map<string, { x: number; y: number }>>(new Map());

  // Computed properties for dynamic coloring
  readonly routeStroke = computed(() => {
    const status = this.filterStatus();
    if (status === 'active') return '#00C853';
    if (status === 'inactive') return '#D50000';
    return 'url(#path-gradient)';
  });

  readonly routeFill = computed(() => {
    const status = this.filterStatus();
    if (status === 'active') return '#00C853';
    if (status === 'inactive') return '#D50000';
    return '#0ea5e9';
  });

  constructor() {
    // Effect to zoom to selected company location when it changes
    effect((onCleanup) => {
      const selected = this.selectedEntity();
      if (selected && this.mapInstance) {
        if (this.isInitializing && !this.userHasZoomed) {
          return;
        }
        if (!this.userHasZoomed && selected.level === 'parent') {
          return;
        }
        // Clear any existing timeout
        if (this.zoomTimeoutId) {
          clearTimeout(this.zoomTimeoutId);
        }
        this.zoomTimeoutId = setTimeout(() => {
          if (!this.destroyed) {
            this.zoomToEntity(selected.id);
          }
          this.zoomTimeoutId = null;
        }, 200);
      }
      onCleanup(() => {
        if (this.zoomTimeoutId) {
          clearTimeout(this.zoomTimeoutId);
          this.zoomTimeoutId = null;
        }
      });
    });

    effect(() => {
      const selected = this.selectedEntity();
      const container = document.querySelector('.war-room-map-container') as HTMLElement | null;
      if (container) {
        if (selected?.id) {
          container.setAttribute('data-has-selection', 'true');
        } else {
          container.removeAttribute('data-has-selection');
        }
      }
    });

    effect((onCleanup) => {
      const nodes = this.nodes();
      if (this.mapInstance && nodes.length > 0 && this.scriptsLoaded) {
        // Clear any existing timeout
        if (this.updateMarkersTimeoutId) {
          clearTimeout(this.updateMarkersTimeoutId);
        }
        this.updateMarkersTimeoutId = setTimeout(() => {
          if (!this.destroyed) {
            this.updateMapMarkers();
          }
          this.updateMarkersTimeoutId = null;
        }, 500);
      }
      onCleanup(() => {
        if (this.updateMarkersTimeoutId) {
          clearTimeout(this.updateMarkersTimeoutId);
          this.updateMarkersTimeoutId = null;
        }
      });
    });

    effect(() => {
      const hovered = this.warRoomService.hoveredEntity();
      if (!hovered) {
        this.hoveredNode.set(null);
        return;
      }
      const match = this.nodes().find((node) =>
        node.companyId === hovered.id || node.id === hovered.id
      );
      this.hoveredNode.set(match ?? null);
    });

    // NEW: React to pan/zoom requests from service or other components
    effect(() => {
      const panRequest = this.warRoomService.panToEntity();
      if (panRequest && this.mapInstance && !this.destroyed) {
        // Use the timestamp to ensure effect re-runs even for same entity
        this.zoomToEntity(panRequest.id, 8);
      }
    });

    effect(() => {
      const selected = this.selectedEntity();
      if (!selected && this.mapInstance && this.scriptsLoaded) {
        // When no company is selected, return to the default zoom view.
        this.userHasZoomed = false;
        this.applyDefaultZoom();
      }
    });

    // Effect to update map colors when theme changes
    effect(() => {
      const theme = this.currentTheme();
      if (this.mapInstance && !this.destroyed) {
        this.updateMapColors(theme);
      }
    });
  }

  // Computed view model for projected transit routes with SVG coordinates
  readonly routesVm = computed<RouteVm[]>(() => {
    const routes = this.transitRoutes();
    const markers = this.markerCoordinates();
    const nodes = this.getNodesWithValidCoordinates(this.nodes());
    if (!routes || routes.length === 0) return [];

    const projected = routes.map((route, index) => {
      const selected = this.selectedEntity();

      // Find all matching nodes for source and destination (Level-agnostic)
      const findMatches = (id: string): WarRoomNode[] => {
        const nid = id.toLowerCase();

        // 1. Direct ID match
        const direct = nodes.filter((n: WarRoomNode) =>
          n.id === id || n.factoryId === id || n.subsidiaryId === id || n.parentGroupId === id
        );
        if (direct.length > 0) return direct;

        // 2. Resolve Factory ID to higher level nodes
        const factory = this.warRoomService.factories().find(f => f.id === id);
        if (factory) {
          const resolved = nodes.filter(n => n.id === factory.subsidiaryId || n.id === factory.parentGroupId);
          if (resolved.length > 0) return resolved;
        }

        // 3. System matches
        if (nid.includes('fleetzero') || nid.includes('fleet-zero')) {
          return nodes.filter(n => n.id === 'fleetzero' || (n.name && n.name.toLowerCase().includes('fleetzero')));
        }

        // 4. Source handling
        if (id.startsWith('source-')) {
          const baseId = id.replace('source-', '');
          const resolved = nodes.filter(n => n.id === baseId || n.factoryId === baseId || n.subsidiaryId === baseId);
          if (resolved.length > 0) return resolved;

          // Try resolving baseId as factory
          const baseFactory = this.warRoomService.factories().find(f => f.id === baseId);
          if (baseFactory) {
            return nodes.filter(n => n.id === baseFactory.subsidiaryId || n.id === baseFactory.parentGroupId);
          }
        }

        // 5. Name match fallback
        return nodes.filter((n: WarRoomNode) =>
          (!!n.name && n.name.toLowerCase() === nid) ||
          (!!n.company && n.company.toLowerCase().includes(nid))
        );
      };

      const fromMatches = findMatches(route.from);
      const toMatches = findMatches(route.to);

      if (fromMatches.length === 0 || toMatches.length === 0) {
        return null;
      }

      // Prioritize the selected entity if it's among the matches
      const fromNode = fromMatches.find((n: WarRoomNode) =>
        n.id === selected?.id || n.subsidiaryId === selected?.id || n.factoryId === selected?.id
      ) || fromMatches[0];

      const toNode = toMatches.find((n: WarRoomNode) =>
        n.id === selected?.id || n.subsidiaryId === selected?.id || n.factoryId === selected?.id
      ) || toMatches[0];

      // Try to get coordinates from the markers first (most accurate)
      let start = fromNode ? markers.get(fromNode.id) : null;
      let end = toNode ? markers.get(toNode.id) : null;

      // Fallback to projection if markers not yet available and route coords are valid
      if (!start && this.isValidCoordinates(route.fromCoordinates)) {
        start = this.projectCoordinatesToSVG(
          route.fromCoordinates.latitude,
          route.fromCoordinates.longitude
        );
      }
      if (!end && this.isValidCoordinates(route.toCoordinates)) {
        end = this.projectCoordinatesToSVG(
          route.toCoordinates.latitude,
          route.toCoordinates.longitude
        );
      }

      if (!start || !end) {
        return null;
      }

      return {
        id: route.id,
        start,
        end,
        path: this.mathService.createCurvedPath(start, end),
        strokeWidth: route.strokeWidth || 1.5,
        dashArray: route.dashArray,
        index,
        highlighted: !!selected && (
          route.from === selected.id ||
          route.to === selected.id ||
          route.from === selected.subsidiaryId ||
          route.to === selected.subsidiaryId ||
          route.from === selected.factoryId ||
          route.to === selected.factoryId
        ),
        beginOffset: `${index * 0.4}s`,
      };
    });

    return projected.filter((route): route is NonNullable<typeof route> => !!route);
  });

  readonly zoomFactor = computed(() => {
    const viewBox = this.mathService.parseViewBox(this.mapViewBox());
    return this.mathService.getZoomFactor(viewBox);
  });

  readonly markersVm = computed<MarkerVm[]>(() => {
    const nodes = this.getNodesWithValidCoordinates(this.nodes());
    const coords = this.markerCoordinates();
    const zoomFactor = this.zoomFactor();
    const selected = this.selectedEntity();
    const hovered = this.warRoomService.hoveredEntity();
    const baseUrl = window.location.origin;
    this.logoFailureVersion();

    const vms = nodes.map((node) => {
      const pos = coords.get(node.id);
      if (!pos) return null;

      let displayName = this.getCompanyDisplayName(node).toUpperCase();
      if (displayName.includes('NOVA')) displayName = 'NOVA BUS';
      if (displayName.includes('KARZAN') || displayName.includes('KARSAN')) displayName = 'KARSAN';

      const logoSource = this.getCompanyLogoSource(node);
      const hasLogo = !!logoSource;
      const failures = logoSource ? this.logoFailureCache.get(logoSource) : undefined;
      const logoPath = logoSource
        ? this.assetsService.getPreferredLogoPath(logoSource, baseUrl, failures)
        : '';

      const nodeLevel = node.level ?? 'factory';
      const isSelected = !!selected && node.companyId === selected.id && selected.level === nodeLevel;
      const isHovered = !!hovered && (node.companyId === hovered.id || node.id === hovered.id);
      const lod = this.getPinLodState(zoomFactor, isSelected);

      const bubbleW = Math.max(40, displayName.length * 6 + 40);
      const bubbleH = 32;
      const bubbleR = 8;
      const pinBodyPath = this.buildPinBodyPath(bubbleW, bubbleH, bubbleR);

      const scale = (1.5 / Math.pow(zoomFactor, 0.45));
      const compactScale = Math.max(0.9, Math.min(1.35, 1.25 / Math.pow(zoomFactor, 0.25)));
      const useScale = (lod.isLogoOnly || lod.isCompactLogo) ? compactScale : scale;

      const smallSize = 12;
      const fullSize = 20;
      const logoSize = (lod.isLogoOnly || lod.isCompactLogo) ? smallSize : fullSize;
      const pinLogoX = (lod.isLogoOnly || lod.isCompactLogo) ? -smallSize / 2 : (-bubbleW / 2 + 8);
      const pinLogoY = (lod.isLogoOnly || lod.isCompactLogo) ? -smallSize / 2 : (-bubbleH - 4);

      return {
        id: node.id,
        node,
        mapX: pos.x,
        mapY: pos.y,
        displayName,
        ariaLabel: this.getMarkerAriaLabel(node),
        hasLogo,
        logoPath,
        isSelected,
        isHovered,
        isHub: this.isHub(node),
        lodClass: lod.lodClass,
        pinTransform: `translate(${pos.x}, ${pos.y}) scale(${useScale})`,
        pinBodyPath,
        pinLogoX,
        pinLogoY,
        pinLogoSize: logoSize,
        pinLabelX: -bubbleW / 2 + 32,
        pinLabelY: -bubbleH / 2 - 10,
        pinLabelText: displayName,
        showPinBody: lod.isFullDetail,
        showPinGloss: lod.isFullDetail,
        showPinLabel: lod.isFullDetail,
        showPinHalo: isSelected,
        showBgMarker: lod.isLogoOnly || lod.isCompactLogo,
      } as MarkerVm;
    });

    return vms.filter((vm): vm is MarkerVm => !!vm);
  });

  readonly tooltipVm = computed<TooltipVm | null>(() => {
    const node = this.hoveredNode();
    if (!node) return null;

    const pixel = this.markerPixelCoordinates().get(node.id);
    if (!pixel) return null;

    this.logoFailureVersion();

    const containerRect = this.containerRect();
    const anchorLeft = containerRect ? containerRect.left + pixel.x : pixel.x;
    const anchorTop = containerRect ? containerRect.top + pixel.y : pixel.y;

    const bounds = this.getTooltipBounds();
    const availableWidth = Math.max(120, bounds.right - bounds.left);
    const availableHeight = Math.max(120, bounds.bottom - bounds.top);
    const tooltipWidth = Math.min(420, Math.max(260, Math.floor(availableWidth * 0.92)));
    const tooltipHeight = Math.min(360, Math.max(180, Math.floor(availableHeight * 0.6)));
    const anchor = { left: anchorLeft, top: anchorTop, width: 16, height: 16 };
    const position = this.mathService.computeTooltipPosition(anchor, bounds, { width: tooltipWidth, height: tooltipHeight });

    const baseUrl = window.location.origin;
    const displayName = this.getCompanyDisplayName(node);
    const description = this.getCompanyDescription(node);
    const logoSource = this.getCompanyLogoSource(node);
    const failures = logoSource ? this.logoFailureCache.get(logoSource) : undefined;
    const logoPath = logoSource
      ? this.assetsService.getPreferredLogoPath(logoSource, baseUrl, failures)
      : '';
    const locationLabel = node.country ? `${node.city}, ${node.country}` : (node.city || '');
    const statusLabel = node.status || '';
    const statusClass = this.assetsService.getTooltipStatusClass(node.status);
    const typeLabel = this.getTypeLabel(node);

    return {
      visible: true,
      nodeId: node.id,
      top: position.top,
      left: position.left,
      flipped: position.flipped,
      displayName,
      description,
      logoPath,
      typeLabel,
      locationLabel,
      statusLabel,
      statusClass,
    };
  });

  /**
   * Synchronize the mapViewBox signal with the current SVG viewBox
   * This ensures transit lines overlay stays aligned with the map during zoom/pan
   */
  private syncViewBoxFromMap(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const viewBox = svg.getAttribute('viewBox');
    if (viewBox && !viewBox.includes('NaN')) {
      // Only update if the viewBox actually changed to avoid unnecessary recomputes
      if (this.mapViewBox() !== viewBox) {
        this.mapViewBox.set(viewBox);
      }
    }
  }


  /**
   * Project latitude/longitude coordinates to SVG coordinate space
   * Uses the same projection as overlays and fallbacks for consistency.
   */
  private projectCoordinatesToSVG(lat: number, lng: number): { x: number; y: number } {
    // Try to use the map instance's coordinate conversion if available
    if (this.mapInstance && typeof this.mapInstance.latLngToPoint === 'function') {
      try {
        const point = this.mapInstance.latLngToPoint([lat, lng]);
        if (point && typeof point.x === 'number' && typeof point.y === 'number') {
          return { x: point.x, y: point.y };
        }
      } catch (e) {
        this.logWarn('Failed to use mapInstance.latLngToPoint, falling back to manual projection:', e);
      }
    }

    const container = document.getElementById('war-room-map');
    const svg = container?.querySelector('svg') ?? null;
    const viewBox = this.mathService.parseViewBox(svg?.getAttribute('viewBox') ?? null);
    return this.mathService.projectLatLngToMapSpace(lat, lng, viewBox);
  }


  ngAfterViewInit(): void {
    // Wait for view to be fully initialized
    setTimeout(() => {
      this.setupContainerResizeObserver();
      this.loadScripts()
        .then(() => {
          this.initializeMap();
        })
        .catch((error) => {
          this.logError('Failed to load map scripts:', error);
        });
    }, 200);
  }

  ngOnDestroy(): void {
    this.hoveredNode.set(null);
    this.destroyed = true;
    this.pendingZoomCompanyId = null;

    // Remove resize listener
    // Clear timeouts
    if (this.zoomTimeoutId) {
      clearTimeout(this.zoomTimeoutId);
      this.zoomTimeoutId = null;
    }
    if (this.updateMarkersTimeoutId) {
      clearTimeout(this.updateMarkersTimeoutId);
      this.updateMarkersTimeoutId = null;
    }
    if (this.resizeDebounceId) {
      clearTimeout(this.resizeDebounceId);
      this.resizeDebounceId = null;
    }

    // Cancel RAF loop
    if (this.updateLabelsRAFId !== null) {
      cancelAnimationFrame(this.updateLabelsRAFId);
      this.updateLabelsRAFId = null;
    }
    if (this.mapReadyRetryInterval) {
      clearInterval(this.mapReadyRetryInterval);
      this.mapReadyRetryInterval = null;
    }

    // Disconnect MutationObservers
    if (this.labelObserver) {
      this.labelObserver.disconnect();
      this.labelObserver = null;
    }
    if (this.viewBoxObserver) {
      this.viewBoxObserver.disconnect();
      this.viewBoxObserver = null;
    }
    if (this.transformObserver) {
      this.transformObserver.disconnect();
      this.transformObserver = null;
    }

    // Remove event listeners
    if (this.boundFullscreenHandler) {
      document.removeEventListener('fullscreenchange', this.boundFullscreenHandler);
      document.removeEventListener('webkitfullscreenchange', this.boundFullscreenHandler);
      document.removeEventListener('msfullscreenchange', this.boundFullscreenHandler);
      this.boundFullscreenHandler = null;
    }
    if (this.boundResizeHandler) {
      window.removeEventListener('resize', this.boundResizeHandler);
      this.boundResizeHandler = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.boundPanSyncMouseDownHandler) {
      const container = document.getElementById('war-room-map');
      if (container) {
        container.removeEventListener('mousedown', this.boundPanSyncMouseDownHandler);
      }
      this.boundPanSyncMouseDownHandler = null;
    }
    if (this.boundPanSyncMouseMoveHandler) {
      document.removeEventListener('mousemove', this.boundPanSyncMouseMoveHandler);
      this.boundPanSyncMouseMoveHandler = null;
    }
    if (this.boundPanSyncMouseUpHandler) {
      document.removeEventListener('mouseup', this.boundPanSyncMouseUpHandler);
      this.boundPanSyncMouseUpHandler = null;
    }
    if (this.boundWheelHandler) {
      const container = document.getElementById('war-room-map');
      if (container) {
        container.removeEventListener('wheel', this.boundWheelHandler);
      }
      this.boundWheelHandler = null;
    }

    if (this.isFullscreen) {
      this.exitFullscreen();
    }
    this.mapInstance = null;
  }

  private setupContainerResizeObserver(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    this.resizeObserver = this.loaderService.observeContainerSize(container, () => {
      if (this.destroyed) return;
      this.scheduleResizeUpdate('observer');
    });
    // Also observe the parent map area for layout changes
    const mapArea = container.closest('.war-room-map-area');
    if (mapArea && mapArea !== container) {
      this.resizeObserver.observe(mapArea);
    }
    const mapContainer = container.closest('.map-container');
    if (mapContainer && mapContainer !== container) {
      this.resizeObserver.observe(mapContainer);
    }
    const warRoomContainer = container.closest('.war-room-map-container');
    if (warRoomContainer && warRoomContainer !== container) {
      this.resizeObserver.observe(warRoomContainer);
    }
  }

  private scheduleResizeUpdate(reason: 'observer' | 'window' | 'fullscreen' = 'observer', force: boolean = false): void {
    if (this.destroyed) return;

    if (this.resizeDebounceId) {
      clearTimeout(this.resizeDebounceId);
    }

    this.resizeDebounceId = setTimeout(() => {
      this.resizeDebounceId = null;
      this.handleResize(reason, force);
    }, 120);
  }

  private handleResize(reason: 'observer' | 'window' | 'fullscreen', force: boolean = false): void {
    if (this.destroyed) return;
    void reason;

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const sizeChanged =
      !this.lastResizeDimensions ||
      Math.abs(this.lastResizeDimensions.width - rect.width) > 0.5 ||
      Math.abs(this.lastResizeDimensions.height - rect.height) > 0.5;

    if (!sizeChanged && !force) {
      return;
    }

    this.lastResizeDimensions = { width: rect.width, height: rect.height };
    this.containerRect.set(rect);

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Always refresh the map engine bounds first so zoom limits are correct.
    if (this.mapInstance && typeof (this.mapInstance as any).updateSize === 'function') {
      try {
        (this.mapInstance as any).updateSize();
      } catch (e) {
        this.logWarn('updateSize failed:', e);
      }
    }

    if (!this.userHasZoomed && !this.pendingZoomCompanyId) {
      this.ensureSvgResponsive();
    } else {
      const baseViewBox = this.calculateFullWorldViewBox(rect);
      this.updateBaseViewportMetrics(baseViewBox, rect.width, rect.height);
      this.applySvgSizing(container, svg);

      const currentViewBox = svg.getAttribute('viewBox');
      if (!currentViewBox || currentViewBox.includes('NaN')) {
        svg.setAttribute('viewBox', baseViewBox);
        this.mapViewBox.set(baseViewBox);
      } else {
        this.mapViewBox.set(currentViewBox);
      }
    }

    if (this.userHasZoomed || this.pendingZoomCompanyId) {
      this.updateLabelPositions();
    } else {
      this.markLabelsDirty();
    }
  }

  private loadScripts(): Promise<void> {
    if (this.scriptsLoaded) {
      return Promise.resolve();
    }

    return this.loaderService.loadScripts(() => this.destroyed).then(() => {
      this.scriptsLoaded = true;
    });
  }

  private initializeMap(): void {
    if (!window.jsVectorMap) {
      this.logError('jsVectorMap library not loaded');
      return;
    }

    // Check if container exists
    const container = document.getElementById('war-room-map');
    if (!container) {
      this.logError('Map container #war-room-map not found');
      this.mapInitAttempts++;
      if (this.mapInitAttempts < this.maxMapInitRetries) {
        setTimeout(() => {
          if (!this.destroyed) {
            this.initializeMap();
          }
        }, 200); // Retry after 200ms
      } else {
        this.logError('Max retry attempts reached for map initialization');
      }
      return;
    }

    // Check if container has dimensions, if not set a minimum
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      this.logWarn('Map container has no dimensions, setting minimum...', rect);
      // Set explicit dimensions if parent doesn't provide them
      const parent = container.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        if (parentRect.height === 0 || rect.height === 0) {
          // Set explicit height on both container and parent if needed
          if (rect.height === 0) {
            container.style.height = '600px';
            this.logDebug('Set container height to 600px');
          }
          if (parentRect.height === 0 && parent) {
            parent.style.height = '600px';
            this.logDebug('Set parent height to 600px');
          }
        }
        if (parentRect.width === 0 || rect.width === 0) {
          container.style.width = '100%';
          if (parent) {
            parent.style.width = '100%';
          }
          this.logDebug('Set container width to 100%');
        }
      }
      // Wait a bit for styles to apply, then retry
      this.mapInitAttempts++;
      if (this.mapInitAttempts < this.maxMapInitRetries) {
        setTimeout(() => {
          if (!this.destroyed) {
            this.initializeMap();
          }
        }, 150);
      } else {
        this.logError('Max retry attempts reached for map dimension initialization');
      }
      return;
    }

    // Reset attempt counter on successful initialization
    this.mapInitAttempts = 0;

    // Set initializing flag
    this.isInitializing = true;

    this.logDebug('Map container dimensions:', rect.width, 'x', rect.height);
    // ? Measure & cache the first container size/viewBox before jsVectorMap renders.
    this.ensureInitialViewportMetrics(container, rect);

    const nodes = this.nodes();
    if (nodes.length === 0) {
      this.logWarn('No nodes available for map initialization. Rendering map without markers.');
    }

    this.logDebug('Initializing map with', nodes.length, 'nodes');

    // Clean up any existing map instance without removing the container.
    // Removing the container causes "Container disappeared before initialization" when
    // reinitializing (e.g. after adding a company) because the DOM node is gone.
    if (this.mapInstance) {
      try {
        const el = document.getElementById('war-room-map');
        if (el) {
          el.innerHTML = '';
        }
      } catch (e) {
        this.logWarn('Error cleaning up existing map:', e);
      }
      this.mapInstance = null;
    }

    // Ensure observers are disconnected before creating new ones
    if (this.labelObserver) {
      this.labelObserver.disconnect();
      this.labelObserver = null;
    }
    if (this.viewBoxObserver) {
      this.viewBoxObserver.disconnect();
      this.viewBoxObserver = null;
    }
    if (this.transformObserver) {
      this.transformObserver.disconnect();
      this.transformObserver = null;
    }

    setTimeout(async () => {
      try {
        if (this.destroyed) return;
        const finalCheck = document.getElementById('war-room-map');
        if (!finalCheck) return;

        const finalRect = finalCheck.getBoundingClientRect();
        if (finalRect.width === 0 || finalRect.height === 0) {
          this.logError('Container still has no dimensions:', finalRect);
          // Force dimensions
          finalCheck.style.width = '100%';
          finalCheck.style.height = '600px';
          this.logDebug('Forced container dimensions');
        }

        await this.ensureNodeCoordinates(nodes);

        const nodesWithCoordinates = this.getNodesWithValidCoordinates(nodes);
        this.lastNodesSignature = this.getNodesSignature(nodesWithCoordinates);
        if (nodes.length > 0 && nodesWithCoordinates.length === 0) {
          this.logWarn('No nodes with valid coordinates after geocoding. Rendering map without markers.');
        }

        // Convert nodes to jsVectorMap markers format
        // jsVectorMap typically expects [latitude, longitude] format for both coords and latLng
        const allMarkers = nodesWithCoordinates.map((node) => ({
          name: node.name,
          coords: [node.coordinates.latitude, node.coordinates.longitude] as [number, number], // [lat, lng]
          latLng: [node.coordinates.latitude, node.coordinates.longitude] as [number, number], // [lat, lng]
          // Attach rich metadata for robust interaction handling
          data: {
            id: node.id,
            companyId: node.companyId,
            name: node.company || node.name,
            type: node.level || 'factory',
            status: node.status || 'ACTIVE',
            city: node.city,
            country: node.country,
            coordinates: node.coordinates
          }
        }));

        // Get current theme for initial map colors
        const currentTheme = this.currentTheme();
        const colors = this.colorSchemes[currentTheme] || this.colorSchemes.dark;

        // Initialize the map with proper configuration
        const mapConfig: any = {
          selector: '#war-room-map',
          map: 'world',
          zoomButtons: false, // use custom zoom in/out in .map-controls
          backgroundColor: colors.backgroundColor,
          // Enable scroll zoom
          zoomOnScroll: true, // Enable scroll zoom
          zoomMin: 1.0, // Minimum zoom level (full-world view; prevents extra zoom-out)
          zoomMax: 15, // Maximum zoom level
          // Enable pan/drag functionality
          panOnDrag: true, // Enable dragging to pan the map
          markers: allMarkers,
          markerStyle: {
            initial: {
              fill: '#00FF41', // Tactical green
              fillOpacity: 0.4,
              stroke: '#00FF41',
              strokeWidth: 1,
              r: 5,
            },
            hover: {
              fill: '#00FF41',
              fillOpacity: 1,
              stroke: '#ffffff',
              strokeWidth: 2,
              r: 9,
            },
          },
          regionStyle: {
            initial: {
              fill: colors.regionFill,
              fillOpacity: colors.regionFillOpacity,
              stroke: colors.regionStroke,
              strokeWidth: 0.5,
            },
            hover: {
              fill: colors.regionHoverFill,
            },
          },
          // Use custom tooltip only (prevents duplicate tooltips)
          showTooltip: false,
          // Disable default marker labels (we use custom pin labels)
          labels: {
            markers: {
              render: () => '' // Return empty string to prevent label rendering
            }
          },
        };

        // Add click handler with zoom functionality
        mapConfig.onMarkerClick = (event: any, index: number) => {
          const node = nodesWithCoordinates[index];
          this.logDebug('Marker clicked via jsVectorMap handler:', node);
          this.nodeSelected.emit(node);
        };

        // onViewportChange: Handle zoom/pan events to update label positions
        mapConfig.onViewportChange = () => {
          // Mark that user has interacted with the map (zoomed/panned)
          // Only if we're not in the initialization phase where many automatic layout shifts happen
          if (!this.isInitializing) {
            this.userHasZoomed = true;
          }

          // Sync the viewBox signal first to ensure transit lines update correctly
          this.syncViewBoxFromMap();

          this.updateLabelPositions();
        };

        // Initialize the map
        this.logDebug('Creating jsVectorMap instance with config:', mapConfig);
        this.logDebug('Container element:', finalCheck);
        this.logDebug('Container dimensions:', finalCheck.getBoundingClientRect());

        try {
          this.mapInstance = this.loaderService.initMap(mapConfig);
          this.logDebug('Map instance created successfully:', this.mapInstance);

          // Immediately after map creation, ensure cross-browser responsiveness
          // Fixes issue where Edge/Chrome handle SVG scaling differently
          setTimeout(() => {
            const svg = finalCheck.querySelector('svg');
            if (svg) {
              // Ensure full width/height
              svg.style.width = '100%';
              svg.style.height = '100%';
              svg.removeAttribute('width');
              svg.removeAttribute('height');

              // Force aspect ratio preservation to fit container
              svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

              // Reset regions group transform to ensure no pre-applied zoom/pan persists
              const regionsGroup = svg.querySelector('#jvm-regions-group');
              if (regionsGroup) {
                regionsGroup.setAttribute('transform', 'translate(0, 0) scale(1)');
              }

              // Set a sane default viewBox if none exists, or respect existing one but enforce 'meet'
              const currentVb = svg.getAttribute('viewBox');
              if (!currentVb || currentVb.includes('NaN')) {
                const initialViewBox = this.getResponsiveWorldViewBox(finalCheck);
                svg.setAttribute('viewBox', initialViewBox);
                this.mapViewBox.set(initialViewBox);
              } else {
                this.mapViewBox.set(currentVb);
              }

              // Also refresh the map instance size if possible
              if (this.mapInstance && typeof this.mapInstance.updateSize === 'function') {
                this.mapInstance.updateSize();
              }
            }

            if (!this.destroyed && !this.pendingZoomCompanyId) {
              this.applyDefaultZoom();
            }
          }, 50);

          setTimeout(() => {
            if (this.destroyed) return;
            // Force another sync of dimensions
            if (this.mapInstance && typeof this.mapInstance.updateSize === 'function') {
              this.mapInstance.updateSize();
            }
            this.updateLabelPositions();
            this.startLabelPositionUpdates();
            const pending = this.pendingZoomCompanyId;
            this.pendingZoomCompanyId = null;
            if (pending) this.zoomToEntity(pending, 12);

            // Apply default zoom (after logos are added)
            // Only if no pending zoom is queued
            if (!pending) {
              // Call immediately and also after a delay to ensure it sticks
              this.applyDefaultZoom();
              setTimeout(() => {
                if (!this.destroyed) {
                  this.applyDefaultZoom();
                }
              }, 500);
              setTimeout(() => {
                if (!this.destroyed) {
                  this.applyDefaultZoom();
                  // Initialization complete - allow user interactions to be tracked
                  this.isInitializing = false;
                  this.logDebug('Map initialization complete - user interactions enabled');
                }
              }, 2500); // Give plenty of time for all layout shifts to settle
            } else {
              // If there was a pending zoom, we're done initializing
              this.isInitializing = false;
            }
          }, 1000);

          // Listen for fullscreen changes
          this.setupFullscreenListeners();

          // Verify map was created
          if (!this.mapInstance) {
            this.logError('Map instance is null after creation');
          } else {
            // Verify SVG was created
            setTimeout(() => {
              const svg = finalCheck.querySelector('svg');
              if (svg) {
                this.logDebug('Map SVG found:', svg);
                this.logDebug('SVG dimensions:', svg.getBoundingClientRect());
                this.logDebug('SVG viewBox:', svg.getAttribute('viewBox'));

                // Fix missing viewBox if needed (common issue)
                if (!svg.getAttribute('viewBox')) {
                  this.logWarn('SVG missing viewBox, forcing default...');
                  svg.setAttribute('viewBox', this.getResponsiveWorldViewBox(finalCheck));
                }

                // Ensure SVG is responsive - remove fixed width/height attributes
                svg.removeAttribute('width');
                svg.removeAttribute('height');
                svg.style.width = '100%';
                svg.style.height = '100%';
                svg.setAttribute('preserveAspectRatio', 'xMidYMid meet'); // Show entire map, maintain aspect ratio

                // Immediately set to default zoom (responsive to container)
                this.applyDefaultZoom();

                // Check if SVG has content
                const hasContent = svg.children.length > 0;
                this.logDebug('SVG has content:', hasContent, 'children:', svg.children.length);

                if (!hasContent) {
                  this.logWarn('SVG exists but has no content - map may not have rendered');
                } else {
                  // Log SVG structure
                  this.logDebug('SVG children:', Array.from(svg.children).map((child: any) => ({
                    tagName: child.tagName,
                    id: child.id,
                    className: child.className,
                  })));
                }
              } else {
                this.logError('Map SVG not found - map initialization may have failed');
                // Log container contents for debugging
                this.logDebug('Container innerHTML length:', finalCheck.innerHTML.length);
                this.logDebug('Container children:', Array.from(finalCheck.children).map((child: any) => ({
                  tagName: child.tagName,
                  id: child.id,
                  className: child.className,
                })));
              }

              // Check for regions
              const regions = finalCheck.querySelectorAll('#jvm-regions-group path');
              this.logDebug('Number of region paths found:', regions.length);
              if (regions.length === 0) {
                this.logWarn('No region paths found - map regions may not have rendered');
              }

              // Ensure SVG is responsive
              this.ensureSvgResponsive();

              // Apply default zoom by default
              // Only if no pending zoom is queued
              if (!this.pendingZoomCompanyId) {
                this.applyDefaultZoom();
              }

              // Setup resize handler to keep SVG responsive
              this.setupResizeHandler();

              // Setup viewBox observer to maintain full world view
              this.setupViewBoxObserver();
              this.setupTransformObserver();

              // Setup wheel/scroll zoom handler
              this.setupWheelZoomHandler();
              // Keep logo overlays synced while dragging the map
              this.setupPanSyncHandlers();

              // Check for markers
              const markers = finalCheck.querySelectorAll('.jvm-marker, circle[class*="marker"], circle[data-index]');
              this.logDebug('Number of markers found:', markers.length);
              if (markers.length === 0) {
                this.logWarn('No markers found - map markers may not have rendered');
              } else {
                this.logDebug('Markers:', Array.from(markers).map((m: any) => ({
                  cx: m.getAttribute('cx'),
                  cy: m.getAttribute('cy'),
                  fill: m.getAttribute('fill'),
                })));
              }
            }, 500);
          }
        } catch (initError) {
          this.logError('Error during map initialization:', initError);
          throw initError;
        }

        // If lines need to be added after initialization, use addLines method
        // COMMENTED OUT: Lines removed from map
        // if (this.mapInstance && this.mapInstance.addLines && lines.length > 0) {
        //   setTimeout(() => {
        //     try {
        //       this.mapInstance.addLines(lines.map((line: any) => ({
        //         ...line,
        //         style: {
        //           stroke: '#00FF41', // Tactical green
        //           strokeWidth: 3,
        //           strokeDasharray: '0',
        //           strokeOpacity: 0.8,
        //         },
        //       })));
        //       this.logDebug('Lines added to map');
        //     } catch (error) {
        //       this.logWarn('Could not add lines via addLines method:', error);
        //     }
        //   }, 500);
        // }
      } catch (error) {
        this.logError('Error initializing map:', error);
        this.logError('Error details:', error);
      }
    }, 300);
  }

  /**
   * Get node display name
   */
  getNodeDisplayName(node: WarRoomNode): string {
    const displayName = this.getCompanyDisplayName(node).toUpperCase();
    const nodeLevel = node.level ?? 'factory';
    if (nodeLevel === 'parent') {
      return `${displayName} (GROUP)`;
    }
    if (nodeLevel === 'subsidiary') {
      return `${displayName} (${node.hubCode || 'HQ'})`;
    }
    return `${node.city.toUpperCase()} (${displayName})`;
  }

  getMarkerAriaLabel(node: WarRoomNode): string {
    const name = this.getCompanyDisplayName(node);
    const location = node.city ? (node.country ? `${node.city}, ${node.country}` : node.city) : '';
    const typeLabel = this.getTypeLabel(node);
    const statusLabel = node.status ? `Status ${node.status}` : '';
    const parts = [name, typeLabel, location].filter(Boolean);
    const base = parts.length > 0 ? parts.join(' - ') : 'Map location';
    return statusLabel ? `View ${base}. ${statusLabel}.` : `View ${base}.`;
  }

  /**
   * Check if node is selected
   */
  isNodeSelected(node: WarRoomNode): boolean {
    const selected = this.selectedEntity();
    const nodeLevel = node.level ?? 'factory';
    return !!selected && selected.id === node.companyId && selected.level === nodeLevel;
  }

  /**
   * Check if node is hub
   */
  isHub(node: WarRoomNode): boolean {
    return node.isHub || node.type === 'Hub';
  }



  // Cache for stable coordinate projection
  private cachedMapDimensions: { width: number; height: number } | null = null;
  private cachedViewBox: { x: number; y: number; width: number; height: number } | null = null;


  /**
   * Update label positions based on current map state
   */
  private updateLabelPositions(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const nodes = this.getNodesWithValidCoordinates(this.nodes());
    const viewBox = this.mathService.parseViewBox(svg.getAttribute('viewBox'));
    this.cachedViewBox = viewBox;

    const rect = container.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      this.cachedMapDimensions = { width: rect.width, height: rect.height };
      this.containerRect.set(rect);
    }

    const newMarkerCoords = new Map<string, { x: number; y: number }>();
    const newPixelCoords = new Map<string, { x: number; y: number }>();

    nodes.forEach((node) => {
      if (!this.isValidCoordinates(node.coordinates)) return;

      let svgPos: { x: number; y: number } | null = null;

      if (this.mapInstance && typeof (this.mapInstance as any).latLngToPoint === 'function') {
        try {
          const point = (this.mapInstance as any).latLngToPoint([node.coordinates.latitude, node.coordinates.longitude]);
          if (point && Number.isFinite(point.x) && Number.isFinite(point.y)) {
            svgPos = { x: point.x, y: point.y };
          }
        } catch (e) {
          this.logWarn('mapInstance.latLngToPoint failed, falling back to projection', e);
        }
      }

      if (!svgPos) {
        svgPos = this.mathService.projectLatLngToMapSpace(
          node.coordinates.latitude,
          node.coordinates.longitude,
          viewBox
        );
      }

      if (svgPos) {
        newMarkerCoords.set(node.id, svgPos);
        const pixels = this.mathService.svgPointToContainerPixels(svg as SVGSVGElement, svgPos.x, svgPos.y, container, viewBox);
        if (pixels) {
          newPixelCoords.set(node.id, pixels);
        }
      }
    });

    if (newMarkerCoords.size > 0) {
      this.markerCoordinates.set(newMarkerCoords);
    } else if (nodes.length === 0) {
      this.markerCoordinates.set(new Map());
    }

    this.markerPixelCoordinates.set(newPixelCoords);
  }

  /**
   * Start updating label positions using requestAnimationFrame
   */
  private startLabelPositionUpdates(): void {
    // RAF-based update loop
    const updateLoop = () => {
      if (this.destroyed) return;

      if (this.labelsUpdateDirty || this.isDragging) {
        this.updateLabelPositions();
        this.labelsUpdateDirty = false;
      }

      // Continue RAF loop only if dirty or map is animating
      if (this.labelsUpdateDirty || this.isDragging) {
        this.updateLabelsRAFId = requestAnimationFrame(updateLoop);
      } else {
        this.updateLabelsRAFId = null;
      }
    };

    // Start the RAF loop
    this.updateLabelsRAFId = requestAnimationFrame(updateLoop);

    // Also try to listen to map events if available
    if (this.mapInstance) {
      // Try to attach event listeners for zoom/pan
      try {
        const container = document.getElementById('war-room-map');
        if (container) {
          const svg = container.querySelector('svg');
          if (svg) {
            // Listen to transform changes on the SVG
            this.labelObserver = new MutationObserver(() => {
              if (!this.destroyed) {
                this.labelsUpdateDirty = true;
                // Restart RAF loop if it's not running
                if (this.updateLabelsRAFId === null) {
                  this.updateLabelsRAFId = requestAnimationFrame(updateLoop);
                }
              }
            });
            this.labelObserver.observe(svg, {
              attributes: true,
              attributeFilter: ['transform', 'viewBox']
            });
          }
        }
      } catch (e) {
        this.logWarn('Could not set up map event listeners:', e);
      }
    }
  }

  /**
   * Mark labels as dirty and trigger update
   */
  private markLabelsDirty(): void {
    this.labelsUpdateDirty = true;
    if (this.updateLabelsRAFId === null && !this.destroyed) {
      const updateLoop = () => {
        if (this.destroyed) return;

        if (this.labelsUpdateDirty || this.isDragging) {
          this.updateLabelPositions();
          this.labelsUpdateDirty = false;
        }

        if (this.labelsUpdateDirty || this.isDragging) {
          this.updateLabelsRAFId = requestAnimationFrame(updateLoop);
        } else {
          this.updateLabelsRAFId = null;
        }
      };
      this.updateLabelsRAFId = requestAnimationFrame(updateLoop);
    }
  }

  private getNodesSignature(nodes: WarRoomNode[]): string {
    return nodes
      .map((node) => {
        const id = String(node.id ?? node.companyId ?? node.name ?? '');
        const latValue = node.coordinates?.latitude;
        const lngValue = node.coordinates?.longitude;
        const lat = Number.isFinite(latValue) ? latValue.toFixed(4) : '0';
        const lng = Number.isFinite(lngValue) ? lngValue.toFixed(4) : '0';
        return { key: id, signature: `${id}:${lat},${lng}` };
      })
      .sort((a, b) => a.key.localeCompare(b.key))
      .map((item) => item.signature)
      .join('|');
  }

  /**
   * Update map markers when nodes change dynamically
   */
  private async updateMapMarkers(): Promise<void> {
    if (this.destroyed) return;

    // No map instance? try to init
    if (!this.mapInstance) {
      this.initializeMap();
      return;
    }

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const nodes = this.nodes();
    await this.ensureNodeCoordinates(nodes);
    const nodesWithCoordinates = this.getNodesWithValidCoordinates(nodes);
    const nextSignature = this.getNodesSignature(nodesWithCoordinates);
    const signatureChanged = nextSignature !== this.lastNodesSignature;

    const svg = container.querySelector('svg');
    if (!svg) {
      this.logWarn('SVG not found for marker update, re-initializing');
      this.initializeMap();
      return;
    }

    // Get current markers from SVG
    const existingMarkers = svg.querySelectorAll('circle.jvm-marker, circle[data-index]');
    const existingMarkerCount = existingMarkers.length;
    this.logDebug(
      `Existing markers: ${existingMarkerCount}, Valid nodes: ${nodesWithCoordinates.length}, Total nodes: ${nodes.length}`
    );

    // If nodes changed significantly, we usually have to re-init to let jsVectorMap handle the complex ADD/REMOVE logic
    // However, if we preserve the markerCoordinates signal, the lines won't flash as badly.
    // The issue was likely that re-init caused a gap where markerCoordinates was empty or invalid.

    if (
      signatureChanged ||
      nodesWithCoordinates.length !== existingMarkerCount ||
      nodesWithCoordinates.length > existingMarkerCount
    ) {
      const sel = this.selectedEntity();
      if (sel?.id) {
        this.pendingZoomCompanyId = sel.id;
      }
      this.lastNodesSignature = nextSignature;

      this.logDebug('Nodes changed, re-initializing map...');
      // Note: We do NOT clear markerCoordinates here. We let the old ones persist until new ones overwrite them.
      // This prevents the "disappear" frame.
      this.initializeMap();
    } else {
      // Just update label positions if markers are already consistent
      this.logDebug('Node count/signature unchanged, updating label positions only');
      this.updateLabelPositions();
    }
  }


  /**
   * Get node position in pixels for absolute positioning on the map
   *
   * Notes:
   * - The map itself renders in an SVG with a viewBox. The marker circle cx/cy values
   *   are in SVG (viewBox) coordinate space. Our node overlay is HTML positioned in
   *   CSS pixels. We must convert viewBox coordinates -> container pixels here so the
   *   HTML diamond/marker lines up exactly with SVG routes and animated dots.
   */
  getNodePosition(node: WarRoomNode): { top: number; left: number } {
    const cachedPx = this.markerPixelCoordinates().get(node.id);
    if (cachedPx) {
      return { top: cachedPx.y, left: cachedPx.x };
    }

    const svgPos = this.markerCoordinates().get(node.id);
    if (svgPos) {
      const container = document.getElementById('war-room-map');
      const svg = container?.querySelector('svg') as SVGSVGElement | null;
      if (container && svg) {
        const pixels = this.mathService.svgPointToContainerPixels(svg, svgPos.x, svgPos.y, container, this.cachedViewBox || undefined);
        if (pixels) {
          return { top: pixels.y, left: pixels.x };
        }
      }

      return { top: svgPos.y, left: svgPos.x };
    }

    // Fallback to percentage-based positioning if coordinates not available yet
    const positions: Record<string, { top: number; left: number }> = {
      'winnipeg': { top: 30, left: 15 },
      'indianapolis': { top: 45, left: 25 },
      'st-eustache': { top: 35, left: 35 },
      'las-vegas': { top: 60, left: 20 },
      'paris-ontario': { top: 40, left: 50 },
      'turkey': { top: 55, left: 65 },
      'nanjing': { top: 45, left: 80 },
    };

    const fallback = positions[node.name] || { top: 50, left: 50 };
    // Convert percentage to pixels (approximate)
    const container = document.getElementById('war-room-map');
    if (container) {
      const rect = container.getBoundingClientRect();
      return {
        top: (fallback.top / 100) * rect.height,
        left: (fallback.left / 100) * rect.width
      };
    }

    return { top: 0, left: 0 };
  }

  /**
   * Zoom to a specific location on the map
   * @param latitude - Latitude coordinate
   * @param longitude - Longitude coordinate
   * @param scale - Zoom scale (higher = more zoomed in, typically 1-15)
   *                Ã°Å¸â€Â§ ZOOM LEVEL ADJUSTMENT: Change default value (5) here to adjust default zoom
   *                
   *                Ã°Å¸â€œÅ  ZOOM SCALE GUIDE - Try these values:
   *                ============================================
   *                Scale 1  = 1x zoom      (2^0)   - Very wide view, see entire world
   *                Scale 2  = 2x zoom      (2^1)   - Wide view, see continents
   *                Scale 3  = 4x zoom      (2^2)   - Country level view
   *                Scale 4  = 8x zoom      (2^3)   - Regional view
   *                Scale 5  = 16x zoom     (2^4)   - State/Province level (DEFAULT)
   *                Scale 6  = 32x zoom     (2^5)   - Large city area
   *                Scale 7  = 64x zoom     (2^6)   - City level
   *                Scale 8  = 128x zoom    (2^7)   - City district
   *                Scale 9  = 256x zoom    (2^8)   - Neighborhood level
   *                Scale 10 = 512x zoom    (2^9)   - Street level
   *                Scale 11 = 1024x zoom   (2^10)  - Very close street view
   *                Scale 12 = 2048x zoom   (2^11)  - Very high zoom (CURRENT)
   *                Scale 13 = 4096x zoom   (2^12)  - Extreme zoom
   *                Scale 14 = 8192x zoom   (2^13)  - Maximum practical zoom
   *                Scale 15 = 16384x zoom  (2^14)  - Maximum zoom (may be too close)
   *                
   *                Ã°Å¸â€™Â¡ RECOMMENDED VALUES:
   *                - For activity log clicks: 10-12 (good balance)
   *                - For marker clicks: 10-12 (shows marker clearly)
   *                - For smooth experience: 8-10 (less jarring)
   *                - For maximum detail: 12-14 (very close)
   */
  zoomToLocation(latitude: number, longitude: number, scale: number = 5): void {
    this.logDebug(`zoomToLocation called: lat=${latitude}, lng=${longitude}, scale=${scale}`);

    if (!this.mapInstance) {
      let retryCount = 0;
      const maxRetries = 25;
      // Clear any existing retry interval
      if (this.mapReadyRetryInterval) {
        clearInterval(this.mapReadyRetryInterval);
      }
      this.mapReadyRetryInterval = setInterval(() => {
        retryCount++;
        if (this.mapInstance) {
          clearInterval(this.mapReadyRetryInterval!);
          this.mapReadyRetryInterval = null;
          this.zoomToLocation(latitude, longitude, scale);
        } else if (retryCount >= maxRetries) {
          clearInterval(this.mapReadyRetryInterval!);
          this.mapReadyRetryInterval = null;
        }
      }, 200);
      return;
    }

    try {
      // jsVectorMap API methods - try multiple approaches
      // Method 1: Try setFocus (most common)
      if (typeof this.mapInstance.setFocus === 'function') {
        this.logDebug('Using setFocus method');
        this.mapInstance.setFocus({
          animate: true,
          lat: latitude,
          lng: longitude,
          scale: scale,
        });
        this.logDebug(`Ã¢Å“â€œ Zoomed to location: ${latitude}, ${longitude} at scale ${scale}`);
        setTimeout(() => this.updateLabelPositions(), 500);
        return;
      }

      // Method 2: Try focusOn
      if (typeof this.mapInstance.focusOn === 'function') {
        this.logDebug('Using focusOn method');
        this.mapInstance.focusOn({
          animate: true,
          latLng: [latitude, longitude],
          scale: scale,
        });
        this.logDebug(`Ã¢Å“â€œ Zoomed to location using focusOn: ${latitude}, ${longitude} at scale ${scale}`);
        setTimeout(() => this.updateLabelPositions(), 500);
        return;
      }

      // Method 3: Try setCenter + setZoom
      if (typeof this.mapInstance.setCenter === 'function') {
        this.logDebug('Using setCenter + setZoom method');
        this.mapInstance.setCenter(latitude, longitude);
        if (typeof this.mapInstance.setZoom === 'function') {
          this.mapInstance.setZoom(scale);
        }
        this.logDebug(`Ã¢Å“â€œ Zoomed to location using setCenter: ${latitude}, ${longitude}`);
        setTimeout(() => this.updateLabelPositions(), 500);
        return;
      }

      // Method 4: Try internal map object and transform methods
      const mapInternal = (this.mapInstance as any).map;
      if (mapInternal) {
        if (typeof mapInternal.setFocus === 'function') {
          this.logDebug('Using internal map.setFocus');
          mapInternal.setFocus({
            animate: true,
            lat: latitude,
            lng: longitude,
            scale: scale,
          });
          setTimeout(() => this.updateLabelPositions(), 500);
          return;
        }
        if (typeof mapInternal.focusOn === 'function') {
          this.logDebug('Using internal map.focusOn');
          mapInternal.focusOn({
            animate: true,
            latLng: [latitude, longitude],
            scale: scale,
          });
          setTimeout(() => this.updateLabelPositions(), 500);
          return;
        }
        // Try transform methods if available
        if (mapInternal.setScale && mapInternal.setFocus) {
          this.logDebug('Using internal map.setScale and setFocus');
          mapInternal.setFocus(latitude, longitude);
          mapInternal.setScale(scale);
          setTimeout(() => this.updateLabelPositions(), 500);
          return;
        }
      }

      // Method 4.5: Try accessing SVG transform directly via map instance
      const container = document.getElementById('war-room-map');
      if (container) {
        const svg = container.querySelector('svg');
        const mapGroup = svg?.querySelector('g#jvm-regions-group, g[class*="regions"]');
        if (mapGroup && this.mapInstance) {
          // Try to get current transform and modify it
          const currentTransform = mapGroup.getAttribute('transform');
          this.logDebug('Current map transform:', currentTransform);
          // If we can manipulate transform, we can pan and scale
        }
      }

      // Method 5: Direct viewBox manipulation as fallback - find marker and center on it
      this.logWarn('No standard zoom method available, trying viewBox manipulation with marker position');
      // Reuse container variable from Method 4.5 above
      if (container) {
        const svg = container.querySelector('svg');
        if (svg) {
          // Get current viewBox
          const currentViewBox = svg.viewBox.baseVal;
          const currentWidth = currentViewBox.width || this.BASE_VIEWBOX_WIDTH;
          const currentHeight = currentViewBox.height || this.BASE_VIEWBOX_HEIGHT;

          // Find the marker for this location by checking all markers
          const nodes = this.nodes();
          const targetNode = nodes.find(n =>
            Math.abs(n.coordinates.latitude - latitude) < 0.1 &&
            Math.abs(n.coordinates.longitude - longitude) < 0.1
          );

          if (targetNode) {
            // Find the marker element in the SVG
            const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index]');
            const nodeIndex = nodes.findIndex(n => n.id === targetNode.id);
            const marker = markers[nodeIndex] as SVGCircleElement;

            if (marker) {
              // Get marker's current position in SVG coordinates
              const markerX = parseFloat(marker.getAttribute('cx') || '0');
              const markerY = parseFloat(marker.getAttribute('cy') || '0');

              // Calculate zoom factor (scale 12 = very high zoom, scale 1 = low zoom)
              // Ã°Å¸â€Â§ ZOOM LEVEL ADJUSTMENT: The zoom factor is calculated as 2^(scale-1)
              // See zoomToLocation() method documentation above for full zoom scale guide
              const zoomFactor = Math.pow(2, scale - 1);
              const newWidth = currentWidth / zoomFactor;
              const newHeight = currentHeight / zoomFactor;

              // Center viewBox on marker
              const newX = Math.max(0, Math.min(currentWidth - newWidth, markerX - newWidth / 2));
              const newY = Math.max(0, Math.min(currentHeight - newHeight, markerY - newHeight / 2));

              // Apply smooth transition
              svg.style.transition = 'viewBox 0.5s ease-in-out';
              svg.setAttribute('viewBox', `${newX} ${newY} ${newWidth} ${newHeight}`);
              this.logDebug(`Ã¢Å“â€œ Zoomed using viewBox manipulation to marker at (${markerX}, ${markerY}): ${latitude}, ${longitude}`);
              setTimeout(() => {
                this.updateLabelPositions();
                svg.style.transition = ''; // Remove transition after animation
              }, 500);
              return;
            }
          }

          // Fallback: Use Mercator projection calculation
          this.logDebug('Marker not found, using Mercator projection calculation');
          const viewBoxWidth = currentWidth;
          const viewBoxHeight = currentHeight;
          // Convert lat/lng to SVG coordinates using Mercator projection approximation
          const centerX = ((longitude + 180) / 360) * viewBoxWidth;
          const centerY = ((90 - latitude) / 180) * viewBoxHeight;
          const zoomFactor = Math.pow(2, scale - 1);
          const newWidth = viewBoxWidth / zoomFactor;
          const newHeight = viewBoxHeight / zoomFactor;
          const newX = Math.max(0, Math.min(viewBoxWidth - newWidth, centerX - newWidth / 2));
          const newY = Math.max(0, Math.min(viewBoxHeight - newHeight, centerY - newHeight / 2));

          svg.style.transition = 'viewBox 0.5s ease-in-out';
          svg.setAttribute('viewBox', `${newX} ${newY} ${newWidth} ${newHeight}`);
          this.logDebug(`Ã¢Å“â€œ Zoomed using Mercator projection: ${latitude}, ${longitude}`);
          setTimeout(() => {
            this.updateLabelPositions();
            svg.style.transition = '';
          }, 500);
          return;
        }
      }

      this.logError('No zoom method found on map instance and viewBox fallback failed');
    } catch (error) {
      this.logError('Error zooming to location:', error);
      // Try alternative approach with direct coordinate manipulation
      try {
        const container = document.getElementById('war-room-map');
        if (container) {
          const svg = container.querySelector('svg');
          if (svg && svg.viewBox) {
            // This is a fallback - might not work perfectly but worth trying
            this.logWarn('Attempting fallback zoom method');
          }
        }
      } catch (fallbackError) {
        this.logError('Fallback zoom method also failed:', fallbackError);
      }
    }
  }

  /**
   * Zoom to a specific node by node ID
   * @param nodeId - The ID of the node to zoom to
   */
  zoomToNode(nodeId: string): void {
    const nodes = this.nodes();
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      this.zoomToLocation(node.coordinates.latitude, node.coordinates.longitude, 4);
    } else {
      this.logWarn(`Node with ID ${nodeId} not found`);
    }
  }

  /**
   * Zoom to a specific entity's location
   * @param entityId - The entity ID to zoom to
   * @param zoomScale - Optional zoom scale (default: 12 for more prominent zoom to show marker clearly)
   *                    ZOOM LEVEL ADJUSTMENT: Change default value here to adjust default zoom
   *                    Higher number = more zoom (e.g., 10 = medium, 12 = high, 15 = very high)
   */



  /**
   * Toggle fullscreen mode for the map
   */
  toggleFullscreen(): void {
    // Check current fullscreen state first
    const currentState = this.getFullscreenState();

    if (!currentState) {
      const container = document.querySelector('.war-room-map-container') as HTMLElement;
      if (container) {
        this.enterFullscreen(container);
      } else {
        this.logWarn('Map container not found for fullscreen');
      }
    } else {
      // Exit fullscreen
      this.exitFullscreen();
    }
  }

  /**
   * Enter fullscreen mode
   */
  private enterFullscreen(element?: HTMLElement): void {
    const container = (element || document.querySelector('.war-room-map-container')) as HTMLElement;
    if (!container) return;

    // Add fallback class immediately
    container.classList.add('fullscreen-fallback-active');
    this.isFullscreen = true;
    this.fullscreenState.set(true);

    try {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => {
          this.logError(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
          // If native fullscreen fails, we still have the class set for CSS fallback
        });
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    } catch (e) {
      this.logError('Fullscreen request exception:', e);
    }
  }

  /**
   * Exit fullscreen mode
   */
  private exitFullscreen(): void {
    const container = document.querySelector('.war-room-map-container') as HTMLElement;
    if (container) {
      container.classList.remove('fullscreen-fallback-active');
    }

    this.isFullscreen = false;
    this.fullscreenState.set(false);

    if (document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement) {
      try {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(e => this.logWarn('Exit fullscreen error:', e));
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        }
      } catch (e) {
        this.logWarn('Exit fullscreen exception:', e);
      }
    }
  }

  /**
   * Check if currently in fullscreen mode
   */
  getFullscreenState(): boolean {
    // Check actual DOM state first, then fallback to flag
    const fullscreenElement =
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement;

    // Update internal flag to match actual state
    if (fullscreenElement) {
      this.isFullscreen = true;
    } else {
      this.isFullscreen = false;
    }

    this.fullscreenState.set(this.isFullscreen);
    return !!fullscreenElement;
  }

  /**
   * Zoom the map in one step (custom control).
   * Directly manipulates the SVG viewBox to zoom in.
   */
  zoomIn(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Mark that user is manually zooming
    this.userHasZoomed = true;

    // Try jsVectorMap API first
    if (this.mapInstance && typeof (this.mapInstance as any).zoomIn === 'function') {
      try {
        (this.mapInstance as any).zoomIn();
        setTimeout(() => {
          this.updateLabelPositions();
        }, 300);
        return;
      } catch (e) {
        this.logWarn('jsVectorMap zoomIn failed, using manual zoom:', e);
      }
    }

    // Manual zoom by manipulating viewBox
    this.zoomViewBox(svg, 1.5); // Zoom in by 1.5x
  }

  /**
   * Zoom the map out one step (custom control).
   * Directly manipulates the SVG viewBox to zoom out.
   */
  zoomOut(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Mark that user is manually zooming
    this.userHasZoomed = true;

    // Try jsVectorMap API first
    if (this.mapInstance && typeof (this.mapInstance as any).zoomOut === 'function') {
      try {
        (this.mapInstance as any).zoomOut();
        setTimeout(() => {
          this.updateLabelPositions();
        }, 300);
        return;
      } catch (e) {
        this.logWarn('jsVectorMap zoomOut failed, using manual zoom:', e);
      }
    }

    // Manual zoom by manipulating viewBox
    this.zoomViewBox(svg, 1 / 1.5); // Zoom out by 1/1.5x
  }

  /**
   * Manually zoom the SVG by adjusting the viewBox.
   * @param svg - The SVG element to zoom
   * @param factor - Zoom factor (>1 = zoom in, <1 = zoom out)
   */
  private zoomViewBox(svg: SVGElement, factor: number): void {
    const container = document.getElementById('war-room-map');
    const baseViewBox = container
      ? this.getResponsiveWorldViewBox(container)
      : `0 0 ${this.BASE_VIEWBOX_WIDTH} ${this.BASE_VIEWBOX_HEIGHT}`;
    const [baseX, baseY, baseWidth, baseHeight] = baseViewBox.split(' ').map(Number);

    const currentViewBox = svg.getAttribute('viewBox');
    if (!currentViewBox) {
      // No viewBox, set default
      svg.setAttribute('viewBox', baseViewBox);
      return;
    }

    const [x, y, width, height] = currentViewBox.split(' ').map(Number);

    // Calculate new viewBox dimensions
    const newWidth = width / factor;
    const newHeight = height / factor;

    // Prevent zooming out beyond full world view
    if (newWidth >= baseWidth || newHeight >= baseHeight) {
      // Snap to full world view (allow user to see the entire map)
      const fullWorldViewBox = baseViewBox;
      svg.setAttribute('viewBox', fullWorldViewBox);
      this.mapViewBox.set(fullWorldViewBox);
      this.userHasZoomed = true;
    } else {
      // Calculate center point to zoom around
      const centerX = x + width / 2;
      const centerY = y + height / 2;

      // Calculate new x, y to keep center point
      const newX = centerX - newWidth / 2;
      const newY = centerY - newHeight / 2;

      // Clamp to map bounds
      const clampedX = Math.max(baseX, Math.min(baseX + baseWidth - newWidth, newX));
      const clampedY = Math.max(baseY, Math.min(baseY + baseHeight - newHeight, newY));

      // Set new viewBox
      svg.setAttribute('viewBox', `${clampedX} ${clampedY} ${newWidth} ${newHeight}`);

      // Sync the signal to update transit lines overlay
      this.syncViewBoxFromMap();
    }

    // Mark labels as dirty to trigger RAF update
    this.markLabelsDirty();
  }


  /**
   * Determine LOD state for pin rendering based on zoom and selection.
   */
  private getPinLodState(
    zoomFactor: number,
    isSelected: boolean
  ): { isLogoOnly: boolean; isCompactLogo: boolean; isFullDetail: boolean; lodClass: 'lod-low' | 'lod-medium' | 'lod-high' } {
    let isLogoOnly = zoomFactor < this.LOD_LOGO_ONLY_THRESHOLD;
    let isCompactLogo =
      zoomFactor >= this.LOD_LOGO_ONLY_THRESHOLD && zoomFactor < this.LOD_FULL_DETAIL_THRESHOLD;
    let isFullDetail = zoomFactor >= this.LOD_FULL_DETAIL_THRESHOLD;

    if (isSelected) {
      isLogoOnly = false;
      isCompactLogo = false;
      isFullDetail = true;
    }

    const lodClass: 'lod-low' | 'lod-medium' | 'lod-high' = isFullDetail
      ? 'lod-high'
      : isCompactLogo
        ? 'lod-medium'
        : 'lod-low';

    return { isLogoOnly, isCompactLogo, isFullDetail, lodClass };
  }

  private buildPinBodyPath(bubbleW: number, bubbleH: number, bubbleR: number): string {
    const left = -bubbleW / 2;
    const top = -bubbleH - 10;
    const innerWidth = bubbleW - 2 * bubbleR;
    const innerHeight = bubbleH - 2 * bubbleR;
    const tailOffset = bubbleW / 2 - bubbleR - 6;
    return `M ${left} ${top} a ${bubbleR} ${bubbleR} 0 0 1 ${bubbleR} ${-bubbleR} ` +
      `h ${innerWidth} a ${bubbleR} ${bubbleR} 0 0 1 ${bubbleR} ${bubbleR} ` +
      `v ${innerHeight} a ${bubbleR} ${bubbleR} 0 0 1 ${-bubbleR} ${bubbleR} ` +
      `h ${-tailOffset} l -6 10 l -6 -10 h ${-tailOffset} ` +
      `a ${bubbleR} ${bubbleR} 0 0 1 ${-bubbleR} ${-bubbleR} z`;
  }


  /**
   * Setup fullscreen change listeners
   */
  private setupFullscreenListeners(): void {
    const fullscreenChangeEvents = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'msfullscreenchange'
    ];

    // Create bound handler
    this.boundFullscreenHandler = () => {
      if (this.destroyed) return;

      const wasFullscreen = this.isFullscreen;
      // Update flag based on actual DOM state
      const currentState = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      );
      this.isFullscreen = currentState;
      this.fullscreenState.set(this.isFullscreen);
      const mapContainer = document.querySelector('.war-room-map-container') as HTMLElement;
      const mapDiv = document.getElementById('war-room-map');
      const mapContainerDiv = document.querySelector('.map-container') as HTMLElement;

      if (this.isFullscreen && !wasFullscreen) {
        // Get current theme colors
        const theme = this.currentTheme();
        const colors = this.colorSchemes[theme as 'light' | 'dark'] || this.colorSchemes.dark;

        // Entering fullscreen - ensure container fills screen
        if (mapContainer) {
          mapContainer.style.width = '100vw';
          mapContainer.style.height = '100vh';
          mapContainer.style.minHeight = '100vh';
          mapContainer.style.maxHeight = '100vh';
          mapContainer.style.backgroundColor = colors.backgroundColor;
          mapContainer.style.position = 'fixed';
          mapContainer.style.top = '0';
          mapContainer.style.left = '0';
          mapContainer.style.right = '0';
          mapContainer.style.bottom = '0';
        }

        if (mapContainerDiv) {
          mapContainerDiv.style.width = '100%';
          mapContainerDiv.style.height = '100%';
          mapContainerDiv.style.minHeight = '100vh';
          mapContainerDiv.style.maxHeight = '100vh';
          mapContainerDiv.style.backgroundColor = colors.backgroundColor;
        }

        if (mapDiv) {
          mapDiv.style.width = '100%';
          mapDiv.style.height = '100%';
          mapDiv.style.minHeight = '100vh';
          mapDiv.style.maxHeight = '100vh';
          mapDiv.style.backgroundColor = colors.backgroundColor;
        }

        // Ensure body/html use theme-appropriate background in fullscreen
        document.body.style.backgroundColor = colors.backgroundColor;
        document.documentElement.style.backgroundColor = colors.backgroundColor;
      } else if (!this.isFullscreen && wasFullscreen) {
        // Exiting fullscreen - reset styles
        if (mapContainer) {
          mapContainer.style.width = '';
          mapContainer.style.height = '';
          mapContainer.style.minHeight = '';
          mapContainer.style.maxHeight = '';
          mapContainer.style.position = '';
          mapContainer.style.top = '';
          mapContainer.style.left = '';
          mapContainer.style.right = '';
          mapContainer.style.bottom = '';
        }

        if (mapContainerDiv) {
          mapContainerDiv.style.width = '';
          mapContainerDiv.style.height = '';
          mapContainerDiv.style.minHeight = '';
          mapContainerDiv.style.maxHeight = '';
        }

        if (mapDiv) {
          mapDiv.style.width = '';
          mapDiv.style.height = '';
          mapDiv.style.minHeight = '';
          mapDiv.style.maxHeight = '';
        }

        // Reset body/html background
        document.body.style.backgroundColor = '';
        document.documentElement.style.backgroundColor = '';
      }

      // Resize map when fullscreen state changes
      setTimeout(() => {
        if (!this.destroyed) {
          this.handleResize('fullscreen', true);
        }
      }, 300);
    };

    // Add listeners with bound handler
    fullscreenChangeEvents.forEach((eventName) => {
      document.addEventListener(eventName, this.boundFullscreenHandler!);
    });
  }

  /**
   * Update map colors based on current theme
   * @param theme - Current theme ('light' or 'dark')
   */
  private updateMapColors(theme: 'light' | 'dark'): void {
    if (!this.mapInstance) return;

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const colors = this.colorSchemes[theme] || this.colorSchemes.dark;
    const svg = container.querySelector('svg');

    if (svg) {
      // Update map background color
      container.style.backgroundColor = colors.backgroundColor;

      // Update all region paths
      const regionPaths = svg.querySelectorAll('#jvm-regions-group path') as NodeListOf<SVGPathElement>;
      regionPaths.forEach((pathElement) => {
        pathElement.setAttribute('fill', colors.regionFill);
        if ('regionFillOpacity' in colors) {
          pathElement.setAttribute('fill-opacity', colors.regionFillOpacity.toString());
        }
        pathElement.setAttribute('stroke', colors.regionStroke);
      });

      // Update map container background if it exists
      const mapContainer = container.closest('.map-container') as HTMLElement;
      if (mapContainer) {
        mapContainer.style.backgroundColor = colors.backgroundColor;
      }

      // Update jvm-container background if it exists
      const jvmContainer = container.querySelector('.jvm-container') as HTMLElement;
      if (jvmContainer) {
        jvmContainer.style.backgroundColor = colors.backgroundColor;
      }
    }

    // Update map instance background if the API supports it
    if (this.mapInstance && typeof this.mapInstance.setBackgroundColor === 'function') {
      this.mapInstance.setBackgroundColor(colors.backgroundColor);
    }
  }

  private applySvgSizing(container: HTMLElement, svg: SVGElement): void {
    // Set preserveAspectRatio to show entire map and maintain aspect ratio
    // xMidYMid meet ensures the entire map is visible and centered within container
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    // Force responsive sizing via CSS
    // Use 100% for both width and height - preserveAspectRatio will handle fitting
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.maxWidth = '100%';
    svg.style.maxHeight = '100%';
    svg.style.display = 'block';
    svg.style.position = 'relative';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.margin = '0';
    svg.style.padding = '0';
    svg.style.verticalAlign = 'top'; // Align to top to prevent negative positioning

    // Ensure jvm-container is also properly sized and positioned
    const jvmContainer = container.querySelector('.jvm-container') as HTMLElement;
    if (jvmContainer) {
      jvmContainer.style.width = '100%';
      jvmContainer.style.height = '100%';
      jvmContainer.style.position = 'relative'; // Required for absolute positioned SVG
      jvmContainer.style.overflow = 'hidden';
      jvmContainer.style.top = '0';
      jvmContainer.style.left = '0';
      jvmContainer.style.margin = '0';
      jvmContainer.style.padding = '0';
    }
  }

  /**
   * Ensure SVG is responsive and shows entire map
   * Only resets to full world view on initial load, not when user has zoomed
   */
  /**
   * Ensure SVG is responsive and shows entire map
   * Only resets to full world view on initial load, not when user has zoomed
   */
  private ensureSvgResponsive(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Remove fixed width/height attributes that prevent responsiveness
    svg.removeAttribute('width');
    svg.removeAttribute('height');

    // Ensure viewBox is set (required for responsive SVG)
    // Full world map viewBox shows the entire world
    const fullWorldViewBox = this.getResponsiveWorldViewBox(container);
    const currentViewBox = svg.getAttribute('viewBox');

    // Only reset to full world view if:
    // 1. No viewBox is set (initial load)
    // 2. User hasn't manually zoomed AND (we're on initial load OR we're initializing)
    if (!currentViewBox) {
      // No viewBox set, set it to full world (initial load)
      svg.setAttribute('viewBox', fullWorldViewBox);
    } else if (!this.userHasZoomed && !this.pendingZoomCompanyId) {
      // Only auto-reset if user hasn't zoomed and no pending zoom
      // Force reset if we're still initializing or if viewBox is close to default
      const [vbX, vbY, vbWidth, vbHeight] = currentViewBox.split(' ').map(Number);
      const [targetX, targetY, targetWidth, targetHeight] = fullWorldViewBox.split(' ').map(Number);

      // If we are initializing, be aggressive about resetting
      if (this.isInitializing) {
        if (currentViewBox !== fullWorldViewBox) {
          svg.setAttribute('viewBox', fullWorldViewBox);
        }
      } else if (
        Math.abs(vbWidth - targetWidth) < 5 &&
        Math.abs(vbHeight - targetHeight) < 5 &&
        currentViewBox !== fullWorldViewBox
      ) {
        // Very close to full world but not exact - fix it (likely library artifact)
        svg.setAttribute('viewBox', fullWorldViewBox);
      }
    }
    // If user has zoomed, don't interfere with their zoom level

    this.applySvgSizing(container, svg);

    // Keep default zoom in sync while user hasn't manually zoomed.
    if (!this.userHasZoomed && !this.pendingZoomCompanyId) {
      this.applyDefaultZoom();
    }

    this.logDebug('SVG made responsive:', {
      viewBox: svg.getAttribute('viewBox'),
      preserveAspectRatio: svg.getAttribute('preserveAspectRatio'),
      containerSize: {
        width: container.getBoundingClientRect().width,
        height: container.getBoundingClientRect().height
      },
      svgSize: {
        width: svg.getBoundingClientRect().width,
        height: svg.getBoundingClientRect().height
      }
    });
  }

  /**
   * Derive a viewBox string that keeps the full world centered in the SVG.
   * Respects a cached value while the container keeps the same dimensions.
   * This helper is called whenever we need the authoritative viewBox (initial load/reset).
   */
  private getResponsiveWorldViewBox(container: HTMLElement): string {
    const baseWidth = this.BASE_VIEWBOX_WIDTH;
    const baseHeight = this.BASE_VIEWBOX_HEIGHT;
    const rect = container.getBoundingClientRect();
    const cached = this.initialViewportMetrics;

    if (!rect.width || !rect.height) {
      return cached?.viewBox ?? `0 0 ${baseWidth} ${baseHeight}`;
    }

    if (
      cached &&
      Math.abs(cached.container.width - rect.width) < 0.5 &&
      Math.abs(cached.container.height - rect.height) < 0.5
    ) {
      return cached.viewBox;
    }

    const viewBox = this.calculateFullWorldViewBox(rect);
    this.cacheViewportMetrics(viewBox, rect.width, rect.height);
    return viewBox;
  }

  /**
   * Keep track of the measurement/viewBox pair for future resets and
   * synchronize the signal that the overlays use.
   */
  private cacheViewportMetrics(viewBox: string, width: number, height: number): void {
    this.initialViewportMetrics = {
      viewBox,
      container: { width, height },
    };
    this.cachedMapDimensions = { width, height };

    const parsed = viewBox.split(' ').map(Number);
    if (parsed.length === 4 && parsed.every((value) => Number.isFinite(value))) {
      const [x, y, viewWidth, viewHeight] = parsed;
      this.cachedViewBox = { x, y, width: viewWidth, height: viewHeight };
    }

    this.mapViewBox.set(viewBox);
  }

  /**
   * Update only the base viewport metrics without forcing the current viewBox signal.
   * This keeps zoom/pan state intact while still refreshing the base world bounds.
   */
  private updateBaseViewportMetrics(viewBox: string, width: number, height: number): void {
    this.initialViewportMetrics = {
      viewBox,
      container: { width, height },
    };
    this.cachedMapDimensions = { width, height };
  }

  /**
   * Scale the base world viewBox to the container’s aspect ratio while
   * ensuring the width/height never drop below the base sizes.
   */
  private calculateFullWorldViewBox(rect: DOMRect): string {
    // RESPONSIVE TUNING:
    // If the map looks cropped or too padded on large screens, adjust the
    // baseWidth/baseHeight or the aspect-ratio padding logic below.
    // jsVectorMap world SVG uses a 950x550 viewBox.
    // Keep base dimensions consistent everywhere to avoid shifting on large screens.
    const baseWidth = this.BASE_VIEWBOX_WIDTH;
    const baseHeight = this.BASE_VIEWBOX_HEIGHT;
    const containerAspect = rect.width / rect.height;
    const baseAspect = baseWidth / baseHeight;

    let width = baseWidth;
    let height = baseHeight;

    if (containerAspect > baseAspect) {
      width = baseWidth * (containerAspect / baseAspect);
    } else if (containerAspect < baseAspect) {
      height = baseHeight * (baseAspect / containerAspect);
    }

    width = Math.max(width, baseWidth);
    height = Math.max(height, baseHeight);

    // FIX: center the base 950x550 world map inside the expanded viewBox.
    // Without this offset, extra space is added only to the right/bottom,
    // which makes the map appear shifted (not centered) inside the panel.
    const offsetX = (width - baseWidth) / 2;
    const offsetY = (height - baseHeight) / 2;
    const viewBoxX = -offsetX;
    const viewBoxY = -offsetY;

    return `${viewBoxX.toFixed(2)} ${viewBoxY.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)}`;
  }

  /**
   * Cache the very first container measurement and viewBox so we can
   * render the world-centered view before jsVectorMap updates anything.
   */
  private ensureInitialViewportMetrics(container: HTMLElement, rect: DOMRect): void {
    if (this.initialViewportMetrics || rect.width === 0 || rect.height === 0) {
      return;
    }

    const viewBox = this.calculateFullWorldViewBox(rect);
    this.cacheViewportMetrics(viewBox, rect.width, rect.height);
  }

  /**
   * Setup resize handler to keep SVG responsive on window resize
   */
  private setupResizeHandler(): void {
    if (this.boundResizeHandler) {
      return; // Already set up
    }

    this.boundResizeHandler = () => {
      if (this.destroyed) return;
      this.scheduleResizeUpdate('window');
    };

    window.addEventListener('resize', this.boundResizeHandler);
  }

  /**
   * Reset map to full world view (zoom out to show entire map)
   * Only resets if user hasn't manually zoomed
   */
  private resetMapToFullWorldView(): void {
    // Don't reset if user has manually zoomed
    if (this.userHasZoomed) {
      this.logDebug('Skipping resetMapToFullWorldView - user has manually zoomed');
      return;
    }

    const container = document.getElementById('war-room-map');
    if (!container) {
      this.logWarn('resetMapToFullWorldView: Container not found');
      return;
    }

    const svg = container.querySelector('svg');
    if (!svg) {
      this.logWarn('resetMapToFullWorldView: SVG not found');
      return;
    }

    // Set viewBox to full world map dimensions (responsive to container)
    // This ensures the entire world map is visible
    const fullWorldViewBox = this.getResponsiveWorldViewBox(container);
    const currentViewBox = svg.getAttribute('viewBox');

    this.logDebug('resetMapToFullWorldView: Current viewBox:', currentViewBox, 'Target:', fullWorldViewBox);

    // Force reset to full world view (only on initial load)
    this.logDebug('Forcing reset to full world view');
    svg.setAttribute('viewBox', fullWorldViewBox);

    // Ensure signal is also updated
    this.mapViewBox.set(fullWorldViewBox);

    // Force viewBox multiple times to ensure it sticks (map library might override it)
    // Only if user hasn't manually zoomed
    const forceViewBox = () => {
      if (this.destroyed || this.userHasZoomed) return;
      if (svg && svg.parentNode) {
        const checkViewBox = svg.getAttribute('viewBox');
        if (checkViewBox !== fullWorldViewBox) {
          this.logDebug('ViewBox was changed to:', checkViewBox, '- forcing back to full world view');
          svg.setAttribute('viewBox', fullWorldViewBox);
        }
      }
    };

    // Force multiple times to override any library changes (only on initial load)
    if (!this.userHasZoomed) {
      setTimeout(forceViewBox, 50);
      setTimeout(forceViewBox, 200);
      setTimeout(forceViewBox, 500);
      setTimeout(forceViewBox, 1000);
    }
  }

  /**
   * Apply the default zoom level on initial load or when resetting to default.
   * Default is full-world view (no zoom-in) for consistent, responsive framing.
   */
  private applyDefaultZoom(): void {
    if (this.userHasZoomed) {
      this.logDebug('Skipping applyDefaultZoom - user has manually zoomed');
      return;
    }

    const container = document.getElementById('war-room-map');
    if (!container) {
      this.logWarn('applyDefaultZoom: Container not found');
      return;
    }

    const svg = container.querySelector('svg');
    if (!svg) {
      this.logWarn('applyDefaultZoom: SVG not found');
      return;
    }

    const baseViewBox = this.getResponsiveWorldViewBox(container);
    const [x, y, width, height] = baseViewBox.split(' ').map(Number);
    const rect = container.getBoundingClientRect();
    const scaleX = (rect.width * this.defaultZoomFill) / this.BASE_VIEWBOX_WIDTH;
    const scaleY = (rect.height * this.defaultZoomFill) / this.BASE_VIEWBOX_HEIGHT;
    const scale = Math.max(this.defaultZoomMin, Math.min(this.defaultZoomMax, Math.min(scaleX, scaleY)));

    const newWidth = width / scale;
    const newHeight = height / scale;
    const newX = x + (width - newWidth) / 2;
    const newY = y + (height - newHeight) / 2;

    const zoomedViewBox = `${newX.toFixed(2)} ${newY.toFixed(2)} ${newWidth.toFixed(2)} ${newHeight.toFixed(2)}`;
    svg.setAttribute('viewBox', zoomedViewBox);
    this.mapViewBox.set(zoomedViewBox);

    const mapAny = this.mapInstance as any;
    if (mapAny) {
      try {
        if (typeof mapAny.updateSize === 'function') {
          mapAny.updateSize();
        }
      } catch (e) {
        this.logWarn('applyDefaultZoom updateSize failed:', e);
      }
      try {
        if (typeof mapAny.setFocus === 'function') {
          mapAny.setFocus({
            lat: this.defaultZoomCenter.lat,
            lng: this.defaultZoomCenter.lng,
            scale,
            animate: false,
          });
        }
      } catch (e) {
        this.logWarn('applyDefaultZoom setFocus failed:', e);
      }
      try {
        if (typeof mapAny.setZoom === 'function') {
          mapAny.setZoom(scale);
        }
      } catch (e) {
        this.logWarn('applyDefaultZoom setZoom failed:', e);
      }
    }

    this.markLabelsDirty();
  }

  /**
   * Zoom to a specific entity by its ID
   */
  // CHANGE THIS: default camera zoom when selecting a marker (higher = closer)
  public zoomToEntity(entityId: string, scale: number = 2.5): void {
    const node = this.nodes().find(n => n.id === entityId);
    if (!node) {
      this.logWarn('zoomToEntity: Node not found', entityId);
      return;
    }

    // If we have map instance with setFocus support
    if (this.mapInstance && typeof this.mapInstance.setFocus === 'function' && node.coordinates) {
      this.mapInstance.setFocus({
        lat: node.coordinates.latitude,
        lng: node.coordinates.longitude,
        scale: scale,
        animate: true
      });
      this.userHasZoomed = true;
    } else {
      this.logDebug('zoomToEntity: using fallback or skipping as mapInstance not ready');
    }
  }

  /**
   * Setup viewBox monitoring (for debugging/logging, not auto-reset)
   * This helps track viewBox changes but doesn't auto-reset to allow user zoom control
   */
  private setupViewBoxObserver(): void {
    if (this.viewBoxObserver) {
      return; // Already set up
    }

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const fullWorldViewBox = this.getResponsiveWorldViewBox(container);

    // Just observe and log, don't auto-reset (allows user to zoom in if they want)
    this.viewBoxObserver = this.loaderService.observeViewBox(svg, (currentViewBox) => {
      if (this.destroyed) return;
      this.mapViewBox.set(currentViewBox);
      const [, , vbWidth] = currentViewBox.split(' ').map(Number);
      if (currentViewBox !== fullWorldViewBox) {
        this.logDebug('ViewBox changed:', currentViewBox, 'Zoom level:', (this.BASE_VIEWBOX_WIDTH / vbWidth).toFixed(2) + 'x');
      }
    });

    this.logDebug('ViewBox observer set up for monitoring');
  }

  private setupTransformObserver(): void {
    if (this.transformObserver) {
      return;
    }

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const regionsGroup = svg.querySelector('#jvm-regions-group') as SVGGElement | null;
    if (regionsGroup) {
      this.mapTransform.set(regionsGroup.getAttribute('transform') || '');
    }

    const observer = this.loaderService.observeRegionTransform(svg, (transform) => {
      if (this.destroyed) return;
      this.mapTransform.set(transform);
    });
    if (observer) {
      this.transformObserver = observer;
    }
  }

  /**
   * Setup wheel/scroll event handler for zoom functionality
   */
  private setupWheelZoomHandler(): void {
    if (this.boundWheelHandler) {
      return; // Already set up
    }

    const container = document.getElementById('war-room-map');
    if (!container) return;

    this.boundWheelHandler = (e: WheelEvent) => {
      if (this.destroyed) return;

      // Only handle wheel events on the map container
      if (e.target !== container && !container.contains(e.target as Node)) {
        return;
      }

      // Mark that user is manually zooming
      this.userHasZoomed = true;

      // Prevent default scroll behavior
      e.preventDefault();
      e.stopPropagation();

      const svg = container.querySelector('svg');
      if (!svg) return;

      const baseViewBox = this.getResponsiveWorldViewBox(container);
      const [baseX, baseY, baseWidth, baseHeight] = baseViewBox.split(' ').map(Number);

      // Determine zoom direction
      // deltaY > 0 = scroll down = zoom out
      // deltaY < 0 = scroll up = zoom in
      const zoomFactor = e.deltaY > 0 ? 1 / 1.1 : 1.1; // 10% zoom per scroll step

      // Get mouse position relative to SVG for zooming around cursor point
      const rect = svg.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Get current viewBox
      let currentViewBox = svg.getAttribute('viewBox');
      if (!currentViewBox) {
        svg.setAttribute('viewBox', baseViewBox);
        currentViewBox = baseViewBox;
      }

      const [x, y, width, height] = currentViewBox.split(' ').map(Number);

      // Calculate new viewBox dimensions
      const newWidth = width / zoomFactor;
      const newHeight = height / zoomFactor;

      // Prevent zooming out beyond full world view
      if (newWidth >= baseWidth || newHeight >= baseHeight) {
        // Snap to full world view (allow user to see the entire map)
        const fullWorldViewBox = baseViewBox;
        svg.setAttribute('viewBox', fullWorldViewBox);
        this.mapViewBox.set(fullWorldViewBox);
        this.userHasZoomed = true;
        return;
      }

      // Calculate mouse position in viewBox coordinates
      const mouseXInViewBox = x + (mouseX / rect.width) * width;
      const mouseYInViewBox = y + (mouseY / rect.height) * height;

      // Calculate new x, y to keep mouse position fixed
      const newX = mouseXInViewBox - (mouseX / rect.width) * newWidth;
      const newY = mouseYInViewBox - (mouseY / rect.height) * newHeight;

      // Clamp to map bounds
      const clampedX = Math.max(baseX, Math.min(baseX + baseWidth - newWidth, newX));
      const clampedY = Math.max(baseY, Math.min(baseY + baseHeight - newHeight, newY));

      // Set new viewBox
      svg.setAttribute('viewBox', `${clampedX} ${clampedY} ${newWidth} ${newHeight}`);

      // Update positions after zoom
      setTimeout(() => {
        this.updateLabelPositions();
      }, 50);
    };

    // Add wheel event listener with passive: false to allow preventDefault
    container.addEventListener('wheel', this.boundWheelHandler, { passive: false });
    this.logDebug('Wheel zoom handler set up');
  }

  /**
   * Keep logo/image overlays synced while jsVectorMap handles drag panning.
   * The library updates marker positions on drag without emitting viewport change events,
   * so we mark labels dirty during drag to keep overlays stuck to markers.
   */
  private setupPanSyncHandlers(): void {
    if (this.boundPanSyncMouseDownHandler || this.boundPanSyncMouseMoveHandler || this.boundPanSyncMouseUpHandler) {
      return; // Already set up
    }

    const container = document.getElementById('war-room-map');
    if (!container) return;

    this.boundPanSyncMouseDownHandler = (e: MouseEvent) => {
      if (e.button !== 0) return;

      const target = e.target as HTMLElement;
      if (
        target.closest('circle.jvm-marker') ||
        target.closest('image.company-logo-image') ||
        target.closest('text.company-label') ||
        target.closest('.marker-popup') ||
        target.closest('.map-control-btn') ||
        target.closest('.pin-marker') ||
        target.closest('.node-marker-wrapper')
      ) {
        return;
      }

      this.isDragging = true;
      this.userHasZoomed = true;
      this.markLabelsDirty();
    };

    this.boundPanSyncMouseMoveHandler = () => {
      if (!this.isDragging) return;
      this.markLabelsDirty();
    };

    this.boundPanSyncMouseUpHandler = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.markLabelsDirty();
    };

    container.addEventListener('mousedown', this.boundPanSyncMouseDownHandler);
    document.addEventListener('mousemove', this.boundPanSyncMouseMoveHandler);
    document.addEventListener('mouseup', this.boundPanSyncMouseUpHandler);
    this.logDebug('Pan sync handlers set up');
  }

}


