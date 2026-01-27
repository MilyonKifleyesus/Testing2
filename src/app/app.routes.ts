import { Route } from '@angular/router';

import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { content } from './shared/routes/full-content.routes';
import { MessageLayoutComponent } from './shared/layouts/message-layout/message-layout.component';
import { Authen_Routes, Message_Routes } from './shared/routes/content.routes';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { LandingpageLayoutComponent } from './shared/layouts/landingpage-layout/landingpage-layout.component';
import { landing } from './shared/routes/landingpage';

export const App_Route: Route[] = [
  { path: '', redirectTo: '/custom/sign-in', pathMatch: 'full' },
  {
    path: 'custom',
    loadChildren: () => import('./components/authentication/authentication.routes').then(m => m.authenticationRoutingModule)
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: content
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('../app/authentication/login/login.component').then((m) => m.LoginComponent)
  },
  // No cart route present
  {
    path: '**',
    redirectTo: '/custom/sign-in',
    pathMatch: 'full'
  }
];