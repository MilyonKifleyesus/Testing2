import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarRoomMapMarkersComponent, MarkerVm } from './war-room-map-markers.component';
import { Node as WarRoomNode } from '../../../../../../shared/models/war-room.interface';

describe('WarRoomMapMarkersComponent', () => {
  let fixture: ComponentFixture<WarRoomMapMarkersComponent>;

  const baseNode: WarRoomNode = {
    id: 'node-1',
    name: 'Node One',
    company: 'Node One',
    companyId: 'node-1',
    city: 'Test City',
    coordinates: { latitude: 10, longitude: 20 },
    type: 'Facility',
    status: 'ACTIVE',
  };

  const buildMarker = (overrides: Partial<MarkerVm>): MarkerVm => ({
    id: 'node-1',
    node: baseNode,
    mapX: 100,
    mapY: 200,
    displayName: 'NODE ONE',
    ariaLabel: 'Node One',
    hasLogo: true,
    logoPath: '/assets/images/logo.png',
    isSelected: false,
    isHovered: false,
    isHub: false,
    lodClass: 'lod-medium',
    pinTransform: 'translate(100, 200) scale(1)',
    pinBodyPath: 'M 0 0',
    pinLogoX: 0,
    pinLogoY: 0,
    pinLogoSize: 12,
    pinLabelX: 0,
    pinLabelY: 0,
    pinLabelText: 'NODE ONE',
    showPinBody: true,
    showPinGloss: true,
    showPinLabel: true,
    showPinHalo: false,
    showBgMarker: false,
    ...overrides,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarRoomMapMarkersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WarRoomMapMarkersComponent);
  });

  it('applies LOD class to logo pins', () => {
    fixture.componentRef.setInput('markers', [buildMarker({ lodClass: 'lod-medium' })]);
    fixture.detectChanges();

    const pin = fixture.nativeElement.querySelector('.pin-marker') as SVGGElement | null;
    expect(pin).toBeTruthy();
    expect(pin?.classList.contains('lod-medium')).toBeTrue();
  });

  it('renders fallback marker when logo is missing', () => {
    fixture.componentRef.setInput('markers', [buildMarker({ hasLogo: false })]);
    fixture.detectChanges();

    const fallback = fixture.nativeElement.querySelector('.node-marker-wrapper') as SVGGElement | null;
    expect(fallback).toBeTruthy();
  });
});
