import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/maps',children:[ {
  path: 'leaflet',
  loadComponent: () =>
    import('./leaflet/leaflet.component').then((m) => m.LeafletComponent),
},

    


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mapsRoutingModule {
  static routes = admin;
}