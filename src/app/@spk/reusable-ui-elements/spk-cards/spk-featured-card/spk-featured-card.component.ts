import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-featured-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-featured-card.component.html',
  styleUrl: './spk-featured-card.component.scss'
})
export class SpkFeaturedCardComponent {
  @Input() header: string = ''; // Card header (optional)
  @Input() title: string = ''; // Card title
  @Input() text: string = ''; // Card body text
  @Input() buttonText: string = ''; // Button text (optional)
  @Input() links: { text: string; href: string; class: string }[] = [];
  @Input() subtitle: string = ''; // Default to an empty string
  @Input() subtitleClass?: string = ''; // Default to an empty string
  @Input() buttonClass: string = 'btn-primary';
}  
