// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  providers: []
})
export class HomeModule {

}
