import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Node as WarRoomNode } from '../../../../../models/war-room.interface';

export interface MarkerVm {
  id: string; // Internal unique ID
  node: WarRoomNode; // Reference to original data
  displayName: string;
  shortName: string;
  subLabel: string;
  initials: string;
  hasLogo: boolean;
  logoPath: string;
  isSelected: boolean;
  isHovered: boolean;
  isHub: boolean;
  isHQ: boolean;
  statusKey: 'online' | 'maintenance' | 'offline';
  statusColor: string;
  statusGlow: string;
  statusIconPath: string;
  lodClass: 'lod-low' | 'lod-medium' | 'lod-high';
  isPinned: boolean;
  pinTransform: string; // translate(x, y)
  pinScale: number;
  showPinLabel: boolean;
}

@Component({
  selector: 'app-war-room-map-markers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './war-room-map-markers.component.html',
  styleUrls: ['./war-room-map-markers.component.scss'],
})
export class WarRoomMapMarkersComponent {
  viewBox = input<string>('0 0 950 550');
  mapTransform = input<string>('');
  markers = input<MarkerVm[]>([]);
  markerSelected = output<WarRoomNode | undefined>();
  markerHovered = output<WarRoomNode | null>();
  markerLogoError = output<{ node: WarRoomNode; logoPath: string }>();

  onMarkerEnter(marker: MarkerVm): void {
    this.markerHovered.emit(marker.node);
  }

  onMarkerLeave(): void {
    this.markerHovered.emit(null);
  }

  onMarkerClick(marker: MarkerVm): void {
    if (marker.isSelected) {
      this.markerSelected.emit(undefined);
    } else {
      this.markerSelected.emit(marker.node);
    }
  }

  onLogoError(marker: MarkerVm): void {
    this.markerLogoError.emit({ node: marker.node, logoPath: marker.logoPath });
  }
}
