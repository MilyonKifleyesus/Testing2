import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as chartData from "../../../shared/data/ecommerce-Dash";
import { NgApexchartsModule } from 'ng-apexcharts';
import * as L from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexChartsComponent } from '../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { SpkEcommerceComponent } from "../../../@spk/reusable-ecommerce/spk-ecommerce/spk-ecommerce.component";
@Component({
  selector: 'app-ecommerce-dashboard',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, LeafletModule, NgbModule, SpkApexChartsComponent, SpkReusableTablesComponent, SpkEcommerceComponent],
  templateUrl: './ecommerce-dashboard.component.html',
  styleUrl: './ecommerce-dashboard.component.scss'
})

export class EcommerceDashboardComponent {
  ChartOptions:any;
  ChartOptions1:any;
  ecommerceColumns=[
    {header:'Product ID',field:'Product ID'},
    {header:'Product',field:'Product'},
    {header:'Product Cost',field:'Product Cost'},
    {header:'Total',field:'Total'},
    {header:'Status',field:'Status'},
  ]
  products = [
    {
      id: '#C234',
      image: './assets/images/pngs/14.png',
      name: 'Regular waterproof (24 L) Backpack',
      price: '$14,500',
      stock: '2,977',
      status: 'Available',
      statusClass: 'bg-primary',
    },
    {
      id: '#C389',
      image: './assets/images/pngs/15.png',
      name: 'Women Pink Heels Sandal',
      price: '$30,000',
      stock: '678',
      status: 'Limited',
      statusClass: 'bg-primary',
    },
    {
      id: '#C936',
      image: './assets/images/pngs/16.png',
      name: 'Designer Hand Decorative flower Pot',
      price: '$13,200',
      stock: '4,922',
      status: 'Available',
      statusClass: 'bg-primary',
    },
    {
      id: '#C493',
      image: './assets/images/pngs/17.png',
      name: 'Plastic Outdoor Chair',
      price: '$15,100',
      stock: '1,234',
      status: 'Limited',
      statusClass: 'bg-primary',
    },
    {
      id: '#C729',
      image: './assets/images/pngs/18.png',
      name: 'Black Digital smart watch',
      price: '$5,987',
      stock: '4,789',
      status: 'No Stock',
      statusClass: 'bg-primary op-5',
    },
    {
      id: '#C529',
      image: './assets/images/pngs/19.png',
      name: 'Apple iPhone (Black, 128 GB)',
      price: '$11,987',
      stock: '938',
      status: 'Limited',
      statusClass: 'bg-primary',
    },
  ];
  cards = [
    {
      label: 'New Users',
      value: '3,672',
      icon: 'mdi mdi-account-multiple',
      description: 'Monthly users',
      subValue: '50%',
    },
    {
      label: 'Total Tax',
      value: '$89,265',
      icon: 'mdi mdi-cube',
      description: 'Monthly Income',
      subValue: '$7,893',
    },
    {
      label: 'Total Profit',
      value: '$23,987',
      icon: 'mdi mdi-poll-box',
      description: 'Monthly Profit',
      subValue: '$4,678',
    },
    {
      label: 'Total Sales',
      value: '46,486',
      icon: 'mdi mdi-cart',
      description: 'Monthly Sales',
      subValue: '3,756',
    },
  ];
constructor(){
  this.ChartOptions={
    series: [{
      name: "Order",
      data: [20, 60, 38, 72, 45, 63, 43, 76]
    }, {
      name: "Sale",
      data: [15, 45, 75, 38, 85, 35, 62, 40]
    }],
    chart: {
      height: 260,
      type: 'line',
      zoom: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      },
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: 'Poppins, sans-serif',
      markers: {
        width: 5,
        height: 5,
        size:6,
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
    stroke: {
      curve: 'smooth',
      width: '3',
      dashArray: [0, 5],
    },
    grid: {
      borderColor: '#f2f6f7',
    },
    colors: ["rgb(98, 89, 202)", "rgba(98, 89, 202, 0.3)"],
    yaxis: {
      title: {
        // text: 'Statistics',
        style: {
          color: '#adb5be',
          fontSize: '14px',
          fontFamily: 'poppins, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
    },
    xaxis: {
      type: 'month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: true,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        rotate: -90
      }
    }
  }
  this.ChartOptions1={

    series: [83],
    chart: {
        height: 265,
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
                    offsetY: 10
                },
                value: {
                    offsetY: 0,
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
    labels: [''],
  }
}
map!: L.Map;
json:any;
//Basic Map
options1 = {
  layers: [
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      attribution: ""
    }),
    L.circle([-23.533773, -46.625290], {
      color: '#6259ca',
      fillColor: '',
      fillOpacity: 0.8,
      radius: 100
    }),
    L.circle([55.751244, 37.618423], {
      color: '#6259ca',
      fillColor: '#6259ca',
      fillOpacity: 0.9,
      radius: 100
    }),
    L.circle([52.237049, 21.017532], {
      color: '#6259ca',
      fillColor: '#6259ca',
      fillOpacity: 0.9,
      radius: 100
    }),
    L.circle([51.213890, -110.005470], {
      color: '#6259ca',
      fillColor: '#6259ca',
      fillOpacity: 0.9,
      radius: 100
    }),
    L.circle([20.5937, 78.9629], {
      color: '#6259ca',
      fillColor: '#6259ca',
      fillOpacity: 0.9,
      radius: 100
    }),
  ],
  zoom: 1.2,
  center: L.latLng([0,0])

};
visitors = [
  {
    name: 'Vanessa',
    avatar: './assets/images/faces/3.jpg',
    date: '10-9-2018',
    description: 'sed do eiusmod',
    liClass:'mt-0 mb-3'
  },
  {
    name: 'Rutherford',
    avatar: './assets/images/faces/5.jpg',
    date: '15-9-2018',
    description: 'sed do eiusmod',
    liClass:' mb-3'
  },
  {
    name: 'Elizabeth',
    avatar: './assets/images/faces/7.jpg',
    date: '17-9-2018',
    description: 'sed do eiusmod',
    liClass:' mb-3'
  },
  {
    name: 'Anthony',
    avatar: './assets/images/faces/4.jpg',
    date: '19-9-2018',
    description: 'sed do eiusmod',
    liClass:' mb-3'
  },
  {
    name: 'Rosien',
    avatar: './assets/images/faces/9.jpg',
    date: '19-9-2018',
    description: 'sed do eiusmod',
    liClass:' mb-0'
  },
];
}
