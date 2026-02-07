import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/mail',children:[ {
  path: 'mail-inbox',
  loadComponent: () =>
    import('./mail-inbox/mail-inbox.component').then((m) => m.MailInboxComponent),
},
{
    path: 'view-mail',
    loadComponent: () =>
      import('./view-mail/view-mail.component').then((m) => m.ViewMailComponent),
  },
  {
    path: 'mail-compose',
    loadComponent: () =>
      import('./mail-compose/mail-compose.component').then((m) => m.MailComposeComponent),
  },
    


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mailRoutingModule {
  static routes = admin;
}