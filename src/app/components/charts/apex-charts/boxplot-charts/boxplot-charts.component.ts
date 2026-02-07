import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MatCommonModule } from '@angular/material/core';
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;

@Component({
  selector: 'app-boxplot-charts',
  standalone: true,
  imports: [MatCommonModule,SharedModule,SpkApexChartsComponent],
  templateUrl: './boxplot-charts.component.html',
  styleUrl: './boxplot-charts.component.scss'
})
export class BoxplotChartsComponent {
  chartOptions:any
  chartOptions1:any
  chartOptions2:any
  constructor() {
    this.chartOptions = {
      series: [
        {
          type: "boxPlot",
          data: [
            {
              x: "Jan 2015",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "Jan 2016",
              y: [43, 65, 69, 76, 81]
            },
            {
              x: "Jan 2017",
              y: [31, 39, 45, 51, 59]
            },
            {
              x: "Jan 2018",
              y: [39, 46, 55, 65, 71]
            },
            {
              x: "Jan 2019",
              y: [29, 31, 35, 39, 44]
            },
            {
              x: "Jan 2020",
              y: [41, 49, 58, 61, 67]
            },
            {
              x: "Jan 2021",
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      plotOptions: {
        boxPlot: {
          colors: {
           upper: '#6259ca',
             lower: '#23b7e5'
          }
        }
      },
      chart: {
        height: 350,
        type: "boxPlot",
        zoom:{
          enabled:false
        }
      },
      colors: ['#008FFB', '#FEB019'],
title: {
  text: 'Basic BoxPlot Chart',
  align: 'left',
  style: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#8c9097'
},
},

xaxis: {
  type: 'datetime',
  tooltip: {
    formatter: function(val: string | number | Date) {
      return new Date(val).getFullYear()
    }
  }
},
tooltip: {
  shared: false,
  intersect: true
}
    };
    this.chartOptions1= {
      series: [
        {
          name: 'box',
          type: 'boxPlot',
          data: [
            {
              x: new Date('2017-01-01').getTime(),
              y: [54, 66, 69, 75, 88]
            },
            {
              x: new Date('2018-01-01').getTime(),
              y: [43, 65, 69, 76, 81]
            },
            {
              x: new Date('2019-01-01').getTime(),
              y: [31, 39, 45, 51, 59]
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: [39, 46, 55, 65, 71]
            },
            {
              x: new Date('2021-01-01').getTime(),
              y: [29, 31, 35, 39, 44]
            }
          ]
        },
        {
          name: 'outliers',
          type: 'scatter',
          data: [
            {
              x: new Date('2017-01-01').getTime(),
              y: 32
            },
            {
              x: new Date('2018-01-01').getTime(),
              y: 25
            },
            {
              x: new Date('2019-01-01').getTime(),
              y: 64
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: 27
            },
            {
              x: new Date('2020-01-01').getTime(),
              y: 78
            },
            {
              x: new Date('2021-01-01').getTime(),
              y: 15
            }
          ]
        }
      ],
      plotOptions: {
        boxPlot: {
          colors: {
           upper: '#6259ca',
             lower: '#23b7e5'
          }
        }
      },
      chart: {
        height: 350,
        type: "boxPlot",
        zoom:{
          enabled:false
        }
      },
      colors: ['#6259ca', '#23b7e5'],
title: {
  text: 'BoxPlot - Scatter Chart',
  align: 'left',
  style: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#8c9097'
},
},
xaxis: {
  type: 'datetime',
  tooltip: {
    formatter: function(val: string | number | Date) {
      return new Date(val).getFullYear()
    }
  }
},
tooltip: {
  shared: false,
  intersect: true
},
legend: {
  offsetX: 40,
  markers: {
    width: 3,
    size:6,
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
    this.chartOptions2= {
      series: [
        {
          data: [
            {
              x: "Category A",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "Category B",
              y: [43, 65, 69, 76, 81]
            },
            {
              x: "Category C",
              y: [31, 39, 45, 51, 59]
            },
            {
              x: "Category D",
              y: [39, 46, 55, 65, 71]
            },
            {
              x: "Category E",
              y: [29, 31, 35, 39, 44]
            },
            {
              x: "Category F",
              y: [41, 49, 58, 61, 67]
            },
            {
              x: "Category G",
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],

      chart: {
        height: 350,
        type: "boxPlot",
        zoom:{
          enabled:false
        }
      },
      title: {
        text: 'Horizontal BoxPlot Chart',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%"
        },
        boxPlot: {
          colors: {
            upper: "#e9ecef",
            lower: "#f8f9fa"
          }
        }
      },
      stroke: {
        colors: ["#6c757d"]
      }
    };
  }
  public generateDayWiseTimeSeries(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
