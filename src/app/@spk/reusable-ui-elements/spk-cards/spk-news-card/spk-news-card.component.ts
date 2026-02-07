import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-news-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-news-card.component.html',
  styleUrl: './spk-news-card.component.scss'
})
export class SpkNewsCardComponent {
  @Input() headerTitle: string = ''; // Header title
  @Input() bodyTitle: string = ''; // Main card title
  @Input() bodyText: string = ''; // Supporting body text
  @Input() primaryButton: { text: string; action: () => void } = { text: '', action: () => {} }; // Primary button details
  @Input() secondaryButton: { text: string; action: () => void } = { text: '', action: () => {} }; // Secondary button details
  @Input() footerText: string = ''; // Footer text
}
