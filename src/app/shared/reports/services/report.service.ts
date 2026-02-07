import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

// API Request/Response Interfaces
export interface TicketReportRequest {
  reportType: 'daily' | 'weekly';
  projectId?: string;
  inspectorId?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}

export interface TicketReportResponse {
  success: boolean;
  data: TicketReport[];
  totalCount: number;
  page: number;
  pageSize: number;
  message?: string;
}

export interface TicketReport {
  id: number;
  ticketNumber: string;
  clientId: number;
  clientName: string;
  projectId: number;
  projectName: string;
  vehicleId: number;
  vehicleIdentifier: string;
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

export interface Project {
  id: number;
  name: string;
  code: string;
}

export interface Inspector {
  id: number;
  name: string;
  email: string;
}

export interface ReportExportRequest {
  reportType: 'daily' | 'weekly';
  format: 'csv' | 'pdf' | 'excel';
  filters: TicketReportRequest;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = '/api/reports'; // Backend API URL

  constructor() {}

  /**
   * Fetch ticket reports from backend
   * TODO: Replace with actual HttpClient call when backend is ready
   */
  getTicketReports(request: TicketReportRequest): Observable<TicketReportResponse> {
    // Simulated API call - Replace with actual HTTP call
    // return this.http.post<TicketReportResponse>(`${this.apiUrl}/tickets`, request);
    
    return of(this.getMockTicketReports(request)).pipe(delay(500));
  }

  /**
   * Fetch list of projects for filter dropdown
   * TODO: Replace with actual HttpClient call
   */
  getProjects(): Observable<Project[]> {
    // return this.http.get<Project[]>(`${this.apiUrl}/projects`);
    
    return of([
      { id: 1, name: 'LF76', code: 'LF76' },
      { id: 2, name: 'LF94', code: 'LF94' },
      { id: 3, name: 'Project A', code: 'PRJA' },
      { id: 4, name: 'Project B', code: 'PRJB' }
    ]).pipe(delay(300));
  }

  /**
   * Fetch list of inspectors for filter dropdown
   * TODO: Replace with actual HttpClient call
   */
  getInspectors(): Observable<Inspector[]> {
    // return this.http.get<Inspector[]>(`${this.apiUrl}/inspectors`);
    
    return of([
      { id: 1, name: 'Remi', email: 'remi@example.com' },
      { id: 2, name: 'Rick Baltzer', email: 'rick@example.com' },
      { id: 3, name: 'John Inspector', email: 'john@example.com' },
      { id: 4, name: 'Jane Doe', email: 'jane@example.com' }
    ]).pipe(delay(300));
  }

  /**
   * Export report to file (CSV, PDF, Excel)
   * TODO: Replace with actual HttpClient call
   */
  exportReport(request: ReportExportRequest): Observable<Blob> {
    // return this.http.post(`${this.apiUrl}/export`, request, { responseType: 'blob' });
    
    console.log('Export request:', request);
    return of(new Blob(['Mock CSV data'], { type: 'text/csv' })).pipe(delay(500));
  }

  /**
   * Get report statistics/summary
   * TODO: Replace with actual HttpClient call
   */
  getReportStatistics(request: TicketReportRequest): Observable<any> {
    // return this.http.post(`${this.apiUrl}/statistics`, request);
    
    return of({
      totalTickets: 8,
      openTickets: 2,
      inProgressTickets: 1,
      closedTickets: 5,
      safetyCriticalCount: 2
    }).pipe(delay(300));
  }

  // ==================== MOCK DATA METHODS ====================
  // Remove these methods when backend is connected

  private getMockTicketReports(request: TicketReportRequest): TicketReportResponse {
    const mockData: TicketReport[] = [
      {
        id: 1,
        ticketNumber: 'LF76-97-2CT1124F',
        clientId: 1,
        clientName: 'TTC',
        projectId: 1,
        projectName: 'LF76',
        vehicleId: 97,
        vehicleIdentifier: 'LF76-97 / 2NVYL8GMXS3755162',
        safetyCritical: false,
        createdDate: '2026-01-06T18:32:04',
        defectType: 'WATER',
        defectLocation: 'Water',
        description: '#2 leak from the rear door top header',
        hasImages: false,
        imageCount: 0,
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: 1,
        assignedToName: 'Remi',
        status: 'Closed',
        resolvedDate: '2026-01-13T20:27:40'
      },
      {
        id: 2,
        ticketNumber: 'LF76-97-32C884C4',
        clientId: 1,
        clientName: 'TTC',
        projectId: 1,
        projectName: 'LF76',
        vehicleId: 97,
        vehicleIdentifier: 'LF76-97 / 2NVYL82MXS3755162',
        safetyCritical: false,
        createdDate: '2026-01-06T18:32:04',
        defectType: 'WATER',
        defectLocation: 'Water',
        description: '#1 leak from the r/s RF4',
        hasImages: false,
        imageCount: 0,
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: 1,
        assignedToName: 'Remi',
        status: 'Closed',
        resolvedDate: '2026-01-13T20:27:40'
      },
      {
        id: 3,
        ticketNumber: 'LF76-97-3CF400F0',
        clientId: 1,
        clientName: 'TTC',
        projectId: 1,
        projectName: 'LF76',
        vehicleId: 97,
        vehicleIdentifier: 'LF76-97 / 2NVYL82MXS3755162',
        safetyCritical: false,
        createdDate: '2026-01-06T18:32:04',
        defectType: 'ROAD TEST',
        defectLocation: 'Road Test',
        description: '#1 main panel rattling, screw loose inside.',
        hasImages: false,
        imageCount: 0,
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: 1,
        assignedToName: 'Remi',
        status: 'Closed',
        resolvedDate: '2026-01-13T20:27:42'
      },
      {
        id: 4,
        ticketNumber: 'LF76-97-4C7C03F5',
        clientId: 1,
        clientName: 'TTC',
        projectId: 1,
        projectName: 'LF76',
        vehicleId: 97,
        vehicleIdentifier: 'LF76-97 / 2NVYL82MXS3755162',
        safetyCritical: false,
        createdDate: '2026-01-06T18:32:04',
        defectType: 'ROAD TEST',
        defectLocation: 'Road Test',
        description: '#4 the third and fifth c/s base light bad fit, not even and not aligned.',
        hasImages: false,
        imageCount: 0,
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: 1,
        assignedToName: 'Remi',
        status: 'Closed',
        resolvedDate: '2026-01-13T20:27:42'
      },
      {
        id: 5,
        ticketNumber: 'LF76-97-577FF37F',
        clientId: 1,
        clientName: 'TTC',
        projectId: 1,
        projectName: 'LF76',
        vehicleId: 97,
        vehicleIdentifier: 'LF76-97 / 2NVYL82MXS3755162',
        safetyCritical: false,
        createdDate: '2026-01-06T18:32:04',
        defectType: 'ROAD TEST',
        defectLocation: 'Road Test',
        description: '#2 steering wheel not centred +5 degrees.',
        hasImages: false,
        imageCount: 0,
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: 1,
        assignedToName: 'Remi',
        status: 'Closed',
        resolvedDate: '2026-01-13T20:27:40'
      },
      {
        id: 6,
        ticketNumber: 'LF76-98-A23BC45D',
        clientId: 1,
        clientName: 'TTC',
        projectId: 1,
        projectName: 'LF76',
        vehicleId: 98,
        vehicleIdentifier: 'LF76-98 / 2NVYL82MXS3755163',
        safetyCritical: true,
        createdDate: '2026-01-07T10:15:30',
        defectType: 'BRAKE SYSTEM',
        defectLocation: 'Brake',
        description: 'Brake pedal feels spongy, potential air in brake lines.',
        hasImages: true,
        imageCount: 3,
        assignedById: 2,
        assignedByName: 'Rick Baltzer',
        assignedToId: 3,
        assignedToName: 'John Inspector',
        stationId: 1,
        stationName: 'Station A',
        status: 'In Progress',
      },
      {
        id: 7,
        ticketNumber: 'LF94-12-B78CD12E',
        clientId: 2,
        clientName: 'GO Transit',
        projectId: 2,
        projectName: 'LF94',
        vehicleId: 12,
        vehicleIdentifier: 'LF94-12 / 3NVYL82MXS3755164',
        safetyCritical: false,
        createdDate: '2026-01-08T14:45:22',
        defectType: 'ELECTRICAL',
        defectLocation: 'Interior Lighting',
        description: 'Row 5 overhead lights flickering intermittently.',
        hasImages: true,
        imageCount: 2,
        assignedById: 1,
        assignedByName: 'Remi',
        assignedToId: 1,
        assignedToName: 'Remi',
        stationId: 2,
        stationName: 'Station B',
        status: 'Open',
      },
      {
        id: 8,
        ticketNumber: 'LF94-13-C89DE23F',
        clientId: 2,
        clientName: 'GO Transit',
        projectId: 2,
        projectName: 'LF94',
        vehicleId: 13,
        vehicleIdentifier: 'LF94-13 / 3NVYL82MXS3755165',
        safetyCritical: true,
        createdDate: '2026-01-09T09:20:15',
        defectType: 'STEERING',
        defectLocation: 'Steering System',
        description: 'Excessive play in steering wheel, requires immediate attention.',
        hasImages: true,
        imageCount: 5,
        assignedById: 4,
        assignedByName: 'Jane Doe',
        assignedToId: 2,
        assignedToName: 'Rick Baltzer',
        stationId: 3,
        stationName: 'Station C',
        status: 'Open',
      }
    ];

    // Apply filters
    let filtered = mockData;

    if (request.projectId && request.projectId !== 'all') {
      filtered = filtered.filter(t => t.projectName === request.projectId);
    }

    if (request.inspectorId && request.inspectorId !== 'all') {
      filtered = filtered.filter(t => 
        t.assignedByName === request.inspectorId || 
        t.assignedToName === request.inspectorId
      );
    }

    if (request.searchTerm) {
      const search = request.searchTerm.toLowerCase();
      filtered = filtered.filter(t =>
        t.ticketNumber.toLowerCase().includes(search) ||
        t.description.toLowerCase().includes(search) ||
        t.vehicleIdentifier.toLowerCase().includes(search) ||
        t.defectType.toLowerCase().includes(search)
      );
    }

    return {
      success: true,
      data: filtered,
      totalCount: filtered.length,
      page: request.page || 1,
      pageSize: request.pageSize || 50,
      message: 'Reports fetched successfully'
    };
  }
}
