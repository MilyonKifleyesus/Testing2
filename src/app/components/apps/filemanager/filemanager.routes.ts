import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/filemanager',children:[ {
  path: 'filemanager',
  loadComponent: () =>
    import('./filemanager/filemanager.component').then((m) => m.FilemanagerComponent),
},
{
    path: 'file-details',
    loadComponent: () =>
      import('./file-details/file-details.component').then((m) => m.FileDetailsComponent),
  },
  {
    path: 'filemanager-list',
    loadComponent: () =>
      import('./filemanager-list/filemanager-list.component').then((m) => m.FilemanagerListComponent),
  },
    


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class filemanagerRoutingModule {
  static routes = admin;
}