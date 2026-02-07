import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-blockquote-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-blockquote-card.component.html',
  styleUrl: './spk-blockquote-card.component.scss'
})
export class SpkBlockquoteCardComponent {
  @Input() cardBg: string = ''; 
  @Input() cardBody: string = ''; 
  @Input() quote: string = ''; // The main quote text
  @Input() author: string = ''; // The author of the quote
  @Input() textColor1: string = ''; // The author of the quote
  @Input() textColor: string = ''; // The author of the quote
  @Input() sourceTitle: string = ''; // The source or citation title
}
