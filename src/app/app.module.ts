import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AlbumModule } from './album/album.module';
import { ContactModule } from './contact/contact.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AlbumComponent } from './album/album.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth/auth-guard.service';
import { VideosModule } from './videos/videos.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { GenealogyModule } from './genealogy/genealogy.module';
import { EventsModule } from './events/events.module';
import { VideosComponent } from './videos/videos.component';
import { GenealogyComponent } from './genealogy/genealogy.component';
import { EventsComponent } from './events/events.component';
import { PageModule } from './page/page.module';
import { PageComponent } from './page/page.component';

import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { GapiUserService } from './auth/gauth.service';
import { LoginAuthGuard } from './auth/login-guard.service';
import { PermissionModule } from './permission/permission.module';
import { PermissionComponent } from './permission/permission.component';
import { PermissionAuthGuard } from './auth/permission-guard.service';

let gapiConfig = {
  clientId: "997258216157-dlcsfh1vg3u4tou6oubdatk49gu0gqtd.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    // "https://www.googleapis.com/auth/drive",
    // "https://www.googleapis.com/auth/drive.appdata",
    // "https://www.googleapis.com/auth/drive.file",
    // "https://www.googleapis.com/auth/drive.metadata",
    // "https://www.googleapis.com/auth/drive.metadata.readonly",
    // "https://www.googleapis.com/auth/drive.photos.readonly",
    // "https://www.googleapis.com/auth/drive.readonly"
  ].join(" ")
};


const appRoutes: Routes = [
  {
    path: 'login',
    canActivate: [LoginAuthGuard],
    component: LoginComponent
  },
  {
    path: 'permission',
    canActivate: [PermissionAuthGuard],
    component: PermissionComponent
  },
  {
    path: 'page',
    component: PageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { route: 'home' }
      },
      {
        path: 'video',
        component: VideosComponent,
        canActivate: [AuthGuard],
        data: { route: 'video' }
      },
      {
        path: 'event',
        component: EventsComponent,
        canActivate: [AuthGuard],
        data: { route: 'event' }
      },
      {
        path: 'genealogy',
        component: GenealogyComponent,
        canActivate: [AuthGuard],
        data: { route: 'genealogy' }
      },
      {
        path: 'album',
        component: AlbumComponent,
        canActivate: [AuthGuard],
        data: { route: 'album' }
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard],
        data: { route: 'contact' }
      },
      {
        path: '',
        redirectTo: '/page/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AlbumModule,
    VideosModule,
    LoginModule,
    ContactModule,
    GenealogyModule,
    EventsModule,
    PageModule,
    BrowserAnimationsModule,
    PageNotFoundModule,
    PermissionModule,
    RouterModule.forRoot(appRoutes),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiConfig
    })
  ],
  providers: [
    AuthGuard,
    LoginAuthGuard,
    PermissionAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
