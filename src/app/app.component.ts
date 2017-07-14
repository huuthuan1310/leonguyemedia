import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/auth.service';
import * as $ from 'jquery';
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
    private _route: ActivatedRoute
  ) {
    auth.handleAuthentication();
  }
  ngOnInit() {
    this.profile = '';
    this.route = '';
    setTimeout(() => {
      this.route = this._route.children[0].snapshot.data.route;
    });
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
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
