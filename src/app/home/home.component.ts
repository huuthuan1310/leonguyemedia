import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { GapiUserService } from '../auth/gauth.service';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  images;
  constructor(
    private app: AppService,
    private gapiUserService: GapiUserService
  ) {
  }
  ngOnInit() {
    this.images = [];
    this.app.getListImage('0B1p9BpazNQwDaVJqY2lPbkRsemM').subscribe((images: any) => {
      this.images = images;
      console.log('home', images);
      // callback();
    }, error => {
      console.log(error);
      // callback();
    });
  };
  signIn(): void {
    this.gapiUserService.signIn();
  }
  isSignedIn(): boolean {
    return this.gapiUserService.isUserSignedIn();
  }
  getToken() {
    this.gapiUserService.getInfo(this.gapiUserService.getToken()).subscribe((res) => { console.log(res) }, (err) => { console.log(err) });
    console.log(this.gapiUserService.getToken());
  }
}
