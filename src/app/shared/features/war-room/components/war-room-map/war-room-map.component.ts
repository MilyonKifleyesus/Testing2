import { Component, input, output, AfterViewInit, OnDestroy, inject, effect, signal, computed, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Node as WarRoomNode, FleetSelection, TransitRoute } from '../../../../../shared/models/war-room.interface';
import { WarRoomService } from '../../../../../shared/services/war-room.service';
import { AppStateService } from '../../../../../shared/services/app-state.service';
import { toSignal } from '@angular/core/rxjs-interop';

declare global {
  interface Window {
    jsVectorMap: any;
  }
}

@Component({
  selector: 'app-war-room-map',
  imports: [CommonModule],
  templateUrl: './war-room-map.component.html',
  styleUrls: ['./war-room-map.component.scss'],
})
export class WarRoomMapComponent implements AfterViewInit, OnDestroy {
  // Inputs
  nodes = input<WarRoomNode[]>([]);
  selectedEntity = input<FleetSelection | null>(null);
  transitRoutes = input<TransitRoute[]>([]);

  // Outputs
  nodeSelected = output<WarRoomNode | undefined>();

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

  private getLogoImagePaths(logoSource: string): string[] {
    const trimmed = logoSource.trim();
    if (!trimmed) return [];

    if (trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
      return [trimmed];
    }

    if (
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('/') ||
      trimmed.startsWith('./') ||
      trimmed.startsWith('../')
    ) {
      return [trimmed];
    }

    const baseUrl = window.location.origin;
    return [
      `${baseUrl}/assets/images/${trimmed}`,
      `/assets/images/${trimmed}`,
      `./assets/images/${trimmed}`,
      `assets/images/${trimmed}`,
    ];
  }

  private getCompanyDescription(node: WarRoomNode): string {
    const customDescription = node.description?.trim();
    if (customDescription) {
      return customDescription;
    }
    const location = node.country ? `${node.city}, ${node.country}` : node.city;
    const displayName = this.getCompanyDisplayName(node);
    if (!location) {
      return displayName ? `${displayName} location pending.` : 'Location pending.';
    }
    return displayName ? `${displayName} located in ${location}.` : `Located in ${location}.`;
  }

  private getCompanyDisplayName(node: WarRoomNode): string {
    return node.company || node.name || node.city || 'Company';
  }

  private getCompanyLogoPath(logoSource: string | null): string {
    if (!logoSource) {
      return '';
    }
    const paths = this.getLogoImagePaths(logoSource);
    return paths[0] || '';
  }

  private getLogoSizeMultiplier(node: WarRoomNode): number {
    return 1.0;
  }

  private getLogoImageSize(radius: number, zoomFactor: number, sizeMultiplier: number = 1): number {
    const baseImageSize = radius * 4.6 * sizeMultiplier;
    const effectiveZoom = Math.max(1, zoomFactor);
    const scaleFactor = Math.pow(effectiveZoom, 0.6);
    const responsiveImageSize = baseImageSize / scaleFactor;
    const minSize = radius * 2.4 * sizeMultiplier;
    const maxSize = radius * 8.0 * sizeMultiplier;
    return Math.max(minSize, Math.min(maxSize, responsiveImageSize));
  }

  private showCompanyTooltipAtElement(node: WarRoomNode, target: Element, logoSource: string | null): void {
    const description = this.getCompanyDescription(node);
    const displayName = this.getCompanyDisplayName(node);
    const logoPath = this.getCompanyLogoPath(logoSource);
    const rect = target.getBoundingClientRect();

    const bounds = this.getTooltipBounds();
    const availableWidth = Math.max(120, bounds.right - bounds.left);
    const availableHeight = Math.max(120, bounds.bottom - bounds.top);
    const tooltipWidth = Math.min(420, Math.max(260, Math.floor(availableWidth * 0.92)));
    const tooltipHeight = Math.min(360, Math.max(180, Math.floor(availableHeight * 0.6)));
    const spacing = 12;

    let tooltipTop = rect.top - spacing;
    let tooltipLeft = rect.left + (rect.width / 2);

    if (tooltipLeft + (tooltipWidth / 2) > bounds.right) {
      tooltipLeft = bounds.right - (tooltipWidth / 2);
    }
    if (tooltipLeft - (tooltipWidth / 2) < bounds.left) {
      tooltipLeft = bounds.left + (tooltipWidth / 2);
    }

    if (tooltipTop - tooltipHeight < bounds.top) {
      tooltipTop = rect.bottom + spacing;
    }

    if (tooltipTop + tooltipHeight > bounds.bottom) {
      tooltipTop = bounds.bottom - tooltipHeight;
    }

    this.hoveredCompanyTooltip.set({
      node,
      displayName,
      logoPath,
      description,
      position: { top: tooltipTop, left: tooltipLeft }
    });

    const markerIndex = this.getNodeIndex(node);
    this.tooltipAnchor = { node, markerIndex, logoSource, element: target };
    this.scheduleTooltipClamp();
  }

  getTypeLabel(node: WarRoomNode): string {
    const level = node.level || 'factory';
    if (level === 'parent') return 'Hub / Group HQ';
    if (level === 'subsidiary') return 'Subsidiary / Regional Hub';
    return 'Factory / Production Site';
  }

  private getNodeIndex(node: WarRoomNode): number {
    const nodes = this.nodes();
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
        try {
          const coords = await this.geocodeLocation(label);
          node.coordinates = { latitude: coords.latitude, longitude: coords.longitude };
        } catch (error) {
          console.warn('Geocoding failed for node location:', label, error);
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

  getTooltipStatusClass(): string {
    const status = this.hoveredCompanyTooltip()?.node.status;
    if (!status) return '';
    return `status-${status.toLowerCase().replace(/\s+/g, '-')}`;
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

    const mapContainer = document.getElementById('war-room-map');
    const container = (mapContainer ? mapContainer.closest('.war-room-map-container') : null) as HTMLElement | null;
    if (!container) {
      return viewportBounds;
    }

    const containerRect = container.getBoundingClientRect();
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

  private scheduleTooltipClamp(): void {
    if (!this.hoveredCompanyTooltip()) return;

    if (this.tooltipClampRafId !== null) {
      cancelAnimationFrame(this.tooltipClampRafId);
    }

    this.tooltipClampRafId = requestAnimationFrame(() => {
      this.tooltipClampRafId = null;
      this.clampTooltipToBounds();
    });
  }

  private clampTooltipToBounds(): void {
    const tooltip = this.hoveredCompanyTooltip();
    if (!tooltip) return;

    const tooltipEl = document.querySelector('.company-logo-tooltip') as HTMLElement | null;
    if (!tooltipEl) return;

    const bounds = this.getTooltipBounds();
    const rect = tooltipEl.getBoundingClientRect();
    let deltaX = 0;
    let deltaY = 0;

    if (rect.left < bounds.left) {
      deltaX = bounds.left - rect.left;
    } else if (rect.right > bounds.right) {
      deltaX = bounds.right - rect.right;
    }

    if (rect.top < bounds.top) {
      deltaY = bounds.top - rect.top;
    } else if (rect.bottom > bounds.bottom) {
      deltaY = bounds.bottom - rect.bottom;
    }

    if (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5) {
      this.hoveredCompanyTooltip.set({
        ...tooltip,
        position: {
          top: tooltip.position.top + deltaY,
          left: tooltip.position.left + deltaX
        }
      });
    }
  }

  private refreshTooltipPosition(): void {
    const tooltip = this.hoveredCompanyTooltip();
    if (!tooltip) return;

    const anchor = this.tooltipAnchor;
    const container = document.getElementById('war-room-map');
    if (!container || !anchor) {
      this.scheduleTooltipClamp();
      return;
    }

    let target: Element | null = anchor.element;
    if (!target || !target.isConnected) {
      const svg = container.querySelector('svg');
      if (svg && anchor.markerIndex >= 0) {
        target =
          svg.querySelector(`image#company-logo-image-${anchor.markerIndex}`) ||
          svg.querySelector(`circle[data-index=\"${anchor.markerIndex}\"]`) ||
          svg.querySelectorAll('circle.jvm-marker, circle[data-index], circle[class*=\"jvm-marker\"]')[anchor.markerIndex] ||
          anchor.element ||
          null;
      }
    }

    if (target) {
      this.showCompanyTooltipAtElement(anchor.node, target, anchor.logoSource);
    } else {
      this.scheduleTooltipClamp();
    }
  }

  private resetMapToFullWorldView(): void {
    this.syncMapViewport(true);
    this.updateLabelPositions();
    this.updateCompanyLogosAndLabelsPositions();
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
    }

    const regionsGroup = svg.querySelector('#jvm-regions-group') as SVGGElement | null;
    if (regionsGroup) {
      regionsGroup.setAttribute('transform', 'translate(0, 0) scale(1)');
    }

    const mapAny = this.mapInstance as any;
    if (mapAny) {
      const fullWorldScale = 1;
      try {
        if (typeof mapAny.updateSize === 'function') {
          mapAny.updateSize();
        }
      } catch (e) {
        console.warn('updateSize failed:', e);
      }
      try {
        if (typeof mapAny.setFocus === 'function') {
          mapAny.setFocus({ lat: 0, lng: 0, scale: fullWorldScale, animate: false });
        }
      } catch (e) {
        console.warn('setFocus reset failed:', e);
      }
      try {
        if (typeof mapAny.setZoom === 'function') {
          mapAny.setZoom(fullWorldScale);
        }
      } catch (e) {
        console.warn('setZoom reset failed:', e);
      }
      try {
        if (typeof mapAny._applyTransform === 'function') {
          mapAny.scale = fullWorldScale;
          mapAny.transX = 0;
          mapAny.transY = 0;
          mapAny._applyTransform();
        }
      } catch (e) {
        console.warn('internal transform reset failed:', e);
      }

      const internalMap = mapAny.map as any;
      if (internalMap && typeof internalMap._applyTransform === 'function') {
        try {
          internalMap.scale = fullWorldScale;
          internalMap.transX = 0;
          internalMap.transY = 0;
          internalMap._applyTransform();
        } catch (e) {
          console.warn('internal map transform reset failed:', e);
        }
      }
    }
  }

  private clearCompanyTooltip(): void {
    this.hoveredCompanyTooltip.set(null);
    this.tooltipAnchor = null;
    if (this.tooltipClampRafId !== null) {
      cancelAnimationFrame(this.tooltipClampRafId);
      this.tooltipClampRafId = null;
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

  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (!img) return;
    img.style.display = 'none';
  }

  // ...



  // Services
  private warRoomService = inject(WarRoomService);
  private appStateService = inject(AppStateService);

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
  currentTheme = computed(() => (this.appState()?.theme || 'light') as 'light' | 'dark');

  // Host binding for theme-aware CSS
  @HostBinding('attr.data-theme-mode') get themeMode(): string {
    return this.currentTheme();
  }

  // Color schemes for light and dark themes
  private readonly colorSchemes = {
    light: {
      backgroundColor: '#f5f5f5',
      regionFill: '#e0e0e0',
      regionStroke: '#d0d0d0',
      regionHoverFill: '#d5d5d5',
      regionFillOpacity: 0.8,
    },
    dark: {
      backgroundColor: '#1a1a1a',
      regionFill: '#2d2d2d',
      regionStroke: '#3d3d3d',
      regionHoverFill: '#404040',
      regionFillOpacity: 0.7,
    }
  };
  /*
  // Company descriptions - single source of truth
  private readonly companyDescriptions: Record<string, string> = {
    'creative carriage': `Creative Carriage has been a leader in wheelchair accessible vehicle manufacturing and conversions since 1988, when they built Canada's first fully-compliant wheelchair accessible taxi. Based near Brantford, Ontario, they specialize in custom, low-floor van conversions and serve as the exclusive Ontario dealer for six major US manufacturers of accessible and specialty vehicles. Their mission is to improve design and safety standards for wheelchair accessible vehicles.`,
    'alexander dennis': `Alexander Dennis is a world-class bus manufacturer with over 130 years of heritage in design and engineering excellence. Operating 16 facilities across 10 countries and operating North America's only double-deck bus facility in Las Vegas, they lead the industry's transition to zero-emission mobility with 3,000+ electric buses delivered globally.`,
    'karsan': `Karsan is a leading Turkish commercial vehicle manufacturer with over 58 years of industry experience. We specialize in innovative public transportation solutions, including electric buses like the e-JEST and e-ATAK, as well as hydrogen-powered and autonomous vehicles. As Turkey's only independent multi-brand vehicle manufacturer, we manage the entire value chain from R&D to after-sales service. Our state-of-the-art manufacturing facilities in Bursa can produce up to 20,000 vehicles annually.`,
    'arbroc': `ARBOC Specialty Vehicles is North America's pioneer and industry leader in low-floor cutaway bus technology, founded in 2008 and based in Middlebury, Indiana. With 5,000+ buses produced and a 70% market share in Canada and the US, they specialize in fully accessible paratransit, transit, and shuttle vehicles that exceed federal fuel economy and accessibility standards.`,
    'tam': `TAM-Europe is a leading bus and commercial vehicle manufacturer founded in 1947 and based in Maribor, Slovenia. With over 77 years of experience, they specialize in airport buses (VivAir with 40% global market share), electric city buses, and coaches serving markets globally, with strong commitment to product efficiency and environmental sustainability.`,
    'nfl': `New Flyer is North America's largest transit bus manufacturer, founded in 1930 and headquartered in Winnipeg, Manitoba. Operating under parent company NFI Group, they offer the advanced Xcelsior family of buses including battery-electric (Xcelsior CHARGE NGâ„¢), hydrogen fuel cell (Xcelsior CHARGE FCâ„¢), and hybrid options, with 35,000+ buses in service globally and 265+ million zero-emission miles traveled.`,
    'new flyer': `New Flyer is North America's largest transit bus manufacturer, founded in 1930 and headquartered in Winnipeg, Manitoba. Operating under parent company NFI Group, they offer the advanced Xcelsior family of buses including battery-electric (Xcelsior CHARGE NGâ„¢), hydrogen fuel cell (Xcelsior CHARGE FCâ„¢), and hybrid options, with 35,000+ buses in service globally and 265+ million zero-emission miles traveled.`,
    'nova': `Nova Bus is Canada's leading transit bus manufacturer, founded in 1993 and based in Saint-Eustache, Quebec. As part of the Volvo Group, they deliver innovative mobility solutions including the 100% electric LFSe+ bus with dual charging options, CNG, diesel-electric hybrid, and conventional vehicles, supporting transit agencies across North America with proven expertise and industry-leading parts and service support.`,
    'nova bus': `Nova Bus is Canada's leading transit bus manufacturer, founded in 1993 and based in Saint-Eustache, Quebec. As part of the Volvo Group, they deliver innovative mobility solutions including the 100% electric LFSe+ bus with dual charging options, CNG, diesel-electric hybrid, and conventional vehicles, supporting transit agencies across North America with proven expertise and industry-leading parts and service support.`
  };
  */

  // Private properties
  private mapInstance: any = null;
  private scriptsLoaded = false;
  private labelPositions = new Map<string, { x: number; y: number }>();
  private updateLabelsRAFId: number | null = null;
  private labelsUpdateDirty: boolean = false;
  private mapReadyRetryInterval: ReturnType<typeof setInterval> | null = null;
  private isFullscreen = false;
  private destroyed = false;
  private labelObserver: MutationObserver | null = null;
  private nodeObserver: MutationObserver | null = null;
  private viewBoxObserver: MutationObserver | null = null;
  private boundFullscreenHandler: (() => void) | null = null;
  private boundResizeHandler: (() => void) | null = null;
  private boundWheelHandler: ((e: WheelEvent) => void) | null = null;
  private boundPanSyncMouseDownHandler: ((e: MouseEvent) => void) | null = null;
  private boundPanSyncMouseMoveHandler: ((e: MouseEvent) => void) | null = null;
  private boundPanSyncMouseUpHandler: ((e: MouseEvent) => void) | null = null;
  private boundDragMouseMoveHandler: ((e: MouseEvent) => void) | null = null;
  private boundDragMouseUpHandler: ((e: MouseEvent) => void) | null = null;
  private maintainFullWorldView: boolean = true; // Flag to maintain full world view by default
  private zoomTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private isDragging: boolean = false;
  private dragStartX: number = 0;
  private dragStartY: number = 0;
  private dragStartViewBoxX: number = 0;
  private dragStartViewBoxY: number = 0;
  private currentPopup: HTMLElement | null = null;
  private closePopupHandler: ((e: MouseEvent) => void) | null = null;
  private closePopupTimer: ReturnType<typeof setTimeout> | null = null;
  private updateMarkersTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private lastNodesSignature: string | null = null;
  private mapInitAttempts = 0;
  private readonly maxMapInitRetries = 10;
  private readonly geocodeCache = new Map<string, { latitude: number; longitude: number }>();
  private readonly geocodeInFlight = new Map<string, Promise<{ latitude: number; longitude: number }>>();

  // Hover tooltip state
  hoveredCompanyTooltip = signal<{
    node: WarRoomNode;
    displayName: string;
    logoPath: string;
    description: string;
    position: { top: number; left: number };
  } | null>(null);
  private tooltipTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private tooltipClampRafId: number | null = null;
  private tooltipAnchor: {
    node: WarRoomNode;
    markerIndex: number;
    logoSource: string | null;
    element: Element;
  } | null = null;
  /** Cache for map elements to improve performance during drag/zoom */
  private elementCache = new Map<string, Element | null>();
  /** Queued company id to zoom to when map becomes ready (avoids "map not available" race). */
  private pendingZoomCompanyId: string | null = null;
  /** Track if user has manually zoomed (to prevent auto-reset) */
  private userHasZoomed: boolean = false;
  /** Flag to track initialization phase to ignore automated layout shifts */
  private isInitializing: boolean = false;

  // Signal for current map viewBox to sync SVG overlays
  private mapViewBox = signal<string>('0 0 950 550');

  // Signal for marker SVG coordinates to ensure perfect alignment
  private markerCoordinates = signal<Map<string, { x: number; y: number }>>(new Map());

  constructor() {
    // Effect to zoom to selected company location when it changes
    effect((onCleanup) => {
      const selected = this.selectedEntity();
      if (this.mapInstance && this.scriptsLoaded) {
        this.updateSelectedMarkerStyles();
      }
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
      const selected = this.selectedEntity();
      if (!selected && this.mapInstance && this.scriptsLoaded) {
        // When no company is selected, ensure full world view is visible.
        this.userHasZoomed = false;
        this.resetToFullWorldView();
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

  // Computed property for projected transit routes with SVG coordinates
  readonly projectedRoutes = computed(() => {
    const routes = this.transitRoutes();
    const markers = this.markerCoordinates();
    const nodes = this.nodes();
    if (!routes || routes.length === 0) return [];

    return routes
      .filter((route) => {
        // Validate coordinates exist and are valid before projection
        if (!route.fromCoordinates || !route.toCoordinates) {
          return false;
        }

        const hasValidFromCoords =
          typeof route.fromCoordinates.latitude === 'number' &&
          typeof route.fromCoordinates.longitude === 'number' &&
          Number.isFinite(route.fromCoordinates.latitude) &&
          Number.isFinite(route.fromCoordinates.longitude);

        const hasValidToCoords =
          typeof route.toCoordinates.latitude === 'number' &&
          typeof route.toCoordinates.longitude === 'number' &&
          Number.isFinite(route.toCoordinates.latitude) &&
          Number.isFinite(route.toCoordinates.longitude);

        return hasValidFromCoords && hasValidToCoords;
      })
      .map((route, index) => {
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

        // Fallback to projection if markers not yet available
        // Coordinates are already validated above, safe to use
        if (!start) {
          start = this.projectCoordinatesToSVG(
            route.fromCoordinates.latitude,
            route.fromCoordinates.longitude
          );
        }
        if (!end) {
          end = this.projectCoordinatesToSVG(
            route.toCoordinates.latitude,
            route.toCoordinates.longitude
          );
        }

        return {
          id: route.id,
          from: route.from,
          to: route.to,
          start,
          end,
          fromLabel: fromNode ? fromNode.city || fromNode.name : route.from,
          toLabel: toNode ? toNode.city || toNode.name : route.to,
          path: this.createCurvedPath(start, end),
          strokeColor: route.strokeColor || '#0ea5e9',
          strokeWidth: route.strokeWidth || 1.5,
          dashArray: route.dashArray,
          animated: route.animated !== false,
          index,
          highlighted: !!selected && (
            route.from === selected.id ||
            route.to === selected.id ||
            route.from === selected.subsidiaryId ||
            route.to === selected.subsidiaryId ||
            route.from === selected.factoryId ||
            route.to === selected.factoryId
          )
        };
      });
  });

  // Computed property for SVG viewBox
  readonly svgViewBox = computed(() => {
    // Sync with the map's current viewBox for perfect alignment
    return this.mapViewBox();
  });

  /**
   * Project latitude/longitude coordinates to SVG coordinate space
   * Uses Mercator projection to match jsVectorMap's coordinate system
   */
  private projectCoordinatesToSVG(lat: number, lng: number): { x: number; y: number } {
    // Use the robust latLngToPixel method which delegates to mapInstance
    const container = document.getElementById('war-room-map');
    const width = container ? container.clientWidth : 950;
    const height = container ? container.clientHeight : 550;

    // Use latLngToPixel to get consistent coordinates with markers
    // This handles the map projection correctly
    const pixel = this.latLngToPixel(lat, lng, width, height);

    // If we have a viewBox (which we usually do), we need to ensure the coordinates
    // are in the SVG coordinate space, not just pixel space
    if (container) {
      const svg = container.querySelector('svg');
      if (svg) {
        // If latLngToPixel already returned SVG-relative coords (computed via viewBox logic),
        // we can return them directly.
        // Let's verify what latLngToPixel returns.
        // It tries to return coords adjusted for viewBox.
        return pixel;
      }
    }

    return pixel;
  }

  /**
   * Create a curved SVG path between two points using quadratic Bézier curve
   * Matches React inspiration with a fixed arc height (hump)
   */
  private createCurvedPath(start: { x: number; y: number } | null, end: { x: number; y: number } | null): string {
    if (!start || !end) return '';

    // Calculate control point for the curve
    const midX = (start.x + end.x) / 2;

    // Fixed arc height for consistent React-like "hump"
    // We use a minimum to avoid negative or awkward flips, but target ~50
    const midY = Math.min(start.y, end.y) - 50;

    // Return quadratic Bézier curve path
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }

  ngAfterViewInit(): void {
    // Wait for view to be fully initialized
    setTimeout(() => {
      this.loadScripts()
        .then(() => {
          this.initializeMap();
        })
        .catch((error) => {
          console.error('Failed to load map scripts:', error);
        });
    }, 200);
  }

  ngOnDestroy(): void {
    // Cleanup tooltip
    if (this.tooltipTimeoutId) {
      clearTimeout(this.tooltipTimeoutId);
      this.tooltipTimeoutId = null;
    }
    this.clearCompanyTooltip();
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

    // Cancel RAF loop
    if (this.updateLabelsRAFId !== null) {
      cancelAnimationFrame(this.updateLabelsRAFId);
      this.updateLabelsRAFId = null;
    }
    if (this.mapReadyRetryInterval) {
      clearInterval(this.mapReadyRetryInterval);
      this.mapReadyRetryInterval = null;
    }

    // Remove popup if it exists (this will also clean up the click listener)
    this.hideMarkerPopup();

    // Disconnect MutationObservers
    if (this.labelObserver) {
      this.labelObserver.disconnect();
      this.labelObserver = null;
    }
    if (this.nodeObserver) {
      this.nodeObserver.disconnect();
      this.nodeObserver = null;
    }
    if (this.viewBoxObserver) {
      this.viewBoxObserver.disconnect();
      this.viewBoxObserver = null;
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
    if (this.boundDragMouseMoveHandler) {
      document.removeEventListener('mousemove', this.boundDragMouseMoveHandler);
      this.boundDragMouseMoveHandler = null;
    }
    if (this.boundDragMouseUpHandler) {
      document.removeEventListener('mouseup', this.boundDragMouseUpHandler);
      this.boundDragMouseUpHandler = null;
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

  private loadScripts(): Promise<void> {
    // Check if scripts are already loaded (via angular.json)
    if (this.scriptsLoaded || (window as any).jsVectorMap) {
      this.scriptsLoaded = true;
      // Wait longer for world map data to be available
      return new Promise((resolve) => setTimeout(resolve, 500));
    }

    // Fallback: dynamically load scripts if not loaded via angular.json
    return new Promise((resolve, reject) => {
      // Load CSS specifically for jsVectorMap
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/libs/jsvectormap/css/jsvectormap.min.css';
      document.head.appendChild(link);

      // Load jsVectorMap library
      const script1 = document.createElement('script');
      script1.src = '/assets/libs/jsvectormap/js/jsvectormap.min.js';
      script1.onload = () => {
        if (this.destroyed) {
          reject(new Error('Component destroyed before scripts loaded'));
          return;
        }
        // Load world map data
        const script2 = document.createElement('script');
        script2.src = '/assets/libs/jsvectormap/maps/world.js';
        script2.onload = () => {
          if (this.destroyed) {
            reject(new Error('Component destroyed before scripts loaded'));
            return;
          }
          this.scriptsLoaded = true;
          // Wait a bit more for the map data to be fully processed
          setTimeout(() => {
            if (!this.destroyed) {
              resolve();
            }
          }, 300);
        };
        script2.onerror = () => reject(new Error('Failed to load world map data'));
        document.head.appendChild(script2);
      };
      script1.onerror = () => reject(new Error('Failed to load jsVectorMap library'));
      document.head.appendChild(script1);
    });
  }

  private initializeMap(): void {
    if (!window.jsVectorMap) {
      console.error('jsVectorMap library not loaded');
      return;
    }

    // Check if container exists
    const container = document.getElementById('war-room-map');
    if (!container) {
      console.error('Map container #war-room-map not found');
      this.mapInitAttempts++;
      if (this.mapInitAttempts < this.maxMapInitRetries) {
        setTimeout(() => {
          if (!this.destroyed) {
            this.initializeMap();
          }
        }, 200); // Retry after 200ms
      } else {
        console.error('Max retry attempts reached for map initialization');
      }
      return;
    }

    // Check if container has dimensions, if not set a minimum
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      console.warn('Map container has no dimensions, setting minimum...', rect);
      // Set explicit dimensions if parent doesn't provide them
      const parent = container.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        if (parentRect.height === 0 || rect.height === 0) {
          // Set explicit height on both container and parent if needed
          if (rect.height === 0) {
            container.style.height = '600px';
            console.log('Set container height to 600px');
          }
          if (parentRect.height === 0 && parent) {
            parent.style.height = '600px';
            console.log('Set parent height to 600px');
          }
        }
        if (parentRect.width === 0 || rect.width === 0) {
          container.style.width = '100%';
          if (parent) {
            parent.style.width = '100%';
          }
          console.log('Set container width to 100%');
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
        console.error('Max retry attempts reached for map dimension initialization');
      }
      return;
    }

    // Reset attempt counter on successful initialization
    this.mapInitAttempts = 0;

    // Set initializing flag
    this.isInitializing = true;

    console.log('Map container dimensions:', rect.width, 'x', rect.height);

    const nodes = this.nodes();
    if (nodes.length === 0) {
      console.warn('No nodes available for map initialization. Rendering map without markers.');
    }

    this.lastNodesSignature = this.getNodesSignature(nodes);
    console.log('Initializing map with', nodes.length, 'nodes');

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
        console.warn('Error cleaning up existing map:', e);
      }
      this.mapInstance = null;
    }

    // Clear element cache
    this.elementCache.clear();

    setTimeout(async () => {
      try {
        if (this.destroyed) return;
        const finalCheck = document.getElementById('war-room-map');
        if (!finalCheck) return;

        const finalRect = finalCheck.getBoundingClientRect();
        if (finalRect.width === 0 || finalRect.height === 0) {
          console.error('Container still has no dimensions:', finalRect);
          // Force dimensions
          finalCheck.style.width = '100%';
          finalCheck.style.height = '600px';
          console.log('Forced container dimensions');
        }

        await this.ensureNodeCoordinates(nodes);

        // Convert nodes to jsVectorMap markers format
        // jsVectorMap typically expects [latitude, longitude] format for both coords and latLng
        const allMarkers = nodes.map((node) => ({
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

        // Get transit routes from service
        const transitRoutes = this.warRoomService.transitRoutes();
        const lines = transitRoutes.map((route) => ({
          from: [route.fromCoordinates.latitude, route.fromCoordinates.longitude],
          to: [route.toCoordinates.latitude, route.toCoordinates.longitude],
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
          zoomMin: 1, // Minimum zoom level (full world view)
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
        };

        // Add tooltip handler
        mapConfig.onMarkerTipShow = (event: any, label: any, index: number) => {
          const node = nodes[index];
          if (!node) return;

          console.log('Tooltip show for node:', node.company, 'index:', index);

          const displayName = this.getCompanyDisplayName(node);
          const locationLabel = node.country ? `${node.city}, ${node.country}` : node.city;
          const description = this.getCompanyDescription(node);
          const tooltipContent = this.buildMarkerTooltipContent(node, displayName, locationLabel, description);

          if (label && typeof label.html === 'function') {
            label.html(tooltipContent.outerHTML);
          } else if (label && typeof label.appendChild === 'function') {
            while (label.firstChild) {
              label.removeChild(label.firstChild);
            }
            label.appendChild(tooltipContent);
          }
        };

        // Add click handler with zoom functionality
        mapConfig.onMarkerClick = (event: any, index: number) => {
          const node = nodes[index];
          console.log('Marker clicked via jsVectorMap handler:', node);
          this.nodeSelected.emit(node);
        };

        // Add event handlers for zoom/pan to update label positions
        mapConfig.onViewportChange = () => {
          // Mark that user has interacted with the map (zoomed/panned)
          // Only if we're not in the initialization phase where many automatic layout shifts happen
          if (!this.isInitializing) {
            this.userHasZoomed = true;
          }

          this.updateLabelPositions();
          // Update logo and label positions when viewport changes - ensure text sticks to circle
          // Use requestAnimationFrame for smoother updates, but also call directly for immediate response
          this.updateCompanyLogosAndLabelsPositions();
          this.updateSelectedMarkerStyles(); // Ensure highlighting persists after pan/zoom
          this.refreshTooltipPosition();
          requestAnimationFrame(() => {
            this.updateCompanyLogosAndLabelsPositions();
            this.updateSelectedMarkerStyles();
            // Re-apply logos and labels in case they were lost
            this.addCompanyLogosAndLabels();
          });
        };

        // Initialize the map
        console.log('Creating jsVectorMap instance with config:', mapConfig);
        console.log('Container element:', finalCheck);
        console.log('Container dimensions:', finalCheck.getBoundingClientRect());

        try {
          this.mapInstance = new window.jsVectorMap(mapConfig);
          console.log('Map instance created successfully:', this.mapInstance);

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
              this.resetToFullWorldView();
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
            this.attachMarkerClickHandlers();
            this.attachMarkerHoverHandlers(); // Add hover handlers for tooltips
            const pending = this.pendingZoomCompanyId;
            this.pendingZoomCompanyId = null;
            if (pending) this.zoomToEntity(pending, 12);

            // Retain lines group to display route connections

            // Add logos and company names to Creative Carriage markers
            this.addCompanyLogosAndLabels();

            // Reset to full world view by default (after logos are added)
            // Only if no pending zoom is queued
            if (!pending) {
              // Call immediately and also after a delay to ensure it sticks
              this.resetToFullWorldView();
              setTimeout(() => {
                if (!this.destroyed) {
                  this.resetToFullWorldView();
                }
              }, 500);
              setTimeout(() => {
                if (!this.destroyed) {
                  this.resetToFullWorldView();
                  // Initialization complete - allow user interactions to be tracked
                  this.isInitializing = false;
                  console.log('Map initialization complete - user interactions enabled');
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
            console.error('Map instance is null after creation');
          } else {
            // Verify SVG was created
            setTimeout(() => {
              const svg = finalCheck.querySelector('svg');
              if (svg) {
                console.log('Map SVG found:', svg);
                console.log('SVG dimensions:', svg.getBoundingClientRect());
                console.log('SVG viewBox:', svg.getAttribute('viewBox'));

                // Fix missing viewBox if needed (common issue)
                if (!svg.getAttribute('viewBox')) {
                  console.warn('SVG missing viewBox, forcing default...');
                  svg.setAttribute('viewBox', this.getResponsiveWorldViewBox(finalCheck));
                }

                // Ensure SVG is responsive - remove fixed width/height attributes
                svg.removeAttribute('width');
                svg.removeAttribute('height');
                svg.style.width = '100%';
                svg.style.height = '100%';
                svg.setAttribute('preserveAspectRatio', 'xMidYMid meet'); // Show entire map, maintain aspect ratio

                // Immediately set to full world view (responsive to container)
                svg.setAttribute('viewBox', this.getResponsiveWorldViewBox(finalCheck));

                // Check if SVG has content
                const hasContent = svg.children.length > 0;
                console.log('SVG has content:', hasContent, 'children:', svg.children.length);

                if (!hasContent) {
                  console.warn('SVG exists but has no content - map may not have rendered');
                } else {
                  // Log SVG structure
                  console.log('SVG children:', Array.from(svg.children).map((child: any) => ({
                    tagName: child.tagName,
                    id: child.id,
                    className: child.className,
                  })));
                }
              } else {
                console.error('Map SVG not found - map initialization may have failed');
                // Log container contents for debugging
                console.log('Container innerHTML length:', finalCheck.innerHTML.length);
                console.log('Container children:', Array.from(finalCheck.children).map((child: any) => ({
                  tagName: child.tagName,
                  id: child.id,
                  className: child.className,
                })));
              }

              // Check for regions
              const regions = finalCheck.querySelectorAll('#jvm-regions-group path');
              console.log('Number of region paths found:', regions.length);
              if (regions.length === 0) {
                console.warn('No region paths found - map regions may not have rendered');
              }

              // Ensure SVG is responsive
              this.ensureSvgResponsive();

              // Reset to full world view by default (zoom out to show entire map)
              // Only if no pending zoom is queued
              if (!this.pendingZoomCompanyId) {
                this.resetToFullWorldView();
              }

              // Setup resize handler to keep SVG responsive
              this.setupResizeHandler();

              // Setup viewBox observer to maintain full world view
              this.setupViewBoxObserver();

              // Setup wheel/scroll zoom handler
              this.setupWheelZoomHandler();
              // Keep logo overlays synced while dragging the map
              this.setupPanSyncHandlers();

              // Check for markers
              const markers = finalCheck.querySelectorAll('.jvm-marker, circle[class*="marker"], circle[data-index]');
              console.log('Number of markers found:', markers.length);
              if (markers.length === 0) {
                console.warn('No markers found - map markers may not have rendered');
              } else {
                console.log('Markers:', Array.from(markers).map((m: any) => ({
                  cx: m.getAttribute('cx'),
                  cy: m.getAttribute('cy'),
                  fill: m.getAttribute('fill'),
                })));
              }
            }, 500);
          }
        } catch (initError) {
          console.error('Error during map initialization:', initError);
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
        //       console.log('Lines added to map');
        //     } catch (error) {
        //       console.warn('Could not add lines via addLines method:', error);
        //     }
        //   }, 500);
        // }
      } catch (error) {
        console.error('Error initializing map:', error);
        console.error('Error details:', error);
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

  /**
   * Hide and remove the current marker popup if it exists
   */
  private hideMarkerPopup(): void {
    if (this.currentPopup) {
      this.currentPopup.remove();
      this.currentPopup = null;
    }
  }

  private buildMarkerTooltipContent(
    node: WarRoomNode,
    displayName: string,
    locationLabel: string,
    description?: string
  ): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    wrapper.style.border = '1px solid #00FF41';
    wrapper.style.borderRadius = '4px';
    wrapper.style.padding = '12px';
    wrapper.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    wrapper.style.maxWidth = '300px';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '8px';
    wrapper.appendChild(header);

    const title = document.createElement('div');
    title.style.fontWeight = '700';
    title.style.fontSize = '14px';
    title.style.color = '#00FF41';
    title.style.textTransform = 'uppercase';
    title.textContent = `COMPANY: ${displayName}`;
    header.appendChild(title);

    const typeBadge = document.createElement('div');
    typeBadge.style.fontSize = '10px';
    typeBadge.style.color = '#888';
    typeBadge.style.marginTop = '2px';
    typeBadge.textContent = `TYPE: ${this.getTypeLabel(node).toUpperCase()}`;
    header.appendChild(typeBadge);

    const statusBadge = document.createElement('div');
    statusBadge.style.fontSize = '10px';
    statusBadge.style.fontWeight = '700';
    statusBadge.style.padding = '2px 6px';
    statusBadge.style.borderRadius = '2px';
    statusBadge.style.textTransform = 'uppercase';

    const status = node.status?.toUpperCase() || 'ACTIVE';
    if (status === 'ACTIVE' || status === 'OPTIMAL' || status === 'ONLINE') {
      statusBadge.style.backgroundColor = 'rgba(0, 255, 65, 0.1)';
      statusBadge.style.color = '#00FF41';
      statusBadge.style.border = '1px solid rgba(0, 255, 65, 0.3)';
      statusBadge.textContent = 'ONLINE';
    } else if (status === 'WARNING' || status === 'MAINTENANCE') {
      statusBadge.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
      statusBadge.style.color = '#ffc107';
      statusBadge.style.border = '1px solid rgba(255, 193, 7, 0.3)';
      statusBadge.textContent = 'WARNING';
    } else {
      statusBadge.style.backgroundColor = 'rgba(108, 117, 125, 0.1)';
      statusBadge.style.color = '#adb5bd';
      statusBadge.style.border = '1px solid rgba(108, 117, 125, 0.3)';
      statusBadge.textContent = 'OFFLINE';
    }
    header.appendChild(statusBadge);

    const location = document.createElement('div');
    location.style.fontSize = '11px';
    location.style.color = '#6c757d';
    location.style.marginBottom = '8px';
    location.style.fontWeight = '600';
    location.textContent = locationLabel || 'LOCATION PENDING';
    wrapper.appendChild(location);

    if (description) {
      const descriptionEl = document.createElement('div');
      descriptionEl.style.fontSize = '12px';
      descriptionEl.style.color = '#e0e0e0';
      descriptionEl.style.lineHeight = '1.4';
      descriptionEl.textContent = description;
      wrapper.appendChild(descriptionEl);
    }

    return wrapper;
  }

  /**
   * Show a popup with company details when a marker is clicked
   */
  private showMarkerPopup(node: WarRoomNode, marker: HTMLElement, event: MouseEvent): void {
    // Remove any existing popup first
    this.hideMarkerPopup();

    const container = document.getElementById('war-room-map');
    if (!container) return;

    const description = this.getCompanyDescription(node);
    const displayName = this.getCompanyDisplayName(node);
    const locationLabel = node.country ? `${node.city}, ${node.country}` : node.city;

    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'marker-popup';
    popup.style.position = 'absolute';
    popup.style.zIndex = '1000';
    popup.style.pointerEvents = 'auto';

    const content = this.buildMarkerTooltipContent(node, displayName, locationLabel, description);
    popup.appendChild(content);

    // Position popup near the marker
    const rect = marker.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    popup.style.left = (rect.left - containerRect.left + rect.width / 2) + 'px';
    popup.style.top = (rect.top - containerRect.top - 10) + 'px';
    popup.style.transform = 'translate(-50%, -100%)';

    // Append to container
    container.appendChild(popup);
    this.currentPopup = popup;

    // Add click handler to close popup when clicking outside
    this.closePopupHandler = (e: MouseEvent) => {
      if (popup && !popup.contains(e.target as Node) && !marker.contains(e.target as Node)) {
        this.hideMarkerPopup();
      }
    };

    // Use setTimeout to avoid immediate closure
    this.closePopupTimer = setTimeout(() => {
      if (this.closePopupHandler) {
        document.addEventListener('click', this.closePopupHandler);
      }
      this.closePopupTimer = null;
    }, 0);
  }

  /**
   * Convert latitude/longitude to pixel coordinates on the map
   * Uses Mercator projection similar to jsVectorMap
   */
  private latLngToPixel(lat: number, lng: number, containerWidth: number, containerHeight: number): { x: number; y: number } {
    // Try to use jsVectorMap's internal coordinate conversion if available
    if (this.mapInstance && this.mapInstance.latLngToPoint) {
      try {
        const point = this.mapInstance.latLngToPoint([lat, lng]);
        return { x: point.x, y: point.y };
      } catch (e) {
        console.warn('Could not use map instance coordinate conversion:', e);
      }
    }

    // Fallback: Manual Mercator projection
    // jsVectorMap typically uses a world map with these dimensions
    const mapWidth = 1000; // Base map width
    const mapHeight = 500; // Base map height

    // Convert longitude to x (0 to 360 degrees, centered at 0)
    const x = ((lng + 180) / 360) * mapWidth;

    // Convert latitude to y using Mercator projection
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = mapHeight / 2 - (mapWidth * mercN) / (2 * Math.PI);

    // Get actual SVG dimensions to account for zoom/pan
    const container = document.getElementById('war-room-map');
    if (container) {
      const svg = container.querySelector('svg');
      if (svg) {
        const svgRect = svg.getBoundingClientRect();
        const viewBox = svg.getAttribute('viewBox');

        if (viewBox) {
          const [vbX, vbY, vbWidth, vbHeight] = viewBox.split(' ').map(Number);
          const scaleX = svgRect.width / vbWidth;
          const scaleY = svgRect.height / vbHeight;

          // Adjust for viewBox offset
          const adjustedX = (x - vbX) * scaleX;
          const adjustedY = (y - vbY) * scaleY;

          return { x: adjustedX, y: adjustedY };
        }
      }
    }

    // Scale to container size (fallback)
    const scaleX = containerWidth / mapWidth;
    const scaleY = containerHeight / mapHeight;

    return {
      x: x * scaleX,
      y: y * scaleY
    };
  }

  /**
   * Update label positions based on current map state
   */
  private updateLabelPositions(): void {
    const container = document.getElementById('war-room-map');
    if (!container || !this.mapInstance) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const nodes = this.nodes();
    const svg = container.querySelector('svg');

    nodes.forEach((node) => {
      // Try to find the actual marker element in the SVG
      let pixelPos: { x: number; y: number } | null = null;

      if (svg) {
        // Look for marker circles or elements with the node's coordinates
        const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index], .jvm-marker');
        markers.forEach((marker: any, index: number) => {
          if (index < nodes.length && nodes[index].id === node.id) {
            const cx = parseFloat(marker.getAttribute('cx') || '0');
            const cy = parseFloat(marker.getAttribute('cy') || '0');

            // Get SVG transform to account for zoom/pan
            const svgRect = svg.getBoundingClientRect();
            const viewBox = svg.getAttribute('viewBox');

            if (viewBox) {
              const [vbX, vbY, vbWidth, vbHeight] = viewBox.split(' ').map(Number);
              const scaleX = svgRect.width / vbWidth;
              const scaleY = svgRect.height / vbHeight;

              // Convert SVG coordinates to container coordinates
              pixelPos = {
                x: (cx - vbX) * scaleX,
                y: (cy - vbY) * scaleY
              };
            } else {
              // No viewBox, use direct coordinates
              pixelPos = { x: cx, y: cy };
            }
          }
        });
      }

      // Fallback to coordinate conversion if marker not found
      if (!pixelPos) {
        pixelPos = this.latLngToPixel(
          node.coordinates.latitude,
          node.coordinates.longitude,
          rect.width,
          rect.height
        );
      }

      this.labelPositions.set(node.id, pixelPos);
    });

    // Extract SVG coordinates for perfect route alignment
    if (svg) {
      const newMarkerCoords = new Map<string, { x: number; y: number }>();
      const markerEls = svg.querySelectorAll('circle.jvm-marker, circle[data-index]');
      markerEls.forEach((marker: any, index: number) => {
        if (index < nodes.length) {
          const cx = parseFloat(marker.getAttribute('cx') || '0');
          const cy = parseFloat(marker.getAttribute('cy') || '0');
          newMarkerCoords.set(nodes[index].id, { x: cx, y: cy });
        }
      });
      // Only update signal if coordinates actually changed to avoid unnecessary re-computes
      if (newMarkerCoords.size > 0) {
        this.markerCoordinates.set(newMarkerCoords);
      }
    }
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
        // Also update company logos and labels to ensure they stick to circles and are responsive
        this.updateCompanyLogosAndLabelsPositions();
        // Re-apply logos to ensure they're always positioned correctly
        this.addCompanyLogosAndLabels();
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
        console.warn('Could not set up map event listeners:', e);
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
          this.updateCompanyLogosAndLabelsPositions();
          this.addCompanyLogosAndLabels();
          this.refreshTooltipPosition();
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
        const id = node.id ?? node.companyId ?? node.name ?? '';
        const lat = Number.isFinite(node.coordinates.latitude) ? node.coordinates.latitude.toFixed(4) : '0';
        const lng = Number.isFinite(node.coordinates.longitude) ? node.coordinates.longitude.toFixed(4) : '0';
        return `${id}:${lat},${lng}`;
      })
      .join('|');
  }

  /**
   * Update map markers when nodes change dynamically
   */
  private updateMapMarkers(): void {
    if (this.destroyed || !this.mapInstance) return;
    const container = document.getElementById('war-room-map');
    if (!container) return;
    const nodes = this.nodes();
    const nextSignature = this.getNodesSignature(nodes);
    const signatureChanged = nextSignature !== this.lastNodesSignature;

    const svg = container.querySelector('svg');
    if (!svg) {
      console.warn('SVG not found for marker update');
      return;
    }

    // Get current markers from SVG
    const existingMarkers = svg.querySelectorAll('circle.jvm-marker, circle[data-index]');
    const existingMarkerCount = existingMarkers.length;
    console.log(`Existing markers: ${existingMarkerCount}, New nodes: ${nodes.length}`);

    if (signatureChanged || nodes.length !== existingMarkerCount || nodes.length > existingMarkerCount) {
      const sel = this.selectedEntity();
      if (sel?.id) {
        this.pendingZoomCompanyId = sel.id;
      }
      this.lastNodesSignature = nextSignature;
      this.initializeMap();
    } else {
      // Just update label positions if markers are already correct
      console.log('Node count unchanged, updating label positions only');
      this.updateLabelPositions();
      this.attachMarkerClickHandlers();
      this.attachMarkerHoverHandlers(); // Ensure hover handlers are attached when nodes update but map doesn't re-init
      // Re-add logos and labels in case markers were repositioned
      setTimeout(() => {
        this.addCompanyLogosAndLabels();
        this.updateCompanyLogosAndLabelsPositions();
      }, 200);
    }
  }

  /**
   * Attach explicit click handlers to SVG markers for better reliability
   * This ensures markers are clickable even if the jsVectorMap onMarkerClick handler fails
   */
  private attachMarkerClickHandlers(): void {
    const container = document.getElementById('war-room-map');
    if (!container) {
      console.warn('Container not found for attaching marker click handlers');
      return;
    }

    const nodes = this.nodes();
    if (nodes.length === 0) {
      console.warn('No nodes available for marker click handlers');
      return;
    }

    // Wait a bit for markers to be fully rendered
    setTimeout(() => {
      const svg = container.querySelector('svg');
      if (!svg) {
        console.warn('SVG not found for attaching marker click handlers');
        return;
      }

      // Find all marker circles in the SVG
      const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index], circle[class*="jvm-marker"]');
      console.log(`Found ${markers.length} markers to attach click handlers to`);

      markers.forEach((marker: any, index: number) => {
        if (index < nodes.length && !marker.hasAttribute('data-click-handler')) {
          const node = nodes[index];

          // Mark marker as having a click handler to prevent duplicates
          marker.setAttribute('data-click-handler', 'true');

          // Ensure marker is clickable
          marker.style.cursor = 'pointer';
          marker.style.pointerEvents = 'auto';

          // Add click handler
          marker.addEventListener('click', (event: MouseEvent) => {
            event.stopPropagation(); // Prevent event bubbling
            event.preventDefault(); // Prevent default behavior
            console.log(`Marker ${index} clicked directly:`, node);
            this.clearCompanyTooltip();
            this.nodeSelected.emit(node);
            this.hideMarkerPopup();
          }, true); // Use capture phase for better reliability

          // Also add mousedown as backup
          marker.addEventListener('mousedown', (event: MouseEvent) => {
            event.stopPropagation();
          }, true);

          console.log(`Attached click handler to marker ${index} for node:`, node.city);
        }
      });

      // Also listen for new markers that might be added dynamically
      this.nodeObserver = new MutationObserver(() => {
        if (!this.destroyed) {
          // Re-attach handlers if new markers are added
          const newMarkers = svg.querySelectorAll('circle.jvm-marker:not([data-click-handler]), circle[data-index]:not([data-click-handler])');
          if (newMarkers.length > 0) {
            console.log(`Found ${newMarkers.length} new markers, attaching handlers`);
            this.attachMarkerClickHandlers();
          }
        }
      });

      this.nodeObserver.observe(svg, {
        childList: true,
        subtree: true
      });
    }, 500);
  }

  /**
   * Attach hover handlers to markers for tooltip display
   * This ensures tooltips work even if jsVectorMap's built-in tooltip doesn't
   */
  private attachMarkerHoverHandlers(): void {
    const container = document.getElementById('war-room-map');
    if (!container) {
      console.warn('Container not found for attaching marker hover handlers');
      return;
    }

    const nodes = this.nodes();
    if (nodes.length === 0) {
      console.warn('No nodes available for marker hover handlers');
      return;
    }

    // Wait a bit for markers to be fully rendered
    setTimeout(() => {
      const svg = container.querySelector('svg');
      if (!svg) {
        console.warn('SVG not found for attaching marker hover handlers');
        return;
      }

      // Find all marker circles in the SVG
      const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index], circle[class*="jvm-marker"]');
      console.log(`Found ${markers.length} markers to attach hover handlers to`);

      markers.forEach((marker: Element, index: number) => {
        if (index < nodes.length && !marker.hasAttribute('data-hover-handler')) {
          const node = nodes[index];
          const logoSource = this.getCompanyLogoSource(node);

          // Mark marker as having a hover handler to prevent duplicates
          marker.setAttribute('data-hover-handler', 'true');

          const handleMouseEnter: EventListener = (event) => {
            if (this.destroyed) return;

            if (this.tooltipTimeoutId) {
              clearTimeout(this.tooltipTimeoutId);
              this.tooltipTimeoutId = null;
            }

            const mouseEvent = event as MouseEvent;
            this.showCompanyTooltipAtElement(node, mouseEvent.currentTarget as Element, logoSource);
          };

          const handleMouseLeave: EventListener = () => {
            if (this.destroyed) return;

            if (this.tooltipTimeoutId) {
              clearTimeout(this.tooltipTimeoutId);
              this.tooltipTimeoutId = null;
            }

            this.clearCompanyTooltip();
          };

          const handleMouseMove: EventListener = (event) => {
            if (this.destroyed || !this.hoveredCompanyTooltip()) return;
            const mouseEvent = event as MouseEvent;
            this.showCompanyTooltipAtElement(node, mouseEvent.currentTarget as Element, logoSource);
          };

          marker.addEventListener('mouseenter', handleMouseEnter, true);
          marker.addEventListener('mouseleave', handleMouseLeave, true);
          marker.addEventListener('mousemove', handleMouseMove, true);

          console.log(`Attached hover handler to marker ${index} for node:`, node.company);
        }
      });
    }, 600);
  }

  /**
   * Get node position in pixels for absolute positioning on the map
   */
  getNodePosition(node: WarRoomNode): { top: number; left: number } {
    const position = this.labelPositions.get(node.id);
    if (position) {
      return { top: position.y, left: position.x };
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
   *                ðŸ”§ ZOOM LEVEL ADJUSTMENT: Change default value (5) here to adjust default zoom
   *                
   *                ðŸ“Š ZOOM SCALE GUIDE - Try these values:
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
   *                ðŸ’¡ RECOMMENDED VALUES:
   *                - For activity log clicks: 10-12 (good balance)
   *                - For marker clicks: 10-12 (shows marker clearly)
   *                - For smooth experience: 8-10 (less jarring)
   *                - For maximum detail: 12-14 (very close)
   */
  zoomToLocation(latitude: number, longitude: number, scale: number = 5): void {
    console.log(`zoomToLocation called: lat=${latitude}, lng=${longitude}, scale=${scale}`);

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
        console.log('Using setFocus method');
        this.mapInstance.setFocus({
          animate: true,
          lat: latitude,
          lng: longitude,
          scale: scale,
        });
        console.log(`âœ“ Zoomed to location: ${latitude}, ${longitude} at scale ${scale}`);
        setTimeout(() => this.updateLabelPositions(), 500);
        return;
      }

      // Method 2: Try focusOn
      if (typeof this.mapInstance.focusOn === 'function') {
        console.log('Using focusOn method');
        this.mapInstance.focusOn({
          animate: true,
          latLng: [latitude, longitude],
          scale: scale,
        });
        console.log(`âœ“ Zoomed to location using focusOn: ${latitude}, ${longitude} at scale ${scale}`);
        setTimeout(() => this.updateLabelPositions(), 500);
        return;
      }

      // Method 3: Try setCenter + setZoom
      if (typeof this.mapInstance.setCenter === 'function') {
        console.log('Using setCenter + setZoom method');
        this.mapInstance.setCenter(latitude, longitude);
        if (typeof this.mapInstance.setZoom === 'function') {
          this.mapInstance.setZoom(scale);
        }
        console.log(`âœ“ Zoomed to location using setCenter: ${latitude}, ${longitude}`);
        setTimeout(() => this.updateLabelPositions(), 500);
        return;
      }

      // Method 4: Try internal map object and transform methods
      const mapInternal = (this.mapInstance as any).map;
      if (mapInternal) {
        if (typeof mapInternal.setFocus === 'function') {
          console.log('Using internal map.setFocus');
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
          console.log('Using internal map.focusOn');
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
          console.log('Using internal map.setScale and setFocus');
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
          console.log('Current map transform:', currentTransform);
          // If we can manipulate transform, we can pan and scale
        }
      }

      // Method 5: Direct viewBox manipulation as fallback - find marker and center on it
      console.warn('No standard zoom method available, trying viewBox manipulation with marker position');
      // Reuse container variable from Method 4.5 above
      if (container) {
        const svg = container.querySelector('svg');
        if (svg) {
          // Get current viewBox
          const currentViewBox = svg.viewBox.baseVal;
          const currentWidth = currentViewBox.width || 950;
          const currentHeight = currentViewBox.height || 550;

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
              // ðŸ”§ ZOOM LEVEL ADJUSTMENT: The zoom factor is calculated as 2^(scale-1)
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
              console.log(`âœ“ Zoomed using viewBox manipulation to marker at (${markerX}, ${markerY}): ${latitude}, ${longitude}`);
              setTimeout(() => {
                this.updateLabelPositions();
                svg.style.transition = ''; // Remove transition after animation
              }, 500);
              return;
            }
          }

          // Fallback: Use Mercator projection calculation
          console.log('Marker not found, using Mercator projection calculation');
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
          console.log(`âœ“ Zoomed using Mercator projection: ${latitude}, ${longitude}`);
          setTimeout(() => {
            this.updateLabelPositions();
            svg.style.transition = '';
          }, 500);
          return;
        }
      }

      console.error('No zoom method found on map instance and viewBox fallback failed');
    } catch (error) {
      console.error('Error zooming to location:', error);
      // Try alternative approach with direct coordinate manipulation
      try {
        const container = document.getElementById('war-room-map');
        if (container) {
          const svg = container.querySelector('svg');
          if (svg && svg.viewBox) {
            // This is a fallback - might not work perfectly but worth trying
            console.warn('Attempting fallback zoom method');
          }
        }
      } catch (fallbackError) {
        console.error('Fallback zoom method also failed:', fallbackError);
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
      console.warn(`Node with ID ${nodeId} not found`);
    }
  }

  /**
   * Zoom to a specific entity's location
   * @param entityId - The entity ID to zoom to
   * @param zoomScale - Optional zoom scale (default: 12 for more prominent zoom to show marker clearly)
   *                    ZOOM LEVEL ADJUSTMENT: Change default value here to adjust default zoom
   *                    Higher number = more zoom (e.g., 10 = medium, 12 = high, 15 = very high)
   */
  zoomToEntity(entityId: string, zoomScale: number = 12): void {
    // Mark that we're programmatically zooming (not user manual zoom)
    // This allows the zoom to happen without interference
    const nodes = this.nodes();

    if (nodes.length === 0) {
      this.pendingZoomCompanyId = entityId;
      return;
    }

    if (!this.mapInstance) {
      this.pendingZoomCompanyId = entityId;
      return;
    }

    const node =
      nodes.find((n) => n.companyId === entityId) ||
      nodes.find((n) => n.subsidiaryId === entityId) ||
      nodes.find((n) => n.parentGroupId === entityId);
    if (node) {
      this.zoomToLocation(node.coordinates.latitude, node.coordinates.longitude, zoomScale);
      setTimeout(() => this.highlightMarker(node.id), 600);
    } else {
      this.pendingZoomCompanyId = entityId;
    }
  }

  /**
   * Highlight a marker by node ID
   * @param nodeId - The node ID to highlight
   */
  private highlightMarker(nodeId: string): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Find the marker for this node
    const nodes = this.nodes();
    const nodeIndex = nodes.findIndex((n) => n.id === nodeId);
    if (nodeIndex === -1) {
      console.warn(`Node ${nodeId} not found for highlighting`);
      return;
    }

    const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index]');
    const marker = markers[nodeIndex] as SVGCircleElement;

    if (marker) {
      // Store original radius
      const originalRadius = marker.getAttribute('r') || '8';

      // Add a pulsing animation or highlight effect
      marker.style.transition = 'all 0.3s ease';
      marker.setAttribute('r', '14'); // Make it larger temporarily
      marker.setAttribute('stroke-width', '4'); // Thicker stroke
      marker.setAttribute('stroke', '#02270B'); // Dark green stroke to match selected border

      // Reset after animation
      setTimeout(() => {
        marker.setAttribute('r', originalRadius);
        marker.setAttribute('stroke-width', '2');
        marker.setAttribute('stroke', '#ffffff');
      }, 1500);

      console.log(`Highlighted marker for node: ${nodeId}`);
    } else {
      console.warn(`Marker not found for node index ${nodeIndex}`);
    }
  }

  /**
   * Apply selected styles to markers, logos, and labels based on selectedEntity.
   */
  private updateSelectedMarkerStyles(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const nodes = this.nodes();
    const selected = this.selectedEntity();
    const selectedId = selected?.id || null;

    // Set data attribute for "muted" styling of unselected elements
    const mapContainer = document.querySelector('.war-room-map-container') as HTMLElement;
    if (mapContainer) {
      if (selectedId) {
        mapContainer.setAttribute('data-has-selection', 'true');
      } else {
        mapContainer.removeAttribute('data-has-selection');
      }
    }

    const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index], circle[class*="jvm-marker"]');
    const markersGroup = svg.querySelector('#jvm-markers-group') || svg;

    nodes.forEach((node, index) => {
      let marker = svg.querySelector(`circle[data-index="${index}"]`) as SVGCircleElement | null;
      if (!marker && index < markers.length) {
        marker = markers[index] as SVGCircleElement;
      }

      if (!marker) return;

      const nodeLevel = node.level ?? 'factory';
      const isSelected = !!selectedId && node.companyId === selectedId && selected?.level === nodeLevel;

      if (isSelected) {
        marker.classList.add('selected-marker');
      } else {
        marker.classList.remove('selected-marker');
      }

      const logoImage = markersGroup.querySelector(`image[id="company-logo-image-${index}"]`) as SVGImageElement | null;
      if (logoImage) {
        if (isSelected) {
          logoImage.setAttribute('data-selected', 'true');
        } else {
          logoImage.removeAttribute('data-selected');
        }
      }

      const label = markersGroup.querySelector(`text[data-marker-index="${index}"]`) as SVGTextElement | null;
      if (label) {
        if (isSelected) {
          label.setAttribute('data-selected', 'true');
        } else {
          label.removeAttribute('data-selected');
        }
      }
    });
  }

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
        console.warn('Map container not found for fullscreen');
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

    try {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
          // If native fullscreen fails, we still have the class set for CSS fallback
        });
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    } catch (e) {
      console.error('Fullscreen request exception:', e);
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

    if (document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement) {
      try {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(e => console.warn('Exit fullscreen error:', e));
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        }
      } catch (e) {
        console.warn('Exit fullscreen exception:', e);
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
          this.updateCompanyLogosAndLabelsPositions();
          this.refreshTooltipPosition();
        }, 300);
        return;
      } catch (e) {
        console.warn('jsVectorMap zoomIn failed, using manual zoom:', e);
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
          this.updateCompanyLogosAndLabelsPositions();
          this.refreshTooltipPosition();
        }, 300);
        return;
      } catch (e) {
        console.warn('jsVectorMap zoomOut failed, using manual zoom:', e);
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
    const baseViewBox = container ? this.getResponsiveWorldViewBox(container) : '0 0 950 550';
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
      // Reset to full world view
      this.userHasZoomed = false;
      this.resetMapToFullWorldView();
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
    }

    // Mark labels as dirty to trigger RAF update
    this.markLabelsDirty();
    this.refreshTooltipPosition();
  }

  /**
   * Fallback: trigger wheel zoom on the map container when zoomIn/zoomOut API is not available.
   */
  private zoomByWheel(direction: -1 | 1): void {
    const el = document.getElementById('war-room-map');
    if (!el) return;

    // Mark that user is manually zooming
    this.userHasZoomed = true;

    const delta = 120 * direction; // negative = zoom in, positive = zoom out
    el.dispatchEvent(new WheelEvent('wheel', { deltaY: delta, bubbles: true }));
    setTimeout(() => this.updateLabelPositions(), 300);
  }

  /**
   * Reposition zoom buttons to avoid overlap with SHOW METRICS button
   * This method directly sets inline styles to override library defaults
   */
  private repositionZoomButtons(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    // Find the zoom container element
    const zoomContainer = container.querySelector('.jvm-zoom-container') as HTMLElement;
    if (zoomContainer) {
      // Set position directly via inline styles to override library defaults
      // Top-right, grouped with fullscreen (top: 6px, right: 0.5rem)
      zoomContainer.style.position = 'absolute';
      zoomContainer.style.top = '6px';
      zoomContainer.style.bottom = 'auto';
      zoomContainer.style.right = '0.5rem';
      zoomContainer.style.left = 'auto';
      zoomContainer.style.display = 'flex';
      zoomContainer.style.flexDirection = 'column';
      zoomContainer.style.gap = '0.25rem';
      zoomContainer.style.zIndex = '40';
      console.log('Zoom buttons repositioned to top-right');
    } else {
      // Retry if element not found yet
      setTimeout(() => this.repositionZoomButtons(), 500);
    }
  }

  /**
   * Update positions of company logos and labels when viewport changes
   * Makes everything responsive to zoom
   */
  /**
   * Update positions of company logos and labels when viewport changes
   * Makes everything responsive to zoom
   */
  private updateCompanyLogosAndLabelsPositions(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const nodes = this.nodes();
    const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index], circle[class*="jvm-marker"]');

    if (markers.length === 0) return;

    // Get current viewBox for zoom calculation
    const viewBox = svg.getAttribute('viewBox');

    // Calculate zoom factor
    let zoomFactor = 1;
    if (viewBox) {
      const parts = viewBox.split(' ').map(parseFloat);
      if (parts.length === 4) {
        const viewBoxWidth = parts[2];
        const viewBoxHeight = parts[3];
        const baseWidth = 950;
        const baseHeight = 550;

        const widthRatio = baseWidth / viewBoxWidth;
        const heightRatio = baseHeight / viewBoxHeight;
        zoomFactor = (widthRatio + heightRatio) / 2;
        zoomFactor = Math.max(0.1, Math.min(10, zoomFactor));
      }
    }

    const markersGroup = svg.querySelector('#jvm-markers-group') || svg;
    const logosGroup = markersGroup.querySelector('#jvm-logos-group') || markersGroup;
    const labelsGroup = markersGroup.querySelector('#jvm-labels-group') as SVGGElement | null;

    // Toggle labels visibility based on zoom factor
    // Text labels should be hidden by default and only show when zoomed in significantly
    const LABEL_ZOOM_THRESHOLD = 2.5;
    if (labelsGroup) {
      const isVisible = zoomFactor >= LABEL_ZOOM_THRESHOLD;
      labelsGroup.style.opacity = isVisible ? '1' : '0';
      labelsGroup.style.visibility = isVisible ? 'visible' : 'hidden';
      labelsGroup.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }

    nodes.forEach((node, index) => {
      // Find the marker for this node
      let marker: Element | null = svg.querySelector(`circle[data-index="${index}"]`);
      if (!marker && index < markers.length) {
        marker = markers[index];
      }

      if (!marker) return;

      // Get marker attributes
      const markerEl = marker as Element;
      const cx = parseFloat(markerEl.getAttribute('cx') || '0');
      const cy = parseFloat(markerEl.getAttribute('cy') || '0');
      const r = parseFloat(markerEl.getAttribute('r') || '8');

      // Update logo image position
      const logoImageId = `company-logo-image-${index}`;
      const logoImage = logosGroup.querySelector(`image[id="${logoImageId}"]`);

      if (logoImage) {
        const imageSize = this.getLogoImageSize(r, zoomFactor, this.getLogoSizeMultiplier(node));

        logoImage.setAttribute('x', (cx - imageSize / 2).toString());
        logoImage.setAttribute('y', (cy - imageSize / 2).toString());
        logoImage.setAttribute('width', imageSize.toString());
        logoImage.setAttribute('height', imageSize.toString());
      }

      // Update badge container position if it exists
      const badge = labelsGroup?.querySelector(`g.company-badge[data-marker-index="${index}"]`) as SVGGElement | null;
      if (badge) {
        const node = nodes[index];
        const displayName = node ? this.getCompanyDisplayName(node) : '';
        const badgeWidth = parseFloat(badge.getAttribute('data-badge-width') || '120');
        const badgeHeight = parseFloat(badge.getAttribute('data-badge-height') || '24');
        const extraYOffset = 0;
        const badgeX = cx - badgeWidth / 2;
        const badgeY = cy + r + 8 + extraYOffset;
        badge.setAttribute('transform', `translate(${badgeX}, ${badgeY})`);
        const rect = badge.querySelector('rect.company-badge-bg') as SVGRectElement | null;
        if (rect) {
          rect.setAttribute('width', badgeWidth.toString());
          rect.setAttribute('height', badgeHeight.toString());
        }
      }
    });
  }

  /**
   * Add company logos and labels to markers for specific companies
   * Uses SVG pattern to integrate logo with circle marker
   */
  private addCompanyLogosAndLabels(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const nodes = this.nodes();
    const markersGroup = svg.querySelector('#jvm-markers-group') as SVGGElement;
    if (!markersGroup) return;

    // Keep labels below logos to prevent text covering images
    let labelsGroup = markersGroup.querySelector('#jvm-labels-group') as SVGGElement | null;
    if (!labelsGroup) {
      labelsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      labelsGroup.setAttribute('id', 'jvm-labels-group');
      // Initialize hidden for zoom-dependent visibility
      labelsGroup.style.opacity = '0';
      labelsGroup.style.visibility = 'hidden';
      labelsGroup.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
      markersGroup.appendChild(labelsGroup);
    }

    let logosGroup = markersGroup.querySelector('#jvm-logos-group') as SVGGElement | null;
    if (!logosGroup) {
      logosGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      logosGroup.setAttribute('id', 'jvm-logos-group');
      markersGroup.appendChild(logosGroup);
    } else {
      // Ensure logos render above labels
      markersGroup.appendChild(logosGroup);
    }

    // Get or create defs section for patterns
    let defs = svg.querySelector('defs') as SVGDefsElement;
    if (!defs) {
      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      svg.insertBefore(defs, svg.firstChild);
    }

    // Find nodes with logos
    nodes.forEach((node, index) => {
      const logoSource = this.getCompanyLogoSource(node);

      if (logoSource) {
        // Find the corresponding marker circle
        const markers = svg.querySelectorAll('circle.jvm-marker, circle[data-index]');
        let marker = svg.querySelector(`circle[data-index="${index}"]`) as SVGCircleElement | null;
        if (!marker && index < markers.length) {
          marker = markers[index] as SVGCircleElement;
        }

        if (marker) {
          const cx = parseFloat(marker.getAttribute('cx') || '0');
          const cy = parseFloat(marker.getAttribute('cy') || '0');
          const r = parseFloat(marker.getAttribute('r') || '8');

          // Use image overlay instead of pattern - more reliable
          const logoImageId = `company-logo-image-${index}`;
          let logoImage = logosGroup.querySelector(`image[id="${logoImageId}"]`) as SVGImageElement;
          if (!logoImage) {
            logoImage = markersGroup.querySelector(`image[id="${logoImageId}"]`) as SVGImageElement;
          }

          if (!logoImage) {
            // Create image element directly in markers group (overlay on circle)
            logoImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            logoImage.setAttribute('id', logoImageId);
            logoImage.setAttribute('data-marker-index', index.toString());
            logoImage.setAttribute('class', 'company-logo-image');

            // Calculate responsive image size based on current zoom
            // Get zoom factor from viewBox if available - use same simplified calculation
            const viewBox = svg.getAttribute('viewBox');
            let zoomFactor = 1;
            if (viewBox) {
              const [vbX, vbY, vbWidth, vbHeight] = viewBox.split(' ').map(Number);
              const baseWidth = 950; // Base map width
              const baseHeight = 550; // Base map height

              // Simplified zoom factor calculation (same as updateCompanyLogosAndLabelsPositions)
              const widthRatio = baseWidth / vbWidth;
              const heightRatio = baseHeight / vbHeight;
              zoomFactor = (widthRatio + heightRatio) / 2;
              zoomFactor = Math.max(0.1, Math.min(10, zoomFactor));
            }

            const imageSize = this.getLogoImageSize(r, zoomFactor, this.getLogoSizeMultiplier(node));

            logoImage.setAttribute('x', (cx - imageSize / 2).toString());
            logoImage.setAttribute('y', (cy - imageSize / 2).toString());
            logoImage.setAttribute('width', imageSize.toString());
            logoImage.setAttribute('height', imageSize.toString());
            logoImage.setAttribute('preserveAspectRatio', 'xMidYMid meet');

            // Try different path formats
            const imagePaths = this.getLogoImagePaths(logoSource);

            // Set initial path - prefer relative path for better compatibility
            const primaryPath = imagePaths[0]; // Use resolved primary path
            logoImage.setAttribute('href', primaryPath);
            // Also try xlink:href for older SVG compatibility
            logoImage.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', primaryPath);
            console.log(`[${node.company}] Setting logo image with path:`, primaryPath);
            console.log(`[${node.company}] All fallback paths:`, imagePaths);

            // Add error handler to try fallback paths
            let currentPathIndex = 0; // Start with the primary path index
            let triedDefaultFallback = false;
            const errorHandler = () => {
              const currentHref = logoImage.getAttribute('href') || '';
              console.warn(`[${node.company}] Logo failed to load from: ${currentHref}`);

              if (imagePaths.length <= 1) {
                if (!triedDefaultFallback) {
                  triedDefaultFallback = true;
                  const fallbackPath = '/assets/images/default-logo.png';
                  console.warn(`[${node.company}] Falling back to default logo: ${fallbackPath}`);
                  logoImage.setAttribute('href', fallbackPath);
                  logoImage.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', fallbackPath);
                  return;
                }
                console.error(`[${node.company}] Default logo fallback also failed.`);
                return;
              }

              if (currentPathIndex < imagePaths.length - 1) {
                currentPathIndex++;
                const nextPath = imagePaths[currentPathIndex];
                console.log(`[${node.company}] Trying fallback path ${currentPathIndex + 1}/${imagePaths.length}: ${nextPath}`);
                logoImage.setAttribute('href', nextPath);
                logoImage.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', nextPath);
              } else {
                console.error(`[${node.company}] Logo failed to load from all ${imagePaths.length} paths:`, imagePaths);
                console.error(`[${node.company}] Please verify the logo source is valid:`, logoSource);
                console.error(`[${node.company}] Check browser Network tab for 404 errors`);
                console.error(`[${node.company}] Current window location:`, window.location.href);
              }
            };

            logoImage.addEventListener('error', errorHandler);

            // Add load handler to confirm success
            logoImage.addEventListener('load', () => {
              console.log(`âœ“ [${node.company}] Logo loaded successfully from:`, logoImage.getAttribute('href'));
            }, { once: true });

            // Insert image into the logos group so it appears above labels
            logosGroup.appendChild(logoImage);
          } else {
            // Update existing image position - make it responsive to zoom
            const viewBox = svg.getAttribute('viewBox');
            let zoomFactor = 1;
            if (viewBox) {
              const [vbX, vbY, vbWidth, vbHeight] = viewBox.split(' ').map(Number);
              const svgRect = svg.getBoundingClientRect();
              const baseWidth = 950;
              const baseHeight = 550;
              zoomFactor = Math.max(baseWidth / vbWidth, baseHeight / vbHeight);
            }

            const imageSize = this.getLogoImageSize(r, zoomFactor, this.getLogoSizeMultiplier(node));

            logoImage.setAttribute('x', (cx - imageSize / 2).toString());
            logoImage.setAttribute('y', (cy - imageSize / 2).toString());
            logoImage.setAttribute('width', imageSize.toString());
            logoImage.setAttribute('height', imageSize.toString());

            if (logoImage.parentNode !== logosGroup) {
              logosGroup.appendChild(logoImage);
            }
          }

          // Ensure hover handlers are attached (for both new and existing logos)
          if (logoImage && !logoImage.hasAttribute('data-hover-attached')) {
            this.attachLogoHoverHandlers(logoImage, node, logoSource, index);
            logoImage.setAttribute('data-hover-attached', 'true');
          }

          // Keep circle visible with stroke (logo will overlay it)
          marker.setAttribute('fill', '#00FF41'); // Keep original fill as fallback
          marker.setAttribute('fill-opacity', '0.3'); // Semi-transparent so logo shows through
          marker.setAttribute('stroke', '#ffffff');
          marker.setAttribute('stroke-width', '2');
          marker.setAttribute('stroke-opacity', '0.8');

          // Custom display names for specific companies
          let displayName = node.company.toUpperCase();
          if (node.company?.toLowerCase().includes('nova')) {
            displayName = 'NOVA BUS';
          }
          if (node.company?.toLowerCase().includes('karzan') || node.company?.toLowerCase().includes('karsan')) {
            displayName = 'KARSAN';
          }
          if (node.company?.toLowerCase().includes('arboc') || node.company?.toLowerCase().includes('arbroc')) {
            displayName = 'ARBOC';
          }
          // Badge container (logo + text) below marker
          let badge = labelsGroup.querySelector(`g.company-badge[data-marker-index="${index}"]`) as SVGGElement | null;
          const badgeHeight = 24;
          const badgeWidth = Math.min(170, Math.max(90, displayName.length * 7 + 34));
          const extraYOffset = displayName.toUpperCase() === 'NOVA BUS' ? -12 : 0;
          const badgeX = cx - badgeWidth / 2;
          const badgeY = cy + r + 8 + extraYOffset;
          if (!badge) {
            badge = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            badge.setAttribute('class', 'company-badge');
            badge.setAttribute('data-marker-index', index.toString());
            badge.setAttribute('data-company-name', displayName);
            badge.style.pointerEvents = 'all';
            labelsGroup.appendChild(badge);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('class', 'company-badge-bg');
            rect.setAttribute('rx', '4');
            rect.setAttribute('ry', '4');
            badge.appendChild(rect);

            const badgeLogo = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            badgeLogo.setAttribute('class', 'company-badge-logo');
            const badgePaths = this.getLogoImagePaths(logoSource);
            const badgePrimaryPath = badgePaths[0];
            badgeLogo.setAttribute('href', badgePrimaryPath);
            badgeLogo.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', badgePrimaryPath);
            badgeLogo.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            // Fallback if SVG image fails to load
            let badgePathIndex = 0;
            badgeLogo.addEventListener('error', () => {
              if (badgePathIndex < badgePaths.length - 1) {
                badgePathIndex += 1;
                const nextPath = badgePaths[badgePathIndex];
                badgeLogo.setAttribute('href', nextPath);
                badgeLogo.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', nextPath);
              } else {
                const fallbackPath = '/assets/images/default-logo.png';
                badgeLogo.setAttribute('href', fallbackPath);
                badgeLogo.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', fallbackPath);
              }
            });
            badge.appendChild(badgeLogo);

            const badgeText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            badgeText.setAttribute('class', 'company-badge-text');
            badge.appendChild(badgeText);
          }

          badge.setAttribute('transform', `translate(${badgeX}, ${badgeY})`);
          badge.setAttribute('data-badge-width', badgeWidth.toString());
          badge.setAttribute('data-badge-height', badgeHeight.toString());

          const rect = badge.querySelector('rect.company-badge-bg') as SVGRectElement | null;
          if (rect) {
            rect.setAttribute('width', badgeWidth.toString());
            rect.setAttribute('height', badgeHeight.toString());
          }

          const badgeLogo = badge.querySelector('image.company-badge-logo') as SVGImageElement | null;
          if (badgeLogo) {
            badgeLogo.setAttribute('x', '6');
            badgeLogo.setAttribute('y', '4');
            badgeLogo.setAttribute('width', '16');
            badgeLogo.setAttribute('height', '16');
            const badgePaths = this.getLogoImagePaths(logoSource);
            const badgePrimaryPath = badgePaths[0];
            badgeLogo.setAttribute('href', badgePrimaryPath);
            badgeLogo.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', badgePrimaryPath);
          }

          const badgeText = badge.querySelector('text.company-badge-text') as SVGTextElement | null;
          if (badgeText) {
            badgeText.setAttribute('x', '28');
            badgeText.setAttribute('y', '12');
            badgeText.setAttribute('dominant-baseline', 'middle');
            badgeText.setAttribute('text-anchor', 'start');
            badgeText.textContent = displayName;
          }

          if (!badge.hasAttribute('data-hover-handler')) {
            badge.setAttribute('data-hover-handler', 'true');
            const handleMouseEnter: EventListener = (event) => {
              if (this.destroyed) return;
              if (this.tooltipTimeoutId) {
                clearTimeout(this.tooltipTimeoutId);
                this.tooltipTimeoutId = null;
              }
              this.showCompanyTooltipAtElement(node, event.currentTarget as Element, logoSource);
            };
            const handleMouseLeave: EventListener = () => {
              if (this.destroyed) return;
              if (this.tooltipTimeoutId) {
                clearTimeout(this.tooltipTimeoutId);
                this.tooltipTimeoutId = null;
              }
              this.clearCompanyTooltip();
            };
            const handleMouseMove: EventListener = (event) => {
              if (this.destroyed || !this.hoveredCompanyTooltip()) return;
              this.showCompanyTooltipAtElement(node, event.currentTarget as Element, logoSource);
            };
            badge.addEventListener('mouseenter', handleMouseEnter, true);
            badge.addEventListener('mouseleave', handleMouseLeave, true);
            badge.addEventListener('mousemove', handleMouseMove, true);
          }

          if (!badge.hasAttribute('data-click-handler')) {
            badge.setAttribute('data-click-handler', 'true');
            badge.addEventListener('click', (event) => {
              event.stopPropagation();
              this.nodeSelected.emit(node);
            });
          }
        }
      }
    });

    this.updateSelectedMarkerStyles();
  }

  /**
   * Attach hover event handlers to company logo images for tooltip display
   */
  private attachLogoHoverHandlers(
    logoImage: SVGImageElement,
    node: WarRoomNode,
    logoSource: string,
    markerIndex: number
  ): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Mouse enter handler
    const handleMouseEnter: EventListener = (event) => {
      if (this.destroyed) return;

      if (this.tooltipTimeoutId) {
        clearTimeout(this.tooltipTimeoutId);
        this.tooltipTimeoutId = null;
      }

      const mouseEvent = event as MouseEvent;
      this.showCompanyTooltipAtElement(node, mouseEvent.currentTarget as Element, logoSource);
    };

    // Mouse leave handler
    const handleMouseLeave: EventListener = () => {
      if (this.destroyed) return;

      // Clear timeout if tooltip hasn't shown yet
      if (this.tooltipTimeoutId) {
        clearTimeout(this.tooltipTimeoutId);
        this.tooltipTimeoutId = null;
      }

      // Hide tooltip immediately
      this.clearCompanyTooltip();
    };

    // Mouse move handler to update position
    const handleMouseMove: EventListener = (event) => {
      if (this.destroyed || !this.hoveredCompanyTooltip()) return;
      const mouseEvent = event as MouseEvent;
      this.showCompanyTooltipAtElement(node, mouseEvent.currentTarget as Element, logoSource);
    };

    // Attach event listeners
    logoImage.addEventListener('mouseenter', handleMouseEnter);
    logoImage.addEventListener('mouseleave', handleMouseLeave);
    logoImage.addEventListener('mousemove', handleMouseMove);

    if (!logoImage.hasAttribute('data-logo-click-handler')) {
      logoImage.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        this.clearCompanyTooltip();
        this.nodeSelected.emit(node);
        this.hideMarkerPopup();
      }, true);
      logoImage.setAttribute('data-logo-click-handler', 'true');
    }
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
        if (!this.destroyed && this.mapInstance && this.mapInstance.updateSize) {
          this.mapInstance.updateSize();
        }
        if (!this.destroyed) {
          this.updateLabelPositions();
          this.refreshTooltipPosition();
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
        pathElement.setAttribute('fill-opacity', colors.regionFillOpacity.toString());
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
    // Full world map viewBox: "0 0 950 550" shows entire world
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

    // Keep viewBox/transform in sync while user hasn't manually zoomed.
    this.syncMapViewport(this.isInitializing);

    console.log('SVG made responsive:', {
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

  private getResponsiveWorldViewBox(container: HTMLElement): string {
    const baseWidth = 950;
    const baseHeight = 550;
    const rect = container.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return `0 0 ${baseWidth} ${baseHeight}`;
    }

    const containerAspect = rect.width / rect.height;
    const mapAspect = baseWidth / baseHeight;
    let viewWidth = baseWidth;
    let viewHeight = baseHeight;

    if (containerAspect > mapAspect) {
      viewWidth = baseHeight * containerAspect;
    } else if (containerAspect < mapAspect) {
      viewHeight = baseWidth / containerAspect;
    }

    const viewX = (baseWidth - viewWidth) / 2;
    const viewY = (baseHeight - viewHeight) / 2;
    return `${viewX} ${viewY} ${viewWidth} ${viewHeight}`;
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

      // Debounce resize handler
      if (this.updateMarkersTimeoutId) {
        clearTimeout(this.updateMarkersTimeoutId);
      }

      this.updateMarkersTimeoutId = setTimeout(() => {
        if (!this.destroyed) {
          this.ensureSvgResponsive();
          if (!this.userHasZoomed) {
            this.resetMapToFullWorldView();
          }
          // Mark labels as dirty to trigger RAF update after resize
          this.markLabelsDirty();
          this.refreshTooltipPosition();
        }
        this.updateMarkersTimeoutId = null;
      }, 150);
    };

    window.addEventListener('resize', this.boundResizeHandler);
  }

  /**
   * Reset map to full world view (zoom out to show entire map)
   * Only resets if user hasn't manually zoomed
   */
  private resetToFullWorldView(): void {
    // Don't reset if user has manually zoomed
    if (this.userHasZoomed) {
      console.log('Skipping resetToFullWorldView - user has manually zoomed');
      return;
    }

    const container = document.getElementById('war-room-map');
    if (!container) {
      console.warn('resetToFullWorldView: Container not found');
      return;
    }

    const svg = container.querySelector('svg');
    if (!svg) {
      console.warn('resetToFullWorldView: SVG not found');
      return;
    }

    // Set viewBox to full world map dimensions (responsive to container)
    // This ensures the entire world map is visible
    const fullWorldViewBox = this.getResponsiveWorldViewBox(container);
    const currentViewBox = svg.getAttribute('viewBox');

    console.log('resetToFullWorldView: Current viewBox:', currentViewBox, 'Target:', fullWorldViewBox);

    // Force reset to full world view (only on initial load)
    console.log('Forcing reset to full world view');
    this.resetMapToFullWorldView();

    // Force viewBox multiple times to ensure it sticks (map library might override it)
    // Only if user hasn't manually zoomed
    const forceViewBox = () => {
      if (this.destroyed || this.userHasZoomed) return;
      if (svg && svg.parentNode) {
        const checkViewBox = svg.getAttribute('viewBox');
        if (checkViewBox !== fullWorldViewBox) {
          console.log('ViewBox was changed to:', checkViewBox, '- forcing back to full world view');
          this.resetMapToFullWorldView();
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
    this.viewBoxObserver = new MutationObserver((mutations) => {
      if (this.destroyed) return;

      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'viewBox') {
          const target = mutation.target as SVGElement;
          if (target.tagName === 'svg') {
            const currentViewBox = target.getAttribute('viewBox');
            if (currentViewBox) {
              // Update our reactive viewBox signal to keep overlays in sync
              this.mapViewBox.set(currentViewBox);

              const [vbX, vbY, vbWidth, vbHeight] = currentViewBox.split(' ').map(Number);
              // Log viewBox changes for debugging
              if (currentViewBox !== fullWorldViewBox) {
                console.log('ViewBox changed:', currentViewBox, 'Zoom level:', (950 / vbWidth).toFixed(2) + 'x');
              }
            }
          }
        }
      });
    });

    this.viewBoxObserver.observe(svg, {
      attributes: true,
      attributeFilter: ['viewBox']
    });

    console.log('ViewBox observer set up for monitoring');
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
        // Reset to full world view
        this.userHasZoomed = false;
        this.resetMapToFullWorldView();
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
        this.updateCompanyLogosAndLabelsPositions();
        this.refreshTooltipPosition();
      }, 50);
    };

    // Add wheel event listener with passive: false to allow preventDefault
    container.addEventListener('wheel', this.boundWheelHandler, { passive: false });
    console.log('Wheel zoom handler set up');
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
        target.closest('.map-control-btn')
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
    console.log('Pan sync handlers set up');
  }

  /**
   * Setup map drag/pan handler for manual panning
   */
  private setupMapDragHandler(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    // Create bound handlers
    this.boundDragMouseMoveHandler = (e: MouseEvent) => {
      if (!this.isDragging) return;

      e.preventDefault();
      e.stopPropagation();

      const currentViewBox = svg.getAttribute('viewBox');
      if (!currentViewBox) return;

      const [x, y, width, height] = currentViewBox.split(' ').map(Number);
      const fullWorldWidth = 950;
      const fullWorldHeight = 550;

      // Calculate mouse delta
      const deltaX = (this.dragStartX - e.clientX) * (width / svg.clientWidth);
      const deltaY = (this.dragStartY - e.clientY) * (height / svg.clientHeight);

      // Calculate new viewBox position
      let newX = this.dragStartViewBoxX + deltaX;
      let newY = this.dragStartViewBoxY + deltaY;

      // Clamp to map bounds
      newX = Math.max(0, Math.min(fullWorldWidth - width, newX));
      newY = Math.max(0, Math.min(fullWorldHeight - height, newY));

      // Update viewBox
      svg.setAttribute('viewBox', `${newX} ${newY} ${width} ${height}`);

      // Mark labels as dirty to trigger RAF update
      this.markLabelsDirty();
    };

    this.boundDragMouseUpHandler = (e: MouseEvent) => {
      if (!this.isDragging) return;

      this.isDragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';

      // Mark labels as dirty for final update
      this.markLabelsDirty();

      if (this.boundDragMouseMoveHandler) {
        document.removeEventListener('mousemove', this.boundDragMouseMoveHandler);
      }
      if (this.boundDragMouseUpHandler) {
        document.removeEventListener('mouseup', this.boundDragMouseUpHandler);
      }
    };

    // Add mousedown handler to SVG
    svg.addEventListener('mousedown', (e: MouseEvent) => {
      // Don't start drag if clicking on a marker, popup, or control button
      const target = e.target as HTMLElement;
      if (
        target.closest('circle.jvm-marker') ||
        target.closest('.marker-popup') ||
        target.closest('.map-control-btn') ||
        target.closest('image.company-logo-image') ||
        target.closest('text.company-label')
      ) {
        return;
      }

      // Don't start drag if right-click
      if (e.button !== 0) return;

      e.preventDefault();
      e.stopPropagation();

      const currentViewBox = svg.getAttribute('viewBox');
      if (!currentViewBox) return;

      const [x, y] = currentViewBox.split(' ').map(Number);

      this.isDragging = true;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.dragStartViewBoxX = x;
      this.dragStartViewBoxY = y;
      this.userHasZoomed = true;

      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';

      // Add global mouse move and up handlers
      document.addEventListener('mousemove', this.boundDragMouseMoveHandler!);
      document.addEventListener('mouseup', this.boundDragMouseUpHandler!);
    });

    console.log('Map drag handler set up');
  }
}
