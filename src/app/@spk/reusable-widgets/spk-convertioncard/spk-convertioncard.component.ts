import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-convertioncard',
  imports: [],
  templateUrl: './spk-convertioncard.component.html',
  styleUrl: './spk-convertioncard.component.scss'
})
export class SpkConvertioncardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() percentage: string = '';
  @Input() badgeClass: string = '';
  @Input() description: string = '';
}
