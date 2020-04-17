import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sports } from './sports';
import { SPORTS } from './sportsData';
import { sportsTrendingData } from './sportsTrendingData';
import { SportsTrending } from './sportsTrendingModel';
import { SportsTopHeadLines } from './sportsTopHeadLinesModel';
import { sportsTopHeadLinesData } from './sportsTopHeadLinesData';
import { sportsFeatureData } from './sportsFeaturedData';
import { SportsFeatured } from './sportsFeatured';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SportsService {
  sports: Sports[];
  team: [any];
  sportsTrending: SportsTrending[];
  sportsTopHeadlines: SportsTopHeadLines[];
  sportsFeatured: SportsFeatured[];
  
  constructor(
    private firestore: AngularFirestore
  ) { }

  getSports(url: string): Sports[] {
    this.sports = SPORTS[url]
    return this.sports;
  }

  getSportsTrending(url: string): SportsTrending[] {
    this.sportsTrending = sportsTrendingData[url]
    return this.sportsTrending
  }

  getSportsFeatured(url: string): SportsFeatured[] {
    this.sportsFeatured = sportsFeatureData[url]
    return this.sportsFeatured
  }

  getSportsTopHeadlines(sport: string): Observable<SportsTopHeadLines[]> {
    return from(this.firestore
      .collection<any>(
        'headlines',
        ref => ref.where('sport', '==', sport)
      )
      .valueChanges()
      .pipe(
        map(
          headlinesData => {
            return headlinesData;
          }
        )
      )
    )
  }

  setHeadlines(headlinesData: SportsTopHeadLines) {
    return from(this.firestore.collection('headlines').add(headlinesData))
  }

}
