import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    ngOnInit() {

    }
    constructor(public auth: AuthService) { };
}
