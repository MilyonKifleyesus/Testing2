import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-metriccard',
  imports: [],
  templateUrl: './spk-metriccard.component.html',
  styleUrl: './spk-metriccard.component.scss'
})
export class SpkMetriccardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() changeValue: number = 0;
  @Input() changeClass: string = '';
  @Input() iconClass: string = '';
  @Input() hasBorder: boolean = true;
}
