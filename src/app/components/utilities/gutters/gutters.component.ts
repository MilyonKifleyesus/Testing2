import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-gutters',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './gutters.component.html',
  styleUrl: './gutters.component.scss'
})
export class GuttersComponent {

}
