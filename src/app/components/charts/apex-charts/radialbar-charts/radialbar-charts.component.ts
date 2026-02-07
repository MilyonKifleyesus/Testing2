import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MatCommonModule } from '@angular/material/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexChartsComponent } from '../../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
;

@Component({
  selector: 'app-radialbar-charts',
  standalone: true,
  imports: [MatCommonModule,SharedModule,SpkApexChartsComponent],
  templateUrl: './radialbar-charts.component.html',
  styleUrl: './radialbar-charts.component.scss'
})
export class RadialbarChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  chartOptions2:any;
  chartOptions3:any;
  chartOptions4:any;
  chartOptions7:any;
  chartOptions5:any;
  constructor() {
    this.chartOptions= {
      series: [70],
      chart: {
          height: 290,
          type: 'radialBar',
      },
      colors: ["#6259ca"],
      plotOptions: {
          radialBar: {
              hollow: {
                  size: '70%',
              }
          },
      },
      labels: ['Cricket'],
    };
    this.chartOptions1= {
      series: [44, 55, 67, 83],
      chart: {
          height: 290,
          type: 'radialBar',
      },
      plotOptions: {
          radialBar: {
              dataLabels: {
                  name: {
                      fontSize: '22px',
                  },
                  value: {
                      fontSize: '16px',
                  },
                  total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w: any) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return 249
                      }
                  }
              }
          }
      },
      colors: ["#6259ca", "#23b7e5", "#ffb748", "#fd6074"],
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };
    this.chartOptions2= {
        series: [76, 67, 61, 90],
        chart: {
            height: 310,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#6259ca', '#01b8ff', '#ff9b21', '#fd6074'],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 7
            },
            formatter: function (seriesName: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };
    this.chartOptions3 = {
      series: [75],
      chart: {
          height: 290,
          type: 'radialBar',
          toolbar: {
              show: true
          }
      },
      plotOptions: {
          radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                  margin: 0,
                  size: '70%',
                  background: '#fff',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                  }
              },
              track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                  }
              },

              dataLabels: {
                  show: true,
                  name: {
                      offsetY: -10,
                      show: true,
                      color: '#888',
                      fontSize: '17px'
                  },
                  value: {
                      formatter: function (val: string) {
                          return parseInt(val);
                      },
                      color: '#111',
                      fontSize: '36px',
                      show: true,
                  }
              }
          }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#23b7e5'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
          }
      },
      stroke: {
          lineCap: 'round'
      },
      labels: ['Percent'],
    };
    this.chartOptions4= {
      series: [67],
      chart: {
          height: 290,
          type: 'radialBar',
          offsetY: -10
      },
      colors: ["#6259ca"],
      plotOptions: {
          radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                  name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                  },
                  value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val: string) {
                          return val + "%";
                      }
                  }
              }
          }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
      },
      stroke: {
          dashArray: 4
      },
      labels: ['Median Ratio'],
    };
    this.chartOptions5={
      series: [67],
      chart: {
          height: 290,
          type: 'radialBar',
      },
      plotOptions: {
          radialBar: {
              hollow: {
                  margin: 15,
                  size: '70%',
                  imageWidth: 32,
                  imageHeight: 32,
                  imageClipped: false
              },
              dataLabels: {
                  name: {
                      show: false,
                      color: '#fff'
                  },
                  value: {
                      show: true,
                      color: '#333',
                      offsetY:10,
                      fontSize: '22px'
                  }
              }
          }
      },
      fill: {
          type: 'image',
          image: {
              src: ['./assets/images/media/media-64.jpg'],
          }
      },
      stroke: {
          lineCap: 'round'
      },
      labels: ['Volatility'],
    }
    this.chartOptions7 = {
      series: [76],
      chart: {
          type: 'radialBar',
          height: 290,
          offsetY: -20,
          sparkline: {
              enabled: true
          }
      },
      plotOptions: {
          radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                  background: "#fff",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                      enabled: false,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                  }
              },
              dataLabels: {
                  name: {
                      show: false
                  },
                  value: {
                      offsetY: -2,
                      fontSize: '22px'
                  }
              }
          }
      },
      colors: ["#6259ca"],
      grid: {
          padding: {
              top: -10
          }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
          },
      },
      labels: ['Average Results'],
    };

}
}
