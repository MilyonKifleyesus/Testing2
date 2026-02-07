import { Component, Input } from '@angular/core';
import { SpkApexChartsComponent } from '../../reusable-charts/spk-apex-charts/spk-apex-charts.component';

@Component({
  selector: 'spk-market-cap',
  imports: [SpkApexChartsComponent],
  templateUrl: './spk-market-cap.component.html',
  styleUrl: './spk-market-cap.component.scss'
})
export class SpkMarketCapComponent {
  @Input() pair!: string; // e.g., BTC / USD
  @Input() value!: number; // e.g., 34.4324
  @Input() usdValue!: number; // e.g., 29.42
  @Input() percentage!: string; // e.g., -0.22%
  @Input() percentageClass!: string; // e.g., text-danger or text-success
  @Input() volume!: string; // e.g., 76,434.57 USDT
  @Input() chartOptions!: any; // Chart options for spk-apex-charts
}
