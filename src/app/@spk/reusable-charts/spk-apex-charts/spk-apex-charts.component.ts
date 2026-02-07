import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'spk-apex-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './spk-apex-charts.component.html',
  styleUrl: './spk-apex-charts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpkApexChartsComponent implements AfterViewInit, OnDestroy {
  @Input() chartOptions: any;
  @ViewChild('chart', { static: false }) chart?: ChartComponent;

  private resizeObserver?: ResizeObserver;
  private resizeTimeout: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    // Initialize ResizeObserver to watch container size changes
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.handleResize();
      });
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }

    // Initial chart update
    this.updateChartSize();
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  private handleResize(): void {
    // Debounce resize events
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.updateChartSize();
    }, 100);
  }

  private updateChartSize(): void {
    // Get container dimensions
    const container = this.elementRef.nativeElement;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Update chart options with new dimensions
    if (this.chartOptions && width > 0 && height > 0) {
      this.chartOptions = {
        ...this.chartOptions,
        chart: {
          ...this.chartOptions.chart,
          width: '100%',
          height: '100%'
        }
      };
      this.cdr.markForCheck();

      // Force chart update if chart component is available
      if (this.chart) {
        setTimeout(() => {
          this.chart?.updateOptions(this.chartOptions, true, true, true);
        }, 50);
      }
    }
  }
}
