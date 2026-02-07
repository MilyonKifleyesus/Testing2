import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ProjectVehicle {
  id: number;
  fleetNumber: string;
  make: string;
  model: string;
  vin: string;
  propulsion: string;
  status: 'completed' | 'in-progress' | 'pending' | 'failed';
  inspector: string;
  inspectorAvatar?: string;
  inspectionDate?: string;
  imageUrl?: string;
  progress: number;
}

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  projectId: number | null = null;

  project = {
    client: 'TTC',
    name: 'Nova - LE65 40FT',
    contract: 'LE65',
    location: 'St. Eustache (Nova)',
    type: 'New Build',
    hasRoadTest: true,
    status: 'Active' as 'Active' | 'Closed'
  };

  tabs = [
    { key: 'project', label: 'Project' },
    { key: 'vehicles', label: 'Vehicles' },
    { key: 'inspection-categories', label: 'Inspection Categories' },
    { key: 'inspection-tasks', label: 'Inspection Tasks' },
    { key: 'files', label: 'Files' }
  ];
  activeTab = 'project';

  // Vehicles data
  vehicleViewMode: 'grid' | 'table' = 'grid';
  projectVehicles: ProjectVehicle[] = [];
  filteredProjectVehicles: ProjectVehicle[] = [];
  
  vehicleFilters = {
    search: '',
    status: '',
    propulsion: '',
    inspector: ''
  };

  constructor(private route: ActivatedRoute) {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.projectId = idParam ? Number(idParam) : null;
  }

  ngOnInit(): void {
    this.loadSampleVehicles();
    this.filteredProjectVehicles = [...this.projectVehicles];
  }

  private loadSampleVehicles(): void {
    this.projectVehicles = [
      {
        id: 1,
        fleetNumber: 'BUS-001',
        make: 'Nova',
        model: 'LFS',
        vin: '1N9LF40E5K1234567',
        propulsion: 'Diesel',
        status: 'completed',
        inspector: 'John Doe',
        inspectionDate: '2026-01-10',
        progress: 100,
        imageUrl: 'assets/images/media/media-20.jpg'
      },
      {
        id: 2,
        fleetNumber: 'BUS-002',
        make: 'Nova',
        model: 'LFS',
        vin: '1N9LF40E5K1234568',
        propulsion: 'Electric',
        status: 'in-progress',
        inspector: 'Jane Smith',
        inspectionDate: '2026-01-12',
        progress: 65,
        imageUrl: 'assets/images/media/media-21.jpg'
      },
      {
        id: 3,
        fleetNumber: 'BUS-003',
        make: 'Nova',
        model: 'LFS',
        vin: '1N9LF40E5K1234569',
        propulsion: 'Diesel',
        status: 'pending',
        inspector: 'Mike Johnson',
        inspectionDate: '2026-01-15',
        progress: 0,
        imageUrl: 'assets/images/media/media-22.jpg'
      },
      {
        id: 4,
        fleetNumber: 'BUS-004',
        make: 'Nova',
        model: 'LFS',
        vin: '1N9LF40E5K1234570',
        propulsion: 'Hybrid',
        status: 'completed',
        inspector: 'John Doe',
        inspectionDate: '2026-01-08',
        progress: 100,
        imageUrl: 'assets/images/media/media-23.jpg'
      },
      {
        id: 5,
        fleetNumber: 'BUS-005',
        make: 'Nova',
        model: 'LFS',
        vin: '1N9LF40E5K1234571',
        propulsion: 'CNG',
        status: 'in-progress',
        inspector: 'Jane Smith',
        inspectionDate: '2026-01-13',
        progress: 45,
        imageUrl: 'assets/images/media/media-24.jpg'
      },
      {
        id: 6,
        fleetNumber: 'BUS-006',
        make: 'Nova',
        model: 'LFS',
        vin: '1N9LF40E5K1234572',
        propulsion: 'Electric',
        status: 'failed',
        inspector: 'Mike Johnson',
        inspectionDate: '2026-01-09',
        progress: 80,
        imageUrl: 'assets/images/media/media-25.jpg'
      }
    ];
  }

  setTab(tabKey: string) {
    this.activeTab = tabKey;
  }

  toggleVehicleView(): void {
    this.vehicleViewMode = this.vehicleViewMode === 'grid' ? 'table' : 'grid';
  }

  filterVehicles(): void {
    this.filteredProjectVehicles = this.projectVehicles.filter(vehicle => {
      const matchesSearch = !this.vehicleFilters.search || 
        vehicle.vin.toLowerCase().includes(this.vehicleFilters.search.toLowerCase()) ||
        vehicle.fleetNumber.toLowerCase().includes(this.vehicleFilters.search.toLowerCase()) ||
        `${vehicle.make} ${vehicle.model}`.toLowerCase().includes(this.vehicleFilters.search.toLowerCase());
      
      const matchesStatus = !this.vehicleFilters.status || vehicle.status === this.vehicleFilters.status;
      const matchesPropulsion = !this.vehicleFilters.propulsion || vehicle.propulsion === this.vehicleFilters.propulsion;
      const matchesInspector = !this.vehicleFilters.inspector || vehicle.inspector === this.vehicleFilters.inspector;

      return matchesSearch && matchesStatus && matchesPropulsion && matchesInspector;
    });
  }

  resetFilters(): void {
    this.vehicleFilters = {
      search: '',
      status: '',
      propulsion: '',
      inspector: ''
    };
    this.filteredProjectVehicles = [...this.projectVehicles];
  }

  getVehiclesByStatus(status: string): ProjectVehicle[] {
    return this.projectVehicles.filter(v => v.status === status);
  }

  getStatusBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      'completed': 'bg-success',
      'in-progress': 'bg-warning',
      'pending': 'bg-info',
      'failed': 'bg-danger'
    };
    return classes[status] || 'bg-secondary';
  }

  getProgressBarClass(progress: number): string {
    if (progress === 100) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    if (progress > 0) return 'bg-info';
    return 'bg-secondary';
  }

  addVehicle(): void {
    console.log('Add vehicle to project');
    // Navigate to add vehicle form or open modal
  }

  inspectVehicle(vehicleId: number): void {
    console.log('Start inspection for vehicle:', vehicleId);
    // Navigate to inspection interface
  }

  removeVehicle(vehicleId: number): void {
    if (confirm('Are you sure you want to remove this vehicle from the project?')) {
      this.projectVehicles = this.projectVehicles.filter(v => v.id !== vehicleId);
      this.filterVehicles();
    }
  }

  closeProject() {
    if (this.project.status === 'Closed') return;
    if (confirm('Are you sure you want to close this project?')) {
      this.project.status = 'Closed';
    }
  }

  editProject() {
    // placeholder for navigation to edit
    // e.g., this.router.navigate(['/admin/projects/edit', this.projectId])
    alert('Edit flow coming soon');
  }
}
