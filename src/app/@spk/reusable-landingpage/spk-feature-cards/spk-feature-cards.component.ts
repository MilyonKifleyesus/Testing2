import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-feature-cards',
  imports: [],
  templateUrl: './spk-feature-cards.component.html',
  styleUrl: './spk-feature-cards.component.scss'
})
export class SpkFeatureCardsComponent {
  @Input() icon!: string; // Icon class (e.g., "fe fe-package")
  @Input() cardClass: any; // Icon class (e.g., "fe fe-package")
  @Input() title!: string; // Title of the card (e.g., "Unique Design")
  @Input() description!: string; // Description text for the card
}
