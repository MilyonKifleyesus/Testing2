import { Injectable } from '@angular/core';
import { DefectSeverity, TicketPriority, TicketStatus, VehicleStatus } from '../models/vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleUtilService {
  private statusBadges: Record<VehicleStatus, string> = {
    completed: 'badge bg-success-subtle text-success',
    'in-progress': 'badge bg-info-subtle text-info',
    pending: 'badge bg-warning-subtle text-warning'
  };

  private statusIcons: Record<VehicleStatus, string> = {
    completed: 'ri-check-line',
    'in-progress': 'ri-time-line',
    pending: 'ri-error-warning-line'
  };

  private ticketPriorityBadges: Record<TicketPriority, string> = {
    low: 'badge bg-success-subtle text-success',
    medium: 'badge bg-warning-subtle text-warning',
    high: 'badge bg-danger-subtle text-danger'
  };

  private ticketStatusBadges: Record<TicketStatus, string> = {
    open: 'badge bg-primary-subtle text-primary',
    'in-progress': 'badge bg-info-subtle text-info',
    resolved: 'badge bg-success-subtle text-success',
    closed: 'badge bg-secondary-subtle text-secondary'
  };

  private severityBadges: Record<DefectSeverity, string> = {
    low: 'badge bg-success-subtle text-success',
    medium: 'badge bg-warning-subtle text-warning',
    high: 'badge bg-danger-subtle text-danger'
  };

  getStatusBadgeClass(status: VehicleStatus): string {
    return this.statusBadges[status] ?? 'badge bg-secondary-subtle text-secondary';
  }

  getStatusIcon(status: VehicleStatus): string {
    return this.statusIcons[status] ?? 'ri-question-line';
  }

  getTicketPriorityClass(priority: TicketPriority): string {
    return this.ticketPriorityBadges[priority] ?? 'badge bg-secondary-subtle text-secondary';
  }

  getTicketStatusClass(status: TicketStatus): string {
    return this.ticketStatusBadges[status] ?? 'badge bg-secondary-subtle text-secondary';
  }

  getSeverityBadgeClass(severity: DefectSeverity): string {
    return this.severityBadges[severity] ?? 'badge bg-secondary-subtle text-secondary';
  }
}
