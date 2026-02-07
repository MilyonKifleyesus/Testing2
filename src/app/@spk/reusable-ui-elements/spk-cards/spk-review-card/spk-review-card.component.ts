import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-review-card.component.html',
  styleUrl: './spk-review-card.component.scss'
})
export class SpkReviewCardComponent {
  @Input() rating: number = 0; // Rating (1 to 5)
  @Input() timestamp: string = ''; // Review timestamp
  @Input() reviewTitle: string = ''; // Review title
  @Input() reviewText: string = ''; // Review body text
  @Input() reviewerName: string = ''; // Reviewer name
  @Input() reviewerAvatar: string = ''; // Reviewer avatar image URL
}
