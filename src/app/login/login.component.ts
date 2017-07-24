import { Component, OnInit } from '@angular/core';
import { GapiUserService } from '../auth/gauth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit() {

  }
  constructor(
    private gapiUserService: GapiUserService,
    private router: Router
  ) { };
}
