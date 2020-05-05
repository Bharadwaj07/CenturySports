import { Injectable } from '@angular/core';
import { UserSubscription } from './usersubscription';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionServiceService {
  subscriptionData: UserSubscription[];

  constructor(
    private firestore: AngularFirestore,
    private authencationService: AuthenticationService) { }


  getSubscriptions() {
    return from(this.firestore
      .collection<any>('usersubscriptions')
      .valueChanges()
    )
  }


  getUserSubscriptionIds(){
    const userData=this.authencationService.getUserDetails();
    return userData.subscriptions;
  }

  setSubscription(subscriptionDto) {
    return from(this.firestore.collection('usersubscriptions').add(subscriptionDto))
  }
  setUserSubscriptionData(subscriptionId) {
    const userData=this.authencationService.getUserDetails();
    const subscriptionArr = userData.subscriptions ? [...userData.subscriptions, subscriptionId] :  [subscriptionId]

        return from(
          this.firestore
            .collection(
              'users',
              ref => ref.where('email', '==', userData.email)
            )
            .get()
            .forEach(data => {
              data.forEach(element => {
               
                element.ref.update({
                  subscriptions: subscriptionArr
                }).then(
                  (success) => {
                    this.authencationService.updateUserSubscriptions(subscriptionArr);
                  }
                )

              })
            })
        )

  }

}

