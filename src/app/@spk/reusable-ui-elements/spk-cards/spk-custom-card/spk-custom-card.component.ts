import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkDropdownsComponent } from '../../spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-custom-card',
  standalone: true,
  imports: [CommonModule,NgbDropdownModule],
  templateUrl: './spk-custom-card.component.html',
  styleUrl: './spk-custom-card.component.scss'
})
export class SpkCustomCardComponent {
  @Input() avatar: string = ''; // Avatar image URL
  @Input() name: string = ''; // User's name
  @Input() subtitle: string = ''; // Subtitle (e.g., age, gender)
  @Input() dropdownItems: string[] = []; // Dropdown items
  @Input() bodyText: string = ''; // Card body text
  @Input() footerLeftText: string = ''; // Footer left text
  @Input() footerRightText: string = ''; // Footer right text
  @Input() footerRightTextClass: string = 'text-success';
}
