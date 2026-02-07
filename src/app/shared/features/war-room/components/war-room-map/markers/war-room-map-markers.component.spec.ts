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
    displayName: 'NODE ONE',
    shortName: 'NODE ONE',
    subLabel: 'Test City / ACTIVE',
    initials: 'NO',
    hasLogo: true,
    logoPath: '/assets/images/logo.png',
    isSelected: false,
    isHovered: false,
    isHub: false,
    isHQ: false,
    statusKey: 'online',
    statusColor: '#00FF41',
    statusGlow: 'rgba(0, 255, 65, 0.45)',
    statusIconPath: 'M 0 0',
    lodClass: 'lod-medium',
    isPinned: false,
    pinTransform: 'translate(100, 200)',
    pinScale: 1,
    showPinLabel: true,
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

    const pin = fixture.nativeElement.querySelector('.marker-group') as SVGGElement | null;
    expect(pin).toBeTruthy();
    expect(pin?.classList.contains('lod-medium')).toBeTrue();
  });

  it('renders fallback marker when logo is missing', () => {
    fixture.componentRef.setInput('markers', [buildMarker({ hasLogo: false })]);
    fixture.detectChanges();

    const fallback = fixture.nativeElement.querySelector('.marker-initials') as SVGTextElement | null;
    expect(fallback).toBeTruthy();
  });

  it('adds pinned class when marker is pinned', () => {
    fixture.componentRef.setInput('markers', [buildMarker({ isPinned: true })]);
    fixture.detectChanges();

    const pin = fixture.nativeElement.querySelector('.marker-group') as SVGGElement | null;
    expect(pin?.classList.contains('pinned')).toBeTrue();
  });
});
