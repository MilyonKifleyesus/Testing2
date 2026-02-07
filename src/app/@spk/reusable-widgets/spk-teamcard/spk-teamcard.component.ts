import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-teamcard',
  imports: [],
  templateUrl: './spk-teamcard.component.html',
  styleUrl: './spk-teamcard.component.scss'
})
export class SpkTeamcardComponent {
  @Input() imageSrc: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() stars: boolean[] = [];
  @Input() socialLinks: { iconClass: string }[] = [];
}
