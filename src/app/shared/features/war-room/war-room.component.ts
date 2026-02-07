import { Component, OnInit, OnDestroy, signal, inject, viewChild, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarRoomService } from '../../../shared/services/war-room.service';
import { WarRoomRealtimeService } from '../../../shared/services/war-room-realtime.service';
import { Node, ActivityLog, FleetSelection, MapViewMode, SubsidiaryCompany, FactoryLocation, NodeStatus, ActivityStatus, TransitRoute } from '../../../shared/models/war-room.interface';
import { WarRoomMapComponent } from './components/war-room-map/war-room-map.component';
import { WarRoomActivityLogComponent } from './components/war-room-activity-log/war-room-activity-log.component';
import { WarRoomHubStatusComponent } from './components/war-room-hub-status/war-room-hub-status.component';
import { AddCompanyModalComponent, CompanyFormData } from './components/add-company-modal/add-company-modal.component';
import { ToastrService } from 'ngx-toastr';
import { OperationalStatus } from '../../../shared/models/war-room.interface';

type FilterStatus = 'all' | 'active' | 'inactive';

export interface ActiveFilterItem {
  type: 'status' | 'region' | 'company';
  label: string;
  value: string;
}

interface WarRoomFilters {
  parentCompanyIds: string[];
  status: FilterStatus;
  regions: string[];
}

const createDefaultFilters = (): WarRoomFilters => ({
  parentCompanyIds: [],
  status: 'all',
  regions: [],
});

@Component({
  selector: 'app-war-room',
  standalone: true,
  imports: [
    CommonModule,
    WarRoomMapComponent,
    WarRoomActivityLogComponent,
    WarRoomHubStatusComponent,
    AddCompanyModalComponent,
  ],
  templateUrl: './war-room.component.html',
  styleUrl: './war-room.component.scss',
})
export class WarRoomComponent implements OnInit, OnDestroy {
  private readonly STORAGE_KEY = 'war-room-filters-v1';
  private lastFocusedElement: HTMLElement | null = null;
  // Inject services
  private warRoomService = inject(WarRoomService);
  private realtimeService = inject(WarRoomRealtimeService);
  private toastr = inject(ToastrService);

  // Signals from service
  readonly nodes = this.warRoomService.nodes;
  readonly activityLogs = this.warRoomService.activityLogs;
  readonly networkMetrics = this.warRoomService.networkMetrics;
  readonly parentGroups = this.warRoomService.parentGroups;
  readonly subsidiaries = this.warRoomService.subsidiaries;
  readonly factories = this.warRoomService.factories;
  readonly mapViewMode = this.warRoomService.mapViewMode;
  readonly transitRoutes = this.warRoomService.transitRoutes;
  readonly selectedEntity = this.warRoomService.selectedEntity;
  readonly selectedSubsidiary = this.warRoomService.selectedSubsidiary;

  // Screen reader announcement message
  readonly announcementMessage = signal<string>('');

  // Activity log visibility - hidden by default
  readonly activityLogVisible = signal<boolean>(false);
  readonly activityLogEditMode = signal<boolean>(false);
  readonly activityLogBusy = signal<boolean>(false);

  // Hub status visibility - hidden by default
  readonly hubStatusVisible = signal<boolean>(false);

  // Sidebar collapse state
  readonly sidebarCollapsed = signal<boolean>(false);

  // Add company modal (over map)
  readonly addCompanyModalVisible = signal<boolean>(false);

  // Filters panel state
  readonly filtersPanelVisible = signal<boolean>(false);
  readonly filterDraft = signal<WarRoomFilters>(createDefaultFilters());
  readonly filterApplied = signal<WarRoomFilters>(createDefaultFilters());

  readonly parentCompanyOptions = computed(() => {
    const statusFilter = this.filterDraft().status;
    return this.subsidiaries()
      .filter((subsidiary) => this.matchesOperationalStatus(subsidiary.status, statusFilter))
      .map((subsidiary) => ({
        id: subsidiary.id,
        name: subsidiary.name,
        count: subsidiary.factories.length,
      }));
  });

  readonly availableRegions = computed(() => {
    const factories = this.factories();
    const regionSet = new Set<string>();
    factories.forEach((factory) => {
      const region = this.getRegionForFactory(factory);
      if (region) {
        regionSet.add(region);
      }
    });

    const preferredOrder = ['North America', 'Europe', 'Asia Pacific', 'LATAM'];
    return preferredOrder.filter((region) => regionSet.has(region));
  });

  readonly activeFilterCount = computed(() => {
    const filters = this.filterApplied();
    let count = filters.parentCompanyIds.length + filters.regions.length;
    if (filters.status !== 'all') {
      count += 1;
    }
    return count;
  });

  readonly activeFilters = computed<ActiveFilterItem[]>(() => {
    const filters = this.filterApplied();
    const items: ActiveFilterItem[] = [];

    // Status
    if (filters.status !== 'all') {
      items.push({
        type: 'status',
        label: `Status: ${filters.status === 'active' ? 'Active Only' : 'Inactive Only'}`,
        value: filters.status
      });
    }

    // Regions
    filters.regions.forEach(region => {
      items.push({
        type: 'region',
        label: `Region: ${region}`,
        value: region
      });
    });

    // Companies
    const subs = this.subsidiaries();
    filters.parentCompanyIds.forEach(id => {
      const sub = subs.find(s => s.id === id);
      const name = sub ? sub.name : 'Unknown Company';
      items.push({
        type: 'company',
        label: `Company: ${name}`,
        value: id
      });
    });

    return items;
  });

  readonly statusCounts = computed(() => {
    const filters = this.filterDraft();
    // Use the current view's nodes as the base to ensure counts match what is possible to see
    const nodes = this.nodes();

    // Apply granular filters (Companies, Regions) AND Status to determine the "universe" of items
    const filteredByContext = nodes.filter((node) => {
      // Special case: FleetZero command hub is always included in the universe? 
      // Usually filters normally apply to it, but for counts it might skew?
      // Let's treat it as a normal node for counting to be accurate to visual representation.

      if (!this.matchesParentCompanyFilterForNode(node, filters.parentCompanyIds)) {
        return false;
      }
      if (!this.matchesRegionsForNode(node, filters.regions)) {
        return false;
      }
      // FIX: Do NOT filter by status here. Counts should represent the current context
      // (company/region filters only) so the All/Active/Inactive pills stay consistent.
      return true;
    });

    let active = 0;
    let inactive = 0;

    filteredByContext.forEach((node) => {
      // Using matchesStatus logic: Active = anything NOT 'OFFLINE'
      if (this.matchesStatus(node.status, 'active')) {
        active++;
      } else {
        inactive++;
      }
    });

    const total = active + inactive;

    console.log('[WarRoom] Status Counts (Dynamic Calculation):', {
      viewMode: this.mapViewMode(),
      filterStatus: filters.status,
      totalItems: nodes.length,
      filteredContext: filteredByContext.length,
      active,
      inactive,
      totalStr: total
    });

    return {
      total,
      active,
      inactive,
    };
  });

  readonly filteredNodes = computed(() => {
    const filters = this.filterApplied();
    const nodes = this.nodes();
    const result = nodes.filter((node) => {
      // Special case: FleetZero command hub is always visible
      if (node.id === 'fleetzero' || node.subsidiaryId === 'fleetzero' || node.name?.toLowerCase().includes('fleetzero')) {
        return true;
      }

      if (!this.matchesParentCompanyFilterForNode(node, filters.parentCompanyIds)) {
        return false;
      }

      if (!this.matchesStatus(node.status, filters.status)) {
        return false;
      }

      if (!this.matchesRegionsForNode(node, filters.regions)) {
        return false;
      }

      return true;
    });

    console.log('[WarRoom] Filtered Result:', {
      appliedFilter: filters.status,
      originalCount: nodes.length,
      resultCount: result.length
    });

    return result;
  });

  readonly filteredParentGroups = computed(() => {
    const filters = this.filterApplied();
    return this.parentGroups().filter((group) => {
      if (!this.matchesParentCompanyFilterForGroup(group, filters.parentCompanyIds)) {
        return false;
      }

      if (!this.matchesOperationalStatus(group.status, filters.status)) {
        return false;
      }

      if (!this.matchesRegionsForParentGroup(group, filters.regions)) {
        return false;
      }

      return true;
    });
  });

  readonly filteredActivityLogs = computed(() => {
    const filters = this.filterApplied();
    const factoryLookup = new Map(this.factories().map((factory) => [factory.id, factory]));
    return this.activityLogs().filter((log) => {
      if (!this.matchesParentCompanyFilterForLog(log, filters.parentCompanyIds)) {
        return false;
      }

      const factory = factoryLookup.get(log.factoryId);
      if (!this.matchesStatus(factory?.status, filters.status)) {
        return false;
      }

      if (!this.matchesRegionsForFactory(factory, filters.regions)) {
        return false;
      }

      return true;
    });
  });

  readonly filteredTransitRoutes = computed(() => {
    const routes = this.transitRoutes();
    const nodes = this.filteredNodes();
    const allNodes = this.nodes();
    const selected = this.selectedEntity();

    const filteredNodeIds = new Set(nodes.map(n => n.id));

    const isValidCoordinates = (coords?: { latitude: number; longitude: number } | null): boolean => {
      if (!coords) return false;
      if (!Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) return false;
      if (coords.latitude === 0 && coords.longitude === 0) return false;
      return true;
    };

    return routes.reduce<TransitRoute[]>((acc, route) => {
      // 1. Resolve System Status
      const fromIsExternal = route.from.startsWith('source-');
      const toIsExternal = route.to.startsWith('source-');
      const fromIsFleetZero = route.from.toLowerCase().includes('fleetzero') || route.from.toLowerCase().includes('fleet-zero');
      const toIsFleetZero = route.to.toLowerCase().includes('fleetzero') || route.to.toLowerCase().includes('fleet-zero');

      // 2. Find Nodes (Level-agnostic resolution)
      const findNode = (id: string) => {
        const nid = id.toLowerCase();
        // 1. Exact match in current nodes
        const directMatch = allNodes.find(n =>
          n.id === id || n.factoryId === id || n.subsidiaryId === id || n.parentGroupId === id
        );
        if (directMatch) return directMatch;

        // 2. Resolve Factory ID to Subsidiary/Parent nodes if we are in a higher-level view
        // Check if ID is a factory
        const factory = this.factories().find(f => f.id === id);
        if (factory) {
          return allNodes.find(n => n.id === factory.subsidiaryId || n.id === factory.parentGroupId);
        }

        // 3. Handle 'source-' and 'fleetzero' strings
        if (nid.includes('fleetzero') || nid.includes('fleet-zero')) {
          return allNodes.find(n => n.id === 'fleetzero' || (n.name && n.name.toLowerCase().includes('fleetzero')));
        }

        if (id.startsWith('source-')) {
          const baseId = id.replace('source-', '');
          return allNodes.find(n => n.id === baseId || n.factoryId === baseId || n.subsidiaryId === baseId);
        }

        return undefined;
      };

      const fromNode = fromIsExternal || fromIsFleetZero ? null : findNode(route.from);
      const toNode = toIsExternal || toIsFleetZero ? null : findNode(route.to);

      const fromCoordinates = fromIsExternal || fromIsFleetZero ? route.fromCoordinates : fromNode?.coordinates;
      const toCoordinates = toIsExternal || toIsFleetZero ? route.toCoordinates : toNode?.coordinates;

      if (!isValidCoordinates(fromCoordinates) || !isValidCoordinates(toCoordinates)) {
        return acc;
      }

      // 3. General Visibility Filter
      // A route is visible if BOTH ends are "active" (either system endpoints or visible nodes)
      const fromVisible = fromIsExternal || fromIsFleetZero || (fromNode && filteredNodeIds.has(fromNode.id));
      const toVisible = toIsExternal || toIsFleetZero || (toNode && filteredNodeIds.has(toNode.id));
      const passesGeneralFilter = fromVisible && toVisible;

      // 4. Selection Focus Mode (Optional refinement)
      if (selected) {
        const selId = selected.id;
        const selSubId = selected.subsidiaryId;
        const selParentId = selected.parentGroupId;

        const matchesEndpoint = (node: any, endpointId: string) => {
          const eid = endpointId.toLowerCase();
          const sid = selId.toLowerCase();

          // Direct ID match
          if (endpointId === selId || endpointId === selSubId || endpointId === selParentId) return true;
          // Handle source- prefix for selection
          if (endpointId === `source-${selId}` || endpointId === `source-${selSubId}`) return true;

          // Logic for system nodes (FleetZero)
          if (eid.includes('fleetzero') && (sid.includes('fleetzero') || selSubId?.toLowerCase().includes('fleetzero'))) return true;

          if (!node) return false;

          // Hierarchy matching
          return node.id === selId || node.subsidiaryId === selId || node.parentGroupId === selId || node.factoryId === selId ||
            (!!selSubId && (node.subsidiaryId === selSubId || node.id === selSubId)) ||
            (!!selParentId && (node.parentGroupId === selParentId || node.id === selParentId)) ||
            (node.id === endpointId); // Final fallback
        };

        const isTargeted = matchesEndpoint(fromNode, route.from) || matchesEndpoint(toNode, route.to);
        const shouldInclude = isTargeted || passesGeneralFilter;
        if (!shouldInclude) return acc;
      } else if (!passesGeneralFilter) {
        return acc;
      }

      acc.push({
        ...route,
        fromCoordinates: fromCoordinates!,
        toCoordinates: toCoordinates!,
      });

      return acc;
    }, []);
  });

  // ViewChild reference to map component
  readonly mapComponent = viewChild.required(WarRoomMapComponent);
  readonly activityLogRef = viewChild<WarRoomActivityLogComponent>(WarRoomActivityLogComponent);

  readonly addCompanyModalRef = viewChild<AddCompanyModalComponent>('addCompanyModalRef');

  // Timeout for zoom effect
  private zoomTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private skipInitialAutoZoom = true;
  private addCompanyInFlight = false;

  constructor() {
    effect(() => {
      const selectedEntity = this.selectedEntity();
      const map = this.mapComponent();
      if (this.skipInitialAutoZoom) {
        this.skipInitialAutoZoom = false;
        return;
      }
      // Clear any existing timeout
      if (this.zoomTimeoutId) {
        clearTimeout(this.zoomTimeoutId);
      }
      if (selectedEntity && selectedEntity.level !== 'parent' && map) {
        this.zoomTimeoutId = setTimeout(() => {
          map.zoomToEntity(selectedEntity.id);
          this.zoomTimeoutId = null;
        }, 100);
      }
      // Cleanup function for effect
      return () => {
        if (this.zoomTimeoutId) {
          clearTimeout(this.zoomTimeoutId);
          this.zoomTimeoutId = null;
        }
      };
    });

    // Save filters on change
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.filterApplied()));
    });
  }

  ngOnInit(): void {
    // Load persisted filters
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.filterApplied.set(parsed);
        this.filterDraft.set(parsed);
      } catch (e) {
        console.warn('Failed to parse saved filters', e);
      }
    }

    // Start real-time updates
    this.realtimeService.startRealTimeUpdates();
  }

  ngOnDestroy(): void {
    // Stop real-time updates
    this.realtimeService.stopRealTimeUpdates();

    // Clear zoom timeout
    if (this.zoomTimeoutId) {
      clearTimeout(this.zoomTimeoutId);
      this.zoomTimeoutId = null;
    }
  }

  /**
   * Handle entity selection from activity log
   */
  onEntitySelected(selection: FleetSelection): void {
    if (selection.level === 'subsidiary' && this.mapViewMode() !== 'subsidiary') {
      return;
    }

    const currentSelection = this.selectedEntity();
    const isSameSelection = currentSelection?.id === selection.id && currentSelection?.level === selection.level;
    this.warRoomService.selectEntity(selection);
    const currentView = this.mapViewMode();
    if (selection.level === 'subsidiary' && currentView === 'subsidiary') {
      const subsidiaryId = selection.subsidiaryId || selection.id;
      this.warRoomService.setFactoryFilterSubsidiaryId(subsidiaryId);
    } else if (selection.level === 'subsidiary') {
      this.warRoomService.setFactoryFilterSubsidiaryId(null);
    }

    // Show activity log when clicking activity log
    this.activityLogVisible.set(true);

    // Zoom is handled by the effect() when the selected entity changes
    // This prevents double-zooming and race conditions
    if (isSameSelection) {
      this.mapComponent().zoomToEntity(selection.id);
    }
  }

  /**
   * Toggle activity log visibility
   */
  toggleActivityLog(): void {
    if (this.sidebarCollapsed()) {
      this.sidebarCollapsed.set(false);
    }
    this.activityLogVisible.update(visible => !visible);
    this.announce(this.activityLogVisible() ? 'Activity log opened.' : 'Activity log hidden.');
  }

  /**
   * Toggle hub status visibility
   */
  toggleHubStatus(): void {
    if (this.sidebarCollapsed()) {
      this.sidebarCollapsed.set(false);
    }
    this.hubStatusVisible.update(visible => !visible);
    this.announce(this.hubStatusVisible() ? 'Hub status opened.' : 'Hub status hidden.');
  }

  toggleSidebarCollapsed(): void {
    this.sidebarCollapsed.update((collapsed) => {
      const next = !collapsed;
      if (next) {
        this.activityLogVisible.set(false);
        this.hubStatusVisible.set(false);
        this.activityLogEditMode.set(false);
      }
      return next;
    });
    this.announce(this.sidebarCollapsed() ? 'Sidebar collapsed.' : 'Sidebar expanded.');
  }

  onSaveChanges(): void {
    const log = this.activityLogRef();
    if (log) {
      this.toastr.info('Submitting operational changes...', 'SYNC IN PROGRESS', {
        timeOut: 2000,
        progressBar: true
      });

      // Commit all drafts - this triggers batchUpdateRequested
      log.saveAllDrafts();

      // We do NOT exit edit mode here anymore.
      // We wait for the batch update to succeed in onBatchUpdateRequested.
    }
  }

  onCancelEdit(): void {
    const log = this.activityLogRef();
    if (log) {
      log.clearAllDrafts();
    }
    this.activityLogEditMode.set(false);
    this.toastr.warning('Operational changes discarded.', 'CANCELLED');
  }


  /**
   * Helper to parse location string into parts
   * Reused from onCompanyAdded
   */
  private parseLocationParts(location: string): { city: string; country: string; fullLocation: string } {
    const parts = location.split(',').map((p) => p.trim());
    let city = parts[0] || '';
    let country = parts.length > 1 ? parts[parts.length - 1] : '';
    // Basic heuristics if country is not explicitly last part
    if (!country && parts.length === 1) {
      // Single string, treat as City
      country = 'Unknown';
    }
    return { city, country, fullLocation: location };
  }

  async onBatchUpdateRequested(payload: {
    factories: Array<{ factoryId: string; name: string; location: string; description: string; status: NodeStatus }>;
    subsidiaries: Array<{ subsidiaryId: string; name: string; location: string; description: string; status: OperationalStatus }>;
  }): Promise<void> {
    this.activityLogBusy.set(true);
    try {
      let updateCount = 0;

      // Process Subsidiary Updates
      for (const sub of payload.subsidiaries) {
        this.warRoomService.updateSubsidiaryDetails(sub.subsidiaryId, {
          name: sub.name,
          location: sub.location,
          description: sub.description,
          status: sub.status
        });
        updateCount++;
      }

      // Process Factory Updates
      for (const fact of payload.factories) {
        // Parse the location string to extract city/country for the update factory payload
        const { city, country, fullLocation } = this.parseLocationParts(fact.location);

        this.warRoomService.updateFactoryDetails(fact.factoryId, {
          name: fact.name,
          city: city,
          country: country,
          locationLabel: fullLocation,
          description: fact.description,
          status: fact.status
        });
        updateCount++;
      }

      if (updateCount > 0) {
        this.toastr.success(`Successfully updated ${updateCount} operational entities.`, 'SYNC COMPLETE');
      } else {
        this.toastr.info('No changes detected to save.', 'SYNC COMPLETE');
      }

      // success! clear drafts and exit mode
      // success! clear drafts and exit mode
      const log = this.activityLogRef();
      log?.clearAllDrafts();
      this.activityLogEditMode.set(false);

    } catch (error) {
      console.error('Batch update failed', error);
      this.toastr.error('Failed to save changes. Please try again.', 'SAVE ERROR');
      // INTENTIONALLY DO NOT CLEAR DRAFTS OR EXIT EDIT MODE
    } finally {
      setTimeout(() => this.activityLogBusy.set(false), 400);
    }
  }

  /**
   * Toggle filters panel visibility
   */
  toggleFiltersPanel(): void {
    const wasOpen = this.filtersPanelVisible();
    if (!wasOpen) {
      this.filterDraft.set({
        parentCompanyIds: [...this.filterApplied().parentCompanyIds],
        status: this.filterApplied().status,
        regions: [...this.filterApplied().regions],
      });
    }
    this.filtersPanelVisible.set(!wasOpen);
  }

  toggleParentCompany(parentGroupId: string): void {
    this.filterDraft.update((filters) => {
      const nextIds = new Set(filters.parentCompanyIds);
      if (nextIds.has(parentGroupId)) {
        nextIds.delete(parentGroupId);
      } else {
        nextIds.add(parentGroupId);
      }
      return { ...filters, parentCompanyIds: Array.from(nextIds) };
    });
  }

  toggleRegion(region: string): void {
    this.filterDraft.update((filters) => {
      const nextRegions = new Set(filters.regions);
      if (nextRegions.has(region)) {
        nextRegions.delete(region);
      } else {
        nextRegions.add(region);
      }
      return { ...filters, regions: Array.from(nextRegions) };
    });
  }

  setStatusFilter(status: FilterStatus): void {
    this.filterDraft.update((filters) => ({ ...filters, status }));
  }

  applyFilters(): void {
    this.filterApplied.set({
      parentCompanyIds: [...this.filterDraft().parentCompanyIds],
      status: this.filterDraft().status,
      regions: [...this.filterDraft().regions],
    });
    this.filtersPanelVisible.set(false);
    this.announce('Filters applied. ' + this.activeFilterCount() + ' filters active.');
  }

  resetFilters(): void {
    this.filterDraft.set(createDefaultFilters());
    this.filterApplied.set(createDefaultFilters());
  }

  clearAllFilters(): void {
    this.resetFilters();
    this.announce('All filters cleared.');
  }

  removeFilter(item: ActiveFilterItem): void {
    const current = this.filterApplied();
    const next = { ...current };

    if (item.type === 'status') {
      next.status = 'all';
    } else if (item.type === 'region') {
      next.regions = next.regions.filter(r => r !== item.value);
    } else if (item.type === 'company') {
      next.parentCompanyIds = next.parentCompanyIds.filter(id => id !== item.value);

      // NEW: Clear selection if the entity is no longer visible (whitelist filter)
      // Only if parentCompanyIds is NOT empty (empty means show all)
      if (next.parentCompanyIds.length > 0) {
        const selection = this.selectedEntity();
        if (selection && (selection.id === item.value || selection.parentGroupId === item.value)) {
          this.warRoomService.selectEntity(null);
          this.announce('Selection cleared as filtered company was removed.');
        }
      }
    }

    this.filterApplied.set(next);
    // Sync draft so reopening the panel shows correct state
    this.filterDraft.set(next);
  }

  /**
   * Switch map view mode (parent / subsidiary / factory)
   */
  setMapViewMode(mode: MapViewMode): void {
    this.warRoomService.setFactoryFilterSubsidiaryId(null);
    this.warRoomService.setMapViewMode(mode);
    this.announce('Switched to ' + mode + ' view.');
  }

  /**
   * Handle node selection from map
   */
  onNodeSelected(node: Node | undefined): void {
    if (node) {
      const nodeLevel = node.level ?? 'factory';
      const selection: FleetSelection = {
        level: nodeLevel,
        id: node.companyId,
        parentGroupId: node.parentGroupId,
        subsidiaryId: node.subsidiaryId,
        factoryId: node.factoryId,
      };
      this.onEntitySelected(selection);
    } else {
      this.warRoomService.selectEntity(null);
    }
  }

  async onFactoryDetailsUpdated(payload: {
    factoryId: string;
    name: string;
    location: string;
    description: string;
    status: NodeStatus;
  }): Promise<void> {
    const name = payload.name.trim() || 'Unnamed Location';
    const location = payload.location.trim();
    const description = payload.description.trim();
    const locationParts = location ? this.parseLocationParts(location) : null;

    let coordinates: { latitude: number; longitude: number } | undefined;
    if (location) {
      try {
        coordinates = await this.warRoomService.parseLocationInput(location);
      } catch (error) {
        console.warn('Failed to parse updated location. Keeping existing coordinates.', error);
      }
    }

    this.warRoomService.updateFactoryDetails(payload.factoryId, {
      name,
      city: locationParts?.city,
      country: locationParts?.country,
      description,
      coordinates,
      locationLabel: location || undefined,
      status: payload.status,
    });
  }

  onSubsidiaryDetailsUpdated(payload: {
    subsidiaryId: string;
    name: string;
    location: string;
    description: string;
    status: SubsidiaryCompany['status'];
  }): void {
    const name = payload.name.trim() || 'Unnamed Company';
    const location = payload.location.trim();
    const description = payload.description.trim();
    this.warRoomService.updateSubsidiaryDetails(payload.subsidiaryId, {
      name,
      location: location || undefined,
      description: description || undefined,
      status: payload.status,
    });
  }

  onSubsidiaryDeleted(subsidiaryId: string): void {
    this.warRoomService.deleteSubsidiary(subsidiaryId);
  }

  onFactoryDeleted(factoryId: string): void {
    this.warRoomService.deleteFactory(factoryId);
  }

  private matchesStatus(status: NodeStatus | undefined, filter: FilterStatus): boolean {
    if (filter === 'all') return true;
    if (!status) return false;
    const isActive = status !== 'OFFLINE';
    return filter === 'active' ? isActive : !isActive;
  }

  private matchesOperationalStatus(status: string, filter: FilterStatus): boolean {
    if (filter === 'all') return true;
    if (filter === 'active') return status === 'ACTIVE';
    return status !== 'ACTIVE';
  }

  private matchesRegionsForNode(node: Node, selectedRegions: string[]): boolean {
    if (selectedRegions.length === 0) return true;
    const regions = this.getRegionsForNode(node);
    if (regions.size === 0) return false;
    return selectedRegions.some((region) => regions.has(region));
  }

  private matchesRegionsForParentGroup(group: { subsidiaries: SubsidiaryCompany[] }, selectedRegions: string[]): boolean {
    if (selectedRegions.length === 0) return true;
    const regions = this.getRegionsForFactories(group.subsidiaries.flatMap((subsidiary) => subsidiary.factories));
    if (regions.size === 0) return false;
    return selectedRegions.some((region) => regions.has(region));
  }

  private matchesRegionsForFactory(factory: FactoryLocation | undefined, selectedRegions: string[]): boolean {
    if (selectedRegions.length === 0) return true;
    if (!factory) return false;
    const region = this.getRegionForFactory(factory);
    return region ? selectedRegions.includes(region) : false;
  }

  private matchesParentCompanyFilterForNode(node: Node, selectedCompanyIds: string[]): boolean {
    if (selectedCompanyIds.length === 0) return true;
    if (node.level === 'subsidiary') {
      return !!node.subsidiaryId && selectedCompanyIds.includes(node.subsidiaryId);
    }
    if (node.level === 'factory') {
      return !!node.subsidiaryId && selectedCompanyIds.includes(node.subsidiaryId);
    }
    if (node.level === 'parent') {
      const parentId = node.parentGroupId || node.companyId;
      if (!parentId) return false;
      const group = this.parentGroups().find((item) => item.id === parentId);
      return group ? group.subsidiaries.some((sub) => selectedCompanyIds.includes(sub.id)) : false;
    }
    return false;
  }

  private matchesParentCompanyFilterForGroup(group: { subsidiaries: SubsidiaryCompany[] }, selectedCompanyIds: string[]): boolean {
    if (selectedCompanyIds.length === 0) return true;
    return group.subsidiaries.some((sub) => selectedCompanyIds.includes(sub.id));
  }

  private matchesParentCompanyFilterForLog(log: ActivityLog, selectedCompanyIds: string[]): boolean {
    if (selectedCompanyIds.length === 0) return true;
    return selectedCompanyIds.includes(log.subsidiaryId);
  }

  private getRegionsForNode(node: Node): Set<string> {
    if (node.level === 'factory' && node.factoryId) {
      const factory = this.factories().find((item) => item.id === node.factoryId);
      return factory ? this.getRegionsForFactories([factory]) : new Set();
    }

    if (node.level === 'subsidiary' && node.subsidiaryId) {
      const subsidiary = this.subsidiaries().find((item) => item.id === node.subsidiaryId);
      return subsidiary ? this.getRegionsForFactories(subsidiary.factories) : new Set();
    }

    if (node.level === 'parent') {
      const parentGroupId = node.parentGroupId || node.companyId;
      const group = this.parentGroups().find((item) => item.id === parentGroupId);
      return group ? this.getRegionsForFactories(group.subsidiaries.flatMap((sub) => sub.factories)) : new Set();
    }

    const region = this.getRegionForCountry(node.country || node.city);
    return region ? new Set([region]) : new Set();
  }

  private getRegionsForFactories(factories: FactoryLocation[]): Set<string> {
    const regions = new Set<string>();
    factories.forEach((factory) => {
      const region = this.getRegionForFactory(factory);
      if (region) {
        regions.add(region);
      }
    });
    return regions;
  }

  private getRegionForFactory(factory: FactoryLocation): string | null {
    return this.getRegionForCountry(factory.country || factory.city);
  }

  private getRegionForCountry(value?: string): string | null {
    if (!value) return null;
    const normalized = value.toLowerCase();

    const northAmerica = [
      'canada',
      'united states',
      'usa',
      'u.s.',
      'us',
      'mexico',
    ];
    if (northAmerica.some((token) => normalized.includes(token))) {
      return 'North America';
    }

    const europe = [
      'france',
      'turkey',
      'germany',
      'italy',
      'spain',
      'sweden',
      'norway',
      'finland',
      'united kingdom',
      'uk',
      'england',
      'scotland',
      'wales',
      'ireland',
      'netherlands',
      'belgium',
      'poland',
      'czech',
      'austria',
      'switzerland',
      'romania',
      'greece',
      'portugal',
    ];
    if (europe.some((token) => normalized.includes(token))) {
      return 'Europe';
    }

    const asiaPacific = [
      'china',
      'japan',
      'korea',
      'south korea',
      'north korea',
      'india',
      'singapore',
      'malaysia',
      'indonesia',
      'philippines',
      'vietnam',
      'thailand',
      'australia',
      'new zealand',
      'taiwan',
      'hong kong',
    ];
    if (asiaPacific.some((token) => normalized.includes(token))) {
      return 'Asia Pacific';
    }

    const latam = [
      'brazil',
      'argentina',
      'chile',
      'colombia',
      'peru',
      'ecuador',
      'venezuela',
      'uruguay',
      'paraguay',
      'bolivia',
      'guatemala',
      'honduras',
      'el salvador',
      'nicaragua',
      'costa rica',
      'panama',
      'dominican',
      'puerto rico',
    ];
    if (latam.some((token) => normalized.includes(token))) {
      return 'LATAM';
    }

    return null;
  }


  onAddCompanyRequested(): void {
    const active = document.activeElement;
    this.lastFocusedElement = active instanceof HTMLElement ? active : null;
    this.addCompanyModalVisible.set(true);
    this.hubStatusVisible.set(true);
    this.announce('Add Company modal opened.');
  }

  onAddCompanyModalClose(): void {
    this.addCompanyModalVisible.set(false);
    this.restoreFocusAfterModalClose();
  }

  async onCompanyAdded(formData: CompanyFormData): Promise<void> {
    if (this.addCompanyInFlight) {
      return;
    }
    if (!formData.companyName?.trim() || !formData.location?.trim()) {
      console.warn('Company name and location are required.');
      this.addCompanyModalRef()?.handleError('Company name and location are required.');
      return;
    }

    try {
      this.addCompanyInFlight = true;
      type SubLocationInput = NonNullable<CompanyFormData['subLocations']>[number];
      const mapSubLocationStatusToNode = (status?: SubLocationInput['status']): NodeStatus => {
        if (status === 'MAINTENANCE') return 'OFFLINE';
        if (status === 'PAUSED') return 'OFFLINE';
        return 'ACTIVE';
      };
      const mapSubLocationStatusToLog = (status?: SubLocationInput['status']): ActivityStatus => {
        if (status === 'MAINTENANCE') return 'WARNING';
        if (status === 'PAUSED') return 'INFO';
        return 'ACTIVE';
      };
      const parseLocationParts = (locationInput: string): { city: string; country?: string; fullLocation: string } => {
        const parts = locationInput
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean);
        const city = parts[0] || locationInput.trim();
        const country = parts.length > 1 ? parts.slice(1).join(', ') : undefined;
        return { city: city || 'Unknown', country, fullLocation: locationInput.trim() };
      };
      const isCoordinateInput = (value: string): boolean => {
        return /^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$/.test(value.trim());
      };
      const clampCoordinate = (value: number, min: number, max: number): number => {
        return Math.min(max, Math.max(min, value));
      };
      const buildFallbackCoordinates = (
        seed: string,
        base: { latitude: number; longitude: number } | null,
        index: number
      ): { latitude: number; longitude: number } => {
        const offsets = [
          { lat: 0.35, lng: 0.2 },
          { lat: -0.28, lng: 0.24 },
          { lat: 0.22, lng: -0.3 },
          { lat: -0.2, lng: -0.22 },
          { lat: 0.4, lng: -0.05 },
        ];
        if (base) {
          const step = offsets[index % offsets.length];
          const scale = 1 + Math.floor(index / offsets.length) * 0.35;
          const latitude = clampCoordinate(base.latitude + step.lat * scale, -85, 85);
          const longitude = clampCoordinate(base.longitude + step.lng * scale, -180, 180);
          return { latitude, longitude };
        }
        const hash = seed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const latitude = clampCoordinate(((hash * 37) % 140) - 70, -85, 85);
        const longitude = clampCoordinate(((hash * 91) % 320) - 160, -180, 180);
        return { latitude, longitude };
      };

      let locationData: { latitude: number; longitude: number } | null = null;
      const mainLocationIsCoords = isCoordinateInput(formData.location);
      try {
        locationData = await this.warRoomService.parseLocationInput(formData.location);
      } catch (error) {
        console.warn('Failed to parse primary location. Using placeholder coordinates.', error);
        locationData = { latitude: 0, longitude: 0 };
      }
      if (!locationData || !Number.isFinite(locationData.latitude) || !Number.isFinite(locationData.longitude)) {
        console.warn('Primary location coordinates invalid. Using placeholder coordinates.');
        locationData = { latitude: 0, longitude: 0 };
      }
      if (locationData.latitude === 0 && locationData.longitude === 0 && !mainLocationIsCoords) {
        locationData = buildFallbackCoordinates(formData.location, null, 0);
      }
      const parentGroupId =
        this.selectedEntity()?.parentGroupId ||
        (this.selectedEntity()?.level === 'parent' ? this.selectedEntity()?.id : null) ||
        this.parentGroups()[0]?.id ||
        'global-group';

      const companyName = formData.companyName.trim();
      const subsidiaryId = this.warRoomService.generateSubsidiaryId(companyName);
      const factoryId = this.warRoomService.generateFactoryId(`${companyName}-${formData.location}`);

      const { city, country, fullLocation } = parseLocationParts(formData.location);
      const hubCode = this.generateHubCode(companyName);
      const logoValue = typeof formData.logo === 'string' ? formData.logo : undefined;

      // Parse source company location if provided
      let sourceLocationData: { latitude: number; longitude: number } | null = null;
      if (formData.sourceLocation?.trim()) {
        try {
          sourceLocationData = await this.warRoomService.parseLocationInput(formData.sourceLocation);
        } catch (error) {
          console.warn('Failed to parse source location. Using placeholder coordinates.', error);
          sourceLocationData = { latitude: 0, longitude: 0 };
        }
        if (!sourceLocationData || !Number.isFinite(sourceLocationData.latitude) || !Number.isFinite(sourceLocationData.longitude)) {
          console.warn('Source location coordinates invalid. Using placeholder coordinates.');
          sourceLocationData = { latitude: 0, longitude: 0 };
        }
      }

      // Create transit route from source company to target company
      const canCreateSourceRoute =
        sourceLocationData &&
        Number.isFinite(sourceLocationData.latitude) &&
        Number.isFinite(sourceLocationData.longitude) &&
        Number.isFinite(locationData.latitude) &&
        Number.isFinite(locationData.longitude);

      if (canCreateSourceRoute) {
        const transitRoute: TransitRoute = {
          id: `route-src-${factoryId}-${Date.now()}`,
          from: `source-${factoryId}`, // Use consistent identifier for external source
          to: factoryId,
          fromCoordinates: {
            latitude: sourceLocationData!.latitude,
            longitude: sourceLocationData!.longitude,
          },
          toCoordinates: {
            latitude: locationData.latitude,
            longitude: locationData.longitude,
          },
          animated: true,
          strokeColor: '#6ee755',
          strokeWidth: 2,
        };

        this.warRoomService.addTransitRoute(transitRoute);
      }

      // Always create an automatic connection to FleetZero HQ
      if (Number.isFinite(locationData.latitude) && Number.isFinite(locationData.longitude)) {
        const fleetZeroRoute: TransitRoute = {
          id: `route-fleetzero-${factoryId}-${Date.now()}`,
          from: factoryId,
          to: 'fleetzero', // Targets the fleetzero hub
          fromCoordinates: {
            latitude: locationData.latitude,
            longitude: locationData.longitude,
          },
          toCoordinates: {
            latitude: 43.6532, // Toronto HQ Latitude
            longitude: -79.3832, // Toronto HQ Longitude
          },
          animated: true,
          strokeColor: formData.status === 'ACTIVE' ? '#00C853' : '#D50000', // Green for active, Red for paused
          strokeWidth: 1.5,
        };
        this.warRoomService.addTransitRoute(fleetZeroRoute);
      }

      const newFactory: FactoryLocation = {
        id: factoryId,
        parentGroupId,
        subsidiaryId,
        name: `${companyName} - ${city}`,
        city: city || 'Unknown',
        country,
        coordinates: { latitude: locationData.latitude, longitude: locationData.longitude },
        status: formData.status === 'ACTIVE' ? 'ONLINE' : 'OFFLINE',
        syncStability: 98,
        assets: 0,
        incidents: 0,
        description: formData.description?.trim() || undefined,
        logo: logoValue,
      };

      const subLocationEntries: SubLocationInput[] = (formData.subLocations ?? [])
        .map((location) => ({
          name: location.name?.trim() || '',
          location: location.location?.trim() || '',
          status: location.status,
        }))
        .filter((location) => location.name.length > 0 && location.location.length > 0);

      const additionalFactories: FactoryLocation[] = [];
      const additionalLogs: ActivityLog[] = [];

      for (const [index, subLocation] of subLocationEntries.entries()) {
        let subLocationCoords: { latitude: number; longitude: number } = { latitude: 0, longitude: 0 };
        const subLocationIsCoords = isCoordinateInput(subLocation.location);
        try {
          subLocationCoords = await this.warRoomService.parseLocationInput(subLocation.location);
        } catch (error) {
          console.warn(`Failed to parse sub-location "${subLocation.location}". Using placeholder coordinates.`, error);
        }
        if (subLocationCoords.latitude === 0 && subLocationCoords.longitude === 0 && !subLocationIsCoords) {
          subLocationCoords = buildFallbackCoordinates(
            subLocation.location,
            locationData ? { latitude: locationData.latitude, longitude: locationData.longitude } : null,
            index
          );
        }

        const { city: subCity, country: subCountry, fullLocation: subFullLocation } = parseLocationParts(subLocation.location);
        const subFactoryId = this.warRoomService.generateFactoryId(
          `${companyName}-${subLocation.name}-${subLocation.location}`
        );
        const factoryName = subLocation.name || `${companyName} - ${subCity}`;
        const factoryStatus = mapSubLocationStatusToNode(subLocation.status);

        const subFactory: FactoryLocation = {
          id: subFactoryId,
          parentGroupId,
          subsidiaryId,
          name: factoryName,
          city: subCity || 'Unknown',
          country: subCountry,
          coordinates: subLocationCoords,
          status: factoryStatus,
          syncStability: factoryStatus === 'OFFLINE' ? 72 : factoryStatus === 'ONLINE' ? 88 : 96,
          assets: 0,
          incidents: 0,
          description: formData.description?.trim() || undefined,
          logo: logoValue,
        };

        additionalFactories.push(subFactory);

        // Create connection from Sub-location to Parent Hub (Main Location)
        if (Number.isFinite(subLocationCoords.latitude) && Number.isFinite(subLocationCoords.longitude) &&
          Number.isFinite(locationData.latitude) && Number.isFinite(locationData.longitude)) {
          const subLocationRoute: TransitRoute = {
            id: `route-hub-${subFactoryId}-${Date.now()}`,
            from: subFactoryId,
            to: factoryId, // Connect to the main factory acting as the hub
            fromCoordinates: {
              latitude: subLocationCoords.latitude,
              longitude: subLocationCoords.longitude,
            },
            toCoordinates: {
              latitude: locationData.latitude,
              longitude: locationData.longitude,
            },
            animated: true,
            strokeColor: '#0ea5e9', // Blue connection
            strokeWidth: 1.5,
            dashArray: '3,3',
          };
          this.warRoomService.addTransitRoute(subLocationRoute);
        }

        const logStatus = mapSubLocationStatusToLog(subLocation.status);
        const logTitle = `${companyName.toUpperCase()} | ${factoryName.toUpperCase()}`;
        const logDescription =
          logStatus === 'WARNING'
            ? 'SUB-LOCATION MAINTENANCE // CREW DISPATCHED'
            : logStatus === 'INFO'
              ? 'SUB-LOCATION PAUSED // STANDBY MODE'
              : 'SUB-LOCATION ONLINE // SYNC CONFIRMED';

        additionalLogs.push({
          id: `log-${subFactoryId}`,
          timestamp: new Date(),
          status: logStatus,
          title: logTitle,
          description: logDescription,
          parentGroupId,
          subsidiaryId,
          factoryId: subFactoryId,
          location: subFullLocation,
          logo: logoValue,
        });
      }

      const newSubsidiary: SubsidiaryCompany = {
        id: subsidiaryId,
        parentGroupId,
        name: companyName.toUpperCase(),
        status: formData.status === 'ACTIVE' ? 'ACTIVE' : 'PAUSED',
        metrics: { assetCount: 0, incidentCount: 0, syncStability: 98 },
        factories: [newFactory, ...additionalFactories],
        hubs: [
          {
            id: `hub-${subsidiaryId}-${Date.now()}`,
            code: hubCode,
            companyId: subsidiaryId,
            companyName: companyName.toUpperCase(),
            status: 'ONLINE',
            capacity: '100% CAP',
            capacityPercentage: 100,
            statusColor: 'text-tactical-green',
            capColor: 'text-tactical-green',
          },
        ],
        quantumChart: { dataPoints: [85, 88, 90, 92, 89, 91], highlightedIndex: 3 },
        logo: logoValue,
        description: formData.description?.trim() || undefined,
        location: fullLocation || undefined,
      };

      this.warRoomService.addSubsidiary(newSubsidiary);

      const activityLog: ActivityLog = {
        id: `log-${factoryId}`,
        timestamp: new Date(),
        status: 'ACTIVE',
        title: `${companyName.toUpperCase()} | ${city.toUpperCase()}`,
        description: formData.description?.trim() || 'SYSTEM REGISTERED // FACTORY INITIALIZED',
        parentGroupId,
        subsidiaryId,
        factoryId,
        location: fullLocation,
        logo: logoValue,
      };

      this.warRoomService.addActivityLog(activityLog);
      additionalLogs.forEach((log) => this.warRoomService.addActivityLog(log));

      // Ensure filters don't hide the newly added locations.
      this.filterDraft.set(createDefaultFilters());
      this.filterApplied.set(createDefaultFilters());
      this.warRoomService.setFactoryFilterSubsidiaryId(null);

      // Signal success to modal
      this.addCompanyModalRef()?.handleSuccess(
        `Successfully connected ${formData.companyName} with ${1 + (formData.subLocations?.length || 0)} locations.`
      );

      // Show success notification
      const totalLocations = 1 + (formData.subLocations?.length || 0);
      this.toastr.success(`Successfully connected ${formData.companyName} with ${totalLocations} locations.`, 'BOOTSTRAP COMPLETE', {
        timeOut: 5000,
        progressBar: true,
        closeButton: true
      });

      this.warRoomService.setMapViewMode('factory');
      this.warRoomService.selectEntity({ level: 'factory', id: factoryId, parentGroupId, subsidiaryId, factoryId });
      this.warRoomService.requestPanToEntity(factoryId);
      this.activityLogVisible.set(true);

      this.announce('Company ' + formData.companyName + ' added successfully.');

      // Delayed close
      this.addCompanyModalRef()?.closeAfterSuccess();
    } catch (error) {
      console.error('Critical error adding company:', error);
      const errorMsg = error instanceof Error ? error.message : 'A fatal system error occurred during registration.';
      this.addCompanyModalRef()?.handleError('Failed to add subsidiary. Please try again.');
      this.toastr.error(errorMsg, 'REGISTRATION FAILED', {
        timeOut: 8000,
        closeButton: true,
        disableTimeOut: true
      });
    } finally {
      this.addCompanyInFlight = false;
    }
  }

  private generateHubCode(companyName: string): string {
    const words = companyName.toUpperCase().split(/\s+/);
    if (words.length >= 2) {
      const firstChar = words[0][0] ?? '';
      const secondWord = words[1];
      const secondChar = secondWord.charAt(0) ?? '';
      const thirdChar = secondWord.length > 1 ? secondWord.charAt(1) : secondWord.charAt(0);
      return (firstChar + secondChar + thirdChar).substring(0, 3);
    }
    return companyName.toUpperCase().substring(0, 3).padEnd(3, 'X');
  }

  private announce(message: string): void {
    this.announcementMessage.set(message);
    // clear after a delay so it can be re-announced if needed
    setTimeout(() => this.announcementMessage.set(''), 3000);
  }

  private restoreFocusAfterModalClose(): void {
    const element = this.lastFocusedElement;
    this.lastFocusedElement = null;
    if (element && element.isConnected && typeof element.focus === 'function') {
      setTimeout(() => element.focus(), 0);
    }
  }
}
