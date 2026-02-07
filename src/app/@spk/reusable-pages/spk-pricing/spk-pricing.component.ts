import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing',
  imports: [CommonModule],
  templateUrl: './spk-pricing.component.html',
  styleUrl: './spk-pricing.component.scss'
})
export class SpkPricingComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() price: string = '';
  @Input() features: { label: string; detail: string }[] = [];
  @Input() bgClass: string = '';
  @Input() buttonClass: string = '';
}
