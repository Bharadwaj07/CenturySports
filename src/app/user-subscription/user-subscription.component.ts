import { Component, OnInit } from '@angular/core';
import {UserSubscription} from '../service/user-subscription/usersubscription';
import {UserSubscriptionServiceService} from '../service/user-subscription/user-subscription-service.service';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.scss']
})
export class UserSubscriptionComponent implements OnInit {

  subscriptionData: UserSubscription[];

  constructor(private _subcribeService:UserSubscriptionServiceService) { }

  ngOnInit(): void {
    this.getSubscriptionDetails();
  }

  getSubscriptionDetails():void{
    this._subcribeService.getSubscriptions()
    .subscribe(data=>{
      this.subscriptionData=data;
    })
  }

  saveSubscriptionDetails(subscriptionDto) {
    this._subcribeService.setSubscription(subscriptionDto).subscribe();
  }

}
