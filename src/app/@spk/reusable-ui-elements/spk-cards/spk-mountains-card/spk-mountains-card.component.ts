import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'spk-mountains-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-mountains-card.component.html',
  styleUrl: './spk-mountains-card.component.scss'
})
export class SpkMountainsCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() badgeText: string = '';
  @Input() badgeClass: string = 'bg-primary'; // Default badge class
  @Input() text: string = '';
}
