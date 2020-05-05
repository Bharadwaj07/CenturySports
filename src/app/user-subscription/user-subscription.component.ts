import { Component, OnInit } from '@angular/core';
import { UserSubscription } from '../service/user-subscription/usersubscription';
import { UserSubscriptionServiceService } from '../service/user-subscription/user-subscription-service.service';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.scss']
})
export class UserSubscriptionComponent implements OnInit {

  subscriptionData: UserSubscription[];
  userSubscriptionId: any[];

  constructor(private _subcribeService: UserSubscriptionServiceService) { }

  ngOnInit(): void {
    this.getSubscriptionDetails();
    this.getUserSubscriptionIds();
  }

  getUserSubscriptionIds() {
    this.userSubscriptionId = this._subcribeService.getUserSubscriptionIds();
  }


  isSubscribed(elementId) {
    if (this.userSubscriptionId && this.userSubscriptionId.includes(elementId)) {
      return true;
    }
    return false;
  }

  subscribePackage(subscriptionId) {
    this._subcribeService.setUserSubscriptionData(subscriptionId).subscribe();
  }

  getSubscriptionDetails(): void {
    this._subcribeService.getSubscriptions()
      .subscribe(data => {
        this.subscriptionData = data;
      })
  }

  saveSubscriptionDetails(subscriptionDto) {
    this._subcribeService.setSubscription(subscriptionDto).subscribe(
      data => {
        this.getUserSubscriptionIds();
      }
    );
  }

}
