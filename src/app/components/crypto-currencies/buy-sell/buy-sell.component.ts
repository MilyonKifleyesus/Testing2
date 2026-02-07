import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import { ChartComponent, NgApexchartsModule, } from "ng-apexcharts";
import {data,data1,data2 } from'./series-data';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexChartsComponent } from '../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [NgSelectModule, NgApexchartsModule, SharedModule, NgbModule, SpkApexChartsComponent, SpkReusableTablesComponent,SpkNgSelectComponent],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss'
})
export class BuySellComponent {
cryptoColumns=[
  {header:'ID',field:'ID'},
  {header:'Type',field:'Type'},
  {header:'Amount',field:'Amount'},
  {header:'Remaining',field:'Remaining'},
  {header:'Price',field:'Price'},
  {header:'USD',field:'USD'},
  {header:'Fee (%)',field:'Fee (%)'},
  {header:'Status',field:'Status'},
  {header:'Date',field:'Date'},
]
Coins=[
  {label:'BTC',value:1},
  {label:'ETH',value:2},
  {label:'XRP',value:3},
  {label:'DASH',value:4},
  {label:'NEO',value:5},
  {label:'LTC',value:6},
  {label:'BSD',value:7},
]
Coins1=[
  {label:'USD',value:1},
  {label:'AED',value:2},
  {label:'AUD',value:3},
  {label:'ARS',value:4},
  {label:'AZN',value:5},
  {label:'BGN',value:6},
  {label:'BRL',value:7},
]
transactions = [
  {
    id: '#12450',
    type: 'Buy',
    typeClass: 'text-success',
    amount1: '0.37218',
    amount2: '0.42173',
    price: '52681.13',
    value: '$ 5273.15',
    fee: '0.1',
    status: 'Completed',
    statusClass: 'bg-success-transparent',
    date: '31-05-2019 02:12:34',
  },
  {
    id: '#12451',
    type: 'Sell',
    typeClass: 'text-danger',
    amount1: '1.47364',
    amount2: '0.36472',
    price: '73647.15',
    value: '$ 2637.37',
    fee: '0.1',
    status: 'Pending',
    statusClass: 'bg-warning-transparent',
    date: '02-06-2019 07:14:32',
  },
  {
    id: '#12452',
    type: 'Sell',
    typeClass: 'text-danger',
    amount1: '0.63736',
    amount2: '0.73748',
    price: '72637.02',
    value: '$ 6345.16',
    fee: '0.1',
    status: 'Cancelled',
    statusClass: 'bg-danger-transparent',
    date: '05-06-2019 12:57:12',
  },
  {
    id: '#12453',
    type: 'Buy',
    typeClass: 'text-success',
    amount1: '0.63647',
    amount2: '0.83643',
    price: '83748.19',
    value: '$ 23836.09',
    fee: '0.1',
    status: 'Completed',
    statusClass: 'bg-success-transparent',
    date: '15-07-2019 10:43:17',
  },
  {
    id: '#12454',
    type: 'Buy',
    typeClass: 'text-success',
    amount1: '0.76263',
    amount2: '0.72563',
    price: '32635.32',
    value: '$ 7235.25',
    fee: '0.1',
    status: 'Completed',
    statusClass: 'bg-success-transparent',
    date: '22-07-2019 11:44:45',
  },
  {
    id: '#12455',
    type: 'Sell',
    typeClass: 'text-danger',
    amount1: '0.46263',
    amount2: '0.27363',
    price: '28937.22',
    value: '$ 4853.15',
    fee: '0.1',
    status: 'In Process',
    statusClass: 'bg-info-transparent',
    date: '30-07-2019 08:23:15',
  },
];
  active=1;
  chartOptions: any;
  chartOptions1: any;
  chartOptions2: any;

constructor(private el: ElementRef, private renderer: Renderer2,private cdr: ChangeDetectorRef){
  
  this.chartOptions={
    series:[{
    data: data },],
  
    colors: ['#6259ca'],
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 370,
      toolbar: {
          show: false
      },
      zoom:{
        enabled:false
      }
  },
  annotations: {
    yaxis: [{
      y: 30,
      borderColor: '#999',
      label: {
        show: true,
        text: 'Support',
        style: {
          color: "#fff",
          background: '#00E396'
        }
      }
    }],
    xaxis: [{
      x: new Date('14 Nov 2012').getTime(),
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Rally',
        style: {
          color: "#fff",
          background: '#775DD0'
        }
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    min: new Date('01 Mar 2012').getTime(),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
   fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
   stroke: {
      lineCap: 'butt',
      width: 2,
    },
  }
  this.chartOptions1={
    series:[{
  
      data:data1
    },],
  
    colors: ['#6259ca'],
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 370,
        toolbar: {
            show: false
        },
        zoom:{
          enabled:false
        }
    },
    annotations: {
      yaxis: [{
        y: 30,
        borderColor: '#999',
        label: {
          show: true,
          text: 'Support',
          style: {
            color: "#fff",
            background: '#00E396'
          }
        }
      }],
      xaxis: [{
        x: new Date('14 Nov 2012').getTime(),
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Rally',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        }
      },
     stroke: {
        lineCap: 'butt',
        width: 2,
      },
  }
  this.chartOptions2={
    series:[{
  
      data:data2
    },],
  
    colors: ['#6259ca'],
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 370,
        toolbar: {
            show: false
        },
        zoom:{
          enabled:false
        }
    },
    annotations: {
      yaxis: [{
        y: 30,
        borderColor: '#999',
        label: {
          show: true,
          text: 'Support',
          style: {
            color: "#fff",
            background: '#00E396'
          }
        }
      }],
      xaxis: [{
        x: new Date('14 Nov 2012').getTime(),
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Rally',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        }
      },
     stroke: {
        lineCap: 'butt',
        width: 2,
      },
}

}
ngAfterViewInit(): void {
  this.setChartWidth();
  this.cdr.detectChanges();
}
private setChartWidth(): void {

  const chartContainer = this.el.nativeElement.querySelector('.chart-container');
  if(chartContainer){
const chart = new ApexCharts(chartContainer, this.chartOptions1);chart.render();
  }
  const chartContainer1 = this.el.nativeElement.querySelector('.chart-container1');
  if(chartContainer1){
  const chart1 = new ApexCharts(chartContainer1, this.chartOptions2);
  chart1.render();

  }

}
}