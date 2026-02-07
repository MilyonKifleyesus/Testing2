import { Component ,ViewChild} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { dataSeries,series } from './data.series';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexGrid,
  ApexMarkers,
  ApexTooltip,
  ApexFill,
  NgApexchartsModule
} from "ng-apexcharts";
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  type:string;
  
};
@Component({
  selector: 'app-line-charts',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,SpkApexChartsComponent],
  templateUrl: './line-charts.component.html',
  styleUrl: './line-charts.component.scss'
})
export class LineChartsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;
  chartOptions1:any;
  chartOptions3:any;
  chartOptions4:any;
  chartOptions5:any;
  chartOptions6:any;
  chartOptions7:any;
  chartOptions8:any;
  chartOptions9:any;
  chartOptions10:any;
  chartOptions11:any;
  chart1options:any;
  chart2options:any;
  chart3options:any;
// chartOptions2:any;
public series: ApexAxisChartSeries = [];
public chart1!: ApexChart;
public dataLabels!: ApexDataLabels;
public markers!: ApexMarkers;
public title!: ApexTitleSubtitle;
public fill!: ApexFill;
public yaxis!: ApexYAxis;
public xaxis!: ApexXAxis;
public tooltip!: ApexTooltip;
public colors!:any;
public commonOptions1: any = {
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  toolbar: {
    tools: {
      selection: false,
    },
  },
  markers: {
    size: 6,
    hover: {
      size: 10,
    },
  },
  tooltip: {
    followCursor: false,
    theme: 'dark',
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
  },
  grid: {
    clipMarkers: false,
  },
  xaxis: {
    type: 'datetime',
  },
};
  constructor() {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }
    this.chartOptions={
      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
     
          chart: {
              height: 320,
              type: 'line',
              reponsive: true,
              zoom: {
                  enabled: false
              },
              events: {
                  mounted: (chart:any) => {
                    chart.windowResizeHandler();
                  }
                },
          },
          colors: ['#6259ca'],
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'straight',
              width: 3,
          },
          grid: {
              borderColor: '#f2f5f7',
          },
          title: {
              text: 'Product Trends by Month',
              align: 'left',
              style: {
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: '#8c9097'
              },
          },
          xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              labels: {
                  show: true,
                  style: {
                      colors: "#8c9097",
                      fontSize: '11px',
                      fontWeight: 600,
                      cssClass: 'apexcharts-xaxis-label',
                  },
              }
          },
          yaxis: {
              labels: {
                  show: true,
                  style: {
                      colors: "#8c9097",
                      fontSize: '11px',
                      fontWeight: 600,
                      cssClass: 'apexcharts-yaxis-label',
                  },
              }
          }
      
  }

  this.chartOptions1 = {
    series: [
        {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13]
        }
    ],
    chart: {
        height: 320,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        },
        zoom: {
          enabled: false
      },
    },
    colors: ['#6259ca', '#23b7e5'],
    dataLabels: {
        enabled: true,
     
        
 
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Average High & Low Temperature',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    markers: {
        size: 1,
        color:'#fff'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
            text: 'Month',
            fontSize: '13px',
            fontWeight: 'bold',
            style: {
                color: "#8c9097"
            }
        },
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    yaxis: {
        title: {
            text: 'Temperature',
            fontSize: '13px',
            fontWeight: 'bold',
            style: {
                color: "#8c9097"
            }
        },
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: -10
    }
};
  this.chartOptions3 = {
    series: [
      {
        name: 'series',
        data: series.monthDataSeries1.prices,
      },
    ],
    colors:['#6259ca'],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
    },
    },
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Support',
          },
        },
        {
          y: 8600,
          y2: 9000,
          borderColor: '#000',
          fillColor: '#FEB019',
          opacity: 0.2,
          label: {
            borderColor: '#333',
            style: {
              fontSize: '10px',
              color: '#333',
              background: '#FEB019',
            },
            text: 'Y-axis range',
          },
        },
      ],
      xaxis: [
        {
          x: new Date('23 Nov 2017').getTime(),
          strokeDashArray: 0,
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Anno Test',
          },
        },
        {
          x: new Date('26 Nov 2017').getTime(),
          x2: new Date('28 Nov 2017').getTime(),
          fillColor: '#B3F7CA',
          opacity: 0.4,
          label: {
            borderColor: '#B3F7CA',
            style: {
              fontSize: '10px',
              color: '#fff',
              background: '#00E396',
            },
            offsetY: -10,
            text: 'X-axis range',
          },
        },
      ],
      points: [
        {
          x: new Date('01 Dec 2017').getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: '#fff',
            strokeColor: 'red',
            radius: 2,
            cssClass: 'apexcharts-custom-class',
          },
          label: {
            borderColor: '#FF4560',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#FF4560',
            },

            text: 'Point Annotation',
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      padding: {
        right: 30,
        left: 20,
      },
    },
    title: {
      text: 'Line with Annotations',
      align: 'left',
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#8c9097'
    },
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
    },
  };
  this.chartOptions4 = {
    series: [
      {
        name: 'series1',
        data: this.generateDayWiseTimeSeries(
          new Date('11 Feb 2017').getTime(),
          185,
          {
            min: 30,
            max: 90,
          }
        ),
      },
    ],
    colors:['#6259ca'],
    chart: {
      id: 'chart2',
      type: 'line',
      height: 230,
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      zoom: {
        enabled: false
    },
    },
    // colors: ['#546E7A'],

    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
  };

  this.chartOptions5 = {
    series: [
      {
        name: 'series1',
        data: this.generateDayWiseTimeSeries(
          new Date('11 Feb 2017').getTime(),
          185,
          {
            min: 30,
            max: 90,
          }
        ),
      },
    ],
    chart: {
      id: 'chart1',
      height: 130,
      type: 'area',
      brush: {
        target: 'chart2',
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date('19 Jun 2017').getTime(),
          max: new Date('14 Aug 2017').getTime(),
        },
      },
      zoom: {
        enabled: false
    },
    },
    colors: ['#23b7e5'],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  };
  this.chartOptions6 = {
    series: [
      {
        name: 'stepline-series',
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
      },
    ],
    colors:['#6259ca'],
    chart: {
      type: 'line',
      height: 323,
      zoom:{
        enabled:false
      }
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Stepline Chart',
      align: 'left',
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#8c9097'
    },
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
  };
  this.chartOptions7 = {
    series: [
      {
        name: "Likes",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom:{
        enabled:false
      }
    },
    stroke: {
      width: 7,
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001"
      ]
    },
    title: {
      text: "Social Media",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    yaxis: {
      min: -10,
      max: 40,
      title: {
        text: "Engagement"
      }
    }
  };
  this.chartOptions8 = {
    series: [
      {
        name: 'Peter',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
      },
      {
        name: 'Johnny',
        data: [10, 15,null,12,null,10,12, 15,null, null,12, null,14,  null,null,null ],
      },
      {
        name: 'David',
        data: [null,null,null,null,3,4,1,3,4,6,7,9,5,null,
          null,
          null,
        ],
      },
    ],
    colors:['#6259ca','#23b7e5','#f6c364'],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'straight',
      width:3,
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    title: {
      text: 'Missing data (null values)',
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#8c9097'
    },
    },
    legend:{
      markers: {
        width: 3,
        height: 3,
        size:5,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 5,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    }
  };
  this.chartOptions9={
    series: [{
        name: "Desktops",
        data: [53, 16, 25, 41, 53, 51, 59, 67, 20,24]
    }],
   
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            events: {
                mounted: (chart:any) => {
                  chart.windowResizeHandler();
                }
              },
        },
        colors: ['#6259ca'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'Dynamic Updating Chart',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        xaxis: {
            categories: ['11 Feb', '12 Feb', '13 Feb', '14 Feb', '15 Feb', '16 Feb', '17 Feb', '18 Feb', '19 Feb'],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            categories: ['16','58','100'],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        }
    
}
this.chartOptions10 = {
  series: [
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  colors:['#6259ca','#23b7e5','#f7ca77'],
  chart: {
    height: 350,
    type: 'line',
    zoom:{
      enabled:false
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 4,
    curve: 'straight',
    dashArray: [0, 8, 5],
  },
  title: {
    text: 'Page Statistics',
    align: 'left',
    style: {
      fontSize: '13px',
      fontWeight: 'bold',
      color: '#8c9097'
  },
  },
  legend: {
    markers: {
      width: 3,
      height: 3,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 5,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    labels: {
      trim: false,
    },
    categories: [
      '01 Jan',
      '02 Jan',
      '03 Jan',
      '04 Jan',
      '05 Jan',
      '06 Jan',
      '07 Jan',
      '08 Jan',
      '09 Jan',
      '10 Jan',
      '11 Jan',
      '12 Jan',
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val: string) {
            return val + ' (mins)';
          },
        },
      },
      {
        title: {
          formatter: function (val: string) {
            return val + ' per session';
          },
        },
      },
      {
        title: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: '#f1f1f1',
  },
};
this.chart1options = {
  series: [
    {
      name: 'chart1',
      data: this.generateDayWiseTimeSeries(
        new Date('11 Feb 2017').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ],
  chart: {
    id: 'fb',
    group: 'social',
    type: 'line',
    height: 160,
    zoom:{
      enabled:false
    }
  },
  colors: ['#6259ca'],
  yaxis: {
    tickAmount: 2,
    labels: {
      minWidth: 40,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  toolbar: {
    tools: {
      selection: false,
    },
  },
  markers: {
    size: 6,
    hover: {
      size: 10,
    },
  },
  tooltip: {
    followCursor: false,
    theme: 'dark',
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
  },
  grid: {
    clipMarkers: false,
  },
  xaxis: {
    type: 'datetime',
  },
};

this.chart2options = {
  series: [
    {
      name: 'chart2',
      data: this.generateDayWiseTimeSeries(
        new Date('11 Feb 2017').getTime(),
        20,
        {
          min: 10,
          max: 30,
        }
      ),
    },
  ],
  chart: {
    id: 'tw',
    group: 'social',
    type: 'line',
    height: 160,
    zoom:{
      enabled:false
    }
  },
  colors: ['#23b7e5'],
  yaxis: {
    tickAmount: 2,
    labels: {
      minWidth: 40,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  toolbar: {
    tools: {
      selection: false,
    },
  },
  markers: {
    size: 6,
    hover: {
      size: 10,
    },
  },
  tooltip: {
    followCursor: false,
    theme: 'dark',
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
  },
  grid: {
    clipMarkers: false,
  },
  xaxis: {
    type: 'datetime',
  },
};
this.chartOptions11 = {
  series: [
    {
      name: 'XYZ MOTORS',
      data: dates
    }
  ],
  chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: false,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left',
    style: {
      fontSize: '13px',
      fontWeight: 'bold',
      color: '#8c9097'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    }
  },
  grid: {
    borderColor: '#f2f5f7'
  },
  colors: ["#6259ca"],
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return (val / 1000000).toFixed(0);
      },
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600
      }
    },
    title: {
      text: 'Price',
      style: {
        color: "#8c9097"
      }
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600
      }
    }
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val: number) {
        return (val / 1000000).toFixed(0);
      }
    }
  }
};

this.chart3options = {
  series: [
    {
      name: 'chart3',
      data: this.generateDayWiseTimeSeries(
        new Date('11 Feb 2017').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ],
  chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 160,
    zoom:{
      enabled:false
    }
  },
  colors: ['#f5be58'],
  yaxis: {
    tickAmount: 2,
    labels: {
      minWidth: 40,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  toolbar: {
    tools: {
      selection: false,
    },
  },
  markers: {
    size: 6,
    hover: {
      size: 10,
    },
  },
  tooltip: {
    followCursor: false,
    theme: 'dark',
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
  },
  grid: {
    clipMarkers: false,
  },
  xaxis: {
    type: 'datetime',
  },
};
  this.chartOptions2();
}
  public chartOptions2(): void {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series = [
      {
        name: "XYZ MOTORS",
        data: dates
      }
    ];
    this.colors=['#6259ca']
    this.chart1 = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      },
   
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Stock Price Movement",
      align: "left",
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#8c9097'
    },
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        // stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter: function(val:any) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function(val:any) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }
  public generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: any; max: any }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }




}

