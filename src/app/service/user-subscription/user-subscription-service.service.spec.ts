import { TestBed } from '@angular/core/testing';

import { UserSubscriptionServiceService } from './user-subscription-service.service';

describe('UserSubscriptionServiceService', () => {
  let service: UserSubscriptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSubscriptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
