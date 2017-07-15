import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/auth.service';
// import { MdDialog, MdDialogConfig } from '@angular/material';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  profile: any;
  route;

  constructor(
    public auth: AuthService,
    private _route: ActivatedRoute,
    private router: Router
    // public dialog: MdDialog
  ) {
    auth.handleAuthentication();
  }
  ngOnInit() {
    this.route = '';
    if (this.auth.authenticated) {
      setTimeout(() => {
        this.route = this._route.children[0].snapshot.data.route;
      });
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
          console.log(this.profile);
        });
      }
    } else {
      // this.router.navigate(['/login']);
    }
  }
  scrollToTop(e) {
    if (e.target.scrollTop === 0) {
      console.log('Load More');
      $('.toolbar').addClass('top');
    } else {
      if ($('.toolbar').hasClass('top')) {
        console.log($('.toolbar').hasClass('top'));
        $('.toolbar').removeClass('top');
      }
    }
  }
}
