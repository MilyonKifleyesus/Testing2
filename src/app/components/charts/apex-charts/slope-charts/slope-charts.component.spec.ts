import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlopeChartsComponent } from './slope-charts.component';

describe('SlopeChartsComponent', () => {
  let component: SlopeChartsComponent;
  let fixture: ComponentFixture<SlopeChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlopeChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlopeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
