import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Sports } from './sports';
import { SPORTS } from './sportsData';
import {sportsTrendingData} from './sportsTrendingData';
import {SportsTrending} from './sportsTrendingModel';
import {SportsTopHeadLines} from './sportsTopHeadLinesModel';
import {sportsTopHeadLinesData} from './sportsTopHeadLinesData';
import {sportsFeatureData} from './sportsFeaturedData';
import {SportsFeatured} from './sportsFeatured';



@Injectable({
  providedIn: 'root'
})
export class SportsService {
  sports :Sports[];
  team :[any];
  sportsTrending :SportsTrending[];
  sportsTopHeadlines :SportsTopHeadLines[];
  sportsFeatured :SportsFeatured[];
  constructor() { }
  getSports(url:string):Sports[]{
    //console.log(SPORTS[url])
    //console.log(SPORTS)
      this.sports = SPORTS[url]
     return this.sports;
    }

   getSportsTrending(url:string): SportsTrending[]{
        this.sportsTrending=sportsTrendingData[url]
        return this.sportsTrending
   }

   getSportsFeatured(url:string):SportsFeatured[]{
    this.sportsFeatured = sportsFeatureData[url]
    return this.sportsFeatured
   }

   getSportsTopHeadlines(url:string): SportsTopHeadLines[]{
    this.sportsTopHeadlines=sportsTopHeadLinesData[url]
    return this.sportsTopHeadlines
}
}
