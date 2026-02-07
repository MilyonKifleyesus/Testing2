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
});
