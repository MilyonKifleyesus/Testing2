import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-breakpoints',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './breakpoints.component.html',
  styleUrl: './breakpoints.component.scss'
})
export class BreakpointsComponent {

}
