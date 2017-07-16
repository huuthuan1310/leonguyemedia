import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AppService } from '../app.service';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  images;
  constructor(
    public auth: AuthService,
    private app: AppService
  ) {
    auth.handleAuthentication();
  }
  ngOnInit() {
    this.images = [];
    this.app.getListImage().subscribe((images: any) => {
      this.images = images;
      console.log('home', images);
      // callback();
    }, error => {
      console.log(error);
      // callback();
    });
  };
}
