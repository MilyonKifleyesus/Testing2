import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RouteVm {
  id: string;
  path: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
  index: number;
  beginOffset: string;
  highlighted: boolean;
  strokeWidth: number;
  dashArray?: string;
}

@Component({
  selector: 'app-war-room-map-routes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './war-room-map-routes.component.html',
  styleUrls: ['./war-room-map-routes.component.scss'],
})
export class WarRoomMapRoutesComponent {
  viewBox = input<string>('0 0 950 550');
  mapTransform = input<string>('');
  routes = input<RouteVm[]>([]);
  routeStroke = input<string>('#0ea5e9');
  routeFill = input<string>('#0ea5e9');
}
