import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'elements',children:[ 
    {
  path: 'accordion',
  loadComponent: () =>
    import('./accordion/accordion.component').then((m) => m.AccordionComponent),
},

{
    path: 'alerts',
    loadComponent: () =>
      import('./alerts/alerts.component').then((m) => m.AlertsComponent),
  },
  {
    path: 'avatars',
    loadComponent: () =>
      import('./avatars/avatars.component').then((m) => m.AvatarsComponent),
  },
  {
    path: 'dropdowns',
    loadComponent: () =>
      import('./dropdowns/dropdowns.component').then((m) => m.DropdownsComponent),
  },
  {
    path: 'buttons',
    loadComponent: () =>
      import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
  },
  {
    path: 'button-group',
    loadComponent: () =>
      import('./button-group/button-group.component').then((m) => m.ButtonGroupComponent),
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./badge/badge.component').then((m) => m.BadgeComponent),
  },
  {
    path: 'images-figures',
    loadComponent: () =>
      import('./images-figures/images-figures.component').then((m) => m.ImagesFiguresComponent),
  },
  {
    path: 'breadcrumb',
    loadComponent: () =>
      import('./breadcrumb/breadcrumb.component').then((m) => m.BreadcrumbComponent),
  },
  {
    path: 'list-group',
    loadComponent: () =>
      import('./list-group/list-group.component').then((m) => m.ListGroupComponent),
  },
  {
    path: 'object-fit',
    loadComponent: () =>
      import('./object-fit/object-fit.component').then((m) => m.ObjectFitComponent),
  },

  {
    path: 'pagination',
    loadComponent: () =>
      import('./pagination/pagination.component').then((m) => m.PaginationComponent),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover/popover.component').then((m) => m.PopoverComponent),
  },
  {
    path: 'progress',
    loadComponent: () =>
      import('./progress/progress.component').then((m) => m.ProgressComponent),
  },  {
    path: 'spinners',
    loadComponent: () =>
      import('./spinners/spinners.component').then((m) => m.SpinnersComponent),
  },
  {
    path: 'navs-tabs',
    loadComponent: () =>
      import('./navs-tabs/navs-tabs.component').then((m) => m.NavsTabsComponent),
  },  {
    path: 'tags',
    loadComponent: () =>
      import('./tags/tags.component').then((m) => m.TagsComponent),
  },
 
  {
    path: 'toast',
    loadComponent: () =>
      import('./toast/toast.component').then((m) => m.ToastComponent),
  },
  {
    path: 'tooltips',
    loadComponent: () =>
      import('./tooltips/tooltips.component').then((m) => m.TooltipsComponent),
  },
  {
    path: 'typography',
    loadComponent: () =>
      import('./typography/typography.component').then((m) => m.TypographyComponent),
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class elementsRoutingModule {
  static routes = admin;
}