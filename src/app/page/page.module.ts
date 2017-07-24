// Angular Imports
import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule,
  MdButtonModule,
  MdMenuModule,
  MdDialogModule
} from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import 'hammerjs';
import { AppService } from '../app.service';
import { RouterModule } from '@angular/router';

// This Module's Components
import { PageComponent } from './page.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdMenuModule,
    MdDialogModule,
    RouterModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [
    PageComponent,
  ],
  exports: [
    PageComponent,
  ],
  providers: [
    AppService
  ]
})
export class PageModule {

}
