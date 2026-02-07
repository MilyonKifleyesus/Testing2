import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkBreadcrumbComponent } from '../../../@spk/reusable-ui-elements/spk-breadcrumb/spk-breadcrumb.component';
import * as PrismCode from '../../../shared/prismData/breadcrumb';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,SpkBreadcrumbComponent,CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  prsimCodeData: any = PrismCode;
  breadcrumbStyle = {
    '--bs-breadcrumb-divider':
      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'currentColor\'/%3E%3C/svg%3E")',
  };
  divider = {
    '--bs-breadcrumb-divider': "'~';"
}
}

