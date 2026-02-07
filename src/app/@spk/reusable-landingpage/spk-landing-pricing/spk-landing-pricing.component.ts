import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-landing-pricing',
  imports: [CommonModule],
  templateUrl: './spk-landing-pricing.component.html',
  styleUrl: './spk-landing-pricing.component.scss'
})
export class SpkLandingPricingComponent {
@Input() plan:any;
}
