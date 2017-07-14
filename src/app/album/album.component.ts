import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.scss']
})
export class AlbumComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public router: Router
  ) {
    auth.handleAuthentication();
  }
  ngOnInit() { }
}
