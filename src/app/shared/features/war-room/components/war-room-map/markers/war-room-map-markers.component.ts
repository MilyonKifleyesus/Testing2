import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Node as WarRoomNode } from '../../../../../models/war-room.interface';

export interface MarkerVm {
  id: string;
  node: WarRoomNode;
  mapX: number;
  mapY: number;
  displayName: string;
  ariaLabel: string;
  hasLogo: boolean;
  logoPath: string;
  isSelected: boolean;
  isHovered: boolean;
  isHub: boolean;
  lodClass: 'lod-low' | 'lod-medium' | 'lod-high';
  pinTransform: string;
  pinBodyPath: string;
  pinLogoX: number;
  pinLogoY: number;
  pinLogoSize: number;
  pinLabelX: number;
  pinLabelY: number;
  pinLabelText: string;
  showPinBody: boolean;
  showPinGloss: boolean;
  showPinLabel: boolean;
  showPinHalo: boolean;
  showBgMarker: boolean;
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
  markerSelected = output<WarRoomNode>();
  markerHovered = output<WarRoomNode | null>();
  markerLogoError = output<{ node: WarRoomNode; logoPath: string }>();

  onMarkerEnter(marker: MarkerVm): void {
    this.markerHovered.emit(marker.node);
  }

  onMarkerLeave(): void {
    this.markerHovered.emit(null);
  }

  onMarkerClick(marker: MarkerVm): void {
    this.markerSelected.emit(marker.node);
  }

  onLogoError(marker: MarkerVm): void {
    this.markerLogoError.emit({ node: marker.node, logoPath: marker.logoPath });
  }
}
