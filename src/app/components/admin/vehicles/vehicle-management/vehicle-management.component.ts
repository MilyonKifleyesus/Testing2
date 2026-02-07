import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject, takeUntil } from 'rxjs';

/**
 * Vehicle Status Categories
 */
export enum VehicleStatus {
  STORAGE = 'storage',
  IN_SERVICE = 'in-service',
  OUT_OF_SERVICE = 'out-of-service',
  MAINTENANCE = 'maintenance',
  LONG_TERM_MAINTENANCE = 'long-term-maintenance',
  OFF_SITE_MAINTENANCE = 'off-site-maintenance'
}

/**
 * Vehicle Interface
 * Represents a single vehicle in the fleet management system
 */
export interface Vehicle {
  id: string;
  vehicleId: number; // Numeric ID for navigation
  busNumber: string;
  bayNumber?: string;
  status: VehicleStatus;
  client: string;
  model: string;
  fleetNumber?: string;
  make?: string;
  lastInspection?: Date;
  assignedInspector?: string;
  maintenanceNotes?: string;
}

/**
 * Status Column Configuration
 * Defines display properties for each status column
 */
export interface StatusColumn {
  id: VehicleStatus;
  title: string;
  color: string;
  icon: string;
  description: string;
  vehicles: Vehicle[];
}

/**
 * Vehicle Management Component
 * 
 * @description
 * Provides a Kanban-style board for managing vehicle status across different categories.
 * Supports drag-and-drop functionality to move vehicles between status columns.
 * 
 * Features:
 * - Drag and drop vehicles between status columns
 * - Visual representation of fleet distribution
 * - Real-time status updates
 * - Enterprise-ready architecture for backend integration
 * 
 * @example
 * <app-vehicle-management></app-vehicle-management>
 */
@Component({
  selector: 'app-vehicle-management',
  standalone: true,
  imports: [CommonModule, DragDropModule, RouterModule],
  templateUrl: './vehicle-management.component.html',
  styleUrl: './vehicle-management.component.scss'
})
export class VehicleManagementComponent implements OnInit, OnDestroy {
  
  /** Status columns configuration */
  statusColumns: StatusColumn[] = [];

  /** All connected drop lists for drag-drop */
  connectedDropLists: string[] = [];

  /** Subject for managing subscriptions */
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeColumns();
    this.loadSampleData();
    this.setupConnectedLists();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Initialize status columns with configuration
   */
  private initializeColumns(): void {
    this.statusColumns = [
      {
        id: VehicleStatus.STORAGE,
        title: 'Storage',
        color: '#6c757d',
        icon: 'ti-package',
        description: 'Vehicles in storage',
        vehicles: []
      },
      {
        id: VehicleStatus.IN_SERVICE,
        title: 'In-Service',
        color: '#28a745',
        icon: 'ti-circle-check',
        description: 'Active vehicles',
        vehicles: []
      },
      {
        id: VehicleStatus.OUT_OF_SERVICE,
        title: 'Out of Service',
        color: '#dc3545',
        icon: 'ti-circle-x',
        description: 'Not operational',
        vehicles: []
      },
      {
        id: VehicleStatus.MAINTENANCE,
        title: 'Maintenance',
        color: '#ffc107',
        icon: 'ti-tools',
        description: 'Under maintenance',
        vehicles: []
      },
      {
        id: VehicleStatus.LONG_TERM_MAINTENANCE,
        title: 'Long-term Maintenance',
        color: '#fd7e14',
        icon: 'ti-calendar-event',
        description: 'Extended maintenance',
        vehicles: []
      },
      {
        id: VehicleStatus.OFF_SITE_MAINTENANCE,
        title: 'Off-Site Maintenance',
        color: '#6f42c1',
        icon: 'ti-home-off',
        description: 'External facility',
        vehicles: []
      }
    ];
  }

  /**
   * Load sample/demo vehicle data
   * Maps vehicle data to management board
   */
  private loadSampleData(): void {
    const sampleVehicles: Vehicle[] = [
      {
        id: 'vehicle-1',
        vehicleId: 1,
        busNumber: 'BUS-001',
        client: 'BusPulse Fleet',
        model: 'B8R',
        make: 'Volvo',
        fleetNumber: 'BUS-001',
        status: VehicleStatus.IN_SERVICE,
        assignedInspector: 'John Doe',
        lastInspection: new Date()
      },
      {
        id: 'vehicle-2',
        vehicleId: 2,
        busNumber: 'BUS-002',
        client: 'BusPulse Fleet',
        model: 'Citaro',
        make: 'Mercedes',
        fleetNumber: 'BUS-002',
        status: VehicleStatus.MAINTENANCE,
        assignedInspector: 'Jane Smith',
        lastInspection: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'vehicle-3',
        vehicleId: 3,
        busNumber: 'BUS-003',
        client: 'BusPulse Fleet',
        model: 'K360',
        make: 'Scania',
        fleetNumber: 'BUS-003',
        status: VehicleStatus.STORAGE,
        assignedInspector: 'Mike Johnson',
        lastInspection: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'vehicle-4',
        vehicleId: 4,
        busNumber: 'BUS-004',
        client: 'BusPulse Fleet',
        model: 'LPO 1623',
        make: 'Tata',
        fleetNumber: 'BUS-004',
        status: VehicleStatus.OUT_OF_SERVICE,
        assignedInspector: 'Sarah Brown',
        lastInspection: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'vehicle-5',
        vehicleId: 5,
        busNumber: 'BUS-005',
        client: 'BusPulse Fleet',
        model: 'Viking',
        make: 'Ashok Leyland',
        fleetNumber: 'BUS-005',
        status: VehicleStatus.LONG_TERM_MAINTENANCE,
        assignedInspector: 'Tom Wilson',
        lastInspection: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'vehicle-6',
        vehicleId: 6,
        busNumber: 'BUS-006',
        client: 'BusPulse Fleet',
        model: 'MCV',
        make: 'International',
        fleetNumber: 'BUS-006',
        status: VehicleStatus.OFF_SITE_MAINTENANCE,
        assignedInspector: 'Lisa Anderson',
        lastInspection: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000)
      }
    ];

    // Distribute vehicles to their status columns
    sampleVehicles.forEach(vehicle => {
      const column = this.statusColumns.find(col => col.id === vehicle.status);
      if (column) {
        column.vehicles.push(vehicle);
      }
    });
  }

  /**
   * Setup connected drop lists for cross-column drag-drop
   */
  private setupConnectedLists(): void {
    this.connectedDropLists = this.statusColumns.map(col => col.id);
  }

  /**
   * Handle drag and drop event
   * Moves vehicle between status columns or reorders within same column
   * 
   * @param event CdkDragDrop event
   */
  onVehicleDrop(event: CdkDragDrop<Vehicle[]>): void {
    const previousStatus = event.previousContainer.id as VehicleStatus;
    const newStatus = event.container.id as VehicleStatus;
    const vehicle = event.previousContainer.data[event.previousIndex];

    if (event.previousContainer === event.container) {
      // Reorder within same column
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move to different column
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // Update vehicle status
      vehicle.status = newStatus;

      // Log status change for audit trail
      this.logStatusChange(vehicle, previousStatus, newStatus);

      // In production, call API to persist status change
      this.updateVehicleStatus(vehicle);
    }
  }

  /**
   * Update vehicle status in backend
   * @param vehicle Vehicle with updated status
   */
  private updateVehicleStatus(vehicle: Vehicle): void {
    // TODO: Implement API call
    // Example: this.vehicleService.updateStatus(vehicle.id, vehicle.status)
    console.log('Status updated:', vehicle);
  }

  /**
   * Log status change for audit trail
   * @param vehicle Vehicle being moved
   * @param previousStatus Previous status
   * @param newStatus New status
   */
  private logStatusChange(vehicle: Vehicle, previousStatus: VehicleStatus, newStatus: VehicleStatus): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Vehicle ${vehicle.busNumber} moved from ${previousStatus} to ${newStatus}`);
    
    // In production, send to logging service or backend
    // Example: this.auditService.log({ vehicleId: vehicle.id, from: previousStatus, to: newStatus, timestamp })
  }

  /**
   * Get count of vehicles in a column
   * @param column Status column
   */
  getVehicleCount(column: StatusColumn): number {
    return column.vehicles.length;
  }

  /**
   * Get formatted count text
   * @param count Number of vehicles
   */
  getCountText(count: number): string {
    return count === 1 ? '1 bus' : `${count} buses`;
  }

  /**
   * Track by function for ngFor optimization
   * @param index Item index
   * @param vehicle Vehicle item
   */
  trackByVehicleId(index: number, vehicle: Vehicle): string {
    return vehicle.id;
  }

  /**
   * Track by function for status columns
   * @param index Column index
   * @param column Status column
   */
  trackByColumnId(index: number, column: StatusColumn): VehicleStatus {
    return column.id;
  }

  /**
   * Navigate to vehicle detail page
   * @param vehicle Vehicle to view
   * @param event Click event (to prevent drag interference)
   */
  viewVehicleDetails(vehicle: Vehicle, event: MouseEvent): void {
    // Prevent navigation if user is dragging
    if (event.defaultPrevented) {
      return;
    }
    
    // Navigate to vehicle view page using numeric ID
    this.router.navigate(['/admin/vehicles/view', vehicle.vehicleId]);
  }
}
