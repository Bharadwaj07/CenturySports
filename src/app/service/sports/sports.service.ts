import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Sports } from './sports';
import { SPORTS } from './sportsData';
import {sportsTrendingData} from './sportsTrendingData';
import {SportsTrending} from './sportsTrendingModel';
import {SportsTopHeadLines} from './sportsTopHeadLinesModel';
import {sportsTopHeadLinesData} from './sportsTopHeadLinesData';


@Injectable({
  providedIn: 'root'
})
export class SportsService {
  sports :Sports[];
  team :[any];
  sportsTrending :SportsTrending[];
  sportsTopHeadlines :SportsTopHeadLines[];
  constructor() { }
  getSports(url:string):Sports[]{
    //console.log(SPORTS[url])
    //console.log(SPORTS)
      this.sports = SPORTS[url]
     return this.sports;
    }

   getSportsTrending(): SportsTrending[]{
        this.sportsTrending=sportsTrendingData
        return this.sportsTrending
   }

   getSportsTopHeadlines(): SportsTopHeadLines[]{
    this.sportsTopHeadlines=sportsTopHeadLinesData
    return this.sportsTopHeadlines
}
}
