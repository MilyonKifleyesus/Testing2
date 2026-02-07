import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-war-room-map-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './war-room-map-controls.component.html',
  styleUrls: ['./war-room-map-controls.component.scss'],
})
export class WarRoomMapControlsComponent {
  fullscreen = input<boolean>(false);
  zoomIn = output<void>();
  zoomOut = output<void>();
  toggleFullscreen = output<void>();
}
