import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import { arrayData } from './data.series';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;

var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#00D9E9",
  "#FF66C3"
];
@Component({
  selector: 'app-column-charts',
  standalone: true,
  imports: [SharedModule, SpkApexChartsComponent],
  templateUrl: './column-charts.component.html',
  styleUrl: './column-charts.component.scss'
})
export class ColumnChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  chartOptions2:any;
  chartOptions3:any;
  chartOptions4:any;
  chartOptions5:any;
  chartOptions6:any;
  chartOptions7:any;
  chartOptions9:any;
  chartOptions8:any;
  chartQuarterOptions8:any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      colors: ["#6259ca", "#01b8ff", "#ff9b21"],
      chart: {
        type: 'bar',
        height: 320,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          // endingShape: "rounded"
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      
      legend:{
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
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    };
    this.chartOptions1 = {
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    chart: {
        height: 320,
        type: 'bar',
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: string) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#8c9097"]
        }
    },
    colors: ["#6259ca"],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        },
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
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val: string) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
            color: '#444'
        }
    }
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'PRODUCT D',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
  
      colors:['#6259ca', '#23b7e5','#ffb748','#fd6074'],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       legend: {
      //         position: 'bottom',
      //         offsetX: -10,
      //         offsetY: 0,
      //       },
      //     },
      //   },
      // ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          '01/2011',
          '02/2011',
          '03/2011',
          '04/2011',
          '05/2011',
          '06/2011',
        ],
      },
      legend: {
        position: 'right',
        offsetY: 40,
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
      fill: {
        opacity: 1,
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14, 15, 13],
        },
      ],
      colors:['#6259ca', '#23b7e5','#ffb748'],

      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       legend: {
      //         position: 'bottom',
      //         offsetX: -10,
      //         offsetY: 0,
      //       },
      //     },
      //   },
      // ],
      xaxis: {
        categories: [
          '2011 Q1',
          '2011 Q2',
          '2011 Q3',
          '2011 Q4',
          '2012 Q1',
          '2012 Q2',
          '2012 Q3',
          '2012 Q4',
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
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
    };
    this.chartOptions4 = {
      series: [
        {
            name: 'Actual',
            data: [
                {
                    x: '2011',
                    y: 1292,
                    goals: [
                        {
                            name: 'Expected',
                            value: 1400,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2012',
                    y: 4432,
                    goals: [
                        {
                            name: 'Expected',
                            value: 5400,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2013',
                    y: 5423,
                    goals: [
                        {
                            name: 'Expected',
                            value: 5200,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2014',
                    y: 6653,
                    goals: [
                        {
                            name: 'Expected',
                            value: 6500,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2015',
                    y: 8133,
                    goals: [
                        {
                            name: 'Expected',
                            value: 6600,
                            strokeHeight: 13,
                            strokeWidth: 0,
                            strokeLineCap: 'round',
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2016',
                    y: 7132,
                    goals: [
                        {
                            name: 'Expected',
                            value: 7500,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2017',
                    y: 7332,
                    goals: [
                        {
                            name: 'Expected',
                            value: 8700,
                            strokeHeight: 5,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2018',
                    y: 6553,
                    goals: [
                        {
                            name: 'Expected',
                            value: 7300,
                            strokeHeight: 2,
                            strokeDashArray: 2,
                            strokeColor: '#775DD0'
                        }
                    ]
                }
            ]
        }
    ],
    chart: {
        height: 320,
        type: 'bar'
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: ['#23b7e5'],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#23b7e5', '#775DD0'],
              width: 3,
              height: 3,
              strokeWidth: 0,
              strokeColor: '#fff',
              radius: 5,
              customHTML: undefined,
              onClick: undefined,
              offsetX: 0,
              offsetY: 0
        }
    },
    xaxis: {
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
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
    };
    this.chartOptions5 = {
      series: [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    annotations: {
        points: [{
            x: 'Bananas',
            seriesIndex: 0,
            label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#775DD0',
                },
                text: 'Bananas are good',
            }
        }]
    },
    chart: {
        height: 320,
        type: 'bar',
        zoom:{
          enabled:false
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '50%',
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#6259ca"],
    stroke: {
        width: 2
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        labels: {
            rotate: -45,
            rotateAlways: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            }
        },
        categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
            'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        ],
        tickPlacement: 'on'
    },
    yaxis: {
        labels: {
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            }
        },
        title: {
            text: 'Servings',
            style: {
                color: "#8c9097",
            }
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
        },
    }
    };
    this.chartOptions6 = {
      series: [{
        name: 'Cash Flow',
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
            48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
    }],
   
    chart: {
        type: 'bar',
        height: 350,
        zoom:{
          enabled:false
        }
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: '#fd6074'
                }, {
                    from: -45,
                    to: 0,
                    color: '#a66a5e'
                }]
            },
            columnWidth: '80%',
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ["#6259ca"],
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        title: {
            text: 'Growth',
            style: {
                color: "#8c9097",
            }
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "%";
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        }
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
        ],
        labels: {
            rotate: -90,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
    };
    this.chartOptions7 = {
      series: [
        {
          name: 'series-1',
          data: [
            {
              x: 'Team A',
              y: [1, 5],
            },
            {
              x: 'Team B',
              y: [4, 6],
            },
            {
              x: 'Team C',
              y: [5, 8],
            },
            {
              x: 'Team D',
              y: [3, 11],
            },
          ],
        },
        {
          name: 'series-2',
          data: [
            {
              x: 'Team A',
              y: [2, 6],
            },
            {
              x: 'Team B',
              y: [1, 3],
            },
            {
              x: 'Team C',
              y: [7, 8],
            },
            {
              x: 'Team D',
              y: [5, 9],
            },
          ],
        },
      ],
      colors:['#6259ca', '#23b7e5'],
      chart: {
        type: 'rangeBar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend:{
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
    };
    this.chartOptions9 = {
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      chart: {
        height: 425,
        type: 'bar',
        events: {
          click: function (chart: any, w: any, e: any) {
            
          },
        },
      },
      colors: [
        '#9673e4',
        '#23b7e5',
        '#f6c364',
        '#64c1f6',
        '#ea6d59',
        '#46c9a4',
        '#737ecf',
        '#b3768a',
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
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
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'],
        ],
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    };
    this.chartOptions8 = {
      series: [
        {
          name: 'year',
          data: this.makeData(),
        },
      ],
      chart: {
        id: 'barYear',
        height: 400,
        width: '100%',
        type: 'bar',
        events: {
          dataPointSelection: (
            e: any,
            chart: {
              w: {
                globals: { selectedDataPoints: any[] };
                config: { series: any[] };
              };
            },
            opts: { selectedDataPoints: (string | any[])[] }
          ) => {
            var quarterChartEl = document.querySelector('#chart-quarter');
            var yearChartEl = document.querySelector('#chart-year');

            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl?.classList.contains('active')) {
                this.updateQuarterChart(chart, 'barQuarter');
              } else {
                yearChartEl?.classList.add('chart-quarter-activated');
                quarterChartEl?.classList.add('active');
                this.updateQuarterChart(chart, 'barQuarter');
              }
            } else {
              this.updateQuarterChart(chart, 'barQuarter');
            }

            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl?.classList.remove('chart-quarter-activated');
              quarterChartEl?.classList.remove('active');
            }
          },
          updated: (chart: {
            w: {
              globals: { selectedDataPoints: any[] };
              config: { series: any[] };
            };
          }) => {
            this.updateQuarterChart(chart, 'barQuarter');
          },
        },
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: '75%',
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff'],
        },
        formatter: function (
          val: any,
          opt: {
            w: { globals: { labels: { [x: string]: any } } };
            dataPointIndex: string | number;
          }
        ) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },

      colors:['#6259ca', '#01b8ff', '#ff9b21', '#49b6f5', '#fd6074', '#19b159', '#5b67c7'],

      states: {
        normal: {
          filter: {
            type: 'desaturate',
          },
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: 'darken',
            value: 1,
          },
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (
              val: any,
              opts: {
                w: { globals: { labels: { [x: string]: any } } };
                dataPointIndex: string | number;
              }
            ) {
              return opts.w.globals.labels[opts.dataPointIndex];
            },
          },
        },
      },
      title: {
        text: 'Yearly Results',
        offsetX: 15,
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
      },
      subtitle: {
        text: '(Click on bar to see details)',
        offsetX: 15,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      legend:{
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
    };

    this.chartQuarterOptions8 = {
      series: [
        {
          name: 'quarter',
          data: [],
        },
      ],
      chart: {
        id: 'barQuarter',
        height: 400,
        width: '100%',
        type: 'bar',
        stacked: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          horizontal: false,
        },
      },
      legend: {
        show: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Quarterly Results',
        offsetX: 10,
      },
      tooltip: {
        x: {
          formatter: function (
            val: any,
            opts: {
              w: { globals: { seriesNames: { [x: string]: any } } };
              seriesIndex: string | number;
            }
          ) {
            return opts.w.globals.seriesNames[opts.seriesIndex];
          },
        },
        y: {
          title: {
            formatter: function (
              val: any,
              opts: {
                w: { globals: { labels: { [x: string]: any } } };
                dataPointIndex: string | number;
              }
            ) {
              return opts.w.globals.labels[opts.dataPointIndex];
            },
          },
        },
      },
    };
  }

  public makeData(): any {
    var dataSet = this.shuffleArray(arrayData);

    var dataYearSeries = [
      {
        x: '2011',
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters,
      },
      {
        x: '2012',
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters,
      },
      {
        x: '2013',
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters,
      },
      {
        x: '2014',
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters,
      },
      {
        x: '2015',
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters,
      },
      {
        x: '2016',
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters,
      },
    ];

    return dataYearSeries;
  }

  public shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  public updateQuarterChart(
    sourceChart: {
      w: { globals: { selectedDataPoints: any[] }; config: { series: any[] } };
    },
    destChartIDToUpdate: string
  ) {
    var series = [];
    var seriesIndex = 0;
    var colors = [];

    if (sourceChart.w.globals.selectedDataPoints[0]) {
      var selectedPoints = sourceChart.w.globals.selectedDataPoints;
      for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
        var selectedIndex = selectedPoints[seriesIndex][i];
        var yearSeries = sourceChart.w.config.series[seriesIndex];
        series.push({
          name: yearSeries.data[selectedIndex].x,
          data: yearSeries.data[selectedIndex].quarters,
        });
        colors.push(yearSeries.data[selectedIndex].color);
      }

      if (series.length === 0)
        series = [
          {
            data: [],
          },
        ];

      return window.ApexCharts.exec(destChartIDToUpdate, 'updateOptions', {
        series: series,
        colors: colors,
        fill: {
          colors: colors,
        },
      });
    }
  }
  
}
