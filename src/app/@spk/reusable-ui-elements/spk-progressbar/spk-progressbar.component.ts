import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-progressbar.component.html',
  styleUrl: './spk-progressbar.component.scss'
})
export class SpkProgressbarComponent {
  @Input() value: number = 0; // Progress value between 0 and 100
  @Input() size: string = ''; // e.g., 'progress-xs', 'progress-sm', 'progress-lg', 'progress-xl'
  @Input() barClass: string = 'bg-primary'; // Bootstrap classes for colors
  @Input() progressClass?: string = 'bg-primary'; // Bootstrap classes for colors
  @Input() showLabel: boolean = false; // Whether to show the percentage label
  @Input()  color: any;
  @Input()  title: any;
}
