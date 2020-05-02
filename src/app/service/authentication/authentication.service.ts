import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
import { map, first } from 'rxjs/operators'
import { of, Observable, from } from 'rxjs';
import { MessagingService } from '../messaging/messaging.service';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userDetails: any | null;
  sessionKey: "EA#$&BJHH@#(*";

  constructor(
    private router: Router,
    private messagingService: MessagingService,
    private http: HttpService,
    private firestore :AngularFirestore
  ) {
    const savedUserDetails = sessionStorage.getItem(this.sessionKey);
    if(savedUserDetails) {
      this._userDetails = JSON.parse(savedUserDetails);
    }
  }

  login(loginDetails) :Observable<any>{
 

    return from(this.firestore
      .collection<any>(
          'users', 
          ref => ref
            .where('email', '==', loginDetails.username)
            .where('password', '==', loginDetails.password)
      )
      .valueChanges()
      .pipe(
        map(
          userData => {
            if(userData === undefined || userData.length == 0) {
              return null;
            }
            let userDataToBeStored = {
              ...userData[0],
              password: ''
            }
            this.messagingService.sendUserDetails(userDataToBeStored);
            this.setUserDetails(userDataToBeStored)
            return userDataToBeStored;
          }
        )
      )

   
      )
  
  }

  register(registerDetails): Observable<any> {
    
    return from(this.firestore.collection('users').add(registerDetails))
     
  }

  logout() {
    const user = null;
    this.messagingService.sendUserDetails(user);
    this.setUserDetails(user);
    sessionStorage.removeItem(this.sessionKey);
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this._userDetails;
  }
  
  // Method to fetch user data for subscription purpose
  getUserDetails() {
    if(!this._userDetails) {
      this._userDetails = sessionStorage.getItem(this.sessionKey);
    }
    return  this._userDetails ; 
  }

  private setUserDetails(details) {
    this._userDetails = details;
    sessionStorage.setItem(this.sessionKey, JSON.stringify(details))
  }

  updateUserSubscriptions(subscriptionArr) {
    const userDetails = this.getUserDetails();
    this.setUserDetails({
      ...userDetails,
      subscriptions: subscriptionArr
    })
  }
  updateUserUploads(userFile){
    const userDetails = this.getUserDetails();
    this.setUserDetails({
      ...userDetails,
      userUploadedImage:userFile
    })
  }
}
