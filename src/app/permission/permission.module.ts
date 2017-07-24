// Angular Imports
import { NgModule } from '@angular/core';
import {
  MdButtonModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

// This Module's Components
import { PermissionComponent } from './permission.component';

@NgModule({
  imports: [
    MdButtonModule,
    RouterModule
  ],
  declarations: [
    PermissionComponent,
  ],
  exports: [
    PermissionComponent,
  ]
})
export class PermissionModule {

}
