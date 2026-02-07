import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleReportService, VehicleStationTracker, VehicleStationTrackerRequest } from '../services/vehicle-report.service';
import ExcelJS from 'exceljs';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-vehicle-station-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vehicle-station-tracker.component.html',
  styleUrls: ['./vehicle-station-tracker.component.scss']
})
export class VehicleStationTrackerComponent implements OnInit {
  
  // Expose Math to template
  Math = Math;
  
  selectedProject: string = '';
  searchTerm: string = '';
  
  projects: any[] = [];
  
  trackerData: VehicleStationTracker[] = [];
  filteredData: VehicleStationTracker[] = [];
  reportGenerated: boolean = false;
  
  // Loading and error states
  isLoading: boolean = false;
  isLoadingFilters: boolean = false;
  errorMessage: string = '';
  
  // Legend state
  isLegendCollapsed: boolean = true;
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;

    // Sorting
    sortColumn: string = '';
    sortDirection: 'asc' | 'desc' = 'asc';
    sortTracker: { [key: string]: 'asc' | 'desc' } = {};
  
  // Station column definitions
  stationColumns = [
    { key: 'station01', label: '01 - Chassis Prep, AC Prep, Fire Suppression, Engine Dress' },
    { key: 'station02', label: '02 - Modify Front End, Air Bags, Remove Brake Lines & Fuel Lines' },
    { key: 'station03', label: '03 - Cab Cut Out, Modify Frame Kickups, Rear Axle, Bike Racks' },
    { key: 'station04', label: '04 - RR Frame & Shelling, Birdcage, Ramp Support' },
    { key: 'station05', label: '05 - Air Lines, Exhaust, Drive Shafts, Brake Lines, Rough Electric' },
    { key: 'station06', label: '06 - Floor, Rear Wall, Roof, AC Mount, Hatches, Electrical' },
    { key: 'station07', label: '07 - Floor Prep, Hoses, Electrical, Mirror Harness' },
    { key: 'station08', label: '08 - Polyurea Spray' },
    { key: 'station09', label: '09 - Front Cap & Seal, Ext Lights Interior, Electrical Upstairs, Prep Fiberglass' },
    { key: 'station10', label: '10 - Interior Electrical, Ramps' },
    { key: 'station11', label: '11 - Electrical Console, Interior Lights, Warning Buzzer, Mirrors' },
    { key: 'station12', label: '12 - Stanchions, Transitions, Speakers, Windows' },
    { key: 'station13', label: '13 - Test, Bike Racks, Luggage Racks' },
    { key: 'station14', label: '14 - Seats, Entry Door' },
    { key: 'station15', label: '15 - ABS Plastics, Exterior Finish, Stanchions, Easy Stop Buttons, Fire Suppression' }
  ];
  
  additionalCheckpoints = [
    { key: 'station16', label: '16 - Underbody, Vacuum, Coolant, Headlights' },
    { key: 'station17', label: '17 - Drys Box, Rub Rails, Clean & Detail' },
    { key: 'station18', label: '18 - Alignment, Leak Down Test' },
    { key: 'station19', label: '19 - Post Road Test Bay' },
    { key: 'station20', label: '20 - Inspector Testing & PDI' },
    { key: 'station21', label: '21 - Shipped to Client' }
  ];

  // Export layout station definitions (matching sample workbook)
  exportStationColumns = [
    { key: 'station01', label: '01 - Bus Structure Receiving - Nova' },
    { key: 'station02', label: '02 - Air Sys components, Steering Column, Flooring, Engine Insulation - Nova' },
    { key: 'station03', label: '03 - Air Line Routing, HVAC Piping, Front Ramp' },
    { key: 'station04', label: '04 - Elec Harness, Artic Joint' },
    { key: 'station05', label: '05 - Rear Shell, Side Panels, Air Test, Eng Comp Electrical' },
    { key: 'station06', label: '06 - Fuel Tank, Heat Convectors, Batt Compartment' },
    { key: 'station07', label: '07 - Rear Roof, Ext Access Doors, Radiator Piping, Aux Heating' },
    { key: 'station08', label: '08 - Front Roof, Trim & Moldings- Nova' },
    { key: 'station09', label: '09 - Front Shell, Dash, Engine, Tunnel, Ceiling' },
    { key: 'station10', label: '10 - HVAC Roof Units, Axles, Dest Sign - Nova' },
    { key: 'station11', label: '11 - Electrical completion & pre-test, Radiator, Roof Gutters' },
    { key: 'station12', label: '12 - Handrails, Ext Decals, Baselights, Door Accessories, Coupling of Artic' },
    { key: 'station13', label: '13 - Elec & Mech Run-up, Dialysis, Front Door' },
    { key: 'station14', label: '14 - Eng Door, Steering Lock, Alignment - Nova' },
    { key: 'station15', label: '15 - Windows, Modesty Panels - Nova' },
    { key: 'station16', label: '16 - Seats, Rear Doors, Drivers Area - Nova' },
    { key: 'station17', label: '17 - Stanchions - Nova' },
    { key: 'station18', label: '18 - Under coating, Ext Sign Frames - Nova' },
    { key: 'station19', label: '19 - Electrical Clousure - Nova' },
    { key: 'station20', label: '20 - Closing Zones - Nova' },
    { key: 'station21', label: '21 - Recuperation - Nova' },
    { key: 'station22', label: '22 - Nova Bus Finishing Area - Nova' },
    { key: 'station23', label: '23 - Nova Bus Coach Tester Inspection - Nova' },
    { key: 'station24', label: '24 - Nova Bus Coach Tester Road Test, Inspection & Painting' },
    { key: 'station25', label: '25 - Nova Bus Coach Tester Water Test, Repairs after Road Test' },
    { key: 'station26', label: '26 - Cleaning & Washing Before Presenting' },
    { key: 'station27', label: '27 - Customer Validation - Nova' },
    { key: 'station28', label: '28 - Repairs after Customer Inspection - Nova' },
    { key: 'station29', label: '29 - Customer Pre-Delivery Sign Off - Nova' }
  ];

  constructor(private vehicleReportService: VehicleReportService) {}

  ngOnInit() {
    this.loadProjects();
  }

  /**
   * Load projects for dropdown
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
   * Run report with current filters
   */
  runReport() {
    if (!this.selectedProject) {
      this.errorMessage = 'Please select a project';
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
    
    const request: VehicleStationTrackerRequest = {
      projectName: this.selectedProject,
      searchTerm: this.searchTerm || undefined,
      page: this.currentPage,
      pageSize: this.pageSize
    };
    
    this.vehicleReportService.getVehicleStationTracker(request).subscribe({
      next: (response) => {
        if (response.success) {
          this.trackerData = response.data;
          this.filteredData = response.data;
          this.totalCount = response.totalCount;
          this.reportGenerated = true;
        } else {
          this.errorMessage = response.message || 'Failed to fetch tracker data';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching tracker data:', error);
        this.errorMessage = 'Failed to load tracker data. Please try again.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Filter data based on search and reload with pagination
   */
  filterData() {
    this.currentPage = 1; // Reset to first page when searching
      if (this.reportGenerated) {
        // Apply search filter
        let filtered = this.trackerData;
        if (this.searchTerm) {
          const term = this.searchTerm.toLowerCase();
          filtered = filtered.filter(item =>
            (item.fleetNumber && item.fleetNumber.toLowerCase().includes(term)) ||
            (item.vin && item.vin.toLowerCase().includes(term)) ||
            (item.frameNumber && item.frameNumber.toLowerCase().includes(term))
          );
        }

        // Apply sorting
        if (this.sortColumn) {
          filtered = [...filtered].sort((a, b) => {
            const aValue = (a as any)[this.sortColumn] || '';
            const bValue = (b as any)[this.sortColumn] || '';
            if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
            return 0;
          });
        }
        this.filteredData = filtered;
    }
  }

  /**
   * Toggle row expansion
   */
  toggleRow(item: VehicleStationTracker) {
    item.isExpanded = !item.isExpanded;
  }

  /**
   * Print current report
   */
  printReport() {
    // Set print title
    const originalTitle = document.title;
    document.title = `Vehicle Station Tracker Report - ${this.selectedProject} - ${new Date().toLocaleDateString()}`;
    
    // Delay to ensure title updates
    setTimeout(() => {
      window.print();
      // Restore original title after print dialog closes
      setTimeout(() => {
        document.title = originalTitle;
      }, 100);
    }, 100);
  }

  /**
   * Download report
   */
  async downloadReport() {
    if (!this.reportGenerated || this.filteredData.length === 0) {
      alert('Please generate a report first before downloading');
      return;
    }

    try {
      const allEntries = await this.fetchAllEntriesForExport();
      await this.generateExcelReport(allEntries);
    } catch (error) {
      console.error('Error generating Excel report:', error);
      alert('Failed to generate Excel report. Please try again.');
    }
  }

  /**
   * Fetch all entries (all pages) for export so the Excel has complete data
   */
  private async fetchAllEntriesForExport(): Promise<VehicleStationTracker[]> {
    // First request to get total count
    const baseRequest: VehicleStationTrackerRequest = {
      projectName: this.selectedProject,
      searchTerm: this.searchTerm || undefined,
      page: 1,
      pageSize: 200
    };

    try {
      const firstResp = await firstValueFrom(this.vehicleReportService.getVehicleStationTracker(baseRequest));
      if (!firstResp || !firstResp.success) {
        throw new Error('Failed to fetch initial page for export');
      }

      const all: VehicleStationTracker[] = [...(firstResp.data || [])];
      const total = firstResp.totalCount || all.length;
      this.totalCount = total;

      const totalPages = Math.ceil(total / (baseRequest.pageSize || 200));
      for (let p = 2; p <= totalPages; p++) {
        const nextReq: VehicleStationTrackerRequest = { ...baseRequest, page: p };
        const resp = await firstValueFrom(this.vehicleReportService.getVehicleStationTracker(nextReq));
        if (resp && resp.success && resp.data && resp.data.length) {
          all.push(...resp.data);
        }
      }

      return all;
    } catch (error) {
      console.warn('Falling back to current page data for export:', error);
      return [...this.filteredData];
    }
  }

  /**
   * Generate Excel report matching provided sample layout
   */
  private async generateExcelReport(data: VehicleStationTracker[]): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Vehicle Station Tracker');

    // Title block (rows 1-4)
    worksheet.getCell('A1').value = 'Vehicle Station Tracker Report';
    worksheet.getCell('A1').font = { bold: true, size: 11, name: 'Calibri' };

    const today = new Date();
    worksheet.getCell('A2').value = `Date: ${today.toLocaleDateString('en-US')}`;
    worksheet.getCell('A2').font = { bold: true, size: 11, name: 'Calibri' };

    worksheet.getCell('A3').value = `Client: ${this.selectedProject || 'N/A'}`;
    worksheet.getCell('A3').font = { bold: true, size: 11, name: 'Calibri' };

    worksheet.getCell('A4').value = `Project: ${this.selectedProject || 'N/A'}`;
    worksheet.getCell('A4').font = { bold: true, size: 11, name: 'Calibri' };

    // Leave rows 5-7 empty for spacing
    const headerRowIndex = 8;

    // Build header row (starts at column B to mirror sample layout)
    const headerValues = [
      '',
      'Fleet Number',
      'VIN',
      'Frame #',
      'Inspector',
      ...this.exportStationColumns.map((s) => s.label)
    ];

    const headerRow = worksheet.getRow(headerRowIndex);
    headerRow.values = headerValues;
    headerRow.font = { bold: true, size: 11, name: 'Calibri' };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFB8CCE4' }
    };
    headerRow.height = 20;
    headerRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

    // Column widths (A spacer plus data columns)
    worksheet.getColumn(1).width = 2;
    worksheet.getColumn(2).width = 14; // Fleet Number
    worksheet.getColumn(3).width = 20; // VIN
    worksheet.getColumn(4).width = 12; // Frame #
    worksheet.getColumn(5).width = 14; // Inspector

    let colIndex = 6;
    this.exportStationColumns.forEach(() => {
      worksheet.getColumn(colIndex).width = 20;
      colIndex++;
    });

    // Data rows start at row 9
    let currentRow = headerRowIndex + 1;
    data.forEach((item) => {
      const rowValues: any[] = [
        '',
        item.fleetNumber || '',
        item.vin || '',
        item.frameNumber || '',
        (item as any).inspector || ''
      ];

      this.exportStationColumns.forEach((station) => {
        rowValues.push((item as any)[station.key] || '');
      });

      const row = worksheet.getRow(currentRow);
      row.values = rowValues;
      row.font = { size: 10, name: 'Calibri' };
      row.alignment = { vertical: 'middle', horizontal: 'center' };
      currentRow++;
    });

    // Thin borders for header + data
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell({ includeEmpty: false }, (cell) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
          right: { style: 'thin', color: { argb: 'FFD0D0D0' } }
        };
      });
    });

    // Freeze header row
    worksheet.views = [
      { state: 'frozen', ySplit: headerRowIndex, xSplit: 1 }
    ];

    const filenameDate = today
      .toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })
      .replace(/\//g, '_');
    const filename = `VehicleStationTrackerReport_${filenameDate}.xlsx`;

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Get value for station column
   */
  getStationValue(item: VehicleStationTracker, key: string): string {
    return (item as any)[key] || '';
  }

  /**
   * Toggle legend visibility
   */
  toggleLegend(): void {
    this.isLegendCollapsed = !this.isLegendCollapsed;
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
      if (startPage > 2) pages.push(-1); // -1 represents ellipsis
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) pages.push(-1); // -1 represents ellipsis
      if (endPage < totalPages) pages.push(totalPages);
    }
    
    return pages;
  }

  /**
   * Calculate completion percentage for a vehicle
   */
  getCompletionPercentage(item: VehicleStationTracker): number {
    let completed = 0;
    const total = 21;
    
    for (let i = 1; i <= total; i++) {
      const stationKey = `station${String(i).padStart(2, '0')}` as keyof VehicleStationTracker;
      if ((item as any)[stationKey]) {
        completed++;
      }
    }
    
    return Math.round((completed / total) * 100);
  }

  /**
   * Get status color based on completion percentage
   */
  getStatusColor(percentage: number): string {
    if (percentage === 0) return 'danger';
    if (percentage < 30) return 'warning';
    if (percentage < 70) return 'info';
    if (percentage < 100) return 'success';
    return 'success';
  }

  /**
   * Check if station is completed
   */
  isStationCompleted(item: VehicleStationTracker, key: string): boolean {
    return !!((item as any)[key]);
  }

  /**
   * Get all completed stations count
   */
  getCompletedStationsCount(item: VehicleStationTracker): number {
    let count = 0;
    for (let i = 1; i <= 21; i++) {
      const stationKey = `station${String(i).padStart(2, '0')}` as keyof VehicleStationTracker;
      if ((item as any)[stationKey]) {
        count++;
      }
    }
    return count;
  }

    /**
     * Handle sorting when header clicked
     */
    sortByColumn(column: string): void {
      if (this.sortColumn === column) {
        // Toggle direction
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
      this.sortTracker[column] = this.sortDirection;
      this.filterData();
    }
}
