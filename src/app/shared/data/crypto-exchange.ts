import { ApexOptions } from 'apexcharts';
import { ChartConfiguration, ChartType } from 'chart.js';

//charts
export let cryptoExchangeOptions: ChartConfiguration['options'] | any = [
    {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#7886a0',
            bodyFontColor: '#7886a0',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            x: {
                gridLines: {
                    color: 'transparent',
                },
                ticks: {
                    size: 2,
                    color: 'transparent'
                }
            },
            y: {
                display: false,
                ticks: {
                    display: false,
                }
            }
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
]
export let cryptoExchangeType: ChartType = 'line';

// export let cryptoExchangeColor: Color[] = [
//     {
//         backgroundColor: 'rgba(98, 89, 202, 0.2)',
//         borderColor: '#6259ca',
//         borderWidth: 2,
//         pointBorderColor: 'transparent',
//         pointBackgroundColor: 'transparent',
//     }
// ]

export let cryptoExchangeData1: ChartConfiguration['data'] = {datasets: [
    {
        data: [45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48],
        label: 'Bitcoin Price',
        
    }
],
    labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6', 'Date 7', 'Date 8', 'Date 9', 'Date 10', 'Date 11', 'Date 12', 'Date 13', 'Date 14', 'Date 15', 'Date 16', 'Date 17', 'Date 18', 'Date 19']
}

export let cryptoExchangeData2: ChartConfiguration['data'] = {datasets:[
    {
        data: [88, 96, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48],
        label: 'Bitcoin Price',
    }
]
}
export let cryptoExchangeData3: ChartConfiguration['data'] = {datasets:[
    {
        data: [58, 78, 55, 41, 21, 45, 54, 51, 52, 48, 88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 67, 49, 54, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74],
        label: 'Bitcoin Price',
    }
]
}
export let cryptoExchangeData4: ChartConfiguration['data'] = {datasets:[
    {
        data: [88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 45, 54, 51, 52, 48, 54, 67, 49, 58, 78, 55, 41, 21, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74],
        label: 'Bitcoin Price',
    }
]
}
export let cryptoExchangeData5: ChartConfiguration['data'] = {datasets:[
    {
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
        label: 'Bitcoin Price',
    }
]
}
export let cryptoExchangeData6: ChartConfiguration['data'] = {datasets:[
    {
        data: [54, 35, 24, 64, 43, 55, 39,60, 61, 54, 62, 63, 44, 55, 64, 34, 46, 34,  64, 50,  34, 53, 4,  43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64],
        label: 'Bitcoin Price',
    }
]
}

export let cryptoExchangeApex: ApexOptions | any = {
    series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
    chart: {
        type: "area",
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
          },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
     
      colors: ["rgba(98, 89, 202,0.7)"],
}

export let cryptoExApexData1: ApexOptions | any = {
    series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
}

export let cryptoExApexData2: ApexOptions | any = {
    series: [
        {
            data: [48, 35, 80, 62, 45, 53, 43, 65, 35, 56, 38, 54],
            name: 'Value'
        }
    ],
    chart: {
        type: "area",
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
          },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
     
      colors: ["rgba(98, 89, 202,0.7)"],
}
export let cryptoExApexData3: ApexOptions | any = {
    series: [
        {
            data: [20, 50, 15, 35, 65, 43, 53, 45, 62, 22, 22, 55],
            name: 'Value'
        }
    ],
    chart: {
        type: "area",
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
          },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
     
      colors: ["rgba(98, 89, 202,0.7)"],
}
export let cryptoExApexData4: ApexOptions | any = {
    series: [
        {
            data: [80, 38, 56, 22, 45, 43, 62, 45, 62, 35, 35, 25],
            name: 'Value'
        }
    ],
    chart: {
        type: "area",
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
          },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
     
      colors: ["rgba(98, 89, 202,0.7)"],
}
export let cryptoExApexData5: ApexOptions | any = {
    series: [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        }
    ],
    chart: {
        type: "area",
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
          },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
     
      colors: ["rgba(98, 89, 202,0.7)"],
}
export let cryptoExApexData6: ApexOptions | any = {
    series: [
        {
            name: "Value",
        data: [10, 56, 35, 35, 65, 32, 53, 45, 48, 35, 56, 20],
        }
    ],
    chart: {
        type: "area",
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
          },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
     
      colors: ["rgba(98, 89, 202,0.7)"],
}