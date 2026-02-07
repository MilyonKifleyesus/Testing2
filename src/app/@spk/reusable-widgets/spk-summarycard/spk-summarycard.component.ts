import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-summarycard',
  imports: [],
  templateUrl: './spk-summarycard.component.html',
  styleUrl: './spk-summarycard.component.scss'
})
export class SpkSummarycardComponent {
  @Input() title: string = '';
  @Input() iconClass: string = '';
  @Input() value: string = '';
  @Input() subtitle: string = '';
  @Input() extraValue: string = '';
  @Input() customCard: string = '';
}
