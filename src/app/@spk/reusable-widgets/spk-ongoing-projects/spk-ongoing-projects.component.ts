import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-ongoing-projects',
  imports: [],
  templateUrl: './spk-ongoing-projects.component.html',
  styleUrl: './spk-ongoing-projects.component.scss'
})
export class SpkOngoingProjectsComponent {
  @Input() title: string = 'Top Ongoing Projects';
  @Input() subtitle: string = 'Projects where development work is on completion';
  @Input() projects: {
    name: string;
    statusIcon: string;
    statusColor: string;
    timeAgo: string;
    startDate: string;
    description: string;
  }[] = [];
}
