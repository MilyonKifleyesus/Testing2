import { Injectable, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { WarRoomService } from './war-room.service';
import {
  ActivityLog,
  ActivityStatus,
  NetworkMetrics,
  NetworkThroughput,
} from '../models/war-room.interface';

@Injectable({
  providedIn: 'root',
})
export class WarRoomRealtimeService implements OnDestroy {
  private updateInterval: Subscription | null = null;
  private activityLogIntervalSub: Subscription | null = null;
  private isRunning = false;

  constructor(private warRoomService: WarRoomService) {}

  /**
   * Start real-time updates
   */
  startRealTimeUpdates(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    // Update every 5 seconds
    this.updateInterval = interval(5000).subscribe(() => {
      this.updateMetrics();
      this.updateNetworkThroughput();
    });

    // Add new activity log every 30 seconds
    this.activityLogIntervalSub = interval(30000).subscribe(() => {
      this.addRandomActivityLog();
    });
  }

  /**
   * Stop real-time updates
   */
  stopRealTimeUpdates(): void {
    if (this.updateInterval) {
      this.updateInterval.unsubscribe();
      this.updateInterval = null;
    }
    if (this.activityLogIntervalSub) {
      this.activityLogIntervalSub.unsubscribe();
      this.activityLogIntervalSub = null;
    }
    this.isRunning = false;
  }

  /**
   * Update network metrics (fleet sync rate, data integrity, latency)
   */
  private updateMetrics(): void {
    const currentMetrics = this.warRoomService.getNetworkMetrics();
    if (!currentMetrics) return;

    currentMetrics.pipe(take(1)).subscribe((metrics) => {
      // Simulate small variations in metrics
      const updatedMetrics: Partial<NetworkMetrics> = {
        dataFlowIntegrity: this.varyValue(metrics.dataFlowIntegrity, 0.1, 99.5, 100),
        fleetSyncRate: this.varyValue(metrics.fleetSyncRate, 10, 1400, 1450),
        networkLatency: this.varyValue(metrics.networkLatency, 1, 2, 8),
        nodeDensity: this.varyValue(metrics.nodeDensity, 0.5, 98, 100),
      };

      // Calculate latency change
      const latencyChange = updatedMetrics.networkLatency
        ? updatedMetrics.networkLatency - metrics.networkLatency
        : 0;
      updatedMetrics.latencyChange = latencyChange;

      this.warRoomService.updateNetworkMetrics(updatedMetrics);
    });
  }

  /**
   * Update network throughput bars
   */
  private updateNetworkThroughput(): void {
    const currentThroughput = this.warRoomService.networkThroughput();
    if (!currentThroughput) return;

    // Generate new random bar heights
    const newBars = currentThroughput.bars.map((bar) =>
      this.varyValue(bar, 5, 40, 100)
    );

    this.warRoomService.updateNetworkThroughput({
      bars: newBars,
    });
  }

  /**
   * Add a random activity log entry
   */
  private addRandomActivityLog(): void {
    const factories = this.warRoomService.factories();
    if (factories.length === 0) return;

    const randomFactory = factories[Math.floor(Math.random() * factories.length)];
    const subsidiaries = this.warRoomService.subsidiaries();
    const subsidiary = subsidiaries.find((sub) => sub.id === randomFactory.subsidiaryId);

    const statuses: ActivityStatus[] = ['ACTIVE', 'INFO'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    const descriptions = [
      'SYSTEM OPTIMAL',
      'SYNC SUCCESS',
      'OPERATIONAL',
      'CONNECTED',
      'PEAK EFFICIENCY',
      'LOAD BALANCING COMPLETE',
      'LATENCY REDUCED',
      'HUB SHIFT START',
    ];

    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)];

    const location = randomFactory.city || randomFactory.country || 'UNKNOWN';
    const subsidiaryName = subsidiary?.name || 'UNKNOWN';

    const log: ActivityLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date(),
      status: randomStatus,
      title: `${subsidiaryName.toUpperCase()} | ${randomFactory.name.toUpperCase()}`,
      description: randomDescription,
      parentGroupId: randomFactory.parentGroupId,
      subsidiaryId: randomFactory.subsidiaryId,
      factoryId: randomFactory.id,
      location: location.toUpperCase(),
      logo: subsidiary?.logo,
    };

    this.warRoomService.addActivityLog(log);
  }

  /**
   * Update hub status for a random subsidiary
   */
  updateHubStatus(): void {
    const subsidiaries = this.warRoomService.subsidiaries();
    if (subsidiaries.length === 0) return;

    const randomSubsidiary = subsidiaries[Math.floor(Math.random() * subsidiaries.length)];
    if (randomSubsidiary.hubs.length === 0) return;

    const randomHub = randomSubsidiary.hubs[Math.floor(Math.random() * randomSubsidiary.hubs.length)];

    // Simulate small capacity changes
    if (randomHub.capacityPercentage !== undefined) {
      const newCapacity = this.varyValue(
        randomHub.capacityPercentage,
        2,
        45,
        100
      );
      this.warRoomService.updateHubStatus(randomSubsidiary.id, randomHub.code, {
        capacityPercentage: newCapacity,
        capacity: `${Math.round(newCapacity)}% CAP`,
      });
    }
  }

  /**
   * Vary a value within a range
   */
  private varyValue(
    current: number,
    variation: number,
    min: number,
    max: number
  ): number {
    const change = (Math.random() - 0.5) * 2 * variation;
    const newValue = current + change;
    return Math.max(min, Math.min(max, Math.round(newValue * 10) / 10));
  }

  ngOnDestroy(): void {
    this.stopRealTimeUpdates();
    // Ensure all subscriptions are cleaned up
    if (this.updateInterval) {
      this.updateInterval.unsubscribe();
      this.updateInterval = null;
    }
    if (this.activityLogIntervalSub) {
      this.activityLogIntervalSub.unsubscribe();
      this.activityLogIntervalSub = null;
    }
  }
}
