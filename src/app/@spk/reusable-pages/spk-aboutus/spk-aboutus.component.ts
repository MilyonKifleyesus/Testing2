import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-aboutus',
  imports: [CommonModule],
  templateUrl: './spk-aboutus.component.html',
  styleUrl: './spk-aboutus.component.scss'
})
export class SpkAboutusComponent {
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() socialLinks: { platform: string; url: string; iconClass: string; buttonClass: string }[] = [];
}
