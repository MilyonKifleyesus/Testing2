import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-popovers',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './spk-popovers.component.html',
  styleUrl: './spk-popovers.component.scss'
})
export class SpkPopoversComponent {
  @Input() buttonText: string = '';
  @Input() title: string = 'Popover Title';
  @Input() content: string = 'Popover Content';
  @Input() placement: string = 'top';
  @Input() popoverClass: string = '';
  @Input() color: string = '';
  @Input() class: string = 'btn-outline-primary';
  @Input() autoClose: boolean | string = true;
}
