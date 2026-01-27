import { Component, Input } from '@angular/core';
import { SpkApexChartsComponent } from '@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'shared-project-budget-chart',
  standalone: true,
  imports: [NgApexchartsModule, SpkApexChartsComponent],
  template: `<spk-apex-charts [chartOptions]="chartOptions"></spk-apex-charts>`
})
export class SharedProjectBudgetChartComponent {
  @Input() chartOptions: any;
}
