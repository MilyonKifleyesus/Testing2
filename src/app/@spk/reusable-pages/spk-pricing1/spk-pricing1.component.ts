import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing1',
  imports: [CommonModule],
  templateUrl: './spk-pricing1.component.html',
  styleUrl: './spk-pricing1.component.scss'
})
export class SpkPricing1Component {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() features: any;
  @Input() cardClass: string = '';
  @Input() isPrimary: boolean = false;
  @Input() isPremium: boolean = false;
}
