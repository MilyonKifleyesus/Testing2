import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'crypto',children:[ {
  path: 'crypto-dashboard',
  loadComponent: () =>
    import('./crypto-dashboard/crypto-dashboard.component').then((m) => m.CryptoDashboardComponent),
},
{
    path: 'buy-sell',
    loadComponent: () =>
      import('./buy-sell/buy-sell.component').then((m) => m.BuySellComponent),
  },
  {
    path: 'currency-exchange',
    loadComponent: () =>
      import('./currency-exchange/currency-exchange.component').then((m) => m.CurrencyExchangeComponent),
  },
  {
    path: 'marketcap',
    loadComponent: () =>
      import('./marketcap/marketcap.component').then((m) => m.MarketcapComponent),
  },

  {
    path: 'transactions',
    loadComponent: () =>
      import('./transactions/transactions.component').then((m) => m.TransactionsComponent),
  },
  {
    path: 'wallet',
    loadComponent: () =>
      import('./wallet/wallet.component').then((m) => m.WalletComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class cryptoRoutingModule {
  static routes = admin;
}