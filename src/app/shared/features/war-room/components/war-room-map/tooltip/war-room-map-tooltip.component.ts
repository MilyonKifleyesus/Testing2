import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TooltipVm {
  visible: boolean;
  nodeId: string;
  top: number;
  left: number;
  flipped: boolean;
  displayName: string;
  description: string;
  logoPath: string;
  typeLabel: string;
  locationLabel: string;
  statusLabel: string;
  statusClass: string;
}

@Component({
  selector: 'app-war-room-map-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './war-room-map-tooltip.component.html',
  styleUrls: ['./war-room-map-tooltip.component.scss'],
})
export class WarRoomMapTooltipComponent {
  tooltip = input<TooltipVm | null>(null);
  logoError = output<{ nodeId: string; logoPath: string }>();
}
