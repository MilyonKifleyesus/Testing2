import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleReportService, VehicleFinalReport, VehicleFinalReportRequest, Client } from '../services/vehicle-report.service';

@Component({
  selector: 'app-vehicle-final-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vehicle-final-reports.component.html',
  styleUrls: ['./vehicle-final-reports.component.scss']
})
export class VehicleFinalReportsComponent implements OnInit {
    // Sorting state
    sortColumn: string = '';
    sortDirection: 'asc' | 'desc' = 'asc';
    /**
     * Sort reports by column
     */
    sortReports(column: string) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
      // Map column to VehicleFinalReport property
      const columnMap: { [key: string]: keyof VehicleFinalReport } = {
        idNumber: 'idNumber',
        clientName: 'clientName',
        projectName: 'projectName',
        fleetNumber: 'fleetNumber',
        vin: 'vin'
      };
      const prop = columnMap[column];
      if (!prop) return;
      this.filteredReports.sort((a, b) => {
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
  
  selectedClient: string = 'all';
  selectedProject: string = 'all';
  searchTerm: string = '';
  
  clients: Client[] = [];
  projects: any[] = [];
  
  reports: VehicleFinalReport[] = [];
  filteredReports: VehicleFinalReport[] = [];
  reportGenerated: boolean = false;
  
  // Loading and error states
  isLoading: boolean = false;
  isLoadingFilters: boolean = false;
  errorMessage: string = '';
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  constructor(private vehicleReportService: VehicleReportService) {}

  ngOnInit() {
    this.loadFilterOptions();
  }

  /**
   * Load clients and projects for filters
   */
  loadFilterOptions() {
    this.isLoadingFilters = true;
    
    // Load clients
    this.vehicleReportService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
      },
      error: (error) => {
        console.error('Error loading clients:', error);
        this.errorMessage = 'Failed to load clients';
      }
    });
    
    // Load projects
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
   * Run report with current filters
   */
  runReport() {
    this.currentPage = 1; // Reset to first page
    this.loadReport();
  }

  /**
   * Load report data with pagination
   */
  loadReport() {
    this.isLoading = true;
    this.errorMessage = '';
    
    const request: VehicleFinalReportRequest = {
      clientName: this.selectedClient !== 'all' ? this.selectedClient : undefined,
      projectName: this.selectedProject !== 'all' ? this.selectedProject : undefined,
      searchTerm: this.searchTerm || undefined,
      page: this.currentPage,
      pageSize: this.pageSize
    };
    
    this.vehicleReportService.getVehicleFinalReports(request).subscribe({
      next: (response) => {
        if (response.success) {
          this.reports = response.data;
          this.filteredReports = response.data;
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
   * Filter reports based on search term
   */
  filterReports() {
    this.currentPage = 1; // Reset to first page when searching
    if (this.reportGenerated) {
      this.loadReport();
      // Re-apply sorting after filtering
      if (this.sortColumn) {
        this.sortReports(this.sortColumn);
      }
    }
    const search = this.searchTerm.toLowerCase();
    this.filteredReports = this.reports.filter(report =>
      report.fleetNumber.toLowerCase().includes(search) ||
      report.vin.toLowerCase().includes(search) ||
      report.idNumber.includes(search)
    );
  }

  /**
   * Download vehicle health report
   */
  downloadReport(report: VehicleFinalReport) {
    this.vehicleReportService.downloadVehicleHealthReport(report.id).subscribe({
      next: (blob) => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Vehicle-Health-Report-${report.fleetNumber}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error downloading report:', error);
        alert('Failed to download report. Please try again.');
      }
    });
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  }

  /**
   * Get CSS class for status badge
   */
  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'draft': 'badge bg-secondary',
      'completed': 'badge bg-success',
      'approved': 'badge bg-primary',
      'pending review': 'badge bg-warning'
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
