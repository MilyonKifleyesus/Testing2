import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'utilities',children:[ 
    {
  path: 'borders',
  loadComponent: () =>
    import('./borders/borders.component').then((m) => m.BordersComponent),
},

{
    path: 'breakpoints',
    loadComponent: () =>
      import('./breakpoints/breakpoints.component').then((m) => m.BreakpointsComponent),
  },
  {
    path: 'colors',
    loadComponent: () =>
      import('./colors/colors.component').then((m) => m.ColorsComponent),
  },
  {
    path: 'columns',
    loadComponent: () =>
      import('./columns/columns.component').then((m) => m.ColumnsComponent),
  },
  {
    path: 'display',
    loadComponent: () =>
      import('./display/display.component').then((m) => m.DisplayComponent),
  },
  {
    path: 'flex',
    loadComponent: () =>
      import('./flex/flex.component').then((m) => m.FlexComponent),
  },
  {
    path: 'gutters',
    loadComponent: () =>
      import('./gutters/gutters.component').then((m) => m.GuttersComponent),
  },
  {
    path: 'helpers',
    loadComponent: () =>
      import('./helpers/helpers.component').then((m) => m.HelpersComponent),
  },
  {
    path: 'more',
    loadComponent: () =>
      import('./more/more.component').then((m) => m.MoreComponent),
  },

  {
    path: 'position',
    loadComponent: () =>
      import('./position/position.component').then((m) => m.PositionComponent),
  },


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class utilitiesRoutingModule {
  static routes = admin;
}