import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkMetrics } from '../../../../../shared/models/war-room.interface';

@Component({
  selector: 'app-war-room-footer',
  imports: [CommonModule],
  templateUrl: './war-room-footer.component.html',
  styleUrl: './war-room-footer.component.scss',
})
export class WarRoomFooterComponent {
  networkMetrics = input<NetworkMetrics | null>(null);
  
  /**
   * Get node density status based on value
   */
  getNodeDensityStatus(nodeDensity: number | undefined): string | null {
    if (nodeDensity === undefined || nodeDensity === null) {
      return null;
    }
    if (nodeDensity >= 95) {
      return 'MAXIMUM';
    }
    if (nodeDensity >= 80) {
      return 'HIGH';
    }
    if (nodeDensity >= 60) {
      return 'MODERATE';
    }
    return 'LOW';
  }
  
  /**
   * Get node density status CSS class
   */
  getNodeDensityStatusClass(nodeDensity: number | undefined): string {
    if (nodeDensity === undefined || nodeDensity === null) {
      return '';
    }
    if (nodeDensity >= 95) {
      return 'tactical-green';
    }
    if (nodeDensity >= 80) {
      return 'status-high';
    }
    if (nodeDensity >= 60) {
      return 'status-moderate';
    }
    return 'status-low';
  }
}
