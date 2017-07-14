import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule, MdButtonModule, MdMenuModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

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
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AppService } from './app.service';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { route: 'home' }
  },
  // {
  //   path: 'callback',
  //   component: HomeComponent
  // },
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
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
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
    ContactModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    PageNotFoundModule,
    MdListModule,
    MdButtonModule,
    MdMenuModule,
    Angular2ImageGalleryModule,
    RouterModule.forRoot(appRoutes),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [
    AuthService,
    AuthGuard,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
