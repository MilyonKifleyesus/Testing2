import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-calculations-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-calculations-card.component.html',
  styleUrl: './spk-calculations-card.component.scss'
})
export class SpkCalculationsCardComponent {
  @Input() svgContent: string = ''; // The SVG markup
  @Input() title: string = ''; // Title text
  @Input() footerText: string = ''; // Footer text
  @Input() borderClass: string = 'border-primary'; // Optional card border class
}
