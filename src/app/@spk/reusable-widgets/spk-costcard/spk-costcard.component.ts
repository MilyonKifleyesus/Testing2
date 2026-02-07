import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-costcard',
  imports: [],
  templateUrl: './spk-costcard.component.html',
  styleUrl: './spk-costcard.component.scss'
})
export class SpkCostcardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() trendValue: string = '';
  @Input() trendColor: string = ''; // e.g., 'success', 'danger'
  @Input() iconClass: string = ''; // e.g., 'fa-arrow-up', 'fa-arrow-down'
  @Input() progressColor: string = ''; // e.g., 'info', 'danger'
  @Input() progressWidth: number = 0; // Percentage (0-100)
  @Input() hasBorder: boolean = false;
}
