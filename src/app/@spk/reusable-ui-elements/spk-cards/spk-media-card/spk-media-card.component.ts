import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-media-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-media-card.component.html',
  styleUrl: './spk-media-card.component.scss'
})
export class SpkMediaCardComponent {
  @Input() avatar: string = ''; // Avatar image URL
  @Input() stats: { label: string; value: string }[] = []; // Array of stats (e.g., Posts, Followers, Following)
  @Input() name: string = ''; // Person's name
  @Input() jobTitle: string = ''; // Job title
  @Input() aboutText: string = ''; // About text
  @Input() additionalText: string = ''; // Additional card body text
}
