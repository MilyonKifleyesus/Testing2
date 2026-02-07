import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { admin, adminuiRoutingModule } from '../../components/adminui/adminui.routes';
// import { chartsRoutingModule } from '../../components/charts/charts.routes';
// import { dashboardRoutingModule } from '../../components/dashboard/dashboard.routes';
// import { ecommerceRoutingModule } from '../../components/pages/ecommerce/ecommerce.routes';
// import { extensionRoutingModule } from '../../components/pages/extension/extension.routes';
// import { filemanagerRoutingModule } from '../../components/pages/file-manager/filemanager.routes';
// import { pagesRoutingModule } from '../../components/pages/pages.routes';
// import { widgetsRoutingModule } from '../../components/widgets/widgets.routes';
// import { uikitRoutingModule } from '../../components/uikit/uikit.routes';
// import { formsmoduleRoutingModule } from '../../components/formsmodule/formsmodule.routes';
// import { mapsRoutingModule } from '../../components/maps/maps.routes';
// import { tablesRoutingModule } from '../../components/tables/tables.routes';



export const content: Routes = [

  { path: '', children: [
   {path:'', loadChildren : () => import('../../../app/components/dashboard/dashboard.routes').then(r => r.dashboardRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/crypto-currencies/crypto.routes').then(r => r.cryptoRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/ecommerce/ecommerce.routes').then(r => r.ecommerceRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/apps/blog/blog.routes').then(r => r.blogRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/apps/filemanager/filemanager.routes').then(r => r.filemanagerRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/apps/mail/mail.routes').then(r => r.mailRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/apps/maps/maps.routes').then(r => r.mapsRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/apps/tables/tables.route').then(r => r.tablesRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/apps/apps.routes').then(r => r.appsRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/elements/elements.routes').then(r => r.elementsRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/advancedui/advancedui.routes').then(r => r.advanceduiRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/pages/pages.routes').then(r => r.pagesRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/utilities/utilities.routes').then(r => r.utilitiesRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/charts/charts.route').then(r => r.chartsRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/Forms/Form-Elements/form-elements.routes').then(r => r.formelementsRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/Forms/forms.routes').then(r => r.formsRoutingModule)},
   {path:'', loadChildren : () => import('../../../app/components/Forms/form-editor/form-editor.routes').then(r => r.formeditorRoutingModule)},
   // Super Admin Routes
   {path:'admin', loadChildren : () => import('../../components/admin/admin.routes').then(r => r.adminRoutingModule)},
   // Client Routes
   {path:'client', loadChildren : () => import('../../components/client/client.routes').then(r => r.clientRoutingModule)},


//    {
//     path: '',
//     loadChildren: () => import('../../../app/components/widgets/widgets.routes').then(r => r.widgetsRoutingModule)
//   },
  
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/uikit/uikit.routes').then(r => r.uikitRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/formsmodule/formsmodule.routes').then(r => r.formsmoduleRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/tables/tables.routes').then(r => r.tablesRoutingModule)
//   },
  
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/adminui/adminui.routes').then(r => r.adminuiRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/maps/maps.routes').then(r => r.mapsRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/charts/charts.routes').then(r => r.chartsRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/pages/pages.routes').then(r => r.pagesRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/pages/extension/extension.routes').then(r => r.extensionRoutingModule)
//   },

//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/pages/ecommerce/ecommerce.routes').then(r => r.ecommerceRoutingModule)
//   },
//   {
//     path: '',
//     loadChildren: () => import('../../../app/components/icons/icons.routes').then(r => r.iconsRoutingModule)
//   },

  //    ...chartsRoutingModule.routes,
  //  ...dashboardRoutingModule.routes,
  //  ...ecommerceRoutingModule.routes,
  //  ...extensionRoutingModule.routes,
  //  ...filemanagerRoutingModule.routes,
  //  ...pagesRoutingModule.routes,
  //  ...widgetsRoutingModule.routes,
  //  ...uikitRoutingModule.routes,
  //  ...formsmoduleRoutingModule.routes,
  //  ...mapsRoutingModule.routes,
  //  ...tablesRoutingModule.routes
  ]}

  
];
@NgModule({
  imports: [RouterModule],
    // imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
