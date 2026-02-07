import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarRoomMapRoutesComponent, RouteVm } from './war-room-map-routes.component';

describe('WarRoomMapRoutesComponent', () => {
  let fixture: ComponentFixture<WarRoomMapRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarRoomMapRoutesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WarRoomMapRoutesComponent);
  });

  it('binds beginOffset to route animations', () => {
    const route: RouteVm = {
      id: 'route-1',
      path: 'M 0 0 Q 10 10 20 20',
      start: { x: 0, y: 0 },
      end: { x: 20, y: 20 },
      index: 2,
      beginOffset: '0.8s',
      highlighted: false,
      strokeWidth: 2,
      dashArray: '1000',
    };

    fixture.componentRef.setInput('routes', [route]);
    fixture.detectChanges();

    const animate = fixture.nativeElement.querySelector('path.route-path animate') as SVGAnimateElement | null;
    expect(animate?.getAttribute('begin')).toBe('0.8s');
  });
});
