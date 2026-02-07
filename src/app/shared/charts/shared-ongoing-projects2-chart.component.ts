import { Component, Input } from '@angular/core';
import { SpkApexChartsComponent } from '@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'shared-ongoing-projects2-chart',
  standalone: true,
  imports: [NgApexchartsModule, SpkApexChartsComponent],
  template: `<spk-apex-charts [chartOptions]="chartOptions"></spk-apex-charts>`
})
export class SharedOngoingProjects2ChartComponent {
  @Input() chartOptions: any;
}
