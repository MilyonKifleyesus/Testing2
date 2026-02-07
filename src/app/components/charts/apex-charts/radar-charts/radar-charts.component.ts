import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MatCommonModule } from '@angular/material/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;

@Component({
  selector: 'app-radar-charts',
  standalone: true,
  imports: [MatCommonModule,SharedModule,SpkApexChartsComponent],
  templateUrl: './radar-charts.component.html',
  styleUrl: './radar-charts.component.scss'
})
export class RadarChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  chartOptions2:any;
  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    chart: {
        height: 320,
        type: 'radar',
    },
    title: {
        text: 'Basic Radar Chart',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ["#6259ca"],
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
    };

  this.chartOptions1= {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
  }, {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
  }, {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
  }],
  chart: {
      height: 320,
      type: 'radar',
      dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
      }
  },
  title: {
      text: 'Radar Chart - Multi Series',
      align: 'left',
      style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
  },
  colors: ["#6259ca", "#23b7e5", "#ffb748"],
  stroke: {
      width: 2
  },
  fill: {
      opacity: 0.1
  },
  markers: {
      size: 0
  },
  xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016']
  }
    };
    this.chartOptions2= {
      series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    chart: {
        height: 320,
        type: 'radar',
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 80,
            polygons: {
                strokeColors: '#e9e9e9',
            }
        }
    },
    title: {
        text: 'Radar with Polygon Fill',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ['#23b7e5'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#23b7e5',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val: any) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val: any, i: number) {
                if (i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }
  }
}
}
