import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-infocard',
  imports: [],
  templateUrl: './spk-infocard.component.html',
  styleUrl: './spk-infocard.component.scss'
})
export class SpkInfocardComponent {
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() textClass: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() currency: string =''; // Use this for values like "$"
}
