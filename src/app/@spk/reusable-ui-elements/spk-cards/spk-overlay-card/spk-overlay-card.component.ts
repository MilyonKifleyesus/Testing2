import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-overlay-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-overlay-card.component.html',
  styleUrl: './spk-overlay-card.component.scss'
})
export class SpkOverlayCardComponent {
  @Input() imageUrl: string = '';
  @Input() title?: string = '';
  @Input() bodyTitle?: string = '';
  @Input() bodyClass?: string = '';
  @Input() headerClass?: string = '';
  @Input() bodyTitleClass?: string = '';
  @Input() status?: boolean ;
  @Input() content: string = '';
  @Input() footerText: string = '';
  @Input() contentPosition: string = '';
  @Input() contentClass?: string = '';
  @Input() content1?: boolean = false;
}
