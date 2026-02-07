import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleReportService, VehicleTicket, VehicleTicketReportRequest, Vehicle } from '../services/vehicle-report.service';
import { ReportService, Project } from '../services/report.service';
import { firstValueFrom } from 'rxjs';
import ExcelJS from 'exceljs';

@Component({
  selector: 'app-vehicle-ticket-report',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vehicle-ticket-report.component.html',
  styleUrls: ['./vehicle-ticket-report.component.scss']
})
export class VehicleTicketReportComponent implements OnInit {
    // Sorting state
    sortColumn: string = '';
    sortDirection: 'asc' | 'desc' = 'asc';
    /**
     * Sort tickets by column
     */
    sortTickets(column: string) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
      // Map column to VehicleTicket property
      const columnMap: { [key: string]: keyof VehicleTicket } = {
        ticketNumber: 'ticketNumber',
        clientName: 'clientName',
        projectName: 'projectName',
        vehicleNumber: 'vehicleNumber',
        safetyCritical: 'safetyCritical',
        createdDate: 'createdDate',
        defectType: 'defectType',
        defectLocation: 'defectLocation',
        description: 'description',
        hasImages: 'hasImages',
        assignedByName: 'assignedByName',
        assignedToName: 'assignedToName',
        stationName: 'stationName',
        status: 'status',
        resolvedDate: 'resolvedDate'
      };
      const prop = columnMap[column];
      if (!prop) return;
      this.filteredTickets.sort((a, b) => {
        let aValue = a[prop] ?? '';
        let bValue = b[prop] ?? '';
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
  
  // Expose Math to template
  Math = Math;
  
  selectedProject: string = '';
  selectedVehicle: string = '';
  searchTerm: string = '';
  
  projects: Project[] = [];
  vehicles: Vehicle[] = [];
  
  tickets: VehicleTicket[] = [];
  filteredTickets: VehicleTicket[] = [];
  reportGenerated: boolean = false;
  
  // Loading and error states
  isLoading: boolean = false;
  isLoadingFilters: boolean = false;
  isLoadingVehicles: boolean = false;
  errorMessage: string = '';
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  constructor(
    private vehicleReportService: VehicleReportService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  /**
   * Load projects for dropdown
   * Ready for backend integration
   */
  loadProjects() {
    this.isLoadingFilters = true;
    
    this.vehicleReportService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.isLoadingFilters = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.errorMessage = 'Failed to load projects';
        this.isLoadingFilters = false;
      }
    });
  }

  /**
   * Load vehicles when project is selected
   */
  onProjectChange() {
    if (!this.selectedProject || this.selectedProject === '') {
      this.vehicles = [];
      this.selectedVehicle = '';
      return;
    }

    // If "All Projects" is selected, load vehicles from all projects
    if (this.selectedProject === 'all') {
      this.isLoadingVehicles = true;
      // Load all vehicles by using empty project filter
      const allVehicles: Vehicle[] = [];
      this.projects.forEach(project => {
        this.vehicleReportService.getVehiclesByProject(project.id).subscribe({
          next: (vehicles: Vehicle[]) => {
            allVehicles.push(...vehicles);
            // Remove duplicates and set vehicles
            const uniqueVehicles = allVehicles.filter((v, index, self) =>
              index === self.findIndex((vehicle) => vehicle.id === v.id)
            );
            this.vehicles = uniqueVehicles;
            this.isLoadingVehicles = false;
          },
          error: (error: any) => {
            console.error('Error loading vehicles:', error);
            this.errorMessage = 'Failed to load vehicles';
            this.isLoadingVehicles = false;
          }
        });
      });
      return;
    }

    const project = this.projects.find(p => p.name === this.selectedProject);
    if (!project) return;

    this.isLoadingVehicles = true;
    this.vehicleReportService.getVehiclesByProject(project.id).subscribe({
      next: (vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
        this.isLoadingVehicles = false;
      },
      error: (error: any) => {
        console.error('Error loading vehicles:', error);
        this.errorMessage = 'Failed to load vehicles';
        this.isLoadingVehicles = false;
      }
    });
  }

  /**
   * Run report with selected filters
   */
  runReport() {
    if (!this.selectedProject) {
      this.errorMessage = 'Please select a Project or "All Projects"';
      return;
    }

    if (!this.selectedVehicle || this.selectedVehicle === '') {
      this.errorMessage = 'Please select a Vehicle or "All Vehicles"';
      return;
    }

    this.currentPage = 1; // Reset to first page
    this.loadReport();
  }

  /**
   * Load report data with pagination
   */
  loadReport() {
    this.isLoading = true;
    this.errorMessage = '';
    
    const request: VehicleTicketReportRequest = {
      projectName: this.selectedProject === 'all' ? '' : this.selectedProject,
      vehicleNumber: this.selectedVehicle === 'all' ? '' : this.selectedVehicle,
      searchTerm: this.searchTerm || undefined,
      page: this.currentPage,
      pageSize: this.pageSize
    };
    
    this.vehicleReportService.getVehicleTicketReports(request).subscribe({
      next: (response) => {
        if (response.success) {
          this.tickets = response.data;
          this.filteredTickets = response.data;
          this.totalCount = response.totalCount;
          this.reportGenerated = true;
        } else {
          this.errorMessage = response.message || 'Failed to fetch reports';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching reports:', error);
        this.errorMessage = 'Failed to load report data. Please try again.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Filter tickets based on search term
   */
  filterTickets() {
    if (!this.searchTerm) {
      this.filteredTickets = [...this.tickets];
      // Re-apply sorting after filtering
      if (this.sortColumn) {
        this.sortTickets(this.sortColumn);
      }
      return;
    }
    const search = this.searchTerm.toLowerCase();
    this.filteredTickets = this.tickets.filter(ticket =>
      ticket.ticketNumber.toLowerCase().includes(search) ||
      ticket.description.toLowerCase().includes(search) ||
      ticket.defectType.toLowerCase().includes(search)
    );
    // Re-apply sorting after filtering
    if (this.sortColumn) {
      this.sortTickets(this.sortColumn);
    }
  }

  /**
   * Print current report
   */
  async printReport() {
    if (!this.reportGenerated || this.filteredTickets.length === 0) {
      alert('Please generate a report first before printing');
      return;
    }

    try {
      // Fetch all data for printing
      const allTickets = await this.fetchAllTicketsForExport();
      this.generatePrintContent(allTickets);
    } catch (err) {
      console.error('Failed to generate print content:', err);
      alert('Failed to prepare report for printing.');
    }
  }

  /**
   * Generate print content without opening new tab
   */
  private generatePrintContent(tickets: VehicleTicket[]) {
    const pdfContent = this.createPDFContent(tickets);
    
    // Create a hidden iframe for printing
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document;
    if (!iframeDoc) {
      alert('Unable to prepare print content');
      document.body.removeChild(iframe);
      return;
    }

    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Vehicle Ticket Report</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; padding: 20px; }
          .header { border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
          .header h1 { font-size: 18px; margin-bottom: 5px; }
          .header .info { font-size: 11px; color: #666; margin: 3px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background-color: #f0f0f0; border: 1px solid #ddd; padding: 8px; text-align: left; font-weight: bold; font-size: 11px; }
          td { border: 1px solid #ddd; padding: 8px; font-size: 10px; }
          tr:nth-child(even) { background-color: #f9f9f9; }
          .badge { padding: 3px 8px; border-radius: 3px; font-size: 9px; font-weight: bold; display: inline-block; }
          .badge-success { background-color: #28a745; color: white; }
          .badge-warning { background-color: #ffc107; color: #000; }
          .badge-danger { background-color: #dc3545; color: white; }
          .badge-info { background-color: #17a2b8; color: white; }
          .summary { margin-top: 20px; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-size: 11px; }
          .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; font-size: 9px; color: #666; }
          @media print {
            body { padding: 10px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        ${pdfContent}
      </body>
      </html>
    `);
    iframeDoc.close();

    // Wait for content to load then print
    iframe.contentWindow?.focus();
    setTimeout(() => {
      iframe.contentWindow?.print();
      
      // Remove iframe after printing (or if cancelled)
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 250);
  }

  /**
   * Download report as PDF
   */
  downloadReport() {
    if (!this.reportGenerated || this.filteredTickets.length === 0) {
      alert('Please generate a report first before downloading');
      return;
    }
    this.generateExcelExport();
  }

  /**
   * Generate and download PDF report
   */
  private async generateExcelExport() {
    try {
      const allTickets = await this.fetchAllTicketsForExport();
      await this.generateExcel(allTickets);
    } catch (err) {
      console.error('Failed to generate Excel export:', err);
      alert('Failed to generate export. Please try again.');
    }
  }

  private async fetchAllTicketsForExport(): Promise<VehicleTicket[]> {
    // Base request
    const baseRequest: VehicleTicketReportRequest = {
      projectName: this.selectedProject === 'all' ? '' : this.selectedProject,
      vehicleNumber: this.selectedVehicle === 'all' ? '' : this.selectedVehicle,
      searchTerm: this.searchTerm || undefined,
      page: 1,
      pageSize: 200
    };

    const first = await firstValueFrom(this.vehicleReportService.getVehicleTicketReports(baseRequest));
    if (!first || !first.success) {
      return [...this.filteredTickets];
    }

    const all: VehicleTicket[] = [...(first.data || [])];
    const total = first.totalCount || all.length;
    const totalPages = Math.ceil(total / (baseRequest.pageSize || 200));

    for (let p = 2; p <= totalPages; p++) {
      const req: VehicleTicketReportRequest = { ...baseRequest, page: p };
      const resp = await firstValueFrom(this.vehicleReportService.getVehicleTicketReports(req));
      if (resp && resp.success && resp.data?.length) {
        all.push(...resp.data);
      }
    }

    return all;
  }

  private async generateExcel(tickets: VehicleTicket[]): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const ws = workbook.addWorksheet('Vehicle Ticket Report');

    // Title section
    ws.getCell('A1').value = 'Vehicle Ticket Report';
    ws.getCell('A1').font = { bold: true, size: 14, name: 'Calibri' };
    
    const projectDisplay = this.selectedProject === 'all' ? 'All Projects' : this.selectedProject;
    const vehicleDisplay = this.selectedVehicle === 'all' ? 'All Vehicles' : this.selectedVehicle;
    
    // Get client name from first ticket if available
    const clientName = tickets.length > 0 ? tickets[0].clientName : 'N/A';
    
    ws.getCell('A2').value = `Client: ${clientName}`;
    ws.getCell('A2').font = { bold: true, size: 11, name: 'Calibri' };
    
    ws.getCell('A3').value = `Project: ${projectDisplay}`;
    ws.getCell('A3').font = { bold: true, size: 11, name: 'Calibri' };
    
    ws.getCell('A4').value = `Vehicle: ${vehicleDisplay}`;
    ws.getCell('A4').font = { bold: true, size: 11, name: 'Calibri' };

    // Empty rows for spacing (rows 5-6)
    
    // Header row at row 7
    const headerRowIndex = 7;
    const headers = [
      'Ticket #', 'Vehicle #', 'VIN', 'Client', 'Project',
      'Description', 'Defect Type', 'Defect Location', 'Safety Critical',
      'Assigned By', 'Assigned To', 'Station', 'Status',
      'Created Date', 'Resolved Date'
    ];
    const headerRow = ws.getRow(headerRowIndex);
    headerRow.values = headers;
    headerRow.font = { bold: true, size: 11, name: 'Calibri' };
    headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFB8CCE4' } };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    headerRow.height = 20;

    // Column widths
    const widths = [12, 12, 20, 14, 16, 40, 16, 18, 14, 16, 16, 16, 12, 18, 18];
    widths.forEach((w, idx) => ws.getColumn(idx + 1).width = w);

    // Data rows start at row 8
    tickets.forEach(t => {
      ws.addRow([
        t.ticketNumber,
        t.vehicleNumber,
        t.vehicleVIN,
        t.clientName,
        t.projectName,
        t.description,
        t.defectType,
        t.defectLocation,
        t.safetyCritical ? 'Yes' : 'No',
        t.assignedByName,
        t.assignedToName,
        t.stationName || '',
        t.status,
        t.createdDate ? new Date(t.createdDate).toLocaleString('en-US') : '',
        t.resolvedDate ? new Date(t.resolvedDate).toLocaleString('en-US') : ''
      ]);
    });

    // Borders
    ws.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell({ includeEmpty: false }, (cell) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          right: { style: 'thin', color: { argb: 'FFD0D0D0' } }
        };
      });
    });

    // Freeze header
    ws.views = [{ state: 'frozen', ySplit: headerRowIndex, xSplit: 0 }];

    // Filename
    const now = new Date();
    const name = `VehicleTicketReport_${now.toLocaleDateString('en-US').replace(/\//g, '_')}.xlsx`;
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Create HTML content for PDF
   */
  private createPDFContent(tickets: VehicleTicket[]): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US');

    let tableRows = '';
    tickets.forEach((ticket, index) => {
      const statusBadge = this.getStatusBadge(ticket.status);
      tableRows += `
        <tr>
          <td>${index + 1}</td>
          <td>${ticket.ticketNumber || 'N/A'}</td>
          <td>${ticket.vehicleNumber || 'N/A'}</td>
          <td>${ticket.vehicleVIN || 'N/A'}</td>
          <td>${ticket.description || 'N/A'}</td>
          <td>${ticket.defectType || 'N/A'}</td>
          <td>${ticket.assignedToName || 'Unassigned'}</td>
          <td>${statusBadge}</td>
          <td>${ticket.createdDate ? new Date(ticket.createdDate).toLocaleDateString() : 'N/A'}</td>
          <td>${ticket.resolvedDate ? new Date(ticket.resolvedDate).toLocaleDateString() : 'N/A'}</td>
        </tr>
      `;
    });

    const projectDisplay = this.selectedProject === 'all' ? 'All Projects' : this.selectedProject;
    const vehicleDisplay = this.selectedVehicle === 'all' ? 'All Vehicles' : this.selectedVehicle;
    const clientName = tickets.length > 0 ? tickets[0].clientName : 'N/A';

    return `
      <div class="header">
        <h1>Vehicle Ticket Report</h1>
        <div class="info">
          <p><strong>Client:</strong> ${clientName}</p>
          <p><strong>Project:</strong> ${projectDisplay}</p>
          <p><strong>Vehicle:</strong> ${vehicleDisplay}</p>
          <p><strong>Generated:</strong> ${dateStr} at ${timeStr}</p>
          <p><strong>Total Tickets:</strong> ${tickets.length}</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ticket Number</th>
            <th>Vehicle Number</th>
            <th>VIN</th>
            <th>Description</th>
            <th>Defect Type</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Resolved Date</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <div class="summary">
        <h3>Report Summary</h3>
        <p><strong>Report Type:</strong> Vehicle Ticket Report</p>
        <p><strong>Filter Criteria:</strong> Project: ${projectDisplay}, Vehicle: ${vehicleDisplay}</p>
        <p><strong>Total Records:</strong> ${tickets.length}</p>
      </div>

      <div class="footer">
        <p>This is an automated report generated by BusPulse Reporting System</p>
        <p>Generated on: ${dateStr} at ${timeStr}</p>
      </div>
    `;
  }

  /**
   * Get status badge HTML
   */
  private getStatusBadge(status: string): string {
    const statusMap: { [key: string]: string } = {
      'completed': 'badge-success',
      'in-progress': 'badge-warning',
      'pending': 'badge-info',
      'failed': 'badge-danger',
      'on-hold': 'badge-warning'
    };

    const badgeClass = statusMap[status?.toLowerCase()] || 'badge-info';
    return `<span class="badge ${badgeClass}">${status || 'Pending'}</span>`;
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  /**
   * Get CSS class for safety critical badge
   */
  getSafetyCriticalClass(isCritical: boolean): string {
    return isCritical ? 'badge bg-danger' : 'badge bg-secondary';
  }

  /**
   * Get CSS class for status badge
   */
  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'open': 'badge bg-info',
      'in progress': 'badge bg-warning',
      'closed': 'badge bg-success',
      'pending': 'badge bg-secondary'
    };
    return statusMap[status.toLowerCase()] || 'badge bg-secondary';
  }

  /**
   * Go to next page
   */
  nextPage(): void {
    const maxPages = Math.ceil(this.totalCount / this.pageSize);
    if (this.currentPage < maxPages) {
      this.currentPage++;
      this.loadReport();
    }
  }

  /**
   * Go to previous page
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadReport();
    }
  }

  /**
   * Go to specific page
   */
  goToPage(page: number): void {
    const maxPages = Math.ceil(this.totalCount / this.pageSize);
    if (page >= 1 && page <= maxPages) {
      this.currentPage = page;
      this.loadReport();
    }
  }

  /**
   * Get total number of pages
   */
  getTotalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  /**
   * Get page numbers array for pagination display
   */
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const pages: number[] = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      
      if (startPage > 1) pages.push(1);
      if (startPage > 2) pages.push(-1);
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) pages.push(-1);
      if (endPage < totalPages) pages.push(totalPages);
    }
    
    return pages;
  }
}
