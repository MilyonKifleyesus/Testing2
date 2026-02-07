import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-link-card.component.html',
  styleUrl: './spk-link-card.component.scss'
})
export class SpkLinkCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() department: string = '';
  @Input() age: number | null = null;
  @Input() gender: string = '';
  @Input() cardBorder: boolean = false; // To control card border styling
  @Input() textInfoClass: string = ''; // For conditional styling
}
