import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as chartData from "../../../shared/data/crypto-exchange";
import { NgSelectModule } from '@ng-select/ng-select';
import { SpkApexChartsComponent } from '../../../@spk/reusable-charts/spk-apex-charts/spk-apex-charts.component';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,NgSelectModule,SpkApexChartsComponent,SpkNgSelectComponent],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent {
  constructor() { }

  ngOnInit(): void {
  
  }
  Coins=[
    {label:'BTC',value:1},
    {label:'Ethereum',value:2},
    {label:'Ripple',value:3},
    {label:'Bitcoin Cash',value:4},
    {label:'Cardano',value:5},
  ]
  Coins1=[
    {label:'USD',value:1},
    {label:'EURO',value:2},
    {label:'POUND',value:3},
  ]
  public cryptoExchangeApex = chartData.cryptoExchangeApex;
  public cryptoExApexData1 = chartData.cryptoExApexData1;
  public cryptoExApexData2 = chartData.cryptoExApexData2;
  public cryptoExApexData3 = chartData.cryptoExApexData3;
  public cryptoExApexData4 = chartData.cryptoExApexData4;
  public cryptoExApexData5 = chartData.cryptoExApexData5;
  public cryptoExApexData6 = chartData.cryptoExApexData6;
}
