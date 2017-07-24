// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MdProgressSpinnerModule } from '@angular/material';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { GapiUserService } from '../auth/gauth.service';

let gapiConfig = {
  clientId: "997258216157-ece0l9dafdhusadp9dr4vpq4mi3t0pes.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.appdata",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.metadata",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive.photos.readonly",
    "https://www.googleapis.com/auth/drive.readonly"
  ].join(" ")
};


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule,
    MdProgressSpinnerModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiConfig
    })
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  providers: [GapiUserService]
})
export class HomeModule {

}
