import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-tabs-pricing',
  imports: [],
  templateUrl: './spk-tabs-pricing.component.html',
  styleUrl: './spk-tabs-pricing.component.scss'
})
export class SpkTabsPricingComponent {
  @Input() plan: string = '';
  @Input() price: string = '';
  @Input() features: { iconClass: string; value: string; label: string }[] = [];
  @Input() bgClass: string = '';
  @Input() buttonClass: string = '';
  @Input() buttonText: string = 'Buy Now';
}
