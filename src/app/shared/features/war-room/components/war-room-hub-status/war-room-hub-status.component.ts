import { Component, input, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubStatus, SubsidiaryCompany } from '../../../../../shared/models/war-room.interface';

@Component({
  selector: 'app-war-room-hub-status',
  imports: [CommonModule],
  templateUrl: './war-room-hub-status.component.html',
  styleUrl: './war-room-hub-status.component.scss',
})
export class WarRoomHubStatusComponent {
  selectedSubsidiary = input<SubsidiaryCompany | null>(null);

  addCompanyRequested = output<void>();

  readonly hubs = computed(() => {
    return this.selectedSubsidiary()?.hubs || [];
  });

  readonly quantumChart = computed(() => {
    return this.selectedSubsidiary()?.quantumChart || null;
  });

  /**
   * Get hub border class
   */
  getHubBorderClass(status: HubStatus): string {
    if (status === 'OFFLINE') {
      return 'border-critical-red';
    }

    return status === 'OPTIMAL' || status === 'ONLINE' || status === 'ACTIVE'
      ? 'border-tactical-green'
      : 'border-zinc-700';
  }

  getHubAccentColor(status: HubStatus): string {
    if (status === 'OFFLINE') {
      return '#ef4444';
    }

    return status === 'OPTIMAL' || status === 'ONLINE' || status === 'ACTIVE'
      ? '#00FF41'
      : '#3f3f46';
  }

  getHubStatusLabel(status: HubStatus): string {
    return status === 'OFFLINE' ? 'INACTIVE' : status;
  }

  /**
   * Handle add company click – request modal (handled by war-room, modal over map)
   */
  onAddCompany(): void {
    this.addCompanyRequested.emit();
  }
}
