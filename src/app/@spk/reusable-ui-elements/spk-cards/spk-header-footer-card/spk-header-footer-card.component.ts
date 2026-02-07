import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-header-footer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-header-footer-card.component.html',
  styleUrl: './spk-header-footer-card.component.scss'
})
export class SpkHeaderFooterCardComponent {
  @Input() avatar: string = ''; // Avatar image URL
  @Input() name: string = ''; // Person's name
  @Input() jobTitle: string = ''; // Job title
  @Input() socialMediaButtons: { icon: string; class: string; action: () => void }[] = []; // Social media buttons
}
