// Angular Imports
import { NgModule } from '@angular/core';
import {
  MdDialogModule,
  MdButtonModule
} from '@angular/material';

// This Module's Components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    MdDialogModule,
    MdButtonModule
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class LoginModule {

}
