import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
// Import our authentication service
import { GapiUserService } from './gauth.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(
    private gapiUserService: GapiUserService,
    private router: Router) { }

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (this.gapiUserService.isUserSignedIn()) {
      this.router.navigate(['/page']);
      return false;
    }
    return true;
  }

}
