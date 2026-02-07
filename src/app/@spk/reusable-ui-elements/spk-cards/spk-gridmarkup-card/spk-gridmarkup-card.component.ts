import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-gridmarkup-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-gridmarkup-card.component.html',
  styleUrl: './spk-gridmarkup-card.component.scss'
})
export class SpkGridmarkupCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = 'Purchase';
  @Input() buttonClass: string = 'btn-primary';
}
