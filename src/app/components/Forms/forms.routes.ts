import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms',children:[ {
  path: 'form-layouts',
  loadComponent: () =>
    import('./form-layouts/form-layouts.component').then((m) => m.FormLayoutsComponent),
},
{
    path: 'floating-labels',
    loadComponent: () =>
      import('./floating-labels/floating-labels.component').then((m) => m.FloatingLabelsComponent),
  },

  {
    path: 'validation',
    loadComponent: () =>
      import('./validation/validation.component').then((m) => m.ValidationComponent),
  },

  {
    path: 'select2',
    loadComponent: () =>
      import('./select2/select2.component').then((m) => m.Select2Component),
  },
  
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formsRoutingModule {
  static routes = admin;
}