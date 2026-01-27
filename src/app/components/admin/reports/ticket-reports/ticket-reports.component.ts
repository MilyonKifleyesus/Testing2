import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ReportService, TicketReport, TicketReportRequest, Project, Inspector } from '../services/report.service';

@Component({
  selector: 'app-ticket-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ticket-reports.component.html',
  styleUrls: ['./ticket-reports.component.scss']
})
export class TicketReportsComponent implements OnInit {
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
      // Map column to TicketReport property
      const columnMap: { [key: string]: keyof TicketReport } = {
        ticketNumber: 'ticketNumber',
        clientName: 'clientName',
        projectName: 'projectName',
        vehicleIdentifier: 'vehicleIdentifier',
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
  
  reportType: 'daily' | 'weekly' = 'daily';
  selectedProject: string = 'all';
  selectedInspector: string = 'all';
  selectedDate: string = '';
  startDate: string = '';
  endDate: string = '';
  searchTerm: string = '';
  
  projects: Project[] = [];
  inspectors: Inspector[] = [];
  
  allTickets: TicketReport[] = [];
  filteredTickets: TicketReport[] = [];
  reportGenerated: boolean = false;
  
  // Loading and error states
  isLoading: boolean = false;
  isLoadingFilters: boolean = false;
  errorMessage: string = '';
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    // Check URL to determine report type
    this.route.url.subscribe(segments => {
      const lastSegment = segments[segments.length - 1]?.path;
      if (lastSegment === 'weekly') {
        this.reportType = 'weekly';
      } else {
        this.reportType = 'daily';
      }
    });

    // Set default date to today
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
    
    // Set default date range for weekly (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    this.startDate = weekAgo.toISOString().split('T')[0];
    this.endDate = today.toISOString().split('T')[0];
    
    this.loadFilterOptions();
  }

  /**
   * Load projects and inspectors for filter dropdowns
   * Ready for backend integration
   */
  loadFilterOptions() {
    this.isLoadingFilters = true;
    
    // Load projects
    this.reportService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.errorMessage = 'Failed to load projects';
      }
    });
    
    // Load inspectors
    this.reportService.getInspectors().subscribe({
      next: (inspectors) => {
        this.inspectors = inspectors;
        this.isLoadingFilters = false;
      },
      error: (error) => {
        console.error('Error loading inspectors:', error);
        this.errorMessage = 'Failed to load inspectors';
        this.isLoadingFilters = false;
      }
    });
  }

  switchReportType(type: 'daily' | 'weekly') {
    this.reportType = type;
    this.reportGenerated = false;
    this.errorMessage = '';
    
    // Reset date range for weekly
    if (type === 'weekly') {
      const today = new Date();
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      this.startDate = weekAgo.toISOString().split('T')[0];
      this.endDate = today.toISOString().split('T')[0];
    }
    
    // Navigate to appropriate route
    if (type === 'weekly') {
      this.router.navigate(['/admin/reports/ticket-reports/weekly']);
    } else {
      this.router.navigate(['/admin/reports/ticket-reports/daily']);
    }
  }

  /**
   * Run report with current filters
   * Fetches data from backend via service
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
    
    const request: TicketReportRequest = {
      reportType: this.reportType,
      projectId: this.selectedProject !== 'all' ? this.selectedProject : undefined,
      inspectorId: this.selectedInspector !== 'all' ? this.selectedInspector : undefined,
      date: this.reportType === 'daily' ? this.selectedDate : undefined,
      startDate: this.reportType === 'weekly' ? this.startDate : undefined,
      endDate: this.reportType === 'weekly' ? this.endDate : undefined,
      searchTerm: this.searchTerm || undefined,
      page: this.currentPage,
      pageSize: this.pageSize
    };
    
    this.reportService.getTicketReports(request).subscribe({
      next: (response) => {
        if (response.success) {
          this.allTickets = response.data;
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
   * Applied client-side after fetching data
   */
  filterTickets() {
    this.currentPage = 1; // Reset to first page when searching
    if (this.reportGenerated) {
      this.loadReport();
      // Re-apply sorting after filtering
      if (this.sortColumn) {
        this.sortTickets(this.sortColumn);
      }
    }
  }

  /**
   * Print current report
   */
  printReport() {
    window.print();
  }

  /**
   * Download report as CSV/PDF
   * Ready for backend integration
   */
  downloadReport() {
    const request = {
      reportType: this.reportType,
      format: 'csv' as const,
      filters: {
        reportType: this.reportType,
        projectId: this.selectedProject !== 'all' ? this.selectedProject : undefined,
        inspectorId: this.selectedInspector !== 'all' ? this.selectedInspector : undefined,
        date: this.reportType === 'daily' ? this.selectedDate : undefined,
        startDate: this.reportType === 'weekly' ? this.startDate : undefined,
        endDate: this.reportType === 'weekly' ? this.endDate : undefined
      }
    };
    
    this.reportService.exportReport(request).subscribe({
      next: (blob) => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ticket-report-${this.reportType}-${new Date().toISOString().split('T')[0]}.csv`;
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
