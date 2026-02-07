import { Injectable, signal, computed, isDevMode } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import {
  Node,
  Hub,
  ActivityLog,
  NetworkMetrics,
  NetworkThroughput,
  GeopoliticalHeatmap,
  SatelliteStatus,
  ParentGroup,
  SubsidiaryCompany,
  FactoryLocation,
  FleetSelection,
  MapViewMode,
  TransitRoute,
  WarRoomState,
} from '../models/war-room.interface';

@Injectable({
  providedIn: 'root',
})
export class WarRoomService {
  // Signal-based state management 
  private _parentGroups = signal<ParentGroup[]>([]);
  private _transitRoutes = signal<TransitRoute[]>([]);
  private _activityLogs = signal<ActivityLog[]>([]);
  private _networkMetrics = signal<NetworkMetrics | null>(null);
  private _networkThroughput = signal<NetworkThroughput | null>(null);
  private _geopoliticalHeatmap = signal<GeopoliticalHeatmap | null>(null);
  private _satelliteStatuses = signal<SatelliteStatus[]>([]);
  private _mapViewMode = signal<MapViewMode>('parent');
  private _selectedEntity = signal<FleetSelection | null>(null);
  private _hoveredEntity = signal<FleetSelection | null>(null);
  private _factoryFilterSubsidiaryId = signal<string | null>(null);
  private _panToEntity = signal<{ id: string; timestamp: number } | null>(null);

  // Public readonly signals
  readonly parentGroups = this._parentGroups.asReadonly();
  readonly transitRoutes = this._transitRoutes.asReadonly();
  readonly activityLogs = this._activityLogs.asReadonly();
  readonly networkMetrics = this._networkMetrics.asReadonly();
  readonly networkThroughput = this._networkThroughput.asReadonly();
  readonly geopoliticalHeatmap = this._geopoliticalHeatmap.asReadonly();
  readonly satelliteStatuses = this._satelliteStatuses.asReadonly();
  readonly mapViewMode = this._mapViewMode.asReadonly();
  readonly selectedEntity = this._selectedEntity.asReadonly();
  readonly hoveredEntity = this._hoveredEntity.asReadonly();
  readonly panToEntity = this._panToEntity.asReadonly();

  // Computed signals
  readonly subsidiaries = computed(() =>
    this._parentGroups().flatMap((group) => group.subsidiaries)
  );

  readonly factories = computed(() =>
    this.subsidiaries().flatMap((subsidiary) => subsidiary.factories)
  );

  readonly nodes = computed(() => {
    const viewMode = this._mapViewMode();
    const selection = this._selectedEntity();
    const factoryFilterSubsidiaryId = this._factoryFilterSubsidiaryId();
    return this.buildMapNodes(viewMode, selection, factoryFilterSubsidiaryId);
  });

  readonly selectedParentGroup = computed(() => {
    const selection = this._selectedEntity();
    if (!selection) return null;
    const parentId = selection.level === 'parent' ? selection.id : selection.parentGroupId;
    if (!parentId) return null;
    return this._parentGroups().find((group) => group.id === parentId) || null;
  });

  readonly selectedSubsidiary = computed(() => {
    const selection = this._selectedEntity();
    if (!selection) return null;
    if (selection.level === 'subsidiary') {
      return this.subsidiaries().find((sub) => sub.id === selection.id) || null;
    }
    if (selection.level === 'factory' && selection.subsidiaryId) {
      return this.subsidiaries().find((sub) => sub.id === selection.subsidiaryId) || null;
    }
    return null;
  });

  constructor() {
    void this.initializeData();
  }

  private logDebug(message: string, ...args: unknown[]): void {
    if (isDevMode()) {
      console.log(message, ...args);
    }
  }

  private logWarn(message: string, ...args: unknown[]): void {
    if (isDevMode()) {
      console.warn(message, ...args);
    }
  }

  private async fetchWithTimeout(
    url: string,
    options: RequestInit = {},
    timeoutMs: number = 5000
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private isValidWarRoomState(data: unknown): data is WarRoomState {
    if (!data || typeof data !== 'object') return false;
    const candidate = data as Partial<WarRoomState>;
    return (
      Array.isArray(candidate.parentGroups) &&
      Array.isArray(candidate.nodes) &&
      Array.isArray(candidate.activityLogs) &&
      Array.isArray(candidate.transitRoutes) &&
      !!candidate.networkMetrics &&
      !!candidate.networkThroughput &&
      !!candidate.geopoliticalHeatmap &&
      typeof candidate.mapViewMode === 'string'
    );
  }

  /**
   * Initialize data from mock data
   */
  private async initializeData(): Promise<void> {
    const emptyState = this.getEmptyState();

    try {
      const response = await this.fetchWithTimeout('/assets/data/war-room-data.json', { cache: 'no-store' });
      if (!response.ok) {
        this.logWarn('Failed to load war room data. Using empty state.');
        this.applyState(emptyState);
        return;
      }
      const data = await response.json();
      if (!this.isValidWarRoomState(data)) {
        this.logWarn('Invalid war room data shape. Using empty state.');
        this.applyState(emptyState);
        return;
      }
      this.applyState(data);
    } catch (error) {
      this.logWarn('Failed to load war room data. Using empty state.', error);
      this.applyState(emptyState);
    }
  }

  private applyState(data: WarRoomState): void {
    this._transitRoutes.set(data.transitRoutes || []);
    this._activityLogs.set(data.activityLogs || []);
    this._networkMetrics.set(data.networkMetrics || this.getEmptyState().networkMetrics);
    this._networkThroughput.set(data.networkThroughput || this.getEmptyState().networkThroughput);
    this._geopoliticalHeatmap.set(data.geopoliticalHeatmap || this.getEmptyState().geopoliticalHeatmap);
    this._satelliteStatuses.set(data.satelliteStatuses || []);
    this._parentGroups.set(data.parentGroups || []);
    this._mapViewMode.set(data.mapViewMode || 'parent');

    if (data.selectedEntity) {
      this._selectedEntity.set(this.normalizeSelection(data.selectedEntity));
    } else if (data.selectedCompanyId) {
      const legacySubsidiary = this.subsidiaries().find((sub) => sub.id === data.selectedCompanyId);
      if (legacySubsidiary) {
        this._selectedEntity.set({
          level: 'subsidiary',
          id: legacySubsidiary.id,
          parentGroupId: legacySubsidiary.parentGroupId,
          subsidiaryId: legacySubsidiary.id,
        });
        this._mapViewMode.set('subsidiary');
        return;
      }
    } else if (data.parentGroups?.length) {
      this._selectedEntity.set({
        level: 'parent',
        id: data.parentGroups[0].id,
        parentGroupId: data.parentGroups[0].id,
      });
    }
  }

  private getEmptyState(): WarRoomState {
    return {
      nodes: [],
      transitRoutes: [],
      activityLogs: [],
      networkMetrics: {
        dataFlowIntegrity: 0,
        fleetSyncRate: 0,
        networkLatency: 0,
        nodeDensity: 0,
        encryptionProtocol: '',
        encryptionStatus: '',
      },
      networkThroughput: {
        bars: [],
        channelStatus: '',
        throughput: '',
      },
      geopoliticalHeatmap: {
        grid: [],
        rows: 0,
        cols: 0,
      },
      satelliteStatuses: [],
      parentGroups: [],
      mapViewMode: 'parent',
      selectedEntity: null,
    };
  }

  private buildMapNodes(
    viewMode: MapViewMode,
    selection: FleetSelection | null,
    factoryFilterSubsidiaryId: string | null
  ): Node[] {
    const parentGroups = this._parentGroups();
    if (viewMode === 'parent') {
      return parentGroups.map((group) => this.createParentNode(group));
    }

    if (viewMode === 'subsidiary') {
      if (factoryFilterSubsidiaryId) {
        return this.factories()
          .filter((factory) =>
            factory.subsidiaryId === factoryFilterSubsidiaryId ||
            factory.subsidiaryId === 'fleetzero' ||
            factory.id === 'fleetzero'
          )
          .map((factory) => {
            const subsidiary = this.subsidiaries().find((sub) => sub.id === factory.subsidiaryId);
            return this.createFactoryNode(factory, subsidiary);
          });
      }

      return this.subsidiaries().map((subsidiary) => this.createSubsidiaryNode(subsidiary));
    }

    let factories = this.factories();
    if (factoryFilterSubsidiaryId) {
      factories = factories.filter(
        (factory) =>
          factory.subsidiaryId === factoryFilterSubsidiaryId ||
          factory.subsidiaryId === 'fleetzero' ||
          factory.id === 'fleetzero'
      );
    }

    return factories.map((factory) => {
      const subsidiary = this.subsidiaries().find((sub) => sub.id === factory.subsidiaryId);
      return this.createFactoryNode(factory, subsidiary);
    });
  }

  private createParentNode(group: ParentGroup): Node {
    const factories = group.subsidiaries.flatMap((sub) => sub.factories);
    const coordinates = this.computeCenterOfGravity(factories);

    return {
      id: group.id,
      name: this.slugify(group.name),
      company: group.name,
      companyId: group.id,
      city: 'Global Operations',
      description: group.description || `${group.name} command overview.`,
      logo: group.logo,
      country: '',
      coordinates,
      type: 'Center',
      status: this.mapOperationalStatus(group.status),
      isHub: true,
      hubCode: 'GRP',
      level: 'parent',
      parentGroupId: group.id,
    };
  }

  private createSubsidiaryNode(subsidiary: SubsidiaryCompany): Node {
    const coordinates = this.computeCenterOfGravity(subsidiary.factories);
    const fallbackCity = subsidiary.factories[0]?.city || subsidiary.name;

    return {
      id: subsidiary.id,
      name: this.slugify(subsidiary.name),
      company: subsidiary.name,
      companyId: subsidiary.id,
      city: subsidiary.location || fallbackCity,
      description: subsidiary.description || `${subsidiary.name} regional operations.`,
      logo: subsidiary.logo,
      country: subsidiary.factories[0]?.country || '',
      coordinates,
      type: 'Hub',
      status: this.mapOperationalStatus(subsidiary.status),
      isHub: true,
      hubCode: subsidiary.hubs[0]?.code,
      level: 'subsidiary',
      parentGroupId: subsidiary.parentGroupId,
      subsidiaryId: subsidiary.id,
    };
  }

  private createFactoryNode(factory: FactoryLocation, subsidiary?: SubsidiaryCompany): Node {
    const companyName = subsidiary?.name || 'Factory';
    const hubCode = subsidiary?.hubs[0]?.code;

    return {
      id: factory.id,
      name: this.slugify(factory.city || factory.name),
      company: companyName,
      companyId: factory.id,
      city: factory.city,
      description: factory.description,
      logo: factory.logo || subsidiary?.logo,
      country: factory.country,
      coordinates: factory.coordinates,
      type: 'Facility',
      status: factory.status,
      isHub: true,
      hubCode,
      level: 'factory',
      parentGroupId: factory.parentGroupId,
      subsidiaryId: factory.subsidiaryId,
      factoryId: factory.id,
    };
  }

  private isValidCoordinates(coords?: { latitude: number; longitude: number } | null): boolean {
    if (!coords) return false;
    if (!Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) return false;
    if (coords.latitude === 0 && coords.longitude === 0) return false;
    return true;
  }

  private computeCenterOfGravity(factories: FactoryLocation[]): { latitude: number; longitude: number } {
    const validFactories = factories.filter((factory) => this.isValidCoordinates(factory.coordinates));
    if (validFactories.length === 0) {
      return { latitude: NaN, longitude: NaN };
    }

    const totalWeight = validFactories.reduce((sum, factory) => sum + (factory.assets || 1), 0);
    const weightedLat = validFactories.reduce(
      (sum, factory) => sum + factory.coordinates.latitude * (factory.assets || 1),
      0
    );
    const weightedLng = validFactories.reduce(
      (sum, factory) => sum + factory.coordinates.longitude * (factory.assets || 1),
      0
    );

    return {
      latitude: weightedLat / totalWeight,
      longitude: weightedLng / totalWeight,
    };
  }

  private mapOperationalStatus(status: string): Node['status'] {
    if (status === 'MAINTENANCE') return 'OFFLINE';
    if (status === 'PAUSED') return 'OFFLINE';
    return 'ACTIVE';
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private normalizeSelection(selection: FleetSelection): FleetSelection | null {
    if (selection.level === 'parent') {
      const parent = this._parentGroups().find((group) => group.id === selection.id);
      if (!parent) return null;
      return { level: 'parent', id: parent.id, parentGroupId: parent.id };
    }

    if (selection.level === 'subsidiary') {
      const subsidiary = this.subsidiaries().find((sub) => sub.id === selection.id);
      if (!subsidiary) return null;
      return {
        level: 'subsidiary',
        id: subsidiary.id,
        parentGroupId: subsidiary.parentGroupId,
        subsidiaryId: subsidiary.id,
      };
    }

    if (selection.level === 'factory') {
      const factory = this.factories().find((fac) => fac.id === selection.id);
      if (!factory) return null;
      return {
        level: 'factory',
        id: factory.id,
        parentGroupId: factory.parentGroupId,
        subsidiaryId: factory.subsidiaryId,
        factoryId: factory.id,
      };
    }

    return null;
  }

  private getFirstFactoryForSelection(selection: FleetSelection): FactoryLocation | null {
    if (selection.level === 'subsidiary') {
      const subsidiary = this.subsidiaries().find((sub) => sub.id === selection.id);
      return subsidiary?.factories[0] || null;
    }

    if (selection.level === 'parent') {
      const parentId = selection.parentGroupId || selection.id;
      const parent = this._parentGroups().find((group) => group.id === parentId);
      const subsidiary = parent?.subsidiaries[0];
      return subsidiary?.factories[0] || null;
    }

    return null;
  }

  private computeMetricsFromFactories(factories: FactoryLocation[]): { assetCount: number; incidentCount: number; syncStability: number } {
    const assetCount = factories.reduce((sum, factory) => sum + factory.assets, 0);
    const incidentCount = factories.reduce((sum, factory) => sum + factory.incidents, 0);
    const totalWeight = factories.reduce((sum, factory) => sum + (factory.assets || 1), 0);
    const weightedSync = factories.reduce(
      (sum, factory) => sum + factory.syncStability * (factory.assets || 1),
      0
    );
    const syncStability = totalWeight > 0 ? Math.round((weightedSync / totalWeight) * 10) / 10 : 0;

    return { assetCount, incidentCount, syncStability };
  }

  private computeMetricsFromSubsidiaries(subsidiaries: SubsidiaryCompany[]): { assetCount: number; incidentCount: number; syncStability: number } {
    const assetCount = subsidiaries.reduce((sum, sub) => sum + sub.metrics.assetCount, 0);
    const incidentCount = subsidiaries.reduce((sum, sub) => sum + sub.metrics.incidentCount, 0);
    const totalWeight = subsidiaries.reduce((sum, sub) => sum + (sub.metrics.assetCount || 1), 0);
    const weightedSync = subsidiaries.reduce(
      (sum, sub) => sum + sub.metrics.syncStability * (sub.metrics.assetCount || 1),
      0
    );
    const syncStability = totalWeight > 0 ? Math.round((weightedSync / totalWeight) * 10) / 10 : 0;

    return { assetCount, incidentCount, syncStability };
  }

  /**
   * Get all nodes
   */
  getNodes(): Observable<Node[]> {
    return of(this.nodes()).pipe(delay(100));
  }

  /**
   * Get all transit routes
   */
  getTransitRoutes(): Observable<TransitRoute[]> {
    return of(this._transitRoutes()).pipe(delay(100));
  }

  /**
   * Get all activity logs
   */
  getActivityLogs(): Observable<ActivityLog[]> {
    return of(this._activityLogs()).pipe(delay(100));
  }

  /**
   * Get hub status for a specific company
   */
  getHubStatus(subsidiaryId: string): Hub[] {
    const subsidiary = this.subsidiaries().find((sub) => sub.id === subsidiaryId);
    return subsidiary?.hubs || [];
  }

  /**
   * Get network metrics
   */
  getNetworkMetrics(): Observable<NetworkMetrics> {
    const metrics = this._networkMetrics();
    if (!metrics) {
      return throwError(() => new Error('Network metrics not initialized'));
    }
    return of(metrics).pipe(delay(100));
  }

  /**
   * Get company data including quantum chart
   */
  getSubsidiaryData(subsidiaryId: string): SubsidiaryCompany | null {
    return this.subsidiaries().find((sub) => sub.id === subsidiaryId) || null;
  }

  /**
   * Select a company
   */
  setMapViewMode(viewMode: MapViewMode): void {
    this._mapViewMode.set(viewMode);
    this._factoryFilterSubsidiaryId.set(null);

    const selection = this._selectedEntity();
    if (!selection || selection.level === viewMode) return;

    if (viewMode === 'parent') {
      const parentId = selection.parentGroupId || selection.id;
      if (parentId) {
        this._selectedEntity.set({ level: 'parent', id: parentId, parentGroupId: parentId });
      }
      return;
    }

    if (viewMode === 'subsidiary') {
      const subsidiaryId = selection.subsidiaryId || (selection.level === 'subsidiary' ? selection.id : null);
      if (subsidiaryId) {
        const parentId = selection.parentGroupId || this.subsidiaries().find((sub) => sub.id === subsidiaryId)?.parentGroupId;
        this._selectedEntity.set({
          level: 'subsidiary',
          id: subsidiaryId,
          parentGroupId: parentId || undefined,
          subsidiaryId,
        });
      }
      return;
    }

    if (viewMode === 'factory') {
      if (selection.level === 'subsidiary') {
        return;
      }

      if (selection.factoryId) {
        this._selectedEntity.set({
          level: 'factory',
          id: selection.factoryId,
          parentGroupId: selection.parentGroupId,
          subsidiaryId: selection.subsidiaryId,
          factoryId: selection.factoryId,
        });
        return;
      }

      const fallbackFactory = this.getFirstFactoryForSelection(selection);
      if (fallbackFactory) {
        this._selectedEntity.set({
          level: 'factory',
          id: fallbackFactory.id,
          parentGroupId: fallbackFactory.parentGroupId,
          subsidiaryId: fallbackFactory.subsidiaryId,
          factoryId: fallbackFactory.id,
        });
      }
    }
  }

  /**
   * Select an entity in the hierarchy (parent, subsidiary, or factory)
   */
  selectEntity(selection: FleetSelection | null): void {
    if (!selection) {
      this._selectedEntity.set(null);
      return;
    }

    if (selection.level === 'subsidiary' && this._mapViewMode() !== 'subsidiary') {
      return;
    }

    const normalized = this.normalizeSelection(selection);
    this._selectedEntity.set(normalized);

    if (normalized) {
      const currentViewMode = this._mapViewMode();
      if (!(normalized.level === 'factory' && currentViewMode === 'subsidiary')) {
        this._mapViewMode.set(normalized.level);
      }
    }
  }

  /**
   * Set hovered entity for cross-component highlighting
   */
  setHoveredEntity(selection: FleetSelection | null): void {
    this._hoveredEntity.set(selection);
  }

  /**
   * Request map to pan/zoom to a specific entity
   */
  requestPanToEntity(entityId: string): void {
    this._panToEntity.set({ id: entityId, timestamp: Date.now() });
  }

  setFactoryFilterSubsidiaryId(subsidiaryId: string | null): void {
    this._factoryFilterSubsidiaryId.set(subsidiaryId);
  }

  /**
   * Get selected company
   */
  getSelectedSubsidiary(): SubsidiaryCompany | null {
    return this.selectedSubsidiary();
  }

  /**
   * Add a new activity log entry
   * Keeps only the most recent entry per factory (limit to most recent 40 entries)
   */
  addActivityLog(log: ActivityLog): void {
    const currentLogs = this._activityLogs();

    // Remove any existing entry for this factory to ensure only one entry per factory
    const filteredLogs = currentLogs.filter((l) => l.factoryId !== log.factoryId);

    // Add the new log at the beginning (most recent first)
    const updatedLogs = [log, ...filteredLogs];

    // Keep logs sorted by timestamp (most recent first) and cap the list
    const sortedLogs = updatedLogs
      .sort((a, b) => {
        const dateA = typeof a.timestamp === 'string' ? new Date(a.timestamp) : a.timestamp;
        const dateB = typeof b.timestamp === 'string' ? new Date(b.timestamp) : b.timestamp;
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 40);

    this._activityLogs.set(sortedLogs);
  }

  /**
   * Add a new transit route (map connection line)
   */
  addTransitRoute(route: TransitRoute): void {
    this._transitRoutes.update((current) => [route, ...current]);
  }

  /**
   * Update factory description and latest log entry
   */
  updateFactoryDescription(factoryId: string, description: string): void {
    this.updateFactoryDetails(factoryId, { description });
  }

  /**
   * Update subsidiary name, location, and description.
   */
  updateSubsidiaryDetails(
    subsidiaryId: string,
    updates: { name?: string; location?: string; description?: string; status?: SubsidiaryCompany['status'] }
  ): void {
    const groups = this._parentGroups();
    let updated = false;

    const updatedGroups = groups.map((group) => {
      let groupChanged = false;
      const updatedSubsidiaries = group.subsidiaries.map((subsidiary) => {
        if (subsidiary.id !== subsidiaryId) return subsidiary;
        groupChanged = true;
        return {
          ...subsidiary,
          name: updates.name ?? subsidiary.name,
          location: updates.location ?? subsidiary.location,
          description: updates.description ?? subsidiary.description,
          status: updates.status ?? subsidiary.status,
        };
      });

      if (!groupChanged) return group;
      updated = true;
      return {
        ...group,
        subsidiaries: updatedSubsidiaries,
        metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
      };
    });

    if (updated) {
      this._parentGroups.set(updatedGroups);
    }
  }

  /**
   * Update factory name, location, description, and coordinates.
   */
  updateFactoryDetails(
    factoryId: string,
    updates: {
      name?: string;
      city?: string;
      country?: string;
      description?: string;
      coordinates?: { latitude: number; longitude: number };
      locationLabel?: string;
      status?: FactoryLocation['status'];
    }
  ): void {
    const groups = this._parentGroups();
    let updated = false;

    const updatedGroups = groups.map((group) => {
      let groupChanged = false;
      const updatedSubsidiaries = group.subsidiaries.map((subsidiary) => {
        const factoryIndex = subsidiary.factories.findIndex((factory) => factory.id === factoryId);
        if (factoryIndex === -1) return subsidiary;

        const existingFactory = subsidiary.factories[factoryIndex];
        const updatedFactory: FactoryLocation = {
          ...existingFactory,
          name: updates.name ?? existingFactory.name,
          city: updates.city ?? existingFactory.city,
          country: updates.country ?? existingFactory.country,
          description: updates.description ?? existingFactory.description,
          coordinates: updates.coordinates ?? existingFactory.coordinates,
          status: updates.status ?? existingFactory.status,
        };

        const updatedFactories = [...subsidiary.factories];
        updatedFactories[factoryIndex] = updatedFactory;
        groupChanged = true;

        return {
          ...subsidiary,
          factories: updatedFactories,
          metrics: this.computeMetricsFromFactories(updatedFactories),
        };
      });

      if (!groupChanged) return group;
      updated = true;
      return {
        ...group,
        subsidiaries: updatedSubsidiaries,
        metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
      };
    });

    if (updated) {
      this._parentGroups.set(updatedGroups);
    }

    if (updates.description !== undefined || updates.locationLabel) {
      this._activityLogs.update((logs) =>
        logs.map((log) => {
          if (log.factoryId !== factoryId) return log;
          const nextDescription = updates.description ?? log.description;
          const nextLocation = updates.locationLabel ?? log.location;
          if (nextDescription === log.description && nextLocation === log.location) {
            return log;
          }
          return { ...log, description: nextDescription, location: nextLocation };
        })
      );
    }
  }

  /**
   * Delete a subsidiary company and related factories/logs
   */
  deleteSubsidiary(subsidiaryId: string): void {
    const groups = this._parentGroups();
    const removedSubsidiary =
      this.subsidiaries().find((subsidiary) => subsidiary.id === subsidiaryId) || null;
    if (!removedSubsidiary) return;
    const parentGroupId = removedSubsidiary.parentGroupId;

    const updatedGroups = groups.map((group) => {
      const remainingSubsidiaries = group.subsidiaries.filter((subsidiary) => subsidiary.id !== subsidiaryId);
      if (remainingSubsidiaries.length === group.subsidiaries.length) return group;
      return {
        ...group,
        subsidiaries: remainingSubsidiaries,
        metrics: this.computeMetricsFromSubsidiaries(remainingSubsidiaries),
      };
    });
    this._parentGroups.set(updatedGroups);

    const removedFactoryIds = removedSubsidiary.factories.map((factory) => factory.id);
    this._activityLogs.update((logs) =>
      logs.filter((log) => log.subsidiaryId !== subsidiaryId && !removedFactoryIds.includes(log.factoryId))
    );

    const selection = this._selectedEntity();
    if (selection && (selection.subsidiaryId === subsidiaryId || selection.id === subsidiaryId)) {
      if (parentGroupId) {
        this._selectedEntity.set({ level: 'parent', id: parentGroupId, parentGroupId });
        this._mapViewMode.set('parent');
      } else {
        this._selectedEntity.set(null);
      }
    }
  }

  /**
   * Delete a factory location and related log entries
   */
  deleteFactory(factoryId: string): void {
    const groups = this._parentGroups();
    let parentGroupId: string | null = null;
    let subsidiaryId: string | null = null;
    let updated = false;

    const updatedGroups = groups.map((group) => {
      let groupChanged = false;
      const updatedSubsidiaries = group.subsidiaries.map((subsidiary) => {
        const remainingFactories = subsidiary.factories.filter((factory) => factory.id !== factoryId);
        if (remainingFactories.length === subsidiary.factories.length) return subsidiary;
        groupChanged = true;
        parentGroupId = group.id;
        subsidiaryId = subsidiary.id;
        return {
          ...subsidiary,
          factories: remainingFactories,
          metrics: this.computeMetricsFromFactories(remainingFactories),
        };
      });

      if (!groupChanged) return group;
      updated = true;
      return {
        ...group,
        subsidiaries: updatedSubsidiaries,
        metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
      };
    });

    if (!updated) return;
    this._parentGroups.set(updatedGroups);

    this._activityLogs.update((logs) => logs.filter((log) => log.factoryId !== factoryId));

    const selection = this._selectedEntity();
    if (selection && (selection.factoryId === factoryId || selection.id === factoryId)) {
      if (subsidiaryId) {
        this._selectedEntity.set({ level: 'subsidiary', id: subsidiaryId, parentGroupId: parentGroupId || undefined, subsidiaryId });
        this._mapViewMode.set('subsidiary');
      } else if (parentGroupId) {
        this._selectedEntity.set({ level: 'parent', id: parentGroupId, parentGroupId });
        this._mapViewMode.set('parent');
      } else {
        this._selectedEntity.set(null);
      }
    }
  }

  /**
   * Update network metrics
   */
  updateNetworkMetrics(metrics: Partial<NetworkMetrics>): void {
    const current = this._networkMetrics();
    if (current) {
      this._networkMetrics.set({ ...current, ...metrics });
    }
  }

  /**
   * Update network throughput
   */
  updateNetworkThroughput(throughput: Partial<NetworkThroughput>): void {
    const current = this._networkThroughput();
    if (current) {
      this._networkThroughput.set({ ...current, ...throughput });
    }
  }

  /**
   * Update hub status for a company
   */
  updateHubStatus(subsidiaryId: string, hubCode: string, updates: Partial<Hub>): void {
    const groups = this._parentGroups();
    const parentIndex = groups.findIndex((group) =>
      group.subsidiaries.some((sub) => sub.id === subsidiaryId)
    );
    if (parentIndex === -1) return;

    const parent = groups[parentIndex];
    const subsidiaryIndex = parent.subsidiaries.findIndex((sub) => sub.id === subsidiaryId);
    if (subsidiaryIndex === -1) return;

    const subsidiary = parent.subsidiaries[subsidiaryIndex];
    const hubIndex = subsidiary.hubs.findIndex((hub) => hub.code === hubCode);
    if (hubIndex === -1) return;

    const updatedHubs = [...subsidiary.hubs];
    updatedHubs[hubIndex] = { ...updatedHubs[hubIndex], ...updates };

    const updatedSubsidiary: SubsidiaryCompany = {
      ...subsidiary,
      hubs: updatedHubs,
    };

    const updatedSubsidiaries = [...parent.subsidiaries];
    updatedSubsidiaries[subsidiaryIndex] = updatedSubsidiary;

    const updatedParent: ParentGroup = {
      ...parent,
      subsidiaries: updatedSubsidiaries,
      metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
    };

    const updatedGroups = [...groups];
    updatedGroups[parentIndex] = updatedParent;
    this._parentGroups.set(updatedGroups);
  }

  /**
   * Get complete war room state
   */
  getWarRoomState(): WarRoomState {
    const networkMetrics = this._networkMetrics();
    const networkThroughput = this._networkThroughput();
    const geopoliticalHeatmap = this._geopoliticalHeatmap();

    // Provide fallback values if signals are not initialized
    return {
      nodes: this.nodes(),
      transitRoutes: this._transitRoutes(),
      activityLogs: this._activityLogs(),
      networkMetrics: networkMetrics || {
        dataFlowIntegrity: 0,
        fleetSyncRate: 0,
        networkLatency: 0,
        nodeDensity: 0,
        encryptionProtocol: '',
        encryptionStatus: '',
      },
      networkThroughput: networkThroughput || {
        bars: [],
        channelStatus: '',
        throughput: '',
      },
      geopoliticalHeatmap: geopoliticalHeatmap || {
        grid: [],
        rows: 0,
        cols: 0,
      },
      satelliteStatuses: this._satelliteStatuses(),
      parentGroups: this._parentGroups(),
      mapViewMode: this._mapViewMode(),
      selectedEntity: this._selectedEntity(),
    };
  }

  /**
   * Parse location input (coordinates or address)
   * Supports coordinate format: "latitude, longitude" or address search via geocoding API.
   */
  async parseLocationInput(input: string): Promise<{ latitude: number; longitude: number }> {
    const trimmed = input.trim();
    this.logDebug(`[WarRoomService] Parsing location input: "${trimmed}"`);

    // Try to parse as coordinates (format: "lat, lng" or "lat,lng")
    const coordinateMatch = trimmed.match(/^(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)$/);
    if (coordinateMatch) {
      const latitude = parseFloat(coordinateMatch[1]);
      const longitude = parseFloat(coordinateMatch[2]);

      // Validate coordinate ranges
      if (latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180) {
        this.logDebug(`[WarRoomService] Parsed valid coordinates: ${latitude}, ${longitude}`);
        return { latitude, longitude };
      } else {
        this.logWarn(`[WarRoomService] Invalid coordinates range: ${latitude}, ${longitude}`);
        // Fall through to try geocoding if it looks like coordinate pairs but invalid range? 
        // Or just throw. Usually coordinates allow fallback to text search only if very weird.
        throw new Error('Invalid coordinates. Latitude must be between -90 and 90, longitude between -180 and 180');
      }
    }

    // Geocoding strategy
    // Open-Meteo works best with simple "City, Country" or "City, State". 
    // It sometimes struggles with full addresses or extra descriptions.

    // 1. First attempt: Use the input as is
    try {
      const result = await this.fetchGeocodingResult(trimmed);
      if (result) return result;
    } catch (e) {
      this.logWarn(`[WarRoomService] Geocoding attempt 1 failed:`, e);
    }

    // 2. Second attempt: Simplify input but check context
    if (trimmed.includes(',')) {
      const parts = trimmed.split(',');
      const simpleCity = parts[0].trim();
      const context = parts.slice(1).join(' ').toLowerCase(); // e.g. "quebec" or "quebec canada"

      this.logDebug(
        `[WarRoomService] Retrying with simplified city: "${simpleCity}" and context: "${context}"`
      );

      try {
        // We need to fetch multiple results for the city and filter by context
        // Re-implementing fetch here to allow filtering access to all results
        const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(simpleCity)}&count=10&language=en&format=json`;
        const response = await this.fetchWithTimeout(geocodeUrl, { cache: 'no-store' });

        if (response.ok) {
          const data = (await response.json()) as { results?: Array<{ latitude: number; longitude: number; name: string; admin1?: string; country?: string }> };

          if (data.results && data.results.length > 0) {
            // Filter for context matches in admin1 (region) or country
            const matches = data.results.filter(r => {
              const matchString = `${r.admin1 || ''} ${r.country || ''}`.toLowerCase();
              // Check if any part of the context (e.g. "quebec") appears in the result's region/country
              return context.split(' ').some(term => term.length > 2 && matchString.includes(term.trim()));
            });

            if (matches.length > 0) {
              this.logDebug(`[WarRoomService] Found context match:`, matches[0]);
              return { latitude: matches[0].latitude, longitude: matches[0].longitude };
            }

            this.logWarn(
              `[WarRoomService] Context "${context}" not found in results for "${simpleCity}". Falling back to first result.`
            );
            // If strictly matching context failed, we STILL default to the first result (legacy behavior) 
            // or we could throw error. For now, let's stick to first result but warn.
            return { latitude: data.results[0].latitude, longitude: data.results[0].longitude };
          }
        }
      } catch (e) {
        this.logWarn(`[WarRoomService] Geocoding attempt 2 failed:`, e);
      }
    }

    this.logWarn(`[WarRoomService] Geocoding failed for all attempts for input: "${input}"`);
    throw new Error('No geocoding results found for location.');
  }

  private async fetchGeocodingResult(query: string): Promise<{ latitude: number; longitude: number } | null> {
    const geocodeUrl =
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}` +
      `&count=10&language=en&format=json`; // Request more results to filter

    const response = await this.fetchWithTimeout(geocodeUrl, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Geocoding request failed with status ${response.status}`);
    }

    const data = (await response.json()) as { results?: Array<{ latitude: number; longitude: number; name: string; admin1?: string; country?: string }> };

    if (!data.results || data.results.length === 0) {
      return null;
    }

    // Prefer matches that look more like a city/place. 
    // Open-Meteo returns 'results' sorted by relevance usually.
    const result = data.results[0];
    return { latitude: result.latitude, longitude: result.longitude };
  }

  /**
   * Add a new subsidiary under an existing parent group
   */
  addSubsidiary(subsidiary: SubsidiaryCompany): void {
    const groups = this._parentGroups();
    const parentIndex = groups.findIndex((group) => group.id === subsidiary.parentGroupId);

    const normalizedSubsidiary: SubsidiaryCompany = {
      ...subsidiary,
      metrics: this.computeMetricsFromFactories(subsidiary.factories),
    };

    if (parentIndex === -1) {
      console.warn(`Parent group ${subsidiary.parentGroupId} not found. Creating new parent group.`);
      const newParent: ParentGroup = {
        id: subsidiary.parentGroupId,
        name: subsidiary.parentGroupId.toUpperCase(),
        status: 'ACTIVE',
        subsidiaries: [normalizedSubsidiary],
        metrics: this.computeMetricsFromSubsidiaries([normalizedSubsidiary]),
      };
      this._parentGroups.set([...groups, newParent]);
      return;
    }

    const parent = groups[parentIndex];
    const existingIndex = parent.subsidiaries.findIndex((sub) => sub.id === subsidiary.id);
    if (existingIndex !== -1) {
      console.warn(`Subsidiary ${subsidiary.id} already exists. Updating instead.`);
      this.updateSubsidiary(normalizedSubsidiary);
      return;
    }

    const updatedSubsidiaries = [...parent.subsidiaries, normalizedSubsidiary];
    const updatedParent: ParentGroup = {
      ...parent,
      subsidiaries: updatedSubsidiaries,
      metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
    };

    const updatedGroups = [...groups];
    updatedGroups[parentIndex] = updatedParent;
    this._parentGroups.set(updatedGroups);
  }

  /**
   * Update an existing subsidiary
   */
  updateSubsidiary(subsidiary: SubsidiaryCompany): void {
    const groups = this._parentGroups();
    const parentIndex = groups.findIndex((group) => group.id === subsidiary.parentGroupId);
    if (parentIndex === -1) {
      console.warn(`Parent group ${subsidiary.parentGroupId} not found. Adding subsidiary instead.`);
      this.addSubsidiary(subsidiary);
      return;
    }

    const parent = groups[parentIndex];
    const subIndex = parent.subsidiaries.findIndex((sub) => sub.id === subsidiary.id);
    if (subIndex === -1) {
      console.warn(`Subsidiary ${subsidiary.id} not found. Adding instead.`);
      this.addSubsidiary(subsidiary);
      return;
    }

    const updatedSubsidiary: SubsidiaryCompany = {
      ...subsidiary,
      metrics: this.computeMetricsFromFactories(subsidiary.factories),
    };

    const updatedSubsidiaries = [...parent.subsidiaries];
    updatedSubsidiaries[subIndex] = updatedSubsidiary;

    const updatedParent: ParentGroup = {
      ...parent,
      subsidiaries: updatedSubsidiaries,
      metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
    };

    const updatedGroups = [...groups];
    updatedGroups[parentIndex] = updatedParent;
    this._parentGroups.set(updatedGroups);
  }

  /**
   * Add a new factory location under a subsidiary
   */
  addFactory(factory: FactoryLocation): void {
    const groups = this._parentGroups();
    const parentIndex = groups.findIndex((group) => group.id === factory.parentGroupId);
    if (parentIndex === -1) {
      console.warn(`Parent group ${factory.parentGroupId} not found. Cannot add factory.`);
      return;
    }

    const parent = groups[parentIndex];
    const subIndex = parent.subsidiaries.findIndex((sub) => sub.id === factory.subsidiaryId);
    if (subIndex === -1) {
      console.warn(`Subsidiary ${factory.subsidiaryId} not found. Cannot add factory.`);
      return;
    }

    const subsidiary = parent.subsidiaries[subIndex];
    if (subsidiary.factories.find((f) => f.id === factory.id)) {
      console.warn(`Factory ${factory.id} already exists. Updating instead.`);
      this.updateFactory(factory);
      return;
    }

    const updatedFactories = [...subsidiary.factories, factory];
    const updatedSubsidiary: SubsidiaryCompany = {
      ...subsidiary,
      factories: updatedFactories,
      metrics: this.computeMetricsFromFactories(updatedFactories),
    };

    const updatedSubsidiaries = [...parent.subsidiaries];
    updatedSubsidiaries[subIndex] = updatedSubsidiary;

    const updatedParent: ParentGroup = {
      ...parent,
      subsidiaries: updatedSubsidiaries,
      metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
    };

    const updatedGroups = [...groups];
    updatedGroups[parentIndex] = updatedParent;
    this._parentGroups.set(updatedGroups);
  }

  /**
   * Update an existing factory location
   */
  updateFactory(factory: FactoryLocation): void {
    const groups = this._parentGroups();
    const parentIndex = groups.findIndex((group) => group.id === factory.parentGroupId);
    if (parentIndex === -1) {
      console.warn(`Parent group ${factory.parentGroupId} not found. Cannot update factory.`);
      return;
    }

    const parent = groups[parentIndex];
    const subIndex = parent.subsidiaries.findIndex((sub) => sub.id === factory.subsidiaryId);
    if (subIndex === -1) {
      console.warn(`Subsidiary ${factory.subsidiaryId} not found. Cannot update factory.`);
      return;
    }

    const subsidiary = parent.subsidiaries[subIndex];
    const factoryIndex = subsidiary.factories.findIndex((f) => f.id === factory.id);
    if (factoryIndex === -1) {
      console.warn(`Factory ${factory.id} not found. Adding instead.`);
      this.addFactory(factory);
      return;
    }

    const updatedFactories = [...subsidiary.factories];
    updatedFactories[factoryIndex] = factory;

    const updatedSubsidiary: SubsidiaryCompany = {
      ...subsidiary,
      factories: updatedFactories,
      metrics: this.computeMetricsFromFactories(updatedFactories),
    };

    const updatedSubsidiaries = [...parent.subsidiaries];
    updatedSubsidiaries[subIndex] = updatedSubsidiary;

    const updatedParent: ParentGroup = {
      ...parent,
      subsidiaries: updatedSubsidiaries,
      metrics: this.computeMetricsFromSubsidiaries(updatedSubsidiaries),
    };

    const updatedGroups = [...groups];
    updatedGroups[parentIndex] = updatedParent;
    this._parentGroups.set(updatedGroups);
  }

  /**
   * Generate a unique subsidiary ID from subsidiary name
   */
  generateSubsidiaryId(subsidiaryName: string): string {
    const slug = subsidiaryName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    // Append timestamp to ensure uniqueness (matching generateFactoryId behavior)
    const timestamp = Date.now();
    return `${slug}-${timestamp}`;
  }

  /**
   * Generate a unique factory ID from factory name
   */
  generateFactoryId(factoryName: string): string {
    const slug = factoryName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const timestamp = Date.now();
    return `factory-${slug}-${timestamp}`;
  }

  /**
   * Backwards-compatible aliases
   */
  generateCompanyId(companyName: string): string {
    return this.generateSubsidiaryId(companyName);
  }

  generateNodeId(companyName: string): string {
    return this.generateFactoryId(companyName);
  }
}
