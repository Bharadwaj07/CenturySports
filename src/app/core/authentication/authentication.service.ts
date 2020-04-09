import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { map } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userDetails: any | null;
  sessionKey: "EA#$&BJHH@#(*";

  constructor(
    private router: Router,
    private http: HttpService
  ) {
    const savedUserDetails = sessionStorage.getItem(this.sessionKey);
    if(savedUserDetails) {
      this._userDetails = savedUserDetails;
    }
  }

  login(loginDetails) {
    // let loginUrl = "some/login/url";
    // return this.http.postData(loginUrl, loginDetails)
    //   .pipe(
    //     map( user => {
    //       if(user) {
    //           this.setUserDetails(user);
    //       }
    //       return user;
    //     })
    //   )

    // mocking resp
    let user = {
      name: 'John',
      lastName: 'Doe',
      dob: '12/12/1990'
    }

    this.setUserDetails(user)
    return of(user);
  }

  register(registerDetails) {
    // let registerUrl = "some/register/url";
    // return this.http.postData(registerUrl, registerDetails)
    return of(true);
  }

  logout() {
    this.setUserDetails(null);
    sessionStorage.removeItem(this.sessionKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return !!this._userDetails;
  }

  private setUserDetails(details) {
    this._userDetails = details;
    sessionStorage.setItem(this.sessionKey, JSON.stringify(details))
  }
}
