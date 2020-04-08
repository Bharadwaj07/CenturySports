import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Sports } from './sports';
import { SPORTS } from './sportsData';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  sports :Sports[];
  team :[any];
  constructor() { }
  getSports(url:string):Sports[]{
    //console.log(SPORTS[url])
    //console.log(SPORTS)
      this.sports = SPORTS[url]
     return this.sports;
    }
}
