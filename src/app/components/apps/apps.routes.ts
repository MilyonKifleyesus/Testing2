import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps',children:[ {
  path: 'widgets',
  loadComponent: () =>
    import('./widgets/widgets.component').then((m) => m.WidgetsComponent),
},

{
  path: 'sweet-alerts',
  loadComponent: () =>
    import('./sweet-alerts/sweet-alerts.component').then((m) => m.SweetAlertsComponent),
},  

{
  path: 'icons',
  loadComponent: () =>
    import('./icons/icons.component').then((m) => m.IconsComponent),
}, 
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}