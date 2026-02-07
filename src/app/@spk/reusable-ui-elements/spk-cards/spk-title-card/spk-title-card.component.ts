import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-title-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-title-card.component.html',
  styleUrl: './spk-title-card.component.scss'
})
export class SpkTitleCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() footerText?: string; // Optional string
  @Input() listItems?: string[]; // Optional array of strings
  @Input() buttonText?: string; // Optional string
  @Input() links?: { text: string; href: string; class: string }[];
}
