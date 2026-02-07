import { Component } from '@angular/core';
import * as PrismCode from '../../../shared/prismData/images-figures';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-images-figures',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './images-figures.component.html',
  styleUrl: './images-figures.component.scss'
})
export class ImagesFiguresComponent {
  prsimCodeData: any = PrismCode;
}
