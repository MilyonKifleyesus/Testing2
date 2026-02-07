import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/badge';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  prsimCodeData: any = PrismCode;
  badges = [
    { text: 'Primary', class: 'badge bg-primary' },
    { text: 'Secondary', class: 'badge bg-secondary' },
    { text: 'Success', class: 'badge bg-success' },
    { text: 'Danger', class: 'badge bg-danger' },
    { text: 'Warning', class: 'badge bg-warning' },
    { text: 'Info', class: 'badge bg-info' },
    { text: 'Light', class: 'badge bg-light text-dark' },
    { text: 'Dark', class: 'badge bg-dark text-white' }
  ];
  notificationButtons = [
    { btnClass: 'btn-primary',   badgeClass: 'bg-secondary', count:4 },
    { btnClass: 'btn-secondary', badgeClass: 'bg-primary',  count: 7 },
    { btnClass: 'btn-success',   badgeClass: 'bg-danger',   count: 12 },
    { btnClass: 'btn-info',      badgeClass: 'bg-warning',  count: 32 }

  ];
  outlineButtonBadges = [
      { btnClass: 'primary',   badgeClass: 'primary1', count:4 },
      { btnClass: 'secondary', badgeClass: 'primary',  count: 7 },
      { btnClass: 'success',   badgeClass: 'danger',   count: 12 },
      { btnClass: 'info',      badgeClass: 'warning',  count: 32 }
  ];
  pillBadges=[
    { text: 'Primary', class: 'badge rounded-pill bg-primary' },
    { text: 'Secondary', class: 'badge rounded-pill bg-secondary' },
    { text: 'Success', class: 'badge rounded-pill bg-success' },
    { text: 'Danger', class: 'badge rounded-pill bg-danger' },
    { text: 'Warning', class: 'badge rounded-pill bg-warning' },
    { text: 'Info', class: 'badge rounded-pill bg-info' },
    { text: 'Light', class: 'badge rounded-pill bg-light text-dark' },
    { text: 'Dark', class: 'badge rounded-pill bg-dark text-white' }
  ]
  lightpillBadges=[
    { text: 'Primary', class: 'badge rounded-pill bg-primary-transparent' },
    { text: 'Secondary', class: 'badge rounded-pill bg-secondary-transparent' },
    { text: 'Success', class: 'badge rounded-pill bg-success-transparent' },
    { text: 'Danger', class: 'badge rounded-pill bg-danger-transparent' },
    { text: 'Warning', class: 'badge rounded-pill bg-warning-transparent' },
    { text: 'Info', class: 'badge rounded-pill bg-info-transparent' },
    { text: 'Light', class: 'badge rounded-pill  text-dark' },
    { text: 'Dark', class: 'badge rounded-pill bg-dark-transparent text-dark' }
  ]
  lightBadges=[
    { text: 'Primary', class: 'badge bg-primary-transparent' },
    { text: 'Secondary', class: 'badge bg-secondary-transparent' },
    { text: 'Success', class: 'badge bg-success-transparent' },
    { text: 'Danger', class: 'badge bg-danger-transparent' },
    { text: 'Warning', class: 'badge bg-warning-transparent' },
    { text: 'Info', class: 'badge bg-info-transparent' },
    { text: 'Light', class: 'badge text-dark' },
    { text: 'Dark', class: 'badge bg-dark-transparent' }
  ]
  gradientBadges=[
    { text: 'Primary', class: 'bg-primary-gradient' },
    { text: 'Secondary', class: 'bg-secondary-gradient' },
    { text: 'Success', class: 'bg-success-gradient' },
    { text: 'Danger', class: 'bg-danger-gradient' },
    { text: 'Warning', class: 'bg-warning-gradient' },
    { text: 'Info', class: 'bg-info-gradient' },
    { text: 'Orange', class: 'bg-orange-gradient' },
    { text: 'Purple', class: 'bg-purple-gradient' }
  ]
  outlineBadges=[
    { text: 'Primary', class: 'primary' },
    { text: 'Secondary', class: 'secondary' },
    { text: 'Success', class: 'success' },
    { text: 'Danger', class: 'danger' },
    { text: 'Warning', class: 'warning' },
    { text: 'Info', class: 'info' },
    { text: 'light ', class: 'light text-dark' },
    { text: 'dark', class: 'dark' }
  ]
  getSanitizedSVG(svgContent: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  } 
constructor(private sanitizer:DomSanitizer) {}
  
}
