import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexChartsComponent } from '@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';

@Component({
  selector: 'shared-ongoing-projects-chart',
  standalone: true,
  imports: [NgApexchartsModule, SpkApexChartsComponent],
  template: `<spk-apex-charts [chartOptions]="chartOptions"></spk-apex-charts>`
})
export class SharedOngoingProjectsChartComponent {
  @Input() chartOptions: any;
}
