import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAreaChartsComponent } from './range-area-charts.component';

describe('RangeAreaChartsComponent', () => {
  let component: RangeAreaChartsComponent;
  let fixture: ComponentFixture<RangeAreaChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeAreaChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangeAreaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
