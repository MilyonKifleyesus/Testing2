import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing2',
  imports: [],
  templateUrl: './spk-pricing2.component.html',
  styleUrl: './spk-pricing2.component.scss'
})
export class SpkPricing2Component {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() features: string[] = [];
  @Input() icon: string = '';
  @Input() iconClass: string = '';
  @Input() iconBg: string = '';
  @Input() btnClass: string = '';
  @Input() buttonText: string = 'Purchase Now';
}
