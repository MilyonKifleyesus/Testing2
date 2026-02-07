import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as chartData from "../../../shared/data/crypto-dash";
import { cryptoDashboard } from '../../../shared/data/crypto-dash';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../shared/shared.module';
import { fromEvent } from 'rxjs';
import { SpkApexChartsComponent } from "../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component";
import { SpkReusableTablesComponent } from '../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element';
register();
@Component({
  selector: 'app-crypto-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, CarouselModule, SharedModule, SpkApexChartsComponent,SpkReusableTablesComponent,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './crypto-dashboard.component.html',
  styleUrl: './crypto-dashboard.component.scss'
})
export class CryptoDashboardComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  cryptoDashdata = cryptoDashboard;
  cryptoPrices = [
    {
      name: 'Bitcoin BTC',
      price: '$10,245.00',
      amount: '0.0215637249',
      change: '+12.85%',
      changeClass: 'text-success',
      arrowClass: 'fa-arrow-up',
    },
    {
      name: 'Ethereum ETH',
      price: '$10,245.00',
      amount: '0.0253737689',
      change: '-02.25%',
      changeClass: 'text-danger',
      arrowClass: 'fa-arrow-down',
    },
    {
      name: 'Dash DASH',
      price: '$10,245.00',
      amount: '0.0253546426',
      change: '-11.85%',
      changeClass: 'text-danger',
      arrowClass: 'fa-arrow-down',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    navSpeed: 700,
    autoplayHoverPause: true,
    // smartSpeed: 1000,
    center: true,
    margin: 20,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    320: {
      items: 1,
      nav: false
    },
    500: {
      items: 2,
      nav: false
    },
    700: {
      items: 3,
      nav: false
    },
    1400: {
      items: 5,
      nav: false
    },
  }
}
  constructor(private elementRef :ElementRef) {
  }
  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        },

      },
    }
    );
  }
  // ngAfterViewInit(): void {
  //   const swiperEl = this.swiperContainer.nativeElement;
  
	// 	Object.assign(swiperEl, {
	// 	  slidesPerView: 5,
	// 	  spaceBetween: 10,
	// 	  breakpoints: {
  //       0: {
  //         items: 1,
  //         nav: false
  //       },
  //       320: {
  //         items: 1,
  //         nav: false
  //       },
  //       500: {
  //         items: 2,
  //         nav: false
  //       },
  //       700: {
  //         items: 3,
  //         nav: false
  //       },
  //       1400: {
  //         items: 5,
  //         nav: false
  //       },

	// 	  },
	//   }
  //   );
  //   console.log(swiperEl,'')
  // }
  

  
  ngOnInit(): void {
  const ltr = this.elementRef.nativeElement.querySelectorAll('#switcher-ltr');
  const rtl = this.elementRef.nativeElement.querySelectorAll('#switcher-rtl');

  fromEvent(ltr, 'click').subscribe(() => {
    this.customOptions = { ...this.customOptions, rtl: false };
  });

  fromEvent(rtl, 'click').subscribe(() => {
    this.customOptions = { ...this.customOptions, rtl: true, autoplay: true };
  });

}



  //DonutChart using Apex
  public donutApexData = chartData.donutApexData;
  //DonutChartProfile using Apex
  public donutApexProfile = chartData.donutApexProfile;

  //Apex Chart
  public apexData = chartData.apexCryptoData

  //bitcoin line using ApexCharts
  public lineApexChart = chartData.lineApexChart

  //Sparkline using ApexCharts
  public apexSparkline = chartData.apexSparkline;
  public apexSparkline1 = chartData.apexSparkline1;
  public apexSparkline2 = chartData.apexSparkline2;
  public apexSparkline3 = chartData.apexSparkline3;
  public apexSparkline4 = chartData.apexSparkline4;


  owlCarouselData = [
    { id: 1, src: './assets/images/svgs/crypto-currencies/btc.svg', name: 'Bitcoin BTC', value: 1.343434 },
    { id: 2, src: './assets/images/svgs/crypto-currencies/eth.svg', name: 'Ethereum ETH', value: 3.763674 },
    { id: 3, src: './assets/images/svgs/crypto-currencies/xrp.svg', name: 'Ripple  XRP', value: 12.53647 },
    { id: 4, src: './assets/images/svgs/crypto-currencies/ltc.svg', name: 'litecoin  LTC', value: 3.635387 },
    { id: 5, src: './assets/images/svgs/crypto-currencies/dash.svg', name: 'Dash DASH', value: 3.635387 },
    { id: 6, src: './assets/images/svgs/crypto-currencies/xmr.svg', name: 'Monero  XMR', value: 5.34578 },
    { id: 7, src: './assets/images/svgs/crypto-currencies/neo.svg', name: 'Neo  NEO', value: 4.435456 },
    { id: 8, src: './assets/images/svgs/crypto-currencies/steem.svg', name: 'Steem STEEM', value: 2.345467 },
  ]
  activityColumns=[
    {header:'#',field:'#',tableHeadColumn:'wd-lg-20p'},
    {header:'NAME',field:'NAME',tableHeadColumn:'wd-lg-20p'},
    {header:'PRICE',field:'PRICE',tableHeadColumn:'wd-lg-20p'},
    {header:'CHANGE',field:'CHANGE',tableHeadColumn:'wd-lg-20p'},
    {header:'CHART',field:'CHART',tableHeadColumn:'wd-lg-20p'},
    {header:'STATUS',field:'STATUS',tableHeadColumn:'wd-lg-20p'},
  ]
  cryptoData = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 'USD 680,175.06',
      change: '+1.13%',
      changeClass: 'text-success',
      action: 'DELIVERY',
      actionClass: 'text-success',
      chartId: 'sparkline11',
      icon: 'cf-btc'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 'USD 345,235.02',
      change: '-1.13%',
      changeClass: 'text-danger',
      action: 'CANCEL',
      actionClass: 'text-danger',
      chartId: 'sparkline12',
      icon: 'cf-eth'
    },
    {
      id: 3,
      name: 'Ripple',
      symbol: 'XRP',
      price: 'USD 235,356.12',
      change: '-2.23%',
      changeClass: 'text-muted',
      action: 'HOLD',
      actionClass: 'text-muted',
      chartId: 'sparkline13',
      icon: 'cf-xrp'
    },
    {
      id: 4,
      name: 'Litecoin',
      symbol: 'LTC',
      price: 'USD 456,235.52',
      change: '-1.13%',
      changeClass: 'text-danger',
      action: 'CANCEL',
      actionClass: 'text-danger',
      chartId: 'sparkline14',
      icon: 'cf-ltc'
    }
  ];
  transactions = [
    {
      icon: 'cf-btc',
      title: 'Sent Litecoin',
      description: 'To bitcoin Address',
      amount: '+ 0.0147',
      amountClass: 'text-success',
      arrowClass: 'fe fe-arrow-up',
      liClass:'mt-0 mb-0'
    },
    {
      icon: 'cf-ltc',
      title: 'Sent Ethereum',
      description: 'Pending',
      amount: '- 0.0345',
      amountClass: 'text-danger',
      arrowClass: 'fe fe-arrow-down',
      liClass:'mb-0'
    },
    {
      icon: 'cf-dash',
      title: 'Received Dash',
      description: 'To Received Address',
      amount: '- 0.0346',
      amountClass: 'text-danger',
      arrowClass: 'fe fe-arrow-down',
      liClass:'mb-0'
    },
    {
      icon: 'cf-xrp',
      title: 'Received Ripple',
      description: 'To Received Address',
      amount: '+ 0.0237',
      amountClass: 'text-success',
      arrowClass: 'fe fe-arrow-up',
      liClass:'mb-0'
    },
    {
      icon: 'cf-bsd',
      title: 'Received Ripple',
      description: 'To Received Address',
      amount: '- 0.0348',
      amountClass: 'text-danger',
      arrowClass: 'fe fe-arrow-down'
    }
  ];
}

