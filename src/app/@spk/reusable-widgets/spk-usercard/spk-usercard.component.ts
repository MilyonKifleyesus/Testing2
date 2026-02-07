import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-usercard',
  imports: [],
  templateUrl: './spk-usercard.component.html',
  styleUrl: './spk-usercard.component.scss'
})
export class SpkUsercardComponent {
  @Input() imageSrc: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() status: string = 'Verified';
  @Input() buttonText: string = 'View Profile';
}
