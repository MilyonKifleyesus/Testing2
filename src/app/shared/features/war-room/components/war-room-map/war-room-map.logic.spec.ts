import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { signal } from '@angular/core';
import { WarRoomMapComponent } from './war-room-map.component';
import { WarRoomMapMathService } from './services/war-room-map-math.service';
import { WarRoomService } from '../../../../../shared/services/war-room.service';
import { AppStateService } from '../../../../../shared/services/app-state.service';

describe('WarRoomMapComponent logic helpers', () => {
  let component: WarRoomMapComponent;
  let mathService: WarRoomMapMathService;

  beforeEach(async () => {
    const warRoomServiceMock = {
      panToEntity: signal(null),
      hoveredEntity: signal(null),
      factories: signal([]),
      setHoveredEntity: jasmine.createSpy('setHoveredEntity'),
    };

    const appStateServiceMock = {
      state$: new BehaviorSubject({
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
        backgroundImage: '',
      }),
    };

    await TestBed.configureTestingModule({
      imports: [WarRoomMapComponent],
      providers: [
        { provide: WarRoomService, useValue: warRoomServiceMock },
        { provide: AppStateService, useValue: appStateServiceMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(WarRoomMapComponent);
    component = fixture.componentInstance;
    mathService = TestBed.inject(WarRoomMapMathService);
  });

  it('getPinLodState returns logo-only below the logo threshold', () => {
    const state = (component as any).getPinLodState(1.0, false);
    expect(state.isLogoOnly).toBeTrue();
    expect(state.isCompactLogo).toBeFalse();
    expect(state.isFullDetail).toBeFalse();
    expect(state.lodClass).toBe('lod-low');
  });

  it('getPinLodState returns compact between thresholds', () => {
    const state = (component as any).getPinLodState(1.5, false);
    expect(state.isLogoOnly).toBeFalse();
    expect(state.isCompactLogo).toBeTrue();
    expect(state.isFullDetail).toBeFalse();
    expect(state.lodClass).toBe('lod-medium');
  });

  it('getPinLodState returns full at or above full-detail threshold', () => {
    const state = (component as any).getPinLodState(3.0, false);
    expect(state.isLogoOnly).toBeFalse();
    expect(state.isCompactLogo).toBeFalse();
    expect(state.isFullDetail).toBeTrue();
    expect(state.lodClass).toBe('lod-high');
  });

  it('getPinLodState forces full detail when selected', () => {
    const state = (component as any).getPinLodState(1.0, true);
    expect(state.isFullDetail).toBeTrue();
    expect(state.lodClass).toBe('lod-high');
  });

  it('projectLatLngToMapSpace scales linearly with viewBox size', () => {
    const baseViewBox = { x: 0, y: 0, width: 950, height: 550 };
    const scaledViewBox = { x: 0, y: 0, width: 1900, height: 1100 };

    const basePoint = mathService.projectLatLngToMapSpace(10, 20, baseViewBox);
    const scaledPoint = mathService.projectLatLngToMapSpace(10, 20, scaledViewBox);

    expect(scaledPoint.x).toBeCloseTo(basePoint.x * 2, 4);
    expect(scaledPoint.y).toBeCloseTo(basePoint.y * 2, 4);
  });

  it('projectLatLngToMapSpace respects viewBox offsets', () => {
    const baseViewBox = { x: 0, y: 0, width: 950, height: 550 };
    const offsetViewBox = { x: -100, y: -50, width: 950, height: 550 };

    const basePoint = mathService.projectLatLngToMapSpace(10, 20, baseViewBox);
    const offsetPoint = mathService.projectLatLngToMapSpace(10, 20, offsetViewBox);

    expect(offsetPoint.x).toBeCloseTo(basePoint.x - 100, 4);
    expect(offsetPoint.y).toBeCloseTo(basePoint.y - 50, 4);
  });

  it('buildRouteFeatures resolves coordinates and defaults strokeWidth', () => {
    const nodeA = {
      id: 'factory-1',
      name: 'Factory One',
      company: 'Factory One',
      companyId: 'factory-1',
      city: 'Alpha',
      coordinates: { latitude: 10, longitude: 20 },
      type: 'Factory',
      status: 'ACTIVE',
      level: 'factory',
    } as any;

    const nodeB = {
      id: 'factory-2',
      name: 'Factory Two',
      company: 'Factory Two',
      companyId: 'factory-2',
      city: 'Beta',
      coordinates: { latitude: 30, longitude: 40 },
      type: 'Factory',
      status: 'ACTIVE',
      level: 'factory',
    } as any;

    (component as any).nodes = signal([nodeA, nodeB]);
    (component as any).selectedEntity = signal({ level: 'factory', id: 'factory-1' });
    (component as any).transitRoutes = signal([{
      id: 'route-1',
      from: 'factory-1',
      to: 'factory-2',
      fromCoordinates: { latitude: 10, longitude: 20 },
      toCoordinates: { latitude: 30, longitude: 40 },
    }]);

    const features = (component as any).buildRouteFeatures([nodeA, nodeB]);
    expect(features.features.length).toBe(1);
    expect(features.features[0].geometry.coordinates[0]).toEqual([20, 10]);
    expect(features.features[0].geometry.coordinates[1]).toEqual([40, 30]);
    expect(features.features[0].properties.strokeWidth).toBe(1.5);
    expect(features.features[0].properties.highlighted).toBeTrue();
  });
});
