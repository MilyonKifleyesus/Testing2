import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as prismCodeData from '../../../../shared/prismData/inputs';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  prismCode = prismCodeData;
  
}
