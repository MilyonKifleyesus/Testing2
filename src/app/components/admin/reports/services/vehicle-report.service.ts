import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

// ==================== Vehicle Ticket Report Interfaces ====================

export interface VehicleTicketReportRequest {
  projectId?: number;
  projectName?: string;
  vehicleId?: number;
  vehicleNumber?: string;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}

export interface VehicleTicket {
  id: number;
  ticketNumber: string;
  clientId: number;
  clientName: string;
  projectId: number;
  projectName: string;
  vehicleId: number;
  vehicleNumber: string;
  vehicleVIN: string;
  safetyCritical: boolean;
  createdDate: string;
  defectType: string;
  defectLocation: string;
  description: string;
  hasImages: boolean;
  imageCount?: number;
  assignedById: number;
  assignedByName: string;
  assignedToId: number;
  assignedToName: string;
  stationId?: number;
  stationName?: string;
  status: 'Open' | 'In Progress' | 'Closed' | 'Pending';
  resolvedDate?: string;
}

export interface VehicleTicketReportResponse {
  success: boolean;
  data: VehicleTicket[];
  totalCount: number;
  page: number;
  pageSize: number;
  message?: string;
}

// ==================== Vehicle Station Tracker Interfaces ====================

export interface VehicleStationTrackerRequest {
  projectId?: number;
  projectName?: string;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}

export interface StationCheckpoint {
  id: number;
  name: string;
  completedDate?: string;
}

export interface VehicleStationTracker {
  id: number;
  vehicleId: number;
  fleetNumber: string;
  vin: string;
  frameNumber: string;
  projectId: number;
  projectName: string;
  inspector?: string;
  // Main stations (shown in table columns)
  station01?: string; // Chassis Prep, AC Prep, Fire Suppression, Engine Dress
  station02?: string; // Modify Front End, Air Bags, Remove Brake Lines & Fuel Lines
  station03?: string; // Cab Cut Out, Modify Frame Kickups, Rear Axle, Bike Racks
  station04?: string; // RR Frame & Shelling, Birdcage, Ramp Support
  station05?: string; // Air Lines, Exhaust, Drive Shafts, Brake Lines, Rough Electric
  station06?: string; // Floor, Rear Wall, Roof, AC Mount, Hatches, Electrical
  station07?: string; // Floor Prep, Hoses, Electrical, Mirror Harness
  station08?: string; // Polyurea Spray
  station09?: string; // Front Cap & Seal, Ext Lights Interior, Electrical Upstairs, Prep Fiberglass
  station10?: string; // Interior Electrical, Ramps
  station11?: string; // Electrical Console, Interior Lights, Warning Buzzer, Mirrors
  // Additional checkpoints (shown when expanded)
  station12?: string; // Stanchions, Transitions, Speakers, Windows
  station13?: string; // Test, Bike Racks, Luggage Racks
  station14?: string; // Seats, Entry Door
  station15?: string; // ABS Plastics, Exterior Finish, Stanchions, Easy Stop Buttons, Fire Suppression
  station16?: string; // Underbody, Vacuum, Coolant, Headlights
  station17?: string; // Drys Box, Rub Rails, Clean & Detail
  station18?: string; // Alignment, Leak Down Test
  station19?: string; // Post Road Test Bay
  station20?: string; // Inspector Testing & PDI
  station21?: string; // Shipped to Client
  station22?: string;
  station23?: string;
  station24?: string;
  station25?: string;
  station26?: string;
  station27?: string;
  station28?: string;
  station29?: string;
  isExpanded?: boolean; // UI state for row expansion
}

export interface VehicleStationTrackerResponse {
  success: boolean;
  data: VehicleStationTracker[];
  totalCount: number;
  page: number;
  pageSize: number;
  message?: string;
}

// ==================== Vehicle Final Reports Interfaces ====================

export interface VehicleFinalReportRequest {
  clientId?: number;
  clientName?: string;
  projectId?: number;
  projectName?: string;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}

export interface VehicleFinalReport {
  id: number;
  idNumber: string;
  clientId: number;
  clientName: string;
  projectId: number;
  projectName: string;
  vehicleId: number;
  fleetNumber: string;
  vin: string;
  reportGeneratedDate: string;
  reportStatus: 'Draft' | 'Completed' | 'Approved' | 'Pending Review';
  totalDefects: number;
  criticalDefects: number;
  resolvedDefects: number;
  pendingDefects: number;
  inspectorName?: string;
  approvedBy?: string;
  approvalDate?: string;
  documentUrl?: string;
}

export interface VehicleFinalReportResponse {
  success: boolean;
  data: VehicleFinalReport[];
  totalCount: number;
  page: number;
  pageSize: number;
  message?: string;
}

// ==================== Common Interfaces ====================

export interface Vehicle {
  id: number;
  vehicleNumber: string;
  fleetNumber?: string;
  vin: string;
  projectId: number;
  projectName: string;
}

export interface Station {
  id: number;
  name: string;
  location?: string;
}

export interface Client {
  id: number;
  name: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehicleReportService {
  private apiUrl = '/api/vehicle-reports'; // Backend API URL

  constructor() {}

  // ==================== Vehicle Ticket Report Methods ====================

  /**
   * Fetch vehicle ticket reports from backend
   * TODO: Replace with actual HttpClient call when backend is ready
   */
  getVehicleTicketReports(request: VehicleTicketReportRequest): Observable<VehicleTicketReportResponse> {
    // return this.http.post<VehicleTicketReportResponse>(`${this.apiUrl}/vehicle-tickets`, request);
    
    return of(this.getMockVehicleTickets(request)).pipe(delay(500));
  }

  /**
   * Fetch vehicles for dropdown filter
   * TODO: Replace with actual HttpClient call
   */
  getVehiclesByProject(projectId: number): Observable<Vehicle[]> {
    // return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles/by-project/${projectId}`);
    
    return of(this.getMockVehicles(projectId)).pipe(delay(300));
  }

  // ==================== Vehicle Station Tracker Methods ====================

  /**
   * Fetch vehicle station tracker reports from backend
   * TODO: Replace with actual HttpClient call
   */
  getVehicleStationTracker(request: VehicleStationTrackerRequest): Observable<VehicleStationTrackerResponse> {
    // return this.http.post<VehicleStationTrackerResponse>(`${this.apiUrl}/station-tracker`, request);
    
    return of(this.getMockStationTracker(request)).pipe(delay(500));
  }

  /**
   * Fetch stations for dropdown filter
   * TODO: Replace with actual HttpClient call
   */
  getStations(): Observable<Station[]> {
    // return this.http.get<Station[]>(`${this.apiUrl}/stations`);
    
    return of([
      { id: 1, name: '24 - Nova Bus Coach Tester Road Test, Inspection & Painting', location: 'Location A' },
      { id: 2, name: 'Station B', location: 'Location B' },
      { id: 3, name: 'Station C', location: 'Location C' },
      { id: 4, name: 'Main Depot', location: 'Main Location' }
    ]).pipe(delay(300));
  }

  // ==================== Vehicle Final Reports Methods ====================

  /**
   * Fetch vehicle final reports from backend
   * TODO: Replace with actual HttpClient call
   */
  getVehicleFinalReports(request: VehicleFinalReportRequest): Observable<VehicleFinalReportResponse> {
    // return this.http.post<VehicleFinalReportResponse>(`${this.apiUrl}/final-reports`, request);
    
    return of(this.getMockFinalReports(request)).pipe(delay(500));
  }

  /**
   * Download vehicle health report
   * TODO: Replace with actual HttpClient call
   */
  downloadVehicleHealthReport(reportId: number): Observable<Blob> {
    // return this.http.get(`${this.apiUrl}/final-reports/${reportId}/download`, { responseType: 'blob' });
    
    console.log('Download vehicle health report:', reportId);
    return of(new Blob(['Mock PDF data'], { type: 'application/pdf' })).pipe(delay(500));
  }

  /**
   * Fetch clients for dropdown filter
   * TODO: Replace with actual HttpClient call
   */
  getClients(): Observable<Client[]> {
    // return this.http.get<Client[]>(`${this.apiUrl}/clients`);
    
    return of([
      { id: 1, name: 'TTC', code: 'TTC' },
      { id: 2, name: 'GO Transit', code: 'GOT' },
      { id: 3, name: 'MiWay', code: 'MIW' },
      { id: 4, name: 'Brampton Transit', code: 'BRT' }
    ]).pipe(delay(300));
  }

  /**
   * Fetch projects for dropdown filter
   * TODO: Replace with actual HttpClient call
   */
  getProjects(): Observable<any[]> {
    // return this.http.get<any[]>(`${this.apiUrl}/projects`);
    
    return of([
      { id: 1, name: 'Nova - LE65 40FT', code: 'NOVA40' },
      { id: 2, name: 'Arboc 23FT', code: 'ARBOC23' },
      { id: 3, name: 'LF76', code: 'LF76' },
      { id: 4, name: 'LF94', code: 'LF94' }
    ]).pipe(delay(300));
  }

  // ==================== MOCK DATA METHODS ====================
  // Remove these methods when backend is connected

  private getMockVehicleTickets(request: VehicleTicketReportRequest): VehicleTicketReportResponse {
    // Generate 50 demo records for Vehicle Ticket Report
    const mockData: VehicleTicket[] = this.generateDemoVehicleTickets(50);

    // Apply filters if provided
    let filteredData = mockData;
    if (request.vehicleNumber && request.vehicleNumber !== '') {
      filteredData = mockData.filter(t => t.vehicleNumber === request.vehicleNumber);
    }
    if (request.projectName && request.projectName !== '') {
      filteredData = filteredData.filter(t => t.projectName === request.projectName);
    }
    if (request.searchTerm) {
      const searchLower = request.searchTerm.toLowerCase();
      filteredData = filteredData.filter(t =>
        t.ticketNumber.toLowerCase().includes(searchLower) ||
        t.vehicleNumber.includes(searchLower) ||
        t.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply pagination
    const page = request.page || 1;
    const pageSize = request.pageSize || 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
      success: true,
      data: paginatedData,
      totalCount: filteredData.length,
      page: page,
      pageSize: pageSize,
      message: 'Vehicle tickets fetched successfully'
    };
  }

  /**
   * Generate 50 demo vehicle ticket records
   */
  private generateDemoVehicleTickets(count: number): VehicleTicket[] {
    const statuses: Array<'Open' | 'In Progress' | 'Closed' | 'Pending'> = ['Open', 'In Progress', 'Closed', 'Pending'];
    const defectTypes = ['Condition Assessment', 'Safety Issue', 'Maintenance', 'Cosmetic Damage', 'Electrical', 'Mechanical'];
    const locations = ['Engine Bay', 'Cabin', 'Exterior', 'Interior', 'Wheels & Tires', 'Electrical System', 'Brake System'];
    const vehicles = [
      { vehicleNumber: '5000', vin: '2NVYL82L9N3753785', projectName: 'Nova - LE65 40FT' },
      { vehicleNumber: '5001', vin: '2NVYL82L9N3753786', projectName: 'Nova - LE65 40FT' },
      { vehicleNumber: '5002', vin: '2NVYL82L9N3753787', projectName: 'Niagara' },
      { vehicleNumber: '5003', vin: '2NVYL82L9N3753788', projectName: 'Niagara' },
      { vehicleNumber: '5004', vin: '2NVYL82L9N3753789', projectName: 'Toronto Transit' },
      { vehicleNumber: '5005', vin: '2NVYL82L9N3753790', projectName: 'Toronto Transit' }
    ];
    const assignees = [
      { id: 2, name: 'Naeem App' },
      { id: 3, name: 'John Smith' },
      { id: 4, name: 'Sarah Johnson' },
      { id: 5, name: 'Mike Davis' },
      { id: 6, name: 'Emma Wilson' }
    ];

    const tickets: VehicleTicket[] = [];
    for (let i = 1; i <= count; i++) {
      const vehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
      const assignee = assignees[Math.floor(Math.random() * assignees.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const createdDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
      const resolvedDate = status === 'Closed' 
        ? new Date(createdDate.getTime() + Math.random() * 7 * 24 * 60 * 60 * 1000)
        : undefined;

      tickets.push({
        id: i,
        ticketNumber: `T${String(i).padStart(5, '0')}`,
        clientId: 1,
        clientName: vehicle.projectName === 'Nova - LE65 40FT' ? 'TTC' : 'Other Client',
        projectId: i % 3,
        projectName: vehicle.projectName,
        vehicleId: parseInt(vehicle.vehicleNumber),
        vehicleNumber: vehicle.vehicleNumber,
        vehicleVIN: vehicle.vin,
        safetyCritical: Math.random() > 0.8,
        createdDate: createdDate.toISOString(),
        defectType: defectTypes[Math.floor(Math.random() * defectTypes.length)],
        defectLocation: locations[Math.floor(Math.random() * locations.length)],
        description: `Ticket description for defect ${i}. This is a sample ticket for testing purposes.`,
        hasImages: Math.random() > 0.6,
        imageCount: Math.floor(Math.random() * 5),
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: assignee.id,
        assignedToName: assignee.name,
        stationId: Math.floor(Math.random() * 5) + 1,
        stationName: '24 - Nova Bus Coach Tester Road Test, Inspection & Painting',
        status: status,
        resolvedDate: resolvedDate ? resolvedDate.toISOString() : undefined
      });
    }
    return tickets;
  }

  private getMockVehicles(projectId: number): Vehicle[] {
    return [
      { id: 7001, vehicleNumber: '7001', fleetNumber: '7001', vin: '2NVYL82L9N3753785', projectId: 1, projectName: 'Nova - LE65 40FT' },
      { id: 7002, vehicleNumber: '7002', fleetNumber: '7002', vin: '2NVYL82L9N3753786', projectId: 1, projectName: 'Nova - LE65 40FT' },
      { id: 7003, vehicleNumber: '7003', fleetNumber: '7003', vin: '2NVYL82L9N3753787', projectId: 1, projectName: 'Nova - LE65 40FT' }
    ];
  }

  private getMockStationTracker(request: VehicleStationTrackerRequest): VehicleStationTrackerResponse {
    // Generate 20 demo records for testing
    const mockData = this.generateDemoStationTrackerData(20);

    // Apply search filter if provided
    let filteredData = mockData;
    if (request.searchTerm) {
      const searchLower = request.searchTerm.toLowerCase();
      filteredData = mockData.filter(item =>
        item.fleetNumber.toLowerCase().includes(searchLower) ||
        item.vin.toLowerCase().includes(searchLower) ||
        item.frameNumber.toLowerCase().includes(searchLower)
      );
    }

    // Apply pagination
    const page = request.page || 1;
    const pageSize = request.pageSize || 50;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

    return {
      success: true,
      data: paginatedData,
      totalCount: filteredData.length,
      page: page,
      pageSize: pageSize,
      message: 'Station tracker data fetched successfully'
    };
  }

  /**
   * Generate demo station tracker data for testing high volumes
   */
  private generateDemoStationTrackerData(count: number): VehicleStationTracker[] {
    const data: VehicleStationTracker[] = [];
    const projects = ['Arboc 23FT', 'Arboc 35FT', 'Arboc 40FT', 'ElDorado Custom', 'TransPower Elite'];
    const baseFleetNumbers = [5000, 5100, 5200, 5300, 5400, 5500];

    // Random date generator
    const getRandomDate = (completed: boolean) => {
      if (!completed) return undefined;
      const date = new Date(2023, Math.random() * 12, Math.floor(Math.random() * 28) + 1);
      return date.toLocaleDateString('en-US');
    };

    // Random VIN generator
    const getRandomVIN = () => {
      const chars = '3C7WRVLG0123456789';
      let vin = '';
      for (let i = 0; i < 17; i++) {
        vin += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return vin;
    };

    for (let i = 1; i <= count; i++) {
      const projectIdx = Math.floor(Math.random() * projects.length);
      const baseFleet = baseFleetNumbers[projectIdx % baseFleetNumbers.length];
      const fleetNum = baseFleet + i;
      
      // Simulate progression through stations
      const completedStations = Math.floor(Math.random() * 22);
      
      const record: VehicleStationTracker = {
        id: i,
        vehicleId: fleetNum,
        fleetNumber: `${fleetNum}-W${800 + i}`,
        vin: getRandomVIN(),
        frameNumber: fleetNum.toString(),
        projectId: projectIdx + 1,
        projectName: projects[projectIdx],
        station01: completedStations > 0 ? getRandomDate(Math.random() > 0.3) : undefined,
        station02: completedStations > 1 ? getRandomDate(Math.random() > 0.3) : undefined,
        station03: completedStations > 2 ? getRandomDate(Math.random() > 0.25) : undefined,
        station04: completedStations > 3 ? getRandomDate(Math.random() > 0.25) : undefined,
        station05: completedStations > 4 ? getRandomDate(Math.random() > 0.2) : undefined,
        station06: completedStations > 5 ? getRandomDate(Math.random() > 0.2) : undefined,
        station07: completedStations > 6 ? getRandomDate(Math.random() > 0.2) : undefined,
        station08: completedStations > 7 ? getRandomDate(Math.random() > 0.25) : undefined,
        station09: completedStations > 8 ? getRandomDate(Math.random() > 0.15) : undefined,
        station10: completedStations > 9 ? getRandomDate(Math.random() > 0.15) : undefined,
        station11: completedStations > 10 ? getRandomDate(Math.random() > 0.15) : undefined,
        station12: completedStations > 11 ? getRandomDate(Math.random() > 0.15) : undefined,
        station13: completedStations > 12 ? getRandomDate(Math.random() > 0.15) : undefined,
        station14: completedStations > 13 ? getRandomDate(Math.random() > 0.15) : undefined,
        station15: completedStations > 14 ? getRandomDate(Math.random() > 0.1) : undefined,
        station16: completedStations > 15 ? getRandomDate(Math.random() > 0.1) : undefined,
        station17: completedStations > 16 ? getRandomDate(Math.random() > 0.1) : undefined,
        station18: completedStations > 17 ? getRandomDate(Math.random() > 0.08) : undefined,
        station19: completedStations > 18 ? getRandomDate(Math.random() > 0.08) : undefined,
        station20: completedStations > 19 ? getRandomDate(Math.random() > 0.05) : undefined,
        station21: completedStations > 20 ? getRandomDate(Math.random() > 0.02) : undefined,
        isExpanded: false
      };

      data.push(record);
    }

    return data;
  }

  private getMockFinalReports(request: VehicleFinalReportRequest): VehicleFinalReportResponse {
    const mockData: VehicleFinalReport[] = [
      {
        id: 513,
        idNumber: '513',
        clientId: 1,
        clientName: 'TTC',
        projectId: 2,
        projectName: 'Arboc 23FT',
        vehicleId: 5045,
        fleetNumber: '5045-W784',
        vin: '3C7WRVLG5ME589245',
        reportGeneratedDate: '2023-06-15T14:30:00',
        reportStatus: 'Completed',
        totalDefects: 12,
        criticalDefects: 2,
        resolvedDefects: 12,
        pendingDefects: 0,
        inspectorName: 'Remi',
        approvedBy: 'Manager',
        approvalDate: '2023-06-16T10:00:00',
        documentUrl: '/reports/513.pdf'
      },
      {
        id: 514,
        idNumber: '514',
        clientId: 1,
        clientName: 'TTC',
        projectId: 2,
        projectName: 'Arboc 23FT',
        vehicleId: 5046,
        fleetNumber: '5046-W785',
        vin: '3C7WRVLG3ME587736',
        reportGeneratedDate: '2023-06-15T15:00:00',
        reportStatus: 'Completed',
        totalDefects: 8,
        criticalDefects: 1,
        resolvedDefects: 8,
        pendingDefects: 0,
        inspectorName: 'Rick Baltzer',
        approvedBy: 'Manager',
        approvalDate: '2023-06-16T11:00:00',
        documentUrl: '/reports/514.pdf'
      },
      {
        id: 515,
        idNumber: '515',
        clientId: 1,
        clientName: 'TTC',
        projectId: 2,
        projectName: 'Arboc 23FT',
        vehicleId: 5419,
        fleetNumber: '5419-W786',
        vin: '3C7WRVLG5NE104717',
        reportGeneratedDate: '2023-06-20T10:15:00',
        reportStatus: 'Completed',
        totalDefects: 15,
        criticalDefects: 3,
        resolvedDefects: 15,
        pendingDefects: 0,
        inspectorName: 'John Inspector',
        approvedBy: 'Manager',
        approvalDate: '2023-06-21T09:00:00',
        documentUrl: '/reports/515.pdf'
      }
    ];

    let filtered = mockData;

    if (request.clientName && request.clientName !== 'all') {
      filtered = filtered.filter(r => r.clientName === request.clientName);
    }

    if (request.projectName && request.projectName !== 'all') {
      filtered = filtered.filter(r => r.projectName === request.projectName);
    }

    if (request.searchTerm) {
      const search = request.searchTerm.toLowerCase();
      filtered = filtered.filter(r =>
        r.fleetNumber.toLowerCase().includes(search) ||
        r.vin.toLowerCase().includes(search) ||
        r.idNumber.includes(search)
      );
    }

    return {
      success: true,
      data: filtered,
      totalCount: filtered.length,
      page: request.page || 1,
      pageSize: request.pageSize || 50,
      message: 'Final reports fetched successfully'
    };
  }
}
