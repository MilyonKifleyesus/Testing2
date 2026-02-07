import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TicketRow {
  id: number;
  ticketNumber?: string;
  ticketDescription?: string;
  description?: string; // Added for template binding
  safetyCritical: boolean;
  defectTypeId?: number;
  defectLocationId?: number;
  stationId?: number;
  ticketCreatedDate?: string;
  createdDate?: string; // Added for template binding
  ticketUpdatedDate?: string;
  userId?: number;
  ticketAssignedBy?: number;
  assignedBy?: string; // Added for template binding
  assignedTo?: string; // Added for template binding
  projectId?: number;
  vehicleId?: number;
  inspectionTaskId?: number;
  deleted: boolean;
  priority?: number;
  statusTicketId?: number;
  uniqueId?: string;
  lastUpdate?: string;
  clientComment?: string;
  snagId?: number;
  repeater: boolean;
  hasImages?: boolean; // Added for template binding
  // Display fields
  project?: string;
  vehicle?: string;
  defectType?: string;
  defectLocation?: string;
  station?: string;
  status?: string;
  client?: string;
  selected?: boolean;
}

interface Column {
  key: string;
  label: string;
  visible: boolean;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent implements OnInit {
  showColumnMenu = false;
  tickets: TicketRow[] = [];
  filteredTickets: TicketRow[] = [];
  
  uniqueProjects: string[] = [];
  uniqueVehicles: string[] = [];

  columns: Column[] = [
    { key: 'id', label: 'Ticket #', visible: true },
    { key: 'client', label: 'Client', visible: true },
    { key: 'status', label: 'Status', visible: true },
    { key: 'project', label: 'Project', visible: true },
    { key: 'vehicle', label: 'Vehicle', visible: true },
    { key: 'safetyCritical', label: 'Safety Critical', visible: true },
    { key: 'repeater', label: 'Repeater', visible: true },
    { key: 'createdDate', label: 'Created Date', visible: true },
    { key: 'defectType', label: 'Defect Type', visible: true },
    { key: 'defectLocation', label: 'Defect Location', visible: true },
    { key: 'description', label: 'Description', visible: true },
    { key: 'hasImages', label: 'Images', visible: true },
    { key: 'assignedBy', label: 'Assign By', visible: true },
    { key: 'assignedTo', label: 'Assign To', visible: true },
    { key: 'station', label: 'Station', visible: true }
  ];

  filters = {
    project: '',
    vehicle: '',
    search: ''
  };

  constructor() {
    this.initializeSampleData();
  }

  ngOnInit(): void {
    this.updateFilterOptions();
  }

  /**
   * Initialize with sample data
   */
  private initializeSampleData(): void {
    this.tickets = [
      {
        id: 1,
        ticketNumber: '5420-W787bcfaa6ff2',
        ticketDescription: 'Engine fire wire is loose.',
        description: 'Engine fire wire is loose.',
        createdDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        safetyCritical: true,
        repeater: false,
        ticketCreatedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        defectTypeId: 1,
        defectLocationId: 1,
        stationId: 7,
        projectId: 1,
        vehicleId: 1,
        statusTicketId: 3,
        deleted: false,
        priority: 2,
        lastUpdate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        clientComment: 'TTC',
        assignedBy: 'Admin User',
        assignedTo: 'John Doe',
        hasImages: true,
        project: 'Project 1 - Arboc 23FT',
        vehicle: 'Vehicle 1 - 5420-W787',
        defectType: 'Production',
        defectLocation: 'Engine Compartment',
        station: 'Station 7',
        status: 'closed',
        client: 'TTC',
        selected: false
      },
      {
        id: 2,
        ticketNumber: '5419-W7865e1e22c053',
        ticketDescription: 'Protect a/c lines better',
        description: 'Protect a/c lines better',
        createdDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
        safetyCritical: true,
        repeater: false,
        ticketCreatedDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
        defectTypeId: 1,
        defectLocationId: 2,
        stationId: 6,
        projectId: 1,
        vehicleId: 2,
        statusTicketId: 3,
        deleted: false,
        priority: 2,
        lastUpdate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
        clientComment: 'TTC',
        assignedBy: 'Admin User',
        assignedTo: 'Jane Smith',
        hasImages: false,
        project: 'Project 1 - Arboc 23FT',
        vehicle: 'Vehicle 2 - 5419-W786',
        defectType: 'Production',
        defectLocation: 'Vehicle Interior',
        station: 'Station 6',
        status: 'closed',
        client: 'TTC',
        selected: false
      },
      {
        id: 3,
        ticketNumber: '5420-W787a3d8cba074',
        ticketDescription: 'Floor L track metal bent.',
        description: 'Floor L track metal bent.',
        createdDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        safetyCritical: false,
        repeater: false,
        ticketCreatedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        defectTypeId: 1,
        defectLocationId: 3,
        stationId: 6,
        projectId: 1,
        vehicleId: 1,
        statusTicketId: 3,
        deleted: false,
        priority: 1,
        lastUpdate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        clientComment: 'TTC',
        assignedBy: 'Admin User',
        assignedTo: 'Mike Johnson',
        hasImages: true,
        project: 'Project 1 - Arboc 23FT',
        vehicle: 'Vehicle 1 - 5420-W787',
        defectType: 'Production',
        defectLocation: 'Vehicle Interior',
        station: 'Station 6',
        status: 'closed',
        client: 'TTC',
        selected: false
      },
      {
        id: 4,
        ticketNumber: '5420-W7879c3a3c67f',
        ticketDescription: 'Oil seepage at rear main seal.',
        description: 'Oil seepage at rear main seal.',
        createdDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        safetyCritical: true,
        repeater: true,
        ticketCreatedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        defectTypeId: 1,
        defectLocationId: 1,
        stationId: 7,
        projectId: 2,
        vehicleId: 3,
        statusTicketId: 1,
        deleted: false,
        priority: 3,
        lastUpdate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        clientComment: 'TTC',
        assignedBy: 'Admin User',
        assignedTo: 'Sarah Lee',
        hasImages: true,
        project: 'Project 2 - Metro X',
        vehicle: 'Vehicle 3 - 4098-K221',
        defectType: 'Production',
        defectLocation: 'Engine Compartment',
        station: 'Station 7',
        status: 'in-progress',
        client: 'TTC',
        selected: false
      },
      {
        id: 5,
        ticketNumber: '5420-W787d5f2a4b89',
        ticketDescription: 'Front suspension alignment needs adjustment.',
        description: 'Front suspension alignment needs adjustment.',
        createdDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        safetyCritical: false,
        repeater: true,
        ticketCreatedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        defectTypeId: 1,
        defectLocationId: 4,
        stationId: 5,
        projectId: 2,
        vehicleId: 4,
        statusTicketId: 1,
        deleted: false,
        priority: 2,
        lastUpdate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        clientComment: 'TTC',
        assignedBy: 'Admin User',
        assignedTo: 'Tom Brown',
        hasImages: false,
        project: 'Project 2 - Metro X',
        vehicle: 'Vehicle 4 - 3021-M445',
        defectType: 'Warranty',
        defectLocation: 'Suspension System',
        station: 'Station 5',
        status: 'open',
        client: 'TTC',
        selected: false
      }
    ];
    this.filteredTickets = [...this.tickets];
  }

  /**
   * Update unique projects and vehicles for filters
   */
  private updateFilterOptions(): void {
    const projects = new Set<string>();
    const vehicles = new Set<string>();
    
    this.tickets.forEach(ticket => {
      if (ticket.project) projects.add(ticket.project);
      if (ticket.vehicle) vehicles.add(ticket.vehicle);
    });
    
    this.uniqueProjects = Array.from(projects).sort();
    this.uniqueVehicles = Array.from(vehicles).sort();
  }

  /**
   * Apply filters to the tickets
   */
  applyFilters(): void {
    this.filteredTickets = this.tickets.filter(t => {
      const matchesProject = !this.filters.project || t.project === this.filters.project;
      const matchesVehicle = !this.filters.vehicle || t.vehicle === this.filters.vehicle;
      const search = this.filters.search?.toLowerCase() || '';
      const matchesSearch = !search ||
        String(t.id).toLowerCase().includes(search) ||
        (t.project?.toLowerCase().includes(search) || false) ||
        (t.vehicle?.toLowerCase().includes(search) || false) ||
        (t.description?.toLowerCase().includes(search) || false) ||
        (t.client?.toLowerCase().includes(search) || false);
      return matchesProject && matchesVehicle && matchesSearch;
    });
  }

  get selectedCount(): number {
    return this.filteredTickets.filter(t => t.selected).length;
  }

  get allSelected(): boolean {
    return this.filteredTickets.length > 0 && this.filteredTickets.every(t => t.selected);
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.filteredTickets.forEach(t => t.selected = checked);
  }

  checkAll(): void {
    this.filteredTickets.forEach(t => t.selected = true);
  }

  uncheckAll(): void {
    this.filteredTickets.forEach(t => t.selected = false);
  }

  updateSelection(): void {
    this.tickets = [...this.tickets];
  }

  getStatusBadgeClass(status: string): string {
    const classes: { [key: string]: string } = {
      'open': 'bg-primary-transparent text-primary',
      'in-progress': 'bg-warning-transparent text-warning',
      'resolved': 'bg-info-transparent text-info',
      'closed': 'bg-success-transparent text-success'
    };
    return classes[status] || 'bg-light';
  }

  toggleColumnMenu(): void {
    this.showColumnMenu = !this.showColumnMenu;
  }

  isColumnVisible(columnKey: string): boolean {
    const column = this.columns.find(c => c.key === columnKey);
    return column ? column.visible : true;
  }

  getVisibleColumnsCount(): number {
    return this.columns.filter(c => c.visible).length;
  }

  resetColumns(): void {
    this.columns.forEach(col => col.visible = true);
  }

  uncheckAllColumns(): void {
    this.columns.forEach(col => {
      if (col.key !== 'id') {
        col.visible = false;
      }
    });
  }
}
