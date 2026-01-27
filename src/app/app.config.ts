import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { App_Route } from './app.routes';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
// import { NgDragDropModule } from 'ng-drag-drop';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgSelectModule } from '@ng-select/ng-select';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(App_Route),RouterOutlet,ColorPickerModule,ColorPickerService,provideAnimations(), 
     AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,provideCharts(withDefaultRegisterables()),
  importProvidersFrom(
    HttpClientModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  }), 
  AngularFireModule.initializeApp(environment.firebase), ToastrModule.forRoot({
    timeOut: 15000, // 15 seconds
    closeButton: true,
    progressBar: true,
  }),
  //  NgDragDropModule.forRoot()
  NgCircleProgressModule.forRoot(),
  ToastrModule.forRoot({
    timeOut: 15000, // 15 seconds
    closeButton: true,
    progressBar: true,
  }),
  TranslateModule.forRoot({
    defaultLanguage: 'EN',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
  )
]
};



