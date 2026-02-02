import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as chartData from '../../../shared/data/dashboard';
import * as busPulseData from '../../../shared/data/bus-pulse-dashboard';
import { defaultClientProfile } from '../../../shared/data/client-profiles-dashboard';
import { clientProjects, clientVehicles } from '../../../shared/data/client-projects-vehicles';
import { projectStats, getProjectStats, getProjectVehicleStats } from '../../../shared/data/client-tickets-assets';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexChartsComponent } from '../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

// ========== Data Model: Universal Widget Contract ==========
// Each widget has a unique ID, title, and flexible content type
export interface DashboardWidget {
  id: string;                    // Unique identifier for the widget
  title: string;                 // Display title
  subtitle: string;              // Description/subtitle
  type: 'chart' | 'stat' | 'gauge' | 'treemap' | 'heatmap' | 'timeline' | 'bar'; // Content type
  chartOptions?: any;            // Chart configuration (flexible placeholder)
  width: number;                 // Grid columns (1-12)
  height: number;                // Height in pixels
  order: number;                 // Display order
}

const DEFAULT_WIDGET_LAYOUT: Array<Pick<DashboardWidget, 'id' | 'width' | 'height' | 'order'>> = [
  { id: 'widget-1', width: 4, height: 400, order: 1 },
  { id: 'widget-2', width: 4, height: 400, order: 2 },
  { id: 'widget-3', width: 4, height: 400, order: 3 },
  { id: 'widget-4', width: 8, height: 450, order: 4 },
  { id: 'widget-5', width: 4, height: 450, order: 5 },
  { id: 'widget-6', width: 8, height: 450, order: 6 },
  { id: 'widget-7', width: 4, height: 450, order: 7 },
  { id: 'widget-8', width: 8, height: 450, order: 8 },
  { id: 'widget-9', width: 4, height: 450, order: 9 },
  { id: 'widget-10', width: 8, height: 450, order: 10 },
  { id: 'widget-14', width: 4, height: 450, order: 10.1 },
  { id: 'widget-11', width: 12, height: 500, order: 11 },
  { id: 'widget-12', width: 12, height: 450, order: 12 },
  { id: 'widget-13', width: 12, height: 450, order: 13 }
];

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [
    SharedModule, 
    NgbModule, 
    NgSelectModule, 
    NgCircleProgressModule, 
    NgApexchartsModule, 
    SpkApexChartsComponent, 
    CommonModule, 
    FormsModule,
    DragDropModule,
    NgOptimizedImage
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
    showOpenProjects = true;
    showFilters = false; // Controls visibility of filter dropdowns

    ngOnInit(): void {
      this.applyFilters();
      this.initializeWidgets();
      this.loadLayoutFromStorage();
      this.filterProjects();
      // Add global mouse event listeners for resize
      document.addEventListener('mousemove', this.onMouseMove.bind(this));
      document.addEventListener('mouseup', this.onMouseUp.bind(this));
      // Add ResizeObserver to redraw charts when container size changes
      this.observeChartContainers();
    }

    toggleOpenClosed(): void {
      this.filterProjects();
    }

    filterProjects(): void {
      // Show all projects in the filter dropdown
      // (The old toggle logic was for open/closed status, no longer needed)
      this.filteredProjects = this.projects;
      // For the actual filter dropdown (without "All Projects" option when toggle is on)
      this.filteredProjectsForFilter = this.projects.filter(p => p.id !== 'all');
    }
  
  // ========== Centralized State: Dashboard Store ==========
  // This is the "brain" that manages all widgets
  // Scoped only to this component (not global)
  widgets: DashboardWidget[] = [];
  
  // Local storage key for persistence
  private readonly STORAGE_KEY = 'buspulse_client_dashboard_layout';
  
  // Track resize state
  private resizingWidget: string | null = null;
  private resizeStartX: number = 0;
  private resizeStartY: number = 0;
  private resizeStartWidth: number = 0;
  private resizeStartHeight: number = 0;
  private resizeHandle: 'corner' | 'right' | 'bottom' | null = null;
  
  // Fullscreen state
  fullscreenWidgetId: string | null = null;

  // Activities Modal state
  showActivitiesModal: boolean = false;

  constructor(private modalService: NgbModal) {
    // Listen for ESC key to close fullscreen
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.fullscreenWidgetId) {
        this.toggleFullscreen(this.fullscreenWidgetId);
      }
    });
  }

  // ========== Filter Options ==========
  projects = clientProjects;
  vehicles = clientVehicles;
  filteredProjects = clientProjects; // Initialize with all projects
  filteredProjectsForFilter: any[] = []; // Projects without "All Projects" option

  trackByIndex(index: number, item: any): number {
    return index;
  }

  selectedProject = 'all';
  selectedVehicle = 'all';

  isWidgetVisible(widget: DashboardWidget): boolean {
    if (this.showFilters && this.selectedProject !== 'all') {
      if (
        widget.id === 'widget-10' ||
        widget.id === 'widget-2' ||
        widget.id === 'widget-11' ||
        widget.id === 'widget-12' ||
        widget.id === 'widget-13'
      ) {
        return false;
      }
    }
    return true;
  }

  getCompactWidgetHeight(widget: DashboardWidget): number {
    if (!(this.showFilters && this.selectedProject !== 'all')) {
      return widget.height;
    }
    
    // During compact mode, find all visible widgets with the same width (same row group)
    const sameRowWidgets = this.widgets.filter(
      w => this.isWidgetVisible(w) && w.width === widget.width
    );
    
    // Return the maximum height in this row group
    const maxHeight = Math.max(...sameRowWidgets.map(w => w.height), widget.height);
    return maxHeight;
  }

  // Dynamic stats based on selected project
  currentProjectStats = getProjectStats('all');

  private observeChartContainers(): void {
    // Trigger chart redraw after DOM updates
    setTimeout(() => {
      const chartContainers = document.querySelectorAll('.apexcharts-canvas');
      // Force window resize event to trigger ApexCharts resize handlers
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }

  ngOnDestroy(): void {
    // Save layout before component is destroyed
    this.saveLayoutToStorage();
    
    // Remove global event listeners
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  // ========== Initialize Default Widget Configuration ==========
  private initializeWidgets(): void {
    // Define the default dashboard layout
    // Each widget is a reusable frame with dynamic content
    const defaultWidgets: DashboardWidget[] = [
      {
        id: 'widget-1',
        title: 'Project Status',
        subtitle: 'Open vs Closed Projects',
        type: 'chart',
        chartOptions: busPulseData.openClosedProjectsChart,
        width: 4,
        height: 400,
        order: 1
      },
      {
        id: 'widget-2',
        title: 'Vehicles by Make & Model',
        subtitle: 'Fleet composition by manufacturer',
        type: 'chart',
        chartOptions: busPulseData.vehiclesByMakeModelChart,
        width: 4,
        height: 400,
        order: 2
      },
      {
        id: 'widget-3',
        title: 'Propulsion Types',
        subtitle: 'Fleet fuel/energy distribution',
        type: 'chart',
        chartOptions: busPulseData.vehiclesByPropulsionChart,
        width: 4,
        height: 400,
        order: 3
      },
      {
        id: 'widget-4',
        title: 'Overall Defects by Area',
        subtitle: 'Total defects distributed by vehicle inspection area',
        type: 'treemap',
        chartOptions: busPulseData.defectsByAreaTreemap,
        width: 8,
        height: 450,
        order: 4
      },
      {
        id: 'widget-5',
        title: 'Repeated Defects',
        subtitle: 'Recurring issues percentage',
        type: 'gauge',
        chartOptions: busPulseData.repeatedDefectsGauge,
        width: 4,
        height: 450,
        order: 5
      },
      {
        id: 'widget-6',
        title: 'Average Defects by Station',
        subtitle: 'Inspection quality metrics across all stations',
        type: 'chart',
        chartOptions: busPulseData.defectsByStationChart,
        width: 8,
        height: 450,
        order: 6
      },
      {
        id: 'widget-7',
        title: 'Safety Critical Defects',
        subtitle: 'Safety-critical issues percentage',
        type: 'gauge',
        chartOptions: busPulseData.safetyCriticalDefectsGauge,
        width: 4,
        height: 450,
        order: 7
      },
      {
        id: 'widget-8',
        title: 'Repeated Defects by Area',
        subtitle: 'Areas with most recurring issues',
        type: 'treemap',
        chartOptions: busPulseData.repeatedDefectsByAreaTreemap,
        width: 8,
        height: 450,
        order: 8
      },
      {
        id: 'widget-9',
        title: 'Tickets by Status',
        subtitle: 'Distribution of support tickets',
        type: 'bar',
        chartOptions: this.ticketsByStatusBar,
        width: 4,
        height: 450,
        order: 9
      },
      {
        id: 'widget-10',
        title: 'Comparison of Projects by Area',
        subtitle: 'Average defects per project across areas',
        type: 'chart',
        chartOptions: busPulseData.projectsByAreaStackedChart,
        width: 8,
        height: 450,
        order: 10
      },
      {
        id: 'widget-14',
        title: 'Recent Activities',
        subtitle: 'Latest system activities and updates',
        type: 'stat',
        width: 4,
        height: 450,
        order: 10.1
      },
      {
        id: 'widget-11',
        title: 'Projects Comparison by Station',
        subtitle: 'Color-range heatmap of average defects by project and station',
        type: 'heatmap',
        chartOptions: busPulseData.projectsByStationHeatmap,
        width: 12,
        height: 500,
        order: 11
      },
      {
        id: 'widget-12',
        title: 'Average Station Time Comparison',
        subtitle: 'Setup, inspection, and reporting times by project',
        type: 'chart',
        chartOptions: busPulseData.stationTimeComparisonChart,
        width: 12,
        height: 450,
        order: 12
      },
      {
        id: 'widget-13',
        title: 'Project Timeline',
        subtitle: 'Project schedules and milestones across 2024',
        type: 'timeline',
        chartOptions: busPulseData.projectTimelineChart,
        width: 12,
        height: 450,
        order: 13
      }
    ];

    this.widgets = defaultWidgets;
  }

  // ========== Persistence: Synchronization with Local Storage ==========
  private loadLayoutFromStorage(): void {
    try {
      const savedLayout = localStorage.getItem(this.STORAGE_KEY);
      if (savedLayout) {
        const parsedLayout = JSON.parse(savedLayout);
        // Merge saved layout with current widgets
        this.widgets = this.widgets.map(widget => {
          const saved = parsedLayout.find((w: DashboardWidget) => w.id === widget.id);
          return saved ? { ...widget, ...saved } : widget;
        });
        // Sort by order
        this.widgets.sort((a, b) => a.order - b.order);
      }
    } catch (error) {
      console.error('Failed to load dashboard layout from storage:', error);
    }
  }

  private saveLayoutToStorage(): void {
    try {
      // Save only the layout properties (id, width, height, order)
      const layoutData = this.widgets.map(w => ({
        id: w.id,
        width: w.width,
        height: w.height,
        order: w.order
      }));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(layoutData));
    } catch (error) {
      console.error('Failed to save dashboard layout to storage:', error);
    }
  }

  private applyDefaultWidgetLayout(): void {
    const defaultLayoutMap = new Map(
      DEFAULT_WIDGET_LAYOUT.map(item => [item.id, item])
    );

    this.widgets = this.widgets.map(widget => {
      const defaults = defaultLayoutMap.get(widget.id);
      return defaults
        ? { ...widget, width: defaults.width, height: defaults.height, order: defaults.order }
        : widget;
    });

    this.widgets.sort((a, b) => a.order - b.order);
    this.saveLayoutToStorage();
  }

  // ========== User Interactivity: Drag & Drop ==========
  onWidgetDrop(event: CdkDragDrop<DashboardWidget[]>): void {
    // Reorder widgets array
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    
    // Update order property
    this.widgets.forEach((widget, index) => {
      widget.order = index + 1;
    });
    
    // Save to storage
    this.saveLayoutToStorage();
  }

  // ========== User Interactivity: Delete Widget ==========
  deleteWidget(widgetId: string): void {
    const index = this.widgets.findIndex(w => w.id === widgetId);
    if (index !== -1) {
      this.widgets.splice(index, 1);
      
      // Reorder remaining widgets
      this.widgets.forEach((widget, idx) => {
        widget.order = idx + 1;
      });
      
      this.saveLayoutToStorage();
    }
  }

  // ========== Fullscreen Toggle ==========
  toggleFullscreen(widgetId: string): void {
    if (this.fullscreenWidgetId === widgetId) {
      this.fullscreenWidgetId = null;
      document.body.style.overflow = 'auto';
    } else {
      this.fullscreenWidgetId = widgetId;
      document.body.style.overflow = 'hidden';
    }
  }

  // Get the fullscreen widget
  get fullscreenWidget(): DashboardWidget | undefined {
    if (!this.fullscreenWidgetId) return undefined;
    return this.widgets.find(w => w.id === this.fullscreenWidgetId);
  }

  // ========== User Interactivity: Draggable Resize ==========
  onResizeStart(event: MouseEvent, widgetId: string, handle: 'corner' | 'right' | 'bottom'): void {
    event.preventDefault();
    event.stopPropagation();
    
    const widget = this.widgets.find(w => w.id === widgetId);
    if (!widget) return;
    
    this.resizingWidget = widgetId;
    this.resizeHandle = handle;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
    this.resizeStartWidth = widget.width;
    this.resizeStartHeight = widget.height;
    
    // Add resizing class to body for cursor
    document.body.classList.add('is-resizing');
    if (handle === 'corner') {
      document.body.style.cursor = 'nwse-resize';
    } else if (handle === 'right') {
      document.body.style.cursor = 'ew-resize';
    } else if (handle === 'bottom') {
      document.body.style.cursor = 'ns-resize';
    }
  }

  private onMouseMove(event: MouseEvent): void {
    if (!this.resizingWidget || !this.resizeHandle) return;
    
    const widget = this.widgets.find(w => w.id === this.resizingWidget);
    if (!widget) return;
    
    const deltaX = event.clientX - this.resizeStartX;
    const deltaY = event.clientY - this.resizeStartY;
    
    // Calculate new dimensions based on handle type
    if (this.resizeHandle === 'corner' || this.resizeHandle === 'right') {
      // Width: Convert pixels to columns (approximate)
      const pixelsPerColumn = 100; // Approximate width per Bootstrap column
      const columnChange = Math.round(deltaX / pixelsPerColumn);
      const newWidth = Math.max(1, Math.min(12, this.resizeStartWidth + columnChange));
      widget.width = newWidth;
    }
    
    if (this.resizeHandle === 'corner' || this.resizeHandle === 'bottom') {
      // Height: Direct pixel adjustment
      const newHeight = Math.max(200, this.resizeStartHeight + deltaY);
      widget.height = newHeight;
    }
    
    // Trigger multiple resize events for ApexCharts
    window.dispatchEvent(new Event('resize'));
    
    // Force chart redraw by marking for check
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  }

  private onMouseUp(event: MouseEvent): void {
    if (this.resizingWidget) {
      this.resizingWidget = null;
      this.resizeHandle = null;
      document.body.classList.remove('is-resizing');
      document.body.style.cursor = '';
      
      // Final resize events to ensure chart redraw
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
      
      // Save the new layout
      this.saveLayoutToStorage();
    }
  }

  // ========== Reset Dashboard to Default ==========
  resetDashboard(): void {
    // Reset filters to default (first project)
    this.selectedProject = this.filteredProjectsForFilter[0]?.id || 'proj1';
    this.selectedVehicle = 'all';
    // Update stats based on reset values
    this.currentProjectStats = getProjectVehicleStats(this.selectedProject, this.selectedVehicle) as any;
    // Reset widget layout
    localStorage.removeItem(this.STORAGE_KEY);
    this.initializeWidgets();
  }

  // ========== Restore Deleted Widget ==========
  restoreAllWidgets(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.initializeWidgets();
  }
  
  // 9. Projects Comparison by Area (Stacked Column)
  public projectsByAreaStackedChart = busPulseData.projectsByAreaStackedChart;
  
  // 10. Projects Comparison by Station (Heatmap)
  public projectsByStationHeatmap = busPulseData.projectsByStationHeatmap;
  
  // 11. Station Time Comparison (Stacked Bar)
  public stationTimeComparisonChart = busPulseData.stationTimeComparisonChart;
  
  // 12. Project Timeline (Colored Range Bar)
  public projectTimelineChart = busPulseData.projectTimelineChart;
  
  // 13. Project Magnitude Comparison (Bubble Chart)
  public projectMagnitudeBubble = busPulseData.projectMagnitudeBubble;

  // Client Profile Data - Now from shared data file
  public clientProfile = defaultClientProfile;

  // Dashboard Statistics
  public dashboardStats = {
    ...busPulseData.dashboardStats,
    projectChangePercentage: 55,
    vehicleChangePercentage: 5,
    defectChangePercentage: 12,
    repeatedChangePercentage: 8
  };

  // Existing chart options (for compatibility)
  public ChartOptions = chartData.ChartOptions;
  public ChartOptions1 = chartData.ChartOptions1;
  public ChartOptions2 = chartData.ChartOptions2;

  // Donut charts for ongoing projects
  circleOptions = {
    series: [1854, 250],
    labels: ['Bitcoin', 'Ethereum'],
    chart: { height: 73, width: 50, type: 'donut' },
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { show: true, curve: 'smooth', lineCap: 'round', colors: '#fff', width: 0, dashArray: 0 },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          background: 'transparent',
          labels: { show: false, name: { show: true, fontSize: '20px', color: '#495057', offsetY: -4 }, value: { show: true, fontSize: '18px', offsetY: 8 }, total: { show: true, showAlways: true, label: 'Total', fontSize: '22px', fontWeight: 600, color: '#495057' } }
        }
      }
    },
    colors: ['var(--primary-color)', 'rgba(var(--primary-rgb), 0.2)']
  };

  circleOptions1 = {
    series: [1754, 544],
    labels: ['Bitcoin', 'Ethereum'],
    chart: { height: 73, width: 50, type: 'donut' },
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { show: true, curve: 'smooth', lineCap: 'round', colors: '#fff', width: 0, dashArray: 0 },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          background: 'transparent',
          labels: { show: false, name: { show: true, fontSize: '20px', color: '#495057', offsetY: -4 }, value: { show: true, fontSize: '18px', offsetY: 8 }, total: { show: true, showAlways: true, label: 'Total', fontSize: '22px', fontWeight: 600, color: '#495057' } }
        }
      }
    },
    colors: ['var(--primary-color)', 'rgba(var(--primary-rgb), 0.2)']
  };

  // KPI cards
  cards = [
    {
      svg: `<svg class="text-primary" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"> <g> <rect height="14" opacity=".3" width="14" x="5" y="5"></rect> <g> <rect fill="none" height="24" width="24"></rect> <g> <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"></path> <rect height="5" width="2" x="7" y="12"></rect> <rect height="10" width="2" x="15" y="7"></rect> <rect height="3" width="2" x="11" y="14"></rect> <rect height="2" width="2" x="11" y="10"></rect> </g> </g> </g> </svg>`,
      title: 'Total Inspections',
      subtitle: 'Fleet inspections completed',
      value: '388/450',
      percentage: '86% ',
      percentage1: 'Completion',
      percentageClass: 'text-success'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5-1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path> </svg>`,
      title: 'Total Defects',
      subtitle: 'Issues identified this period',
      value: '1,247',
      percentage: '18% ',
      percentage1: 'vs Last Month',
      percentageClass: 'text-danger'
    },
    {
      svg: `<svg class="text-primary" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path> </svg>`,
      title: 'Safety Critical',
      subtitle: 'High-priority defects requiring action',
      value: '89',
      percentage: '7.1% ',
      percentage1: 'of Total',
      percentageClass: 'text-warning'
    }
  ];

  transactions = [
    { avatar: './assets/images/faces/5.jpg', name: 'Flicker', description: 'App improvement', amount: '$45.234', date: '12 Jan 2020', trendClass: 'up-alt text-success' },
    { avatar: './assets/images/faces/6.jpg', name: 'Intoxica', description: 'Milestone', amount: '$23.452', date: '23 Jan 2020', trendClass: 'down-alt text-danger' },
    { avatar: './assets/images/faces/7.jpg', name: 'Digiwatt', description: 'Sales executive', amount: '$78.001', date: '4 Apr 2020', trendClass: 'down-alt text-danger' },
    { avatar: './assets/images/faces/8.jpg', name: 'Flicker', description: 'Milestone2', amount: '$37.285', date: '4 Apr 2020', trendClass: 'up-alt text-success' },
    { avatar: './assets/images/faces/4.jpg', name: 'Flicker', description: 'App improvement', amount: '$25.341', date: '4 Apr 2020', trendClass: 'down-alt text-danger', cell: 'pb-0' }
  ];

  taskColumns = [
    { header: 'Task', field: 'Task', tableHeadColumn: 'wd-lg-20p' },
    { header: 'Team', field: 'Team', tableHeadColumn: 'wd-lg-20p text-center' },
    { header: 'Open task', field: 'Task', tableHeadColumn: 'wd-lg-20p text-center' },
    { header: 'Priority', field: 'Priority', tableHeadColumn: 'wd-lg-20p' },
    { header: 'Status', field: 'Status', tableHeadColumn: 'wd-lg-20p' }
  ];

  tasks = [
    { name: 'Evaluating the design', checked: true, avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/2.jpg', './assets/images/faces/3.jpg', './assets/images/faces/4.jpg'], comments: 18, priority: 'High', priorityClass: 'text-primary', status: 'Completed', statusClass: 'bg-primary-transparent' },
    { name: 'Generate ideas for design', checked: false, avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/6.jpg', './assets/images/faces/7.jpg', './assets/images/faces/8.jpg'], comments: 34, priority: 'Normal', priorityClass: 'text-secondary', status: 'Pending', statusClass: 'bg-warning-transparent' },
    { name: 'Define the problem', checked: true, avatars: ['./assets/images/faces/11.jpg', './assets/images/faces/12.jpg', './assets/images/faces/9.jpg', './assets/images/faces/10.jpg'], comments: 25, priority: 'Low', priorityClass: 'text-warning', status: 'Completed', statusClass: 'bg-primary-transparent' },
    { name: 'Empathize with users', checked: false, avatars: ['./assets/images/faces/7.jpg', './assets/images/faces/9.jpg', './assets/images/faces/11.jpg', './assets/images/faces/12.jpg'], comments: 37, priority: 'High', priorityClass: 'text-primary', status: 'Rejected', statusClass: 'bg-danger-transparent' }
  ];

  // ========== Filter Methods ==========
  applyFilters(): void {
    // This method will be called when filters change
    // Update chart data based on selectedProject and selectedVehicle
    console.log('Filters applied - Project:', this.selectedProject, 'Vehicle:', this.selectedVehicle);
    // You can add logic here to update the charts based on selected filters
    // For now, all charts display the same data
  }

  onProjectChange(projectId: string): void {
    this.selectedProject = projectId;
    // Update stats based on selected project and vehicle
    this.currentProjectStats = getProjectVehicleStats(projectId, this.selectedVehicle) as any;
    this.applyFilters();
  }

  onVehicleChange(vehicleId: string): void {
    this.selectedVehicle = vehicleId;
    // Update stats based on selected project and vehicle
    this.currentProjectStats = getProjectVehicleStats(this.selectedProject, vehicleId) as any;
    this.applyFilters();
  }

  onToggleFilters(): void {
    if (this.showFilters) {
      // When toggle is turned ON, set default to first project (not "all")
      if (this.selectedProject === 'all') {
        this.selectedProject = this.filteredProjectsForFilter[0]?.id || 'proj1';
        this.currentProjectStats = getProjectVehicleStats(this.selectedProject, this.selectedVehicle) as any;
      }
    } else {
      // When toggle is turned OFF, reset to "all"
      this.selectedProject = 'all';
      this.selectedVehicle = 'all';
      this.currentProjectStats = getProjectStats('all');
      this.applyDefaultWidgetLayout();
    }
  }

  // Tickets by Status - Horizontal Bar (inhouse ApexCharts) - Redesigned like "Most Viewed Brands"
  ticketsByStatusBar = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: { show: false },
      sparkline: { enabled: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '65%',
        borderRadius: 3,
        dataLabels: {
          position: 'right'
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) { 
        return val + '%'; 
      },
      offsetX: 8,
      style: { 
        colors: ['#495057'],
        fontSize: '12px',
        fontWeight: 600
      }
    },
    xaxis: {
      categories: ['Open Tickets', 'In Progress', 'Resolved', 'Escalated', 'Closed', 'On Hold', 'Reopened'],
      labels: { 
        style: { 
          colors: '#6c757d',
          fontSize: '13px'
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    series: [
      { 
        name: 'Tickets (%)',
        data: [28.5, 22.3, 18.7, 12.4, 10.2, 5.1, 2.8]
      }
    ],
    colors: ['#0d6efd', '#0dcaf0', '#198754', '#ffc107', '#fd7e14', '#6f42c1', '#e83e8c'],
    grid: { 
      borderColor: 'rgba(0,0,0,0.05)',
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } }
    },
    tooltip: {
      y: { 
        formatter: function (val: number) { return val.toFixed(1) + '%'; },
        title: { formatter: function() { return ''; } }
      }
    },
    legend: { show: false },
    states: {
      hover: { filter: { type: 'darken', value: 0.15 } },
      active: { filter: { type: 'darken', value: 0.15 } }
    }
  };

  // ========== Recent Activities Data ==========
  recentActivities = [
    {
      lastSync: '2026-01-26 10:30 AM',
      ticketsGenerated: 5,
      hoursWorked: 8,
      inspector: 'John Doe'
    },
    {
      lastSync: '2026-01-26 08:15 AM',
      ticketsGenerated: 2,
      hoursWorked: 6,
      inspector: 'Jane Smith'
    },
    {
      lastSync: '2026-01-25 06:45 AM',
      ticketsGenerated: 3,
      hoursWorked: 7,
      inspector: 'Carlos Ruiz'
    },
    {
      lastSync: '2026-01-25 04:20 AM',
      ticketsGenerated: 1,
      hoursWorked: 5,
      inspector: 'Emily Chen'
    },
    {
      lastSync: '2026-01-24 11:50 PM',
      ticketsGenerated: 4,
      hoursWorked: 9,
      inspector: 'Amit Patel'
    }
  ];

  // ========== Activities Modal Methods ==========
  openActivitiesModal(): void {
    this.showActivitiesModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeActivitiesModal(): void {
    this.showActivitiesModal = false;
    document.body.style.overflow = 'auto';
  }
}
