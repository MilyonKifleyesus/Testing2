import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { WarRoomComponent } from './war-room.component';
import { WarRoomMapComponent } from './components/war-room-map/war-room-map.component';
import { WarRoomService } from '../../../shared/services/war-room.service';
import { WarRoomRealtimeService } from '../../../shared/services/war-room-realtime.service';
import { ToastrService } from 'ngx-toastr';
import { AddCompanyModalComponent } from './components/add-company-modal/add-company-modal.component';
import { ActivityLog, FactoryLocation, ParentGroup, SubsidiaryCompany } from '../../../shared/models/war-room.interface';

describe('WarRoomComponent UI (responsive + a11y)', () => {
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

  const buildLog = (factory: FactoryLocation, subsidiary: SubsidiaryCompany, index: number): ActivityLog => ({
    id: `log-${factory.id}-${index}`,
    timestamp: new Date(),
    status: 'ACTIVE',
    title: `${subsidiary.name.toUpperCase()} | ${factory.name.toUpperCase()}`,
    description: `LOG ${index}`,
    parentGroupId: factory.parentGroupId,
    subsidiaryId: factory.subsidiaryId,
    factoryId: factory.id,
    location: `${factory.city}, ${factory.country}`,
  });

  const setViewport = (width: number, height: number): void => {
    if (typeof window.resizeTo === 'function') {
      window.resizeTo(width, height);
    } else {
      Object.defineProperty(window, 'innerWidth', { value: width, configurable: true });
      Object.defineProperty(window, 'innerHeight', { value: height, configurable: true });
    }
    window.dispatchEvent(new Event('resize'));
  };

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

  const resetServiceState = (): void => {
    const serviceAny = warRoomService as any;
    serviceAny._parentGroups.set([]);
    serviceAny._activityLogs.set([]);
    serviceAny._transitRoutes.set([]);
    serviceAny._mapViewMode.set('parent');
    serviceAny._selectedEntity.set(null);
  };

  it('keeps the add modal responsive on mobile', fakeAsync(() => {
    resetServiceState();
    setViewport(360, 640);

    component.onAddCompanyRequested();
    fixture.detectChanges();
    tick(120);
    fixture.detectChanges();

    const modalOverlay = fixture.nativeElement.querySelector('.modal-overlay') as HTMLElement;
    expect(modalOverlay).toBeTruthy();

    const modalComponent = fixture.debugElement.query(By.directive(AddCompanyModalComponent)).componentInstance as AddCompanyModalComponent;
    const overflowLocations = Array.from({ length: 18 }).map((_, index) => ({
      name: `Site ${index + 1}`,
      location: `Location ${index + 1}`,
      status: 'ACTIVE' as const,
    }));
    modalComponent.subLocations.set(overflowLocations);
    modalComponent.description.set('Long description '.repeat(40));
    fixture.detectChanges();

    const modalContainer = modalOverlay.querySelector('.modal-container') as HTMLElement;
    const modalBody = modalOverlay.querySelector('.modal-body') as HTMLElement;
    const modalFooter = modalOverlay.querySelector('.modal-footer') as HTMLElement;

    const containerRect = modalContainer.getBoundingClientRect();
    expect(containerRect.width).toBeLessThanOrEqual(window.innerWidth + 1);
    expect(containerRect.height).toBeLessThanOrEqual(window.innerHeight + 1);

    const bodyStyle = getComputedStyle(modalBody);
    expect(['auto', 'scroll']).toContain(bodyStyle.overflowY);
    expect(modalBody.scrollHeight).toBeGreaterThan(modalBody.clientHeight);

    const footerRect = modalFooter.getBoundingClientRect();
    expect(footerRect.bottom).toBeLessThanOrEqual(containerRect.bottom + 1);

    const containerStyle = getComputedStyle(modalContainer);
    expect(containerStyle.overflow).toBe('hidden');
  }));

  it('handles responsive map panels and filter wrapping', fakeAsync(() => {
    resetServiceState();
    setViewport(480, 720);

    const factories = Array.from({ length: 8 }).map((_, index) =>
      buildFactory({ id: `factory-${index}`, subsidiaryId: 'sub-1', city: `City ${index}` })
    );
    const subsidiary = buildSubsidiary({ id: 'sub-1', factories });
    const parentGroup = buildParentGroup([subsidiary]);

    const serviceAny = warRoomService as any;
    serviceAny._parentGroups.set([parentGroup]);
    serviceAny._activityLogs.set(
      factories.flatMap((factory, index) => Array.from({ length: 3 }).map((_, logIndex) => buildLog(factory, subsidiary, index + logIndex)))
    );

    component.activityLogVisible.set(true);
    component.filterApplied.set({
      parentCompanyIds: ['sub-1', 'sub-2'],
      status: 'active',
      regions: ['North America'],
    });
    fixture.detectChanges();

    const sidebar = fixture.nativeElement.querySelector('.war-room-sidebar') as HTMLElement;
    const sidebarStyle = getComputedStyle(sidebar);
    expect(sidebarStyle.overflowY).toBe('auto');
    expect(sidebar.scrollHeight).toBeGreaterThanOrEqual(sidebar.clientHeight);

    const activeFilters = fixture.nativeElement.querySelector('.active-filters-bar') as HTMLElement;
    expect(getComputedStyle(activeFilters).flexWrap).toBe('wrap');

    document.body.style.zoom = '2';
    fixture.detectChanges();
    tick(0);

    const viewToggle = fixture.nativeElement.querySelector('.map-view-toggle') as HTMLElement;
    const toggleRect = viewToggle.getBoundingClientRect();
    expect(toggleRect.right).toBeLessThanOrEqual(window.innerWidth + 2);
    expect(viewToggle.getBoundingClientRect().width).toBeLessThanOrEqual(window.innerWidth + 2);

    document.body.style.zoom = '';
  }));

  it('exposes keyboard/screen reader attributes and restores focus on ESC', fakeAsync(() => {
    resetServiceState();
    setViewport(1024, 768);

    const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1' });
    const subsidiary = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
    const parentGroup = buildParentGroup([subsidiary]);

    const serviceAny = warRoomService as any;
    serviceAny._parentGroups.set([parentGroup]);
    serviceAny._activityLogs.set([buildLog(factoryA, subsidiary, 0)]);
    warRoomService.setMapViewMode('factory');

    component.activityLogVisible.set(true);
    component.hubStatusVisible.set(true);
    fixture.detectChanges();

    const announcer = fixture.nativeElement.querySelector('.visually-hidden[aria-live="polite"]');
    expect(announcer).toBeTruthy();

    const radiogroup = fixture.nativeElement.querySelector('.btn-group[role="radiogroup"]');
    expect(radiogroup).toBeTruthy();
    const radioButtons = fixture.nativeElement.querySelectorAll('.map-view-btn[role="radio"]');
    expect(radioButtons.length).toBeGreaterThanOrEqual(2);

    const mapControls = fixture.nativeElement.querySelectorAll('.map-control-btn');
    mapControls.forEach((btn: HTMLButtonElement) => {
      expect(btn.getAttribute('aria-label')).toBeTruthy();
    });

    const logEntry = fixture.nativeElement.querySelector('.subsidiary-entry') as HTMLElement;
    expect(logEntry.getAttribute('tabindex')).toBe('0');

    const addButton = fixture.nativeElement.querySelector('.global-override-btn') as HTMLButtonElement;
    addButton.focus();
    component.onAddCompanyRequested();
    fixture.detectChanges();
    tick(120);
    fixture.detectChanges();

    const modalOverlay = fixture.nativeElement.querySelector('.modal-overlay') as HTMLElement;
    expect(modalOverlay.getAttribute('role')).toBe('dialog');
    expect(modalOverlay.getAttribute('aria-modal')).toBe('true');
    expect(modalOverlay.getAttribute('aria-labelledby')).toBe('modal-title');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    tick();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.modal-overlay')).toBeFalsy();
    expect(document.activeElement).toBe(addButton);
  }));
});
