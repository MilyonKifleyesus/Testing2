import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { 
  ApexChart, 
  ApexNonAxisChartSeries, 
  ApexResponsive, 
  ApexDataLabels, 
  ApexLegend, 
  ApexPlotOptions, 
  ApexXAxis, 
  ApexYAxis, 
  ApexGrid, 
  ApexStroke, 
  ApexTooltip 
} from 'ng-apexcharts';
import { VehicleDetail, GalleryImage, TimelineEvent } from '../models/vehicle.model';
import { VehicleUtilService } from '../services/vehicle-util.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels?: string[];
  colors?: string[];
  legend?: ApexLegend;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  dataLabels?: ApexDataLabels;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  tooltip?: ApexTooltip;
};

/**
 * Vehicle View Component
 * 
 * @description
 * Displays comprehensive vehicle details including:
 * - Vehicle insights with KPIs
 * - Inspection timeline
 * - Photo gallery
 * - Defect analysis by area
 * - Tickets and snags
 * - Inspector information
 * - Shipping details
 * - Media files
 * 
 * @example
 * <app-vehicle-view></app-vehicle-view>
 */
@Component({
  selector: 'app-vehicle-view',
  standalone: true,
  imports: [CommonModule, RouterModule, NgApexchartsModule],
  templateUrl: './vehicle-view.component.html',
  styleUrl: './vehicle-view.component.scss'
})
export class VehicleViewComponent implements OnInit {
  /** Vehicle ID from route */
  vehicleId: number = 0;
  
  /** Detailed vehicle data */
  vehicle: VehicleDetail | null = null;
  
  /** Chart: Snag by Area */
  snagByAreaChart: Partial<ChartOptions> = {};
  
  /** Chart: Defect Severity Gauge */
  defectSeverityChart: Partial<ChartOptions> = {};
  
  /** Currently selected image in gallery */
  selectedImage: string = '';
  
  /** Gallery images collection */
  galleryImages: GalleryImage[] = [];

  /** Timeline events */
  timeline: TimelineEvent[] = [];

  constructor(
    private route: ActivatedRoute,
    public vehicleUtil: VehicleUtilService
  ) {}

  ngOnInit(): void {
    this.vehicleId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSampleData();
  }

  /**
   * Load sample vehicle data
   */
  private loadSampleData(): void {
    // Load sample vehicle with details
    this.vehicle = {
      id: this.vehicleId,
      client: 'BusPulse Fleet',
      fleetNumber: `Fleet-${this.vehicleId}`,
      make: 'Volvo',
      model: 'B8R',
      vin: 'VLV1234567890123',
      mileageType: 'miles',
      propulsion: 'Diesel',
      status: 'completed',
      imageUrl: 'assets/vehicle.jpg',
      inspectionDate: '2026-01-10',
      frameNumber: 'FRM1234567890',
      year: 2020,
      color: 'White',
      licensePlate: 'ABC123',
      inspector: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'assets/avatar.jpg'
      },
      shippingDetail: {
        frontCurb: '123 Main St',
        backStreet: '456 Oak Ave'
      },
      media: {
        interiorVideo: 'assets/interior.mp4',
        exteriorVideo: 'assets/exterior.mp4'
      },
      images: {
        front: 'assets/vehicle-front.jpg',
        back: 'assets/vehicle-back.jpg',
        left: 'assets/vehicle-left.jpg',
        right: 'assets/vehicle-right.jpg',
        interior: 'assets/vehicle-interior.jpg'
      },
      inspectionData: {
        date: '2026-01-10',
        duration: '2 hours',
        mileage: 45000 + (this.vehicleId * 5000)
      },
      defects: [
        { area: 'Engine', count: 3, severity: 'medium' as any },
        { area: 'Transmission', count: 2, severity: 'medium' as any },
        { area: 'Brakes', count: 1, severity: 'low' as any },
        { area: 'Interior', count: 4, severity: 'low' as any },
        { area: 'Exterior', count: 2, severity: 'low' as any }
      ],
      tickets: [],
      snags: []
    };
    
    this.setupGallery();
    this.initializeCharts();
    this.loadSampleTimeline();
  }

  /**
   * Setup photo gallery
   */
  private setupGallery(): void {
    if (!this.vehicle) return;

    this.galleryImages = [
      { url: this.vehicle.images.front, label: 'Front View' },
      { url: this.vehicle.images.back, label: 'Back View' },
      { url: this.vehicle.images.left, label: 'Left Side' },
      { url: this.vehicle.images.right, label: 'Right Side' },
      { url: this.vehicle.images.interior, label: 'Interior' }
    ];
    
    this.selectedImage = this.galleryImages[0].url;
  }

  /**
   * Initialize ApexCharts configurations
   */
  private initializeCharts(): void {
    if (!this.vehicle) return;

    // Snag by Area Chart (Treemap-style using Bar chart)
    this.snagByAreaChart = {
      series: [{
        data: this.vehicle.defects.map(d => d.count)
      }],
      chart: {
        type: 'bar',
        height: 320,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          horizontal: true,
          distributed: true,
          dataLabels: { position: 'bottom' }
        }
      },
      colors: ['#845adf', '#23b7e5', '#f5b849', '#49b6f5', '#26bf94', '#e6533c'],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff'],
          fontSize: '11px'
        },
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ": " + val;
        },
        offsetX: 0
      },
      xaxis: {
        categories: this.vehicle.defects.map(d => d.area)
      },
      yaxis: {
        labels: { show: false }
      },
      tooltip: {
        theme: 'dark',
        x: { show: false },
        y: {
          title: {
            formatter: function () {
              return 'Defects:';
            }
          }
        }
      }
    };

    // Defect Severity Gauge
    const totalDefects = this.vehicle.defects.reduce((sum, d) => sum + d.count, 0);
    this.defectSeverityChart = {
      series: [totalDefects],
      chart: {
        type: 'radialBar',
        height: 220
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '55%'
          },
          dataLabels: {
            name: {
              fontSize: '14px',
              color: '#6c757d'
            },
            value: {
              fontSize: '26px',
              fontWeight: 'bold',
              color: '#845adf'
            }
          }
        }
      },
      labels: ['Total Defects'],
      colors: ['#845adf']
    };
  }

  /**
   * Load sample timeline events
   */
  private loadSampleTimeline(): void {
    this.timeline = [
      {
        date: '2026-01-10',
        time: '10:30 AM',
        event: 'Inspection Completed',
        user: 'John Doe',
        icon: 'check-circle',
        color: '#26bf94',
        description: 'Full vehicle inspection completed'
      },
      {
        date: '2026-01-08',
        time: '2:15 PM',
        event: 'Service Scheduled',
        user: 'Admin',
        icon: 'calendar',
        color: '#23b7e5',
        description: 'Scheduled for maintenance'
      },
      {
        date: '2026-01-05',
        time: '9:00 AM',
        event: 'In Service',
        user: 'Fleet Manager',
        icon: 'truck',
        color: '#845adf',
        description: 'Vehicle returned to service'
      },
      {
        date: '2025-12-28',
        time: '11:45 AM',
        event: 'Maintenance Started',
        user: 'Technician',
        icon: 'tools',
        color: '#f5b849',
        description: 'Maintenance and repairs initiated'
      }
    ];
  }

  /**
   * Select image in gallery
   * @param image Image URL
   */
  selectImage(image: string): void {
    this.selectedImage = image;
  }

  /**
   * Get CSS class for ticket priority badge
   */
  getTicketPriorityClass(priority: string): string {
    return this.vehicleUtil.getTicketPriorityClass(priority as any);
  }

  /**
   * Get CSS class for ticket status badge
   */
  getTicketStatusClass(status: string): string {
    return this.vehicleUtil.getTicketStatusClass(status as any);
  }

  /**
   * Get CSS class for severity badge
   */
  getSeverityBadgeClass(severity: string): string {
    return this.vehicleUtil.getSeverityBadgeClass(severity as any);
  }

  /**
   * Get total number of defects
   */
  getTotalDefects(): number {
    if (!this.vehicle) return 0;
    return this.vehicle.defects.reduce((sum, d) => sum + d.count, 0);
  }

  /**
   * Smooth scroll to a section
   * @param sectionId - The ID of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Export vehicle report
   * TODO: Implement actual export functionality
   */
  exportReport(): void {
    console.log('Exporting report for vehicle:', this.vehicleId);
    alert('Exporting vehicle report...');
    // TODO: Implement PDF/Excel export
  }
}
