import { Component, Input, ViewChild } from '@angular/core';
import { BaseChartDirective, provideCharts } from 'ng2-charts';

@Component({
  selector: 'spk-chartjs',
  standalone: true,
  imports: [BaseChartDirective],
  // providers:[provideCharts({ registerables: [BarController, Legend, Colors] })],
  templateUrl: './spk-chartjs.component.html',
  styleUrl: './spk-chartjs.component.scss'
})
export class SpkChartjsComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input('data') ChartData:any;
  @Input('options') ChartOptions:any;
  @Input('type') ChartType:any;


}
