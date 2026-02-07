import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { cryptoMarketData } from '../../../shared/data/crypto-market';
import * as chartData from "../../../shared/data/crypto-market";
import { SpkApexChartsComponent } from '../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { SpkMarketCapComponent } from '../../../@spk/reusable-cryptocurrencies/spk-market-cap/spk-market-cap.component';

@Component({
  selector: 'app-marketcap',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, SpkReusableTablesComponent,SpkMarketCapComponent],
  templateUrl: './marketcap.component.html',
  styleUrl: './marketcap.component.scss'
})
export class MarketcapComponent {
  public cryptoMarketData = cryptoMarketData

  constructor() { }

  ngOnInit(): void {
  }

  //charts using Apex
  public lineApexChart = chartData.lineApexChart;
  public lineApexChart1 = chartData.lineApexChart1;
  public lineApexChart2 = chartData.lineApexChart2;
  public lineApexChart3 = chartData.lineApexChart3;
  marketcapColumns=[
    {header:'No',field:'No'},
    {header:'Name',field:'Name'},
    {header:'Last Price',field:'Last Price'},
    {header:'Market Cap',field:'Market Cap'},
    {header:'Change(24h)',field:'Change(24h)'},
    {header:'',field:''},
  ]
  cryptoData = [
    {
      rank: 1,
      icon: './assets/images/svgs/crypto-currencies/btc.svg',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$ 10513.00',
      marketCap: '$ 51,191,183,730',
      change: '+3.49%',
      changeClass: 'text-success',
    },
    {
      rank: 2,
      icon: './assets/images/svgs/crypto-currencies/eth.svg',
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$ 425.25',
      marketCap: '$ 4,48,308,110',
      change: '+0.53%',
      changeClass: 'text-success',
    },
    {
      rank: 3,
      icon: './assets/images/svgs/crypto-currencies/xrp.svg',
      name: 'Ripple',
      symbol: 'XRP',
      price: '$ 1.2029',
      marketCap: '$ 7,63,80,043',
      change: '+0.26%',
      changeClass: 'text-success',
    },
    {
      rank: 4,
      icon: './assets/images/svgs/crypto-currencies/ltc.svg',
      name: 'Litecoin',
      symbol: 'LTC',
      price: '$ 1547.67',
      marketCap: '$ 6,14,18,730',
      change: '-0.63%',
      changeClass: 'text-danger',
    },
    {
      rank: 5,
      icon: './assets/images/svgs/crypto-currencies/neo.svg',
      name: 'Neo',
      symbol: 'NEO',
      price: '$ 723.48',
      marketCap: '$ 19,07,67,295',
      change: '-2.18%',
      changeClass: 'text-danger',
    },
    {
      rank: 6,
      icon: './assets/images/svgs/crypto-currencies/xmr.svg',
      name: 'Monero',
      symbol: 'XMR',
      price: '$ 305.16',
      marketCap: '$ 4,778,157,533',
      change: '+3.12%',
      changeClass: 'text-success',
    },
    {
      rank: 7,
      icon: './assets/images/svgs/crypto-currencies/eos.svg',
      name: 'EOS',
      symbol: 'EOS',
      price: '$ 149.18',
      marketCap: '$ 8,44,49,000',
      change: '-1.42%',
      changeClass: 'text-danger',
    },
    {
      rank: 8,
      icon: './assets/images/svgs/crypto-currencies/steem.svg',
      name: 'Steem',
      symbol: 'STEEM',
      price: '$ 0.467813',
      marketCap: '$ 8,358,735,080',
      change: '+3.49%',
      changeClass: 'text-success',
    },
    {
      rank: 9,
      icon: './assets/images/svgs/crypto-currencies/miota.svg',
      name: 'Iota',
      symbol: 'IOTA',
      price: '$ 2.34',
      marketCap: '$ 6,504,100,862',
      change: '-1.05%',
      changeClass: 'text-danger',
    },
    {
      rank: 10,
      icon: './assets/images/svgs/crypto-currencies/dash.svg',
      name: 'Dash',
      symbol: 'DASH',
      price: '$ 747.222',
      marketCap: '$ 5,881,413,815',
      change: '+0.94%',
      changeClass: 'text-success',
    },
    {
      rank: 11,
      icon: './assets/images/svgs/crypto-currencies/waves.svg',
      name: 'Waves',
      symbol: 'NEM',
      price: '$ 181.39',
      marketCap: '$ 3,084,108,676',
      change: '-3.23%',
      changeClass: 'text-danger',
    },
  ];
  cryptoCards = [
    {
      pair: 'BTC / USD',
      value: 34.4324,
      usdValue: 29.42,
      percentage: '-0.22%',
      percentageClass: 'text-danger',
      volume: '76,434.57 USDT',
      chartOptions: this.lineApexChart
    },
    {
      pair: 'ETH / USD',
      value: 29.4124,
      usdValue: 23.15,
      percentage: '+0.23%',
      percentageClass: 'text-success',
      volume: '23,346.56 USDT',
      chartOptions: this.lineApexChart1
    },
    {
      pair: 'XRP / USD',
      value: 34.5674,
      usdValue: 45.24,
      percentage: '-0.42%',
      percentageClass: 'text-danger',
      volume: '56,456.12 USDT',
      chartOptions: this.lineApexChart2
    },
    {
      pair: 'LTC / USD',
      value: 45.4542,
      usdValue: 63.34,
      percentage: '-0.12%',
      percentageClass: 'text-success',
      volume: '34,462.57 USDT',
      chartOptions: this.lineApexChart3
    },
  ];
}
