import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-flex',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss'
})
export class FlexComponent {

}
