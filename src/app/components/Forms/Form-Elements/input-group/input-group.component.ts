import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as prismCodeData from '../../../../shared/prismData/forminputs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.scss'
})
export class InputGroupComponent {
  prismCode = prismCodeData;
  
}
