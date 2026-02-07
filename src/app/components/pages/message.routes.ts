import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'',children:[ 
  {
    path: 'success-message',
    loadComponent: () =>
      import('./success-message/success-message.component').then((m) => m.SuccessMessageComponent),
  },
  {
    path: 'danger-message',
    loadComponent: () =>
      import('./danger-message/danger-message.component').then((m) => m.DangerMessageComponent),
  },
  {
    path: 'warning-message',
    loadComponent: () =>
      import('./warning-message/warning-message.component').then((m) => m.WarningMessageComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class messagesRoutingModule {
  static routes = admin;
}