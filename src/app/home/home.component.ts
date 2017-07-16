import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AppService } from '../app.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  images;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
    public auth: AuthService,
    private app: AppService
  ) {
    auth.handleAuthentication();
  }
  ngOnInit() {
    this.images = [];
    this.galleryOptions = [
      {
        image: false,
        width: '100vw',
        height: '100vh',
        thumbnailsColumns: 10,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsRows: 5,
        thumbnailsSwipe: true,
        previewSwipe: true,
        previewCloseOnClick: true,
        previewKeyboardNavigation: true,
        fullWidth: true
      }, {
        "breakpoint": 500,
        "width": "100%"
      }
    ];
    this.galleryImages = [];
    this.app.getListImage().subscribe((images: any) => {
      this.images = images;
      console.log('home', images);
      // callback();


      this.galleryImages = images;
    }, error => {
      console.log(error);
      // callback();
    });
  };
}
