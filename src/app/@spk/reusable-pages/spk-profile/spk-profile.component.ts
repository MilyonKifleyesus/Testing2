import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-profile',
  imports: [NgbModule],
  templateUrl: './spk-profile.component.html',
  styleUrl: './spk-profile.component.scss'
})
export class SpkProfileComponent {
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
