import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-projects-widgets',
  imports: [],
  templateUrl: './spk-projects-widgets.component.html',
  styleUrl: './spk-projects-widgets.component.scss'
})
export class SpkProjectsWidgetsComponent {
  @Input() title: string = 'Projects Overview';
  @Input() projects: { name: string; status: number; barClass: string }[] = [];
}
