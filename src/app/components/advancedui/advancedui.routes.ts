import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advancedui',children:[ {
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then((m) => m.CarouselComponent),
},
{
    path: 'full-calender',
    loadComponent: () =>
      import('./full-calender/full-calender.component').then((m) => m.FullCalenderComponent),
  },
 
  {
    path: 'chat',
    loadComponent: () =>
      import('./chat/chat.component').then((m) => m.ChatComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./contacts/contacts.component').then((m) => m.ContactsComponent),
  },
  {
    path: 'cards',
    loadComponent: () =>
      import('./cards/cards.component').then((m) => m.CardsComponent),
  },
  {
    path: 'timeline',
    loadComponent: () =>
      import('./timeline/timeline.component').then((m) => m.TimelineComponent),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search.component').then((m) => m.SearchComponent),
  },
  {
    path: 'userlist',
    loadComponent: () =>
      import('./userlist/userlist.component').then((m) => m.UserlistComponent),
  },
  {
    path: 'notification',
    loadComponent: () =>
      import('./notification/notification.component').then((m) => m.NotificationComponent),
  },
  {
    path: 'tree-view',
    loadComponent: () =>
      import('./tree-view/tree-view.component').then((m) => m.TreeViewComponent),
  },
  {
    path: 'modals-closes',
    loadComponent: () =>
      import('./modals-closes/modals-closes.component').then((m) => m.ModalsClosesComponent),
  },
  {
    path: 'navbar',
    loadComponent: () =>
      import('./navbar/navbar.component').then((m) => m.NavbarComponent),
  },
  {
    path: 'offcanvas',
    loadComponent: () =>
      import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
  },
  {
    path: 'placeholders',
    loadComponent: () =>
      import('./placeholders/placeholders.component').then((m) => m.PlaceholdersComponent),
  },
  {
    path: 'ratings',
    loadComponent: () =>
      import('./ratings/ratings.component').then((m) => m.RatingsComponent),
  },
  {
    path: 'scrollspy',
    loadComponent: () =>
      import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
  },
  {
    path: 'swiperjs',
    loadComponent: () =>
      import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
  },
  {
    path: 'draggable-cards',
    loadComponent: () =>
      import('./draggable-cards/draggable-cards.component').then((m) => m.DraggableCardsComponent),
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}