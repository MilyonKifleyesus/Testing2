import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/spinners';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './spinners.component.html',
  styleUrl: './spinners.component.scss'
})
export class SpinnersComponent {
  prismCode: any = PrismCode;
}
