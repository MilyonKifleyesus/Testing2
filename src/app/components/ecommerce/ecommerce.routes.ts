import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'ecommerce',children:[ {
  path: 'ecommerce-dashboard',
  loadComponent: () =>
    import('./ecommerce-dashboard/ecommerce-dashboard.component').then((m) => m.EcommerceDashboardComponent),
},
{
    path: 'account',
    loadComponent: () =>
      import('./account/account.component').then((m) => m.AccountComponent),
  },
  {
    path: 'product-deatils',
    loadComponent: () =>
      import('./product-details/product-details.component').then((m) => m.ProductDetailsComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders.component').then((m) => m.OrdersComponent),
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./checkout/checkout.component').then((m) => m.CheckoutComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./add-product/add-product.component').then((m) => m.AddProductComponent),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./wishlist/wishlist.component').then((m) => m.WishlistComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class ecommerceRoutingModule {
  static routes = admin;
}