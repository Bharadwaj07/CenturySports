import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { MessagingService } from 'src/app/service/messaging/messaging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails: any;
  userDetailsSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private messagingService: MessagingService
  ) { }

  ngOnInit(): void {

    this.userDetails = this.authenticationService.isAuthenticated();
    
    this.messagingService.userDetails$.subscribe(
      userData => {
        let dataObj;
        dataObj = typeof userData == 'string' ? JSON.parse(userData) : userData;
        this.userDetails = dataObj;

        console.log(dataObj);
      }
    )
  }

  isUserAuthenticated() {
    return !!this.userDetails;
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}
