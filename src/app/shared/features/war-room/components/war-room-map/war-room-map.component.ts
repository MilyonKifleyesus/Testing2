import { Component, input, output, AfterViewInit, OnDestroy, inject, effect, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import maplibregl, { Map as MapLibreMap } from 'maplibre-gl';
import { Node as WarRoomNode, FleetSelection, TransitRoute } from '../../../../models/war-room.interface';
import { WarRoomService } from '../../../../services/war-room.service';
import { AppStateService } from '../../../../services/app-state.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { WarRoomMapControlsComponent } from './controls/war-room-map-controls.component';
import { WarRoomMapTooltipComponent, TooltipVm } from './tooltip/war-room-map-tooltip.component';
import { WarRoomMapMathService } from './services/war-room-map-math.service';
import { WarRoomMapAssetsService } from './services/war-room-map-assets.service';
import { WarRoomMapMarkersComponent, MarkerVm } from './markers/war-room-map-markers.component';
import { WarRoomMapRoutesComponent, RouteVm } from './routes/war-room-map-routes.component';

interface RouteFeatureProperties {
  strokeWidth: number;
  dashArray?: string;
  highlighted: boolean;
  routeId: string;
}

interface RouteFeature {
  type: 'Feature';
  geometry: {
    type: 'LineString';
    coordinates: [number, number][];
  };
  properties: RouteFeatureProperties;
}

interface RouteFeatureCollection {
  type: 'FeatureCollection';
  features: RouteFeature[];
}

@Component({
  selector: 'app-war-room-map',
  imports: [
    CommonModule,
    WarRoomMapControlsComponent,
    WarRoomMapTooltipComponent,
    WarRoomMapMarkersComponent,
    WarRoomMapRoutesComponent,
  ],
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

  private mapInstance: MapLibreMap | null = null;
  private mapLoaded = false;
  private resizeObserver: ResizeObserver | null = null;
  private destroyed = false;
  private pendingZoomEntityId: string | null = null;
  private isFullscreen = false;
  private fullscreenHandler: (() => void) | null = null;
  private overlayUpdateRaf: number | null = null;
  private overlayEnsureCoords = false;
  private selectionZoomTimeoutId: any = null;

  private readonly defaultView = {
    center: [0, 0] as [number, number],
    zoom: 1,
    pitch: 45,
    bearing: 0,
  };

  private readonly LOD_LOGO_ONLY_THRESHOLD = 1.2;
  private readonly LOD_FULL_DETAIL_THRESHOLD = 2.5;
  private readonly MARKER_BASE_SCALE = 1.25;

  // Caches
  private geocodeCache = new Map<string, { latitude: number; longitude: number }>();
  private geocodeInFlight = new Map<string, Promise<{ latitude: number; longitude: number }>>();
  private logoFailureCache = new Map<string, Set<string>>();

  // Signals
  readonly fullscreenState = signal<boolean>(false);
  private readonly hoveredNode = signal<WarRoomNode | null>(null);
  private readonly pinnedNodeId = signal<string | null>(null);
  private readonly containerRect = signal<DOMRect | null>(null);
  private readonly markerPixelCoordinates = signal<Map<string, { x: number; y: number }>>(new Map());
  private readonly logoFailureVersion = signal(0);
  readonly mapViewBox = signal<string>('0 0 950 550');
  readonly mapTransform = signal<string>('');
  readonly markersVm = signal<MarkerVm[]>([]);
  readonly routesVm = signal<RouteVm[]>([]);
  readonly routeStroke = computed(() => this.getRouteColor());
  readonly routeFill = computed(() => this.getRouteColor());

  // Services
  private warRoomService = inject(WarRoomService);
  private appStateService = inject(AppStateService);
  private mathService = inject(WarRoomMapMathService);
  private assetsService = inject(WarRoomMapAssetsService);

  currentTheme = signal<'light' | 'dark'>('dark');

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

  constructor() {
    effect(() => {
      const theme = this.appState().theme === 'light' ? 'light' : 'dark';
      this.currentTheme.set(theme);
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

    effect(() => {
      const nodes = this.nodes();
      void nodes;
      if (this.mapInstance && this.mapLoaded && !this.destroyed) {
        this.scheduleOverlayUpdate(true);
      }
    });

    effect(() => {
      const selected = this.selectedEntity();
      const hovered = this.warRoomService.hoveredEntity();
      const routes = this.transitRoutes();
      const status = this.filterStatus();
      void selected;
      void hovered;
      void routes;
      void status;
      if (this.mapInstance && this.mapLoaded && !this.destroyed) {
        this.scheduleOverlayUpdate(false);
      }
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

    effect(() => {
      const panRequest = this.warRoomService.panToEntity();
      if (panRequest && this.mapInstance && this.mapLoaded && !this.destroyed) {
        this.zoomToEntity(panRequest.id, 8);
      }
    });

    effect((onCleanup) => {
      const selected = this.selectedEntity();
      if (selected && this.mapInstance && this.mapLoaded && !this.destroyed) {
        if (this.selectionZoomTimeoutId) {
          clearTimeout(this.selectionZoomTimeoutId);
        }
        this.selectionZoomTimeoutId = setTimeout(() => {
          if (!this.destroyed) {
            this.zoomToEntity(selected.id, 8);
          }
          this.selectionZoomTimeoutId = null;
        }, 200);
      }
      onCleanup(() => {
        if (this.selectionZoomTimeoutId) {
          clearTimeout(this.selectionZoomTimeoutId);
          this.selectionZoomTimeoutId = null;
        }
      });
    });

    effect(() => {
      const selected = this.selectedEntity();
      if (!selected && this.mapInstance && this.mapLoaded && !this.destroyed) {
        this.applyDefaultView();
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.setupResizeObserver();
    this.setupFullscreenListeners();
  }

  ngOnDestroy(): void {
    this.destroyed = true;

    if (this.selectionZoomTimeoutId) {
      clearTimeout(this.selectionZoomTimeoutId);
      this.selectionZoomTimeoutId = null;
    }

    if (this.fullscreenHandler) {
      document.removeEventListener('fullscreenchange', this.fullscreenHandler);
      this.fullscreenHandler = null;
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.overlayUpdateRaf !== null) {
      cancelAnimationFrame(this.overlayUpdateRaf);
      this.overlayUpdateRaf = null;
    }

    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }
  }

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
          }
        } catch {
          // Ignore geocode failures
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

  clearPinned(): void {
    this.pinnedNodeId.set(null);
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

  private scheduleOverlayUpdate(ensureCoords: boolean): void {
    if (ensureCoords) {
      this.overlayEnsureCoords = true;
    }
    if (this.overlayUpdateRaf !== null) return;

    this.overlayUpdateRaf = requestAnimationFrame(() => {
      this.overlayUpdateRaf = null;
      const shouldEnsure = this.overlayEnsureCoords;
      this.overlayEnsureCoords = false;
      void this.syncOverlays(shouldEnsure);
    });
  }

  private initMap(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    this.mapInstance = this.createMap(container);

    this.mapInstance.on('load', () => {
      if (this.destroyed) return;
      this.mapLoaded = true;
      this.updateViewBoxFromContainer();
      this.scheduleOverlayUpdate(true);

      const pending = this.pendingZoomEntityId;
      this.pendingZoomEntityId = null;
      if (pending) {
        this.zoomToEntity(pending, 8);
      }
    });

    this.mapInstance.on('move', () => {
      if (!this.mapLoaded) return;
      this.scheduleOverlayUpdate(false);
    });

    this.mapInstance.on('zoom', () => {
      if (!this.mapLoaded) return;
      this.scheduleOverlayUpdate(false);
    });

    this.mapInstance.on('render', () => {
      if (!this.mapLoaded) return;
      this.scheduleOverlayUpdate(false);
    });
  }

  private createMap(container: HTMLElement): MapLibreMap {
    return new maplibregl.Map({
      container,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: this.defaultView.center,
      zoom: this.defaultView.zoom,
      pitch: this.defaultView.pitch,
      bearing: this.defaultView.bearing,
    });
  }

  private setupResizeObserver(): void {
    const container = document.getElementById('war-room-map');
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => {
      if (this.destroyed || !this.mapInstance) return;
      this.mapInstance.resize();
      this.updateViewBoxFromContainer();
      this.scheduleOverlayUpdate(false);
    });

    this.resizeObserver.observe(container);
  }

  private setupFullscreenListeners(): void {
    const handler = () => {
      const isFull = !!document.fullscreenElement;
      this.isFullscreen = isFull;
      this.fullscreenState.set(isFull);
      if (this.mapInstance) {
        setTimeout(() => this.mapInstance?.resize(), 50);
      }
    };
    this.fullscreenHandler = handler;
    document.addEventListener('fullscreenchange', handler);
  }

  private updateViewBoxFromContainer(): void {
    if (!this.mapInstance) return;
    const container = this.mapInstance.getContainer();
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const widthText = Number.isFinite(width) ? width.toFixed(2) : '1';
    const heightText = Number.isFinite(height) ? height.toFixed(2) : '1';
    this.mapViewBox.set(`0 0 ${widthText} ${heightText}`);
    this.containerRect.set(rect);
    this.updateMapTransform(container, rect);
  }

  private updateMapTransform(container: HTMLElement, containerRect?: DOMRect): void {
    if (!this.mapInstance) return;
    const canvas = this.mapInstance.getCanvas();
    if (!canvas) {
      this.mapTransform.set('');
      return;
    }
    const cRect = containerRect ?? container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const dx = canvasRect.left - cRect.left;
    const dy = canvasRect.top - cRect.top;
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      this.mapTransform.set('');
      return;
    }
    this.mapTransform.set(`translate(${dx.toFixed(2)} ${dy.toFixed(2)})`);
  }

  private async syncOverlays(ensureCoords: boolean): Promise<void> {
    if (!this.mapInstance || !this.mapLoaded || this.destroyed) return;

    this.updateViewBoxFromContainer();

    const allNodes = this.nodes();
    if (ensureCoords) {
      await this.ensureNodeCoordinates(allNodes);
    }

    const nodes = this.getNodesWithValidCoordinates(allNodes);
    const selected = this.selectedEntity();
    const hovered = this.warRoomService.hoveredEntity();
    const zoom = this.mapInstance.getZoom();
    const baseUrl = window.location.origin;

    const markerPixels = new Map<string, { x: number; y: number }>();
    const markers: MarkerVm[] = [];

    nodes.forEach((node) => {
      const point = this.mapInstance!.project([node.coordinates.longitude, node.coordinates.latitude]);
      markerPixels.set(node.id, { x: point.x, y: point.y });
      markers.push(this.buildMarkerVm(node, zoom, selected, hovered, baseUrl, point.x, point.y));
    });

    this.markerPixelCoordinates.set(markerPixels);
    this.markersVm.set(markers);

    const featureCollection = this.buildRouteFeatures(nodes);
    const routes: RouteVm[] = [];

    featureCollection.features.forEach((feature, index) => {
      const coords = feature.geometry.coordinates;
      if (coords.length < 2) return;
      const startPoint = this.mapInstance!.project(coords[0]);
      const endPoint = this.mapInstance!.project(coords[1]);
      const path = this.mathService.createCurvedPath(startPoint, endPoint);
      if (!path) return;
      const routeId = feature.properties.routeId || `route-${index}`;
      routes.push({
        id: routeId,
        path,
        start: { x: startPoint.x, y: startPoint.y },
        end: { x: endPoint.x, y: endPoint.y },
        index,
        beginOffset: this.getRouteBeginOffset(routeId, index),
        highlighted: feature.properties.highlighted,
        strokeWidth: feature.properties.strokeWidth || 1.5,
        dashArray: feature.properties.dashArray,
      });
    });

    this.routesVm.set(routes);
  }

  private buildMarkerVm(
    node: WarRoomNode,
    zoom: number,
    selected: FleetSelection | null,
    hovered: FleetSelection | null,
    baseUrl: string,
    x: number,
    y: number
  ): MarkerVm {
    let displayName = this.getCompanyDisplayName(node).toUpperCase();
    if (displayName.includes('NOVA')) displayName = 'NOVA BUS';
    if (displayName.includes('KARZAN') || displayName.includes('KARSAN')) displayName = 'KARSAN';
    const shortName = displayName.length > 18 ? `${displayName.slice(0, 15)}...` : displayName;
    const rawSubLabel = `${node.city || 'Station'} / ${node.status || 'Active'}`;
    const subLabel = rawSubLabel.length > 28 ? `${rawSubLabel.slice(0, 25)}...` : rawSubLabel;
    const cleanedName = displayName.replace(/[^A-Z0-9 ]/g, ' ');
    const initialsParts = cleanedName.split(' ').filter(Boolean);
    let initials = initialsParts.slice(0, 2).map((part) => part[0]).join('');
    if (!initials) {
      initials = displayName.slice(0, 2);
    }

    const logoSource = this.getCompanyLogoSource(node);
    const failures = logoSource ? this.logoFailureCache.get(logoSource) : undefined;
    const logoPath = logoSource
      ? this.assetsService.getPreferredLogoPath(logoSource, baseUrl, failures)
      : '';
    const fallbackLogoPath = this.assetsService.getLogoFallbackPath();
    const hasLogo = !!logoPath && logoPath !== fallbackLogoPath;

    const nodeLevel = node.level ?? 'factory';
    const isHQ = node.id === 'fleetzero' || node.name?.toLowerCase().includes('fleetzero');
    const isSelected = !!selected && node.companyId === selected.id && selected.level === nodeLevel;
    const isHovered = !!hovered && (node.companyId === hovered.id || node.id === hovered.id);
    const isPinned = this.pinnedNodeId() === node.id;

    const zoomFactor = this.getZoomFactor(zoom);
    const lod = this.getPinLodState(zoomFactor, isSelected);

    const adaptiveFactor = 1 + (zoomFactor - 1) * 0.1;
    const hqFactor = isHQ ? 1.25 : 1.0;
    const invZoom = 1 / zoomFactor;
    const scale = (adaptiveFactor * hqFactor) * invZoom * this.MARKER_BASE_SCALE;

    const status = (node.status || 'ACTIVE').toUpperCase();
    let statusKey: 'online' | 'maintenance' | 'offline' = 'online';
    let statusColor = '#00FF41';
    let statusGlow = 'rgba(0, 255, 65, 0.45)';
    let statusIconPath = 'M 5,13 L 10,18 L 19,7';

    if (status === 'OFFLINE' || status === 'INACTIVE') {
      statusKey = 'offline';
      statusColor = '#ef4444';
      statusGlow = 'rgba(239, 68, 68, 0.45)';
      statusIconPath = 'M 6,6 L 18,18 M 18,6 L 6,18';
    } else if (status === 'MAINTENANCE' || status === 'PAUSED') {
      statusKey = 'maintenance';
      statusColor = '#f59e0b';
      statusGlow = 'rgba(245, 158, 11, 0.45)';
      statusIconPath = 'M 12,4 L 22,20 H 2 Z';
    }

    return {
      id: node.id,
      node,
      displayName,
      shortName,
      subLabel,
      initials,
      hasLogo,
      logoPath,
      isSelected,
      isHovered,
      isHub: this.isHub(node),
      isHQ,
      statusKey,
      statusColor,
      statusGlow,
      statusIconPath,
      lodClass: lod.lodClass,
      isPinned,
      pinTransform: `translate(${x} ${y})`,
      pinScale: scale,
      showPinLabel: true,
    };
  }

  private getZoomFactor(zoom: number): number {
    return Math.max(0.5, zoom / 4);
  }

  private getPinLodState(
    zoomFactor: number,
    isSelected: boolean
  ): { isLogoOnly: boolean; isCompactLogo: boolean; isFullDetail: boolean; lodClass: 'lod-low' | 'lod-medium' | 'lod-high' } {
    if (isSelected) {
      return { isLogoOnly: false, isCompactLogo: false, isFullDetail: true, lodClass: 'lod-high' };
    }

    if (zoomFactor < this.LOD_LOGO_ONLY_THRESHOLD) {
      return { isLogoOnly: true, isCompactLogo: false, isFullDetail: false, lodClass: 'lod-low' };
    }

    if (zoomFactor < this.LOD_FULL_DETAIL_THRESHOLD) {
      return { isLogoOnly: false, isCompactLogo: true, isFullDetail: false, lodClass: 'lod-medium' };
    }

    return { isLogoOnly: false, isCompactLogo: false, isFullDetail: true, lodClass: 'lod-high' };
  }

  handleMarkerClick(node?: WarRoomNode): void {
    if (!node) {
      this.nodeSelected.emit(undefined);
      return;
    }
    const selected = this.selectedEntity();
    const nodeLevel = node.level ?? 'factory';
    if (selected && node.companyId === selected.id && selected.level === nodeLevel) {
      this.nodeSelected.emit(undefined);
    } else {
      this.nodeSelected.emit(node);
    }

    const currentPinned = this.pinnedNodeId();
    if (currentPinned === node.id) {
      this.pinnedNodeId.set(null);
    } else {
      this.pinnedNodeId.set(node.id);
    }
  }

  getNodePosition(node: WarRoomNode): { top: number; left: number } {
    const cached = this.markerPixelCoordinates().get(node.id);
    if (cached) {
      return { top: cached.y, left: cached.x };
    }

    if (this.mapInstance && this.isValidCoordinates(node.coordinates)) {
      const point = this.mapInstance.project([node.coordinates.longitude, node.coordinates.latitude]);
      return { top: point.y, left: point.x };
    }

    return { top: 0, left: 0 };
  }

  private applyDefaultView(): void {
    if (!this.mapInstance) return;
    this.mapInstance.easeTo({
      center: this.defaultView.center,
      zoom: this.defaultView.zoom,
      pitch: this.defaultView.pitch,
      bearing: this.defaultView.bearing,
      duration: 800,
    });
  }

  toggleFullscreen(): void {
    const container = document.querySelector('.war-room-map-container') as HTMLElement | null;
    if (!container) return;

    if (!this.isFullscreen) {
      if (container.requestFullscreen) {
        void container.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        void document.exitFullscreen();
      }
    }
  }

  zoomIn(): void {
    if (this.mapInstance) {
      this.mapInstance.zoomIn();
    }
  }

  zoomOut(): void {
    if (this.mapInstance) {
      this.mapInstance.zoomOut();
    }
  }

  public zoomToEntity(entityId: string, zoom: number = 8): void {
    const nodes = this.nodes();
    const target = nodes.find((node) =>
      node.companyId === entityId ||
      node.id === entityId ||
      node.factoryId === entityId ||
      node.subsidiaryId === entityId ||
      node.parentGroupId === entityId
    );

    if (!target || !this.isValidCoordinates(target.coordinates)) {
      if (!this.mapInstance || !this.mapLoaded) {
        this.pendingZoomEntityId = entityId;
      }
      return;
    }

    if (!this.mapInstance || !this.mapLoaded) {
      this.pendingZoomEntityId = entityId;
      return;
    }

    this.mapInstance.flyTo({
      center: [target.coordinates.longitude, target.coordinates.latitude],
      zoom,
      duration: 1000,
      essential: true,
    });
  }

  private isHub(node: WarRoomNode): boolean {
    return node.type === 'Hub' || node.isHub === true;
  }

  private buildRouteFeatures(nodes: WarRoomNode[]): RouteFeatureCollection {
    const routes = this.transitRoutes();
    const selected = this.selectedEntity();
    const features: RouteFeature[] = [];

    if (!routes || routes.length === 0) {
      return { type: 'FeatureCollection', features };
    }

    const findMatches = (id: string): WarRoomNode[] => {
      const nid = id.toLowerCase();

      const direct = nodes.filter((n: WarRoomNode) =>
        n.id === id || n.factoryId === id || n.subsidiaryId === id || n.parentGroupId === id
      );
      if (direct.length > 0) return direct;

      const factory = this.warRoomService.factories().find(f => f.id === id);
      if (factory) {
        const resolved = nodes.filter(n => n.id === factory.subsidiaryId || n.id === factory.parentGroupId);
        if (resolved.length > 0) return resolved;
      }

      if (nid.includes('fleetzero') || nid.includes('fleet-zero')) {
        return nodes.filter(n => n.id === 'fleetzero' || (n.name && n.name.toLowerCase().includes('fleetzero')));
      }

      if (id.startsWith('source-')) {
        const baseId = id.replace('source-', '');
        const resolved = nodes.filter(n => n.id === baseId || n.factoryId === baseId || n.subsidiaryId === baseId);
        if (resolved.length > 0) return resolved;

        const baseFactory = this.warRoomService.factories().find(f => f.id === baseId);
        if (baseFactory) {
          return nodes.filter(n => n.id === baseFactory.subsidiaryId || n.id === baseFactory.parentGroupId);
        }
      }

      return nodes.filter((n: WarRoomNode) =>
        (!!n.name && n.name.toLowerCase() === nid) ||
        (!!n.company && n.company.toLowerCase().includes(nid))
      );
    };

    routes.forEach((route) => {
      const fromMatches = findMatches(route.from);
      const toMatches = findMatches(route.to);

      const fromNode = fromMatches.find((n: WarRoomNode) =>
        n.id === selected?.id || n.subsidiaryId === selected?.id || n.factoryId === selected?.id
      ) || fromMatches[0];

      const toNode = toMatches.find((n: WarRoomNode) =>
        n.id === selected?.id || n.subsidiaryId === selected?.id || n.factoryId === selected?.id
      ) || toMatches[0];

      let fromCoords = fromNode?.coordinates;
      let toCoords = toNode?.coordinates;

      if (!this.isValidCoordinates(fromCoords) && this.isValidCoordinates(route.fromCoordinates)) {
        fromCoords = route.fromCoordinates;
      }

      if (!this.isValidCoordinates(toCoords) && this.isValidCoordinates(route.toCoordinates)) {
        toCoords = route.toCoordinates;
      }

      if (!fromCoords || !toCoords) return;

      const highlighted = !!selected && (
        route.from === selected.id ||
        route.to === selected.id ||
        route.from === selected.subsidiaryId ||
        route.to === selected.subsidiaryId ||
        route.from === selected.factoryId ||
        route.to === selected.factoryId
      );

      features.push({
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [fromCoords.longitude, fromCoords.latitude],
            [toCoords.longitude, toCoords.latitude]
          ]
        },
        properties: {
          strokeWidth: route.strokeWidth || 1.5,
          dashArray: route.dashArray,
          highlighted,
          routeId: route.id,
        }
      });
    });

    return { type: 'FeatureCollection', features };
  }

  private getRouteBeginOffset(routeId: string, index: number): string {
    const seed = `${routeId || 'route'}-${index}`;
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) % 6000;
    }
    const seconds = (hash % 6000) / 1000;
    return `${seconds.toFixed(2)}s`;
  }

  private getRouteColor(): string {
    const status = this.filterStatus();
    if (status === 'active') return '#00C853';
    if (status === 'inactive') return '#D50000';
    return '#0ea5e9';
  }

  readonly tooltipVm = computed<TooltipVm | null>(() => {
    const hovered = this.hoveredNode();
    const pinned = this.pinnedNodeId();
    const node = hovered || (pinned ? this.nodes().find((n) => n.id === pinned) || null : null);
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
}
