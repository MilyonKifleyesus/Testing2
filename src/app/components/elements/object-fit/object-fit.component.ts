import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/objectfit';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-object-fit',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './object-fit.component.html',
  styleUrl: './object-fit.component.scss'
})
export class ObjectFitComponent {
  prsimCodeData: any = PrismCode;
  
}
