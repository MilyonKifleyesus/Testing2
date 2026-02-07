import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-breadcrumb.component.html',
  styleUrl: './spk-breadcrumb.component.scss'
})
export class SpkBreadcrumbComponent {
@Input() olClass:string='';
@Input() divider: string = '/'; // default divider
}
