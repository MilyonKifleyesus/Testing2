import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarRoomComponent } from './war-room.component';
import { WarRoomMapComponent } from './components/war-room-map/war-room-map.component';
import { WarRoomService } from '../../../shared/services/war-room.service';
import { WarRoomRealtimeService } from '../../../shared/services/war-room-realtime.service';
import { ToastrService } from 'ngx-toastr';
import {
  FactoryLocation,
  ParentGroup,
  SubsidiaryCompany,
  TransitRoute,
} from '../../../shared/models/war-room.interface';

describe('WarRoomComponent (unit)', () => {
  let fixture: ComponentFixture<WarRoomComponent>;
  let component: WarRoomComponent;
  let warRoomService: WarRoomService;

  const realtimeServiceMock = {
    startRealTimeUpdates: jasmine.createSpy('startRealTimeUpdates'),
    stopRealTimeUpdates: jasmine.createSpy('stopRealTimeUpdates'),
  };

  const toastrMock = {
    info: jasmine.createSpy('info'),
    warning: jasmine.createSpy('warning'),
    success: jasmine.createSpy('success'),
    error: jasmine.createSpy('error'),
  };

  const createMapStub = () => ({
    on: jasmine.createSpy('on').and.callFake((event: string, cb: () => void) => {
      if (event === 'load' && typeof cb === 'function') {
        cb();
      }
    }),
    project: jasmine.createSpy('project').and.returnValue({ x: 100, y: 100 }),
    resize: jasmine.createSpy('resize'),
    remove: jasmine.createSpy('remove'),
    getContainer: () => ({
      getBoundingClientRect: () => ({ left: 0, top: 0, right: 800, bottom: 400, width: 800, height: 400 } as DOMRect)
    }),
    getZoom: jasmine.createSpy('getZoom').and.returnValue(4),
    addSource: jasmine.createSpy('addSource'),
    addLayer: jasmine.createSpy('addLayer'),
    getSource: jasmine.createSpy('getSource').and.returnValue(null),
    getLayer: jasmine.createSpy('getLayer').and.returnValue(null),
    setPaintProperty: jasmine.createSpy('setPaintProperty'),
    easeTo: jasmine.createSpy('easeTo'),
    flyTo: jasmine.createSpy('flyTo'),
    zoomIn: jasmine.createSpy('zoomIn'),
    zoomOut: jasmine.createSpy('zoomOut'),
  });

  const emptyState = {
    parentGroups: [],
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
    mapViewMode: 'parent',
    selectedEntity: null,
  };

  const computeMetricsFromFactories = (factories: FactoryLocation[]) => {
    const assetCount = factories.reduce((sum, factory) => sum + factory.assets, 0);
    const incidentCount = factories.reduce((sum, factory) => sum + factory.incidents, 0);
    const weightTotal = factories.reduce((sum, factory) => sum + (factory.assets || 1), 0);
    const weightedSync = factories.reduce(
      (sum, factory) => sum + factory.syncStability * (factory.assets || 1),
      0
    );
    const syncStability = weightTotal > 0 ? Math.round((weightedSync / weightTotal) * 10) / 10 : 0;
    return { assetCount, incidentCount, syncStability };
  };

  const computeMetricsFromSubsidiaries = (subsidiaries: SubsidiaryCompany[]) => {
    const assetCount = subsidiaries.reduce((sum, sub) => sum + sub.metrics.assetCount, 0);
    const incidentCount = subsidiaries.reduce((sum, sub) => sum + sub.metrics.incidentCount, 0);
    const weightTotal = subsidiaries.reduce((sum, sub) => sum + (sub.metrics.assetCount || 1), 0);
    const weightedSync = subsidiaries.reduce(
      (sum, sub) => sum + sub.metrics.syncStability * (sub.metrics.assetCount || 1),
      0
    );
    const syncStability = weightTotal > 0 ? Math.round((weightedSync / weightTotal) * 10) / 10 : 0;
    return { assetCount, incidentCount, syncStability };
  };

  const buildFactory = (overrides: Partial<FactoryLocation>): FactoryLocation => ({
    id: overrides.id || 'factory-a',
    parentGroupId: overrides.parentGroupId || 'group-1',
    subsidiaryId: overrides.subsidiaryId || 'sub-1',
    name: overrides.name || 'Factory A',
    city: overrides.city || 'Toronto',
    country: overrides.country || 'Canada',
    coordinates: overrides.coordinates || { latitude: 43.6532, longitude: -79.3832 },
    status: overrides.status || 'ACTIVE',
    syncStability: overrides.syncStability ?? 96,
    assets: overrides.assets ?? 10,
    incidents: overrides.incidents ?? 0,
    description: overrides.description,
    logo: overrides.logo,
  });

  const buildSubsidiary = (overrides: Partial<SubsidiaryCompany>): SubsidiaryCompany => {
    const factories = overrides.factories || [buildFactory({ subsidiaryId: overrides.id || 'sub-1' })];
    const id = overrides.id || 'sub-1';
    return {
      id,
      parentGroupId: overrides.parentGroupId || 'group-1',
      name: overrides.name || id.toUpperCase(),
      status: overrides.status || 'ACTIVE',
      factories,
      metrics: computeMetricsFromFactories(factories),
      hubs: overrides.hubs || [
        {
          id: `hub-${id}`,
          code: id.substring(0, 3).toUpperCase(),
          companyId: id,
          companyName: id.toUpperCase(),
          status: 'ONLINE',
          capacity: '100% CAP',
          capacityPercentage: 100,
          statusColor: 'text-ok',
          capColor: 'text-ok',
        },
      ],
      quantumChart: overrides.quantumChart || { dataPoints: [80, 82, 84, 86, 88, 90], highlightedIndex: 2 },
      description: overrides.description,
      location: overrides.location,
      logo: overrides.logo,
    };
  };

  const buildParentGroup = (subsidiaries: SubsidiaryCompany[]): ParentGroup => ({
    id: 'group-1',
    name: 'Group One',
    status: 'ACTIVE',
    subsidiaries,
    metrics: computeMetricsFromSubsidiaries(subsidiaries),
    description: 'Test group',
  });

  beforeEach(async () => {
    spyOn(WarRoomMapComponent.prototype as any, 'createMap').and.returnValue(createMapStub());
    spyOn(WarRoomMapComponent.prototype as any, 'setupResizeObserver').and.stub();
    spyOn(WarRoomMapComponent.prototype as any, 'setupFullscreenListeners').and.stub();
    spyOn(WarRoomMapComponent.prototype as any, 'zoomToEntity').and.stub();
    spyOn(WarRoomMapComponent.prototype as any, 'getNodePosition').and.returnValue({ top: 100, left: 100 });

    spyOn(window, 'fetch').and.callFake(async () => {
      return new Response(JSON.stringify(emptyState), { status: 200 });
    });

    await TestBed.configureTestingModule({
      imports: [WarRoomComponent, BrowserAnimationsModule],
      providers: [
        WarRoomService,
        { provide: WarRoomRealtimeService, useValue: realtimeServiceMock },
        { provide: ToastrService, useValue: toastrMock },
      ],
    }).compileComponents();

    localStorage.clear();
    fixture = TestBed.createComponent(WarRoomComponent);
    component = fixture.componentInstance;
    warRoomService = TestBed.inject(WarRoomService);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  const setServiceState = (parentGroups: ParentGroup[], routes: TransitRoute[]) => {
    const serviceAny = warRoomService as any;
    serviceAny._parentGroups.set(parentGroups);
    serviceAny._transitRoutes.set(routes);
  };

  it('recomputes connections when companies list changes', () => {
    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const subsidiary = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const parentGroup = buildParentGroup([subsidiary]);
    const route: TransitRoute = {
      id: 'route-a-b',
      from: 'factory-a',
      to: 'factory-b',
      fromCoordinates: { latitude: 43.6532, longitude: -79.3832 },
      toCoordinates: { latitude: 34.0522, longitude: -118.2437 },
      animated: true,
    };

    setServiceState([parentGroup], [route]);
    warRoomService.setMapViewMode('factory');
    fixture.detectChanges();

    expect(component.filteredTransitRoutes().length).toBe(0);

    const factoryB = buildFactory({ id: 'factory-b', subsidiaryId: 'sub-1', city: 'Los Angeles' });
    const updatedSubsidiary = buildSubsidiary({ id: 'sub-1', factories: [factoryA, factoryB] });
    const updatedGroup = buildParentGroup([updatedSubsidiary]);
    setServiceState([updatedGroup], [route]);
    fixture.detectChanges();

    expect(component.filteredTransitRoutes().length).toBe(1);
  });

  it('updates connections when filters change', () => {
    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const factoryB = buildFactory({ id: 'factory-b', subsidiaryId: 'sub-2', city: 'Denver' });
    const subsidiaryA = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const subsidiaryB = buildSubsidiary({ id: 'sub-2', factories: [factoryB] });
    const parentGroup = buildParentGroup([subsidiaryA, subsidiaryB]);
    const route: TransitRoute = {
      id: 'route-a-b',
      from: 'factory-a',
      to: 'factory-b',
      fromCoordinates: factoryA.coordinates,
      toCoordinates: factoryB.coordinates,
      animated: true,
    };

    setServiceState([parentGroup], [route]);
    warRoomService.setMapViewMode('factory');
    fixture.detectChanges();

    expect(component.filteredTransitRoutes().length).toBe(1);

    component.filterApplied.set({ parentCompanyIds: ['sub-1'], status: 'all', regions: [] });
    fixture.detectChanges();

    expect(component.filteredTransitRoutes().length).toBe(0);
  });

  it('returns empty connections when filters remove all companies', () => {
    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const subsidiary = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const parentGroup = buildParentGroup([subsidiary]);
    const route: TransitRoute = {
      id: 'route-a',
      from: 'factory-a',
      to: 'factory-a',
      fromCoordinates: factoryA.coordinates,
      toCoordinates: factoryA.coordinates,
      animated: true,
    };

    setServiceState([parentGroup], [route]);
    warRoomService.setMapViewMode('factory');
    fixture.detectChanges();

    component.filterApplied.set({ parentCompanyIds: ['nonexistent'], status: 'all', regions: [] });
    fixture.detectChanges();

    expect(component.filteredNodes().length).toBe(0);
    expect(component.filteredTransitRoutes().length).toBe(0);
  });

  it('selecting a company sets selectedEntity', () => {
    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const subsidiary = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const parentGroup = buildParentGroup([subsidiary]);
    setServiceState([parentGroup], []);
    warRoomService.setMapViewMode('factory');
    fixture.detectChanges();

    component.onEntitySelected({
      level: 'factory',
      id: factoryA.id,
      parentGroupId: factoryA.parentGroupId,
      subsidiaryId: factoryA.subsidiaryId,
      factoryId: factoryA.id,
    });

    expect(warRoomService.selectedEntity()?.id).toBe(factoryA.id);
  });

  it('clears selection when a filter removes the selected company', () => {
    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const factoryB = buildFactory({ id: 'factory-b', subsidiaryId: 'sub-2', city: 'Chicago' });
    const subsidiaryA = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const subsidiaryB = buildSubsidiary({ id: 'sub-2', factories: [factoryB] });
    const parentGroup = buildParentGroup([subsidiaryA, subsidiaryB]);
    setServiceState([parentGroup], []);
    warRoomService.setMapViewMode('subsidiary');
    warRoomService.selectEntity({
      level: 'subsidiary',
      id: 'sub-1',
      parentGroupId: 'group-1',
      subsidiaryId: 'sub-1',
    });
    fixture.detectChanges();

    component.filterApplied.set({ parentCompanyIds: ['sub-1', 'sub-2'], status: 'all', regions: [] });
    fixture.detectChanges();

    component.removeFilter({ type: 'company', label: 'Company: SUB-1', value: 'sub-1' });
    fixture.detectChanges();

    expect(warRoomService.selectedEntity()).toBeNull();
  });

  it('adding a company does not reset selection unless specified', () => {
    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const subsidiaryA = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const parentGroup = buildParentGroup([subsidiaryA]);
    setServiceState([parentGroup], []);

    warRoomService.selectEntity({
      level: 'factory',
      id: factoryA.id,
      parentGroupId: factoryA.parentGroupId,
      subsidiaryId: factoryA.subsidiaryId,
      factoryId: factoryA.id,
    });

    const newFactory = buildFactory({ id: 'factory-b', subsidiaryId: 'sub-2', parentGroupId: 'group-1' });
    const subsidiaryB = buildSubsidiary({
      id: 'sub-2',
      parentGroupId: 'group-1',
      factories: [newFactory],
    });

    warRoomService.addSubsidiary(subsidiaryB);
    fixture.detectChanges();

    expect(warRoomService.selectedEntity()?.id).toBe(factoryA.id);
  });
});
