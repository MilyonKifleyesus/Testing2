import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'',children:[ {
  path: 'landing-page',
  loadComponent: () =>
    import('./landing-page/landing-page.component').then((m) => m.LandingPageComponent),
},



]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class landingpageRoutingModule {
  static routes = admin;
}