import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-progresscards',
  imports: [],
  templateUrl: './spk-progresscards.component.html',
  styleUrl: './spk-progresscards.component.scss'
})
export class SpkProgresscardsComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon1Class: string = '';
  @Input() icon1Value: string = '';
  @Input() icon2Class: string = '';
  @Input() icon2Value: string = '';
  @Input() progressValue: number = 0;
  @Input() progressBarClass: string = '';
  @Input() label1: string = 'Target';
  @Input() label2: string = 'Last Month';
}
