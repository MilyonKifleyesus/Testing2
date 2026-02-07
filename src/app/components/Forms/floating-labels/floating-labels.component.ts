import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismCodeData from '../../../shared/prismData/floatinglabels';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-floating-labels',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,MaterialModuleModule],
  templateUrl: './floating-labels.component.html',
  styleUrl: './floating-labels.component.scss'
})
export class FloatingLabelsComponent {
  prismCode = prismCodeData;
 
}
