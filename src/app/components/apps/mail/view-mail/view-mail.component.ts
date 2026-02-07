import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-mail',
  standalone: true,
  imports: [SharedModule,NgbModule,RouterModule],
  templateUrl: './view-mail.component.html',
  styleUrl: './view-mail.component.scss'
})
export class ViewMailComponent {
  primaryMenu = [
    { icon: 'fe fe-mail', label: 'Inbox', badge: 20, badgeClass: 'bg-light', isActive: true },
    { icon: 'fe fe-star', label: 'Starred', badge: 3, badgeClass: 'bg-primary', isActive: false },
    { icon: 'fe fe-bookmark', label: 'Important', badge: 10, badgeClass: 'bg-secondary', isActive: false },
    { icon: 'fe fe-send', label: 'Sent Mail', badge: 8, badgeClass: 'bg-success', isActive: false },
    { icon: 'fe fe-edit-2', label: 'Drafts', badge: 15, badgeClass: 'bg-danger', isActive: false },
    { icon: 'fe fe-disc', label: 'Spam', badge: 128, badgeClass: 'bg-warning', isActive: false },
    { icon: 'fe fe-trash-2', label: 'Trash', badge: 6, badgeClass: 'bg-info', isActive: false }
  ];

  labelsMenu = [
    { icon: 'fe fe-folder', label: 'Social', badge: 10, badgeClass: 'bg-primary' },
    { icon: 'fe fe-folder', label: 'Promotions', badge: 22, badgeClass: 'bg-secondary' },
    { icon: 'fe fe-folder', label: 'Updates', badge: 17, badgeClass: 'bg-success' }
  ];
}
