import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/blog',children:[ {
  path: 'blog-page',
  loadComponent: () =>
    import('./blog-page/blog-page.component').then((m) => m.BlogPageComponent),
},
{
    path: 'blog-details',
    loadComponent: () =>
      import('./blog-details/blog-details.component').then((m) => m.BlogDetailsComponent),
  },
  {
    path: 'blog-post',
    loadComponent: () =>
      import('./blog-post/blog-post.component').then((m) => m.BlogPostComponent),
  },
    


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class blogRoutingModule {
  static routes = admin;
}