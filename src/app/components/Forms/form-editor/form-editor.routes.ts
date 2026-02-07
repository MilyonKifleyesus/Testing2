import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms/form-editor',children:[ {
  path: 'quill-editor',
  loadComponent: () =>
    import('./quill-editor/quill-editor.component').then((m) => m.QuillEditorComponent),
},



]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formeditorRoutingModule {
  static routes = admin;
}