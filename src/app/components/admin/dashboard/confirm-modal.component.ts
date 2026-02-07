import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-header border-0 pb-0">
      <h4 class="modal-title fw-600">{{ title }}</h4>
      <button type="button" class="btn-close" (click)="activeModal.dismiss('cancel')"></button>
    </div>
    <div class="modal-body">
      <p class="text-muted mb-0">{{ message }}</p>
    </div>
    <div class="modal-footer border-0 pt-0">
      <button type="button" class="btn btn-secondary btn-sm" (click)="activeModal.dismiss('cancel')">
        Cancel
      </button>
      <button type="button" class="btn btn-danger btn-sm" (click)="activeModal.close('confirm')">
        Confirm
      </button>
    </div>
  `,
  styles: [`
    .modal-title {
      color: #1b5e20;
    }
    
    .text-muted {
      color: #6c757d !important;
    }
  `]
})
export class ConfirmModalComponent {
  title: string = 'Confirm';
  message: string = 'Are you sure?';

  constructor(public activeModal: NgbActiveModal) {}
}
