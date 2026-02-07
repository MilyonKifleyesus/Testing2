import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NetworkThroughput,
  GeopoliticalHeatmap,
  SatelliteStatus,
} from '../../../../../shared/models/war-room.interface';

@Component({
  selector: 'app-war-room-metrics',
  imports: [CommonModule],
  templateUrl: './war-room-metrics.component.html',
  styleUrl: './war-room-metrics.component.scss',
})
export class WarRoomMetricsComponent {
  networkThroughput = input<NetworkThroughput | null>(null);
  geopoliticalHeatmap = input<GeopoliticalHeatmap | null>(null);
  satelliteStatuses = input<SatelliteStatus[]>([]);

  /**
   * Get heatmap cell opacity based on value
   */
  getHeatmapOpacity(value: number): number {
    return value / 100;
  }

  clampAlpha(value: number): number {
    return Math.max(0, Math.min(1, value / 100));
  }

  /**
   * Get bar level class for throughput bars
   */
  getBarLevel(value: number): string {
    if (value >= 60) return 'high';
    if (value >= 50) return 'medium-high';
    if (value >= 40) return 'medium';
    if (value >= 30) return 'low';
    return 'very-low';
  }

  /**
   * Check if satellite status is online
   */
  isSatelliteOnline(status: string): boolean {
    return status === 'LOCKED';
  }

}
