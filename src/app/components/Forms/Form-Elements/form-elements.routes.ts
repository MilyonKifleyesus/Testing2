import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms/forms-elements',children:[ {
  path: 'inputs',
  loadComponent: () =>
    import('./inputs/inputs.component').then((m) => m.InputsComponent),
},
{
    path: 'checks-radios',
    loadComponent: () =>
      import('./checks-radios/checks-radios.component').then((m) => m.ChecksRadiosComponent),
  },
  {
    path: 'color-picker',
    loadComponent: () =>
      import('./color-picker/color-picker.component').then((m) => m.ColorPickerComponent),
  },
  {
    path: 'date-time-picker',
    loadComponent: () =>
      import('./date-time-picker/date-time-picker.component').then((m) => m.DateTimePickerComponent),
  },

  {
    path: 'form-select',
    loadComponent: () =>
      import('./form-select/form-select.component').then((m) => m.FormSelectComponent),
  },
  {
    path: 'input-group',
    loadComponent: () =>
      import('./input-group/input-group.component').then((m) => m.InputGroupComponent),
  },
  {
    path: 'input-masks',
    loadComponent: () =>
      import('./input-masks/input-masks.component').then((m) => m.InputMasksComponent),
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs.component').then((m) => m.InputsComponent),
  },
  {
    path: 'file-uploads',
    loadComponent: () =>
      import('./file-uploads/file-uploads.component').then((m) => m.FileUploadsComponent),
  },
  {
    path: 'range-slider',
    loadComponent: () =>
      import('./range-slider/range-slider.component').then((m) => m.RangeSliderComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formelementsRoutingModule {
  static routes = admin;
}