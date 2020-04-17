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
   // console.log(loginDetails.username)
    // this.firestore.collection('users',ref =>ref.where('username','==',loginDetails.username)).valueChanges().forEach(usersSnapshot =>{
    //   usersSnapshot.forEach(user =>{
        
  
    //   })
    // })


    // return from(this.firestore
    //   .collection<any>(
    //       'users', 
    //       ref => ref
    //         .where('email', '==', loginDetails.username)
    //         .where('password', '==', loginDetails.password)
    //   ).valueChanges()
    //   .pipe(
    //     map(
    //       actions => actions.map(a => {
    //         // const data = a.payload.doc.data() as AccountDeposit;
    //         // const id = a.payload.doc.id;
    //         // return { id, ...data };
    //         console.log(' data from login - a')
    //         console.log(a)

    //         return a;
    //       }
    //     )
    //   )
    //   )
    // )

    // return from(this.firestore
    //   .collection<any>(
    //       'users', 
    //       ref => ref
    //         .where('email', '==', loginDetails.username)
    //         .where('password', '==', loginDetails.password)
    //   ).valueChanges()
    // )

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

    // .then(
    //     res => {
    //       console.log('res from set-')
    //       console.log(res)
    //       return of({res: true})
    //     }, 
    //     err => {
    //         console.log('Err Ocurred: ' + err)
    //         return of(false)
    //     }
    //   )

      // .pipe(
      //   map(
      //     userData => {
      //       let userDataToBeStored = {
      //         ...userData[0],
      //         password: ''
      //       }
      //       this.messagingService.sendUserDetails(userDataToBeStored);
      //       this.setUserDetails(userDataToBeStored)
      //       return userDataToBeStored
      //     }
      //   )
      // )
      



      //   .then(
      //   res => {
      //     console.log('res from set-')
      //     console.log(res)
      //     return of({res: true})
      //   }, 
      //   err => {
      //       console.log('Err Ocurred: ' + err)
      //       return of(false)
      //   }
      // )


      // .forEach(
      //   usersSnapshot => {
      //     usersSnapshot.forEach(
      //       user => {
      //         console.log('data receeived from loginservice')
      //         console.log(user)

      //         return of(user)
      //       }
      //     )
      //   }
      // )
      )
  
  }

  register(registerDetails): Observable<any> {
    // const id = this.firestore.createId();
    // const item: any = { id, ...registerDetails };
    return from(this.firestore.collection('users').add(registerDetails))
      // .then(
      //   res => {
      //     console.log('res from set-')
      //     console.log(res)
      //     return of({res: true})
      //   }, 
      //   err => {
      //       console.log('Err Ocurred: ' + err)
      //       return of(false)
      //   }
      // );
    
    // let registerUrl = "some/register/url";
    // return this.http.postData(registerUrl, registerDetails)
    // return of(true);
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

  private setUserDetails(details) {
    this._userDetails = details;
    sessionStorage.setItem(this.sessionKey, JSON.stringify(details))
  }
}
