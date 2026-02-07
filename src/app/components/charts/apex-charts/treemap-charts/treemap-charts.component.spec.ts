import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapChartsComponent } from './treemap-charts.component';

describe('TreemapChartsComponent', () => {
  let component: TreemapChartsComponent;
  let fixture: ComponentFixture<TreemapChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreemapChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreemapChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
