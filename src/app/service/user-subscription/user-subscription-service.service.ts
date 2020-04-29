import { Injectable } from '@angular/core';
import { UserSubscription } from './usersubscription';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionServiceService {
  subscriptionData: UserSubscription[];

  constructor(private firestore: AngularFirestore) { }


  getSubscriptions() {
    return from(this.firestore
      .collection<any>('usersubscriptions')
      .valueChanges()
    )
  }

  setSubscription(subscriptionDto) {
    return from(this.firestore.collection('usersubscriptions').add(subscriptionDto))
  }

}

