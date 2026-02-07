import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-ecommerce',
  imports: [],
  templateUrl: './spk-ecommerce.component.html',
  styleUrl: './spk-ecommerce.component.scss'
})
export class SpkEcommerceComponent {
  @Input() label!: string; // Label for the card (e.g., "New Users")
  @Input() value!: string; // Main value (e.g., "3,672")
  @Input() icon!: string; // Icon class (e.g., "mdi mdi-account-multiple")
  @Input() description!: string; // Description (e.g., "Monthly users")
  @Input() subValue!: string; // Subvalue (e.g., "50%")
}
