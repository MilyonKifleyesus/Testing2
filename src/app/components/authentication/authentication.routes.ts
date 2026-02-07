import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./sign-in/sign-in.component').then((m) => m.SignInComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import('./forget-password/forget-password.component').then((m) => m.ForgetPasswordComponent),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),
  },
  {
    path: 'error404',
    loadComponent: () =>
      import('./error404/error404.component').then((m) => m.Error404Component),
  },
  {
    path: 'error500',
    loadComponent: () =>
      import('./error500/error500.component').then((m) => m.Error500Component),
  },
  {
    path: 'lockscreen',
    loadComponent: () =>
      import('./lockscreen/lockscreen.component').then((m) => m.LockscreenComponent),
  },
  {
    path: 'under-construction',
    loadComponent: () =>
      import('./under-construction/under-construction.component').then((m) => m.UnderConstructionComponent),
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class authenticationRoutingModule {
  static routes = admin;
}