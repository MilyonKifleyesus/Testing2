import { ComponentFixture, TestBed, fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';
import { WarRoomComponent } from './war-room.component';
import { WarRoomMapComponent } from './components/war-room-map/war-room-map.component';
import { WarRoomService } from '../../../shared/services/war-room.service';
import { WarRoomRealtimeService } from '../../../shared/services/war-room-realtime.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AddCompanyModalComponent, CompanyFormData } from './components/add-company-modal/add-company-modal.component';
import {
    ActivityLog,
    FactoryLocation,
    ParentGroup,
    SubsidiaryCompany,
    TransitRoute
} from '../../../shared/models/war-room.interface';

describe('WarRoomComponent Integration', () => {
    let component: WarRoomComponent;
    let fixture: ComponentFixture<WarRoomComponent>;
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

    const buildActivityLog = (factory: FactoryLocation, subsidiary: SubsidiaryCompany): ActivityLog => ({
        id: `log-${factory.id}`,
        timestamp: new Date(),
        status: 'ACTIVE',
        title: `${subsidiary.name.toUpperCase()} | ${factory.name.toUpperCase()}`,
        description: 'TEST LOG ENTRY',
        parentGroupId: factory.parentGroupId,
        subsidiaryId: factory.subsidiaryId,
        factoryId: factory.id,
        location: `${factory.city}, ${factory.country}`,
    });

    beforeEach(async () => {
        spyOn(WarRoomMapComponent.prototype as any, 'createMap').and.returnValue(createMapStub());
        spyOn(WarRoomMapComponent.prototype as any, 'setupResizeObserver').and.stub();
        spyOn(WarRoomMapComponent.prototype as any, 'setupFullscreenListeners').and.stub();
        spyOn(WarRoomMapComponent.prototype as any, 'zoomToEntity').and.stub();
        spyOn(WarRoomMapComponent.prototype as any, 'getNodePosition').and.returnValue({ top: 100, left: 100 });

        // Mock fetch ONLY for initial data load (which happens in constructor)
        spyOn(window, 'fetch').and.callFake(async (input: RequestInfo | URL) => {
            const url = input.toString();
            if (url.includes('war-room-data.json')) {
                return new Response(JSON.stringify(emptyState), { status: 200 });
            }
            return new Response('{}', { status: 404 });
        });

        await TestBed.configureTestingModule({
            imports: [WarRoomComponent, BrowserAnimationsModule],
            providers: [
                WarRoomService,
                { provide: WarRoomRealtimeService, useValue: realtimeServiceMock },
                provideHttpClient(),
                provideHttpClientTesting(),
                { provide: ToastrService, useValue: toastrMock }
            ]
        })
            .compileComponents();

        localStorage.clear();
        fixture = TestBed.createComponent(WarRoomComponent);
        component = fixture.componentInstance;
        warRoomService = TestBed.inject(WarRoomService);

        // Spy on parseLocationInput to avoid external calls and async issues
        spyOn(warRoomService, 'parseLocationInput').and.callFake(async (location) => {
            if (location.includes('Los Angeles')) {
                return { latitude: 34.0522, longitude: -118.2437 };
            }
            return { latitude: 40.7128, longitude: -74.0060 }; // Default NY
        });

        fixture.detectChanges();
        await fixture.whenStable();
    });

    const resetServiceState = (): void => {
        const serviceAny = warRoomService as any;
        serviceAny._parentGroups.set([]);
        serviceAny._transitRoutes.set([]);
        serviceAny._activityLogs.set([]);
        serviceAny._mapViewMode.set('parent');
        serviceAny._selectedEntity.set(null);
    };

    it('should verify sub-location entries appear on the map', fakeAsync(() => {
        resetServiceState();
        const testCompanyData: CompanyFormData = {
            companyName: 'Integration Test Corp',
            location: 'New York, USA',
            status: 'ACTIVE',
            description: 'Test Description',
            subLocations: [
                {
                    name: 'LA Branch',
                    location: 'Los Angeles, USA',
                    status: 'ACTIVE'
                }
            ]
        };

        let done = false;
        component.onCompanyAdded(testCompanyData).then(() => {
            done = true;
        });

        // Flush microtasks (signatures of parseLocationInput mock are async)
        flush();
        tick(100);
        fixture.detectChanges();

        expect(done).toBeTrue();

        const subsidiaries = component.subsidiaries();
        const newSub = subsidiaries.find(s => s.name === 'INTEGRATION TEST CORP');
        expect(newSub).toBeTruthy('Subsidiary should be created');

        if (newSub) {
            expect(newSub.factories.length).toBe(2, 'Should have 2 factories (Main + Sub)');

            const mainFactory = newSub.factories.find(f => f.city.includes('New York'));
            const subFactory = newSub.factories.find(f => f.name.includes('LA Branch'));

            expect(mainFactory).toBeTruthy('Main factory should exist');
            expect(subFactory).toBeTruthy('Sub-location factory should exist');

            expect(mainFactory!.coordinates.latitude).toBeCloseTo(40.7128, 1);

            expect(subFactory!.coordinates.latitude).toBeCloseTo(34.0522, 1);
        }
    }));

    it('completes the add company flow with loading and new connections', fakeAsync(() => {
        resetServiceState();

        const baseFactory = buildFactory({ id: 'factory-base', subsidiaryId: 'sub-1' });
        const baseSubsidiary = buildSubsidiary({ id: 'sub-1', factories: [baseFactory] });
        const baseGroup = buildParentGroup([baseSubsidiary]);
        const baseRoute: TransitRoute = {
            id: 'route-existing',
            from: baseFactory.id,
            to: 'fleetzero',
            fromCoordinates: baseFactory.coordinates,
            toCoordinates: { latitude: 43.6532, longitude: -79.3832 },
            animated: true,
        };

        const serviceAny = warRoomService as any;
        serviceAny._parentGroups.set([baseGroup]);
        serviceAny._transitRoutes.set([baseRoute]);
        warRoomService.setMapViewMode('factory');

        fixture.detectChanges();

        const factoriesBefore = warRoomService.factories().length;
        const routesBefore = warRoomService.transitRoutes().map((route) => route.id);

        let resolveLocation: (value: { latitude: number; longitude: number }) => void;
        const locationPromise = new Promise<{ latitude: number; longitude: number }>((resolve) => {
            resolveLocation = resolve;
        });
        (warRoomService.parseLocationInput as jasmine.Spy).and.returnValue(locationPromise);

        component.onAddCompanyRequested();
        fixture.detectChanges();

        const modalOverlay = fixture.nativeElement.querySelector('.modal-overlay');
        expect(modalOverlay).toBeTruthy();

        const companyInput = modalOverlay.querySelector('#target-company-name') as HTMLInputElement;
        companyInput.value = 'Nova Integration';
        companyInput.dispatchEvent(new Event('input'));

        const locationInput = modalOverlay.querySelector('#target-location') as HTMLInputElement;
        locationInput.value = 'Chicago, USA';
        locationInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        const submitButton = modalOverlay.querySelector('.btn-execute') as HTMLButtonElement;
        submitButton.click();
        fixture.detectChanges();

        expect(component.addCompanyModalVisible()).toBeTrue();
        expect(submitButton.disabled).toBeTrue();
        expect(modalOverlay.querySelector('.spinner-border')).toBeTruthy();

        tick(150);
        fixture.detectChanges();
        expect(component.addCompanyModalVisible()).toBeTrue();

        resolveLocation!({ latitude: 41.8781, longitude: -87.6298 });
        flushMicrotasks();
        tick();
        fixture.detectChanges();

        const modalComponent = fixture.debugElement.query(By.directive(AddCompanyModalComponent)).componentInstance as AddCompanyModalComponent;
        expect(modalComponent.submissionState()).toBe('SUCCESS');

        const factoriesAfter = warRoomService.factories().length;
        expect(factoriesAfter).toBe(factoriesBefore + 1);

        const routesAfter = warRoomService.transitRoutes().map((route) => route.id);
        routesBefore.forEach((id) => expect(routesAfter).toContain(id));
        expect(routesAfter.length).toBeGreaterThan(routesBefore.length);
        expect(routesAfter.some((id) => id.startsWith('route-fleetzero-'))).toBeTrue();

        const markerCount = fixture.nativeElement.querySelectorAll('app-war-room-map-markers .marker-group').length;
        expect(markerCount).toBe(component.filteredNodes().length);

        tick(2000);
        fixture.detectChanges();
        expect(component.addCompanyModalVisible()).toBeFalse();
        expect(fixture.nativeElement.querySelector('.modal-overlay')).toBeFalsy();
    }));

    it('applies and removes filters while keeping other filters intact', fakeAsync(() => {
        resetServiceState();

        const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1', city: 'Austin' });
        const factoryB = buildFactory({ id: 'factory-b', subsidiaryId: 'sub-2', city: 'Denver' });
        const subsidiaryA = buildSubsidiary({ id: 'sub-1', factories: [factoryA] });
        const subsidiaryB = buildSubsidiary({ id: 'sub-2', factories: [factoryB] });
        const parentGroup = buildParentGroup([subsidiaryA, subsidiaryB]);
        const route: TransitRoute = {
            id: 'route-a-b',
            from: factoryA.id,
            to: factoryB.id,
            fromCoordinates: factoryA.coordinates,
            toCoordinates: factoryB.coordinates,
            animated: true,
        };

        const serviceAny = warRoomService as any;
        serviceAny._parentGroups.set([parentGroup]);
        serviceAny._transitRoutes.set([route]);
        warRoomService.setMapViewMode('factory');

        fixture.detectChanges();

        const filterButton = fixture.nativeElement.querySelector('.map-filter-btn') as HTMLButtonElement;
        filterButton.click();
        fixture.detectChanges();

        const companyCheckbox = fixture.nativeElement.querySelector('#parent-filter-sub-1') as HTMLInputElement;
        companyCheckbox.checked = true;
        companyCheckbox.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        const statusButtons = Array.from(fixture.nativeElement.querySelectorAll('.filters-pill-group .btn')) as HTMLButtonElement[];
        const activeStatusButton = statusButtons.find((btn) => btn.textContent?.trim().startsWith('Active'));
        activeStatusButton?.click();
        fixture.detectChanges();

        const applyButton = fixture.nativeElement.querySelector('.filters-actions .btn.btn-primary') as HTMLButtonElement;
        applyButton.click();
        fixture.detectChanges();

        expect(component.filteredNodes().length).toBe(1);
        expect(component.filteredTransitRoutes().length).toBe(0);

        const removeButtons = Array.from(
            fixture.nativeElement.querySelectorAll('.active-filters-bar button')
        ) as HTMLButtonElement[];
        const companyRemove = removeButtons.find((btn) => btn.getAttribute('aria-label')?.includes('Company'));
        companyRemove?.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        const activeFiltersText = fixture.nativeElement.querySelector('.active-filters-bar')?.textContent || '';
        expect(activeFiltersText).toContain('Status: Active Only');

        expect(component.filteredNodes().length).toBe(2);
        expect(component.filteredTransitRoutes().length).toBe(1);
    }));

    it('syncs log selections with map highlighting and persists selection across view toggles', fakeAsync(() => {
        resetServiceState();

        const factoryA = buildFactory({ id: 'factory-a', subsidiaryId: 'sub-1', city: 'Austin' });
        const factoryB = buildFactory({ id: 'factory-b', subsidiaryId: 'sub-1', city: 'Dallas' });
        const subsidiaryA = buildSubsidiary({ id: 'sub-1', factories: [factoryA, factoryB] });
        const parentGroup = buildParentGroup([subsidiaryA]);
        const route: TransitRoute = {
            id: 'route-a-b',
            from: factoryA.id,
            to: factoryB.id,
            fromCoordinates: factoryA.coordinates,
            toCoordinates: factoryB.coordinates,
            animated: true,
        };

        const serviceAny = warRoomService as any;
        serviceAny._parentGroups.set([parentGroup]);
        serviceAny._transitRoutes.set([route]);
        serviceAny._activityLogs.set([
            buildActivityLog(factoryA, subsidiaryA),
            buildActivityLog(factoryB, subsidiaryA),
        ]);
        warRoomService.setMapViewMode('factory');

        component.activityLogVisible.set(true);
        fixture.detectChanges();

        const expandButton = fixture.nativeElement.querySelector('.subsidiary-entry .btn-outline-secondary') as HTMLButtonElement;
        if (expandButton) {
            expandButton.click();
            fixture.detectChanges();
        }

        const factoryEntry = fixture.nativeElement.querySelector('.factory-entry') as HTMLElement;
        if (factoryEntry) {
            factoryEntry.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
            fixture.detectChanges();
        }

        expect(warRoomService.selectedEntity()?.id).toBe(factoryA.id);

        const selectedMarker = fixture.nativeElement.querySelector('app-war-room-map-markers .marker-group.selected');
        expect(selectedMarker).toBeTruthy();

        const mapComponent = fixture.debugElement.query(By.directive(WarRoomMapComponent)).componentInstance as WarRoomMapComponent;
        const nodesWithCoords = (mapComponent as any).getNodesWithValidCoordinates(mapComponent.nodes());
        const features = (mapComponent as any).buildRouteFeatures(nodesWithCoords);
        expect(features.features.some((entry: any) => entry.properties?.highlighted)).toBeTrue();

        component.setMapViewMode('subsidiary');
        fixture.detectChanges();
        component.setMapViewMode('factory');
        fixture.detectChanges();

        expect(warRoomService.selectedEntity()).not.toBeNull();
    }));

    it('projects map coordinates to container pixels using map.project', () => {
        (WarRoomMapComponent.prototype as any).getNodePosition.and.callThrough();
        const factoryNode = buildFactory({ id: 'dom-node', name: 'Map Project' });

        (component as any).markerPixelCoordinates.set(new Map());
        (component as any).mapInstance = {
            project: () => ({ x: 400, y: 200 })
        };

        const pos = (component as any).getNodePosition(factoryNode as any);
        expect(Math.round(pos.left)).toBe(400);
        expect(Math.round(pos.top)).toBe(200);
    });

    it('uses cached marker pixel coordinates when available', () => {
        (WarRoomMapComponent.prototype as any).getNodePosition.and.callThrough();
        const factoryNode = buildFactory({ id: 'cached-node', name: 'Cached' });

        (component as any).markerPixelCoordinates.set(new Map([[factoryNode.id, { x: 123, y: 456 }]]));

        const pos = (component as any).getNodePosition(factoryNode as any);
        expect(Math.round(pos.left)).toBe(123);
        expect(Math.round(pos.top)).toBe(456);
    });


});
