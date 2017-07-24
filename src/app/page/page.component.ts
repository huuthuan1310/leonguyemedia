import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MdDialog, MdDialogConfig } from '@angular/material';
import * as $ from 'jquery';
import { LoginComponent } from '../login/login.component';
import { GapiUserService } from '../auth/gauth.service';
@Component({
  selector: 'page-root',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  profile: any;
  route;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private gapiUserService: GapiUserService,
    // public dialog: MdDialog
  ) { }
  ngOnInit() {
    this.route = '';
    setTimeout(() => {
      this.route = this._route.children[0].snapshot.data.route;
    });
    if (this.gapiUserService.userProfile) {
      this.profile = this.gapiUserService.userProfile;
    } else {
      this.gapiUserService.getInfo(this.gapiUserService.getToken()).subscribe(
        (res) => {
          this.profile = res;
        },
        (err) => {
          console.log(err)
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
  isSignedIn(): boolean {
    return this.gapiUserService.isUserSignedIn();
  }
  signOut() {
    this.gapiUserService.signOut();
    this.router.navigate(['/login']);
  }
}
