import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const Authen_Routes: Routes = [
    {path:'', loadChildren : () => import('../../../app/components/authentication/authentication.routes').then(r => r.authenticationRoutingModule)},

]

export const Message_Routes: Routes = [
    {path:'alert-pages', loadChildren : () => import('../../../app/components/pages/message.routes').then(r => r.messagesRoutingModule)},

]

