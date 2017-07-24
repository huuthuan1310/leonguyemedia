import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
// Import our authentication service
import { GapiUserService } from './gauth.service';
import { AppService } from '../app.service';

@Injectable()
export class AuthGuard implements CanActivate {
  images: any;
  lock: boolean;
  constructor(
    private gapiUserService: GapiUserService,
    private app: AppService,
    private router: Router) { }

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    this.lock = true;
    if (!this.gapiUserService.isUserSignedIn()) {
      this.router.navigate(['']);
      this.lock = false;
    } else {
      this.app.getListImage('0B1p9BpazNQwDaVJqY2lPbkRsemM').subscribe((res) => {
        this.images = res;
        console.log('home', res);
        this.lock = true;
      }, error => {
        console.log(error);
        this.router.navigate(['/permission']);
        this.lock = false;
      });
    }
    return this.lock;
  }
}
