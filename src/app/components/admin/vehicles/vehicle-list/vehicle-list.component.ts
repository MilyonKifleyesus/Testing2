import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Vehicle, VehicleFilter } from '../models/vehicle.model';
import { VehicleUtilService } from '../services/vehicle-util.service';

/**
 * Vehicle List Component
 * 
 * @description
 * Displays a searchable and filterable list of all vehicles in the fleet.
 * Features include:
 * - Real-time search across fleet number, VIN, make, and model
 * - Client and propulsion type filtering
 * - Status indicators
 * - Quick actions (View, Edit, Delete)
 * 
 * @example
 * <app-vehicle-list></app-vehicle-list>
 */
@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent implements OnInit {
  /** All vehicles from the service */
  vehicles: Vehicle[] = [];
  
  /** Filtered vehicles based on current criteria */
  filteredVehicles: Vehicle[] = [];
  
  /** Current search term */
  searchTerm: string = '';
  
  /** Selected client filter */
  selectedClient: string = 'all';
  
  /** Selected propulsion filter */
  selectedPropulsion: string = 'all';
  
  /** Available clients */
  clients: string[] = [];
  
  /** Available propulsion types */
  propulsionTypes: string[] = [];

  constructor(public vehicleUtil: VehicleUtilService) {
    this.initializeSampleData();
  }

  ngOnInit(): void {
    this.loadFilterOptions();
  }

  /**
   * Initialize with sample/demo data
   */
  private initializeSampleData(): void {
    this.vehicles = [
      {
        id: 1,
        client: 'BusPulse Fleet',
        fleetNumber: 'BUS-001',
        make: 'Volvo',
        model: 'B8R',
        vin: 'VLV1234567890123',
        mileageType: 'Kilometres',
        propulsion: 'Diesel',
        status: 'completed',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        inspectionDate: new Date().toISOString().split('T')[0],
        inspector: 'John Doe'
      },
      {
        id: 2,
        client: 'BusPulse Fleet',
        fleetNumber: 'BUS-002',
        make: 'Mercedes',
        model: 'Citaro',
        vin: 'MER2345678901234',
        mileageType: 'Kilometres',
        propulsion: 'Diesel',
        status: 'in-progress',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        inspectionDate: new Date().toISOString().split('T')[0],
        inspector: 'Jane Smith'
      },
      {
        id: 3,
        client: 'BusPulse Fleet',
        fleetNumber: 'BUS-003',
        make: 'Scania',
        model: 'K360',
        vin: 'SCA3456789012345',
        mileageType: 'Kilometres',
        propulsion: 'CNG',
        status: 'pending',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        inspectionDate: new Date().toISOString().split('T')[0],
        inspector: 'Mike Johnson'
      },
      {
        id: 4,
        client: 'BusPulse Fleet',
        fleetNumber: 'BUS-004',
        make: 'Tata',
        model: 'LPO 1623',
        vin: 'TAT4567890123456',
        mileageType: 'Kilometres',
        propulsion: 'Diesel',
        status: 'completed',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        inspectionDate: new Date().toISOString().split('T')[0],
        inspector: 'Sarah Brown'
      },
      {
        id: 5,
        client: 'BusPulse Fleet',
        fleetNumber: 'BUS-005',
        make: 'Ashok Leyland',
        model: 'Viking',
        vin: 'ASH5678901234567',
        mileageType: 'Kilometres',
        propulsion: 'Hybrid',
        status: 'completed',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        inspectionDate: new Date().toISOString().split('T')[0],
        inspector: 'Tom Wilson'
      }
    ];
    this.filteredVehicles = [...this.vehicles];
  }

  /**
   * Load filter dropdown options
   */
  private loadFilterOptions(): void {
    this.clients = ['All', 'BusPulse Fleet'];
    this.propulsionTypes = ['All', 'Diesel', 'Hybrid', 'Electric', 'CNG'];
  }

  /**
   * Apply filters to vehicle list
   */
  filterVehicles(): void {
    this.filteredVehicles = this.vehicles.filter(vehicle => {
      const matchesSearch = !this.searchTerm ||
        vehicle.fleetNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        vehicle.vin.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        vehicle.make.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesClient = this.selectedClient === 'all' || vehicle.client.toLowerCase() === this.selectedClient.toLowerCase();
      const matchesPropulsion = this.selectedPropulsion === 'all' || vehicle.propulsion.toLowerCase() === this.selectedPropulsion.toLowerCase();
      
      return matchesSearch && matchesClient && matchesPropulsion;
    });
  }

  /**
   * Get CSS class for vehicle status badge
   */
  getStatusClass(status: string): string {
    return this.vehicleUtil.getStatusBadgeClass(status as any);
  }

  /**
   * Get icon for vehicle status
   */
  getStatusIcon(status: string): string {
    return this.vehicleUtil.getStatusIcon(status as any);
  }

  /**
   * Get inspector name from string or Inspector object
   */
  getInspectorName(inspector: string | any): string {
    return typeof inspector === 'string' ? inspector : (inspector?.name || 'Unknown');
  }

  /**
   * Get inspector initial letter
   */
  getInspectorInitial(inspector: string | any): string {
    const name = this.getInspectorName(inspector);
    return name.charAt(0).toUpperCase();
  }
}
