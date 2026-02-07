import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'apps/tables',children:[
    {
      path: 'tables',
      loadComponent: () =>
        import('./tables/tables.component').then((m) => m.TablesComponent),
    },
    {
      path: 'ngx-easy-table',
      loadComponent: () =>
        import('./ngx-easy-table/ngx-easy-table.component').then(
          (m) => m.GridJsTablsComponent
        ),
    },
    {
      path: 'angular-material-table',
      loadComponent: () =>
        import('./angular-material/angular-material.component').then(
          (m) => m.AngularMaterialTableComponent
        ),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class tablesRoutingModule {
  static routes = admin;
}