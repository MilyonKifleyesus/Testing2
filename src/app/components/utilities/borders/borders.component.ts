import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/prismData/borders';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-borders',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './borders.component.html',
  styleUrl: './borders.component.scss'
})
export class BordersComponent {
  prismCode = prismcodeData;


  




}
