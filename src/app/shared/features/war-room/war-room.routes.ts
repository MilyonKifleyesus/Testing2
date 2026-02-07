import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const warRoomRoutes: Routes = [
  {
    path: 'apps/war-room',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./war-room.component').then((m) => m.WarRoomComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(warRoomRoutes)],
  exports: [RouterModule],
})
export class WarRoomRoutingModule {
  static routes = warRoomRoutes;
}
