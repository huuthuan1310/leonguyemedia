import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { GoogleAuthService } from "ng-gapi";
import * as _ from "lodash";
import { Router } from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;

// import GoogleDrive = gapi.client;

@Injectable()
export class GapiUserService {
  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  userProfile: any;

  constructor(
    private googleAuth: GoogleAuthService,
    public http: Http,
    public router: Router
  ) {
  }

  public getToken(): string {
    let token: string = sessionStorage.getItem(GapiUserService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(GapiUserService.SESSION_STORAGE_KEY);
  }

  public signIn(): void {
    this.googleAuth.getAuth()
      .subscribe((auth) => {
        auth.signIn().then(res => this.signInSuccessHandler(res));
      });
  }

  public signOut(): void {
    sessionStorage.clear();
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(GapiUserService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    sessionStorage.setItem(
      GapiUserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    location.reload();
  }

  public getInfo(token): Observable<any> {
    return this.http.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    let info = {
      email: body.email,
      name: body.name,
      picture: body.picture
    };
    this.userProfile = info;
    return info;
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
