import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/progress';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkProgressbarComponent } from '../../../@spk/reusable-ui-elements/spk-progressbar/spk-progressbar.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,SpkProgressbarComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  prismCode: any = PrismCode;
}
