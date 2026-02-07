import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'pages',children:[ {
  path: 'profile',
  loadComponent: () =>
    import('./profile/profile.component').then((m) => m.ProfileComponent),
},
{
    path: 'aboutus',
    loadComponent: () =>
      import('./aboutus/aboutus.component').then((m) => m.AboutusComponent),
  },
  {
    path: 'empty-page',
    loadComponent: () =>
      import('./empty-page/empty-page.component').then((m) => m.EmptyPageComponent),
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./faqs/faqs.component').then((m) => m.FaqsComponent),
  },

  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((m) => m.GalleryComponent),
  },
  {
    path: 'notifications-list',
    loadComponent: () =>
      import('./notifications-list/notifications-list.component').then((m) => m.NotificationsListComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'invoice',
    loadComponent: () =>
      import('./invoice/invoice.component').then((m) => m.InvoiceComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((m) => m.SettingsComponent),
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pagesRoutingModule {
  static routes = admin;
}