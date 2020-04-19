import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SportsDetails } from './sports';
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
  sports: SportsDetails[];
  team: [any];
  sportsTrending: SportsTrending[];
  sportsTopHeadlines: SportsTopHeadLines[];
  sportsFeatured: SportsFeatured[];

  constructor(
    private firestore: AngularFirestore
  ) { }

  getSports(sport: string): SportsDetails[] {
    const selectedSportData = SPORTS.find( function(sportItem) {
      return sportItem.sport == sport; 
    }); 
    
    this.sports = selectedSportData.details
    return this.sports;
  }

  getSportsTrending(url: string): SportsTrending[] {
    this.sportsTrending = sportsTrendingData[url]
    return this.sportsTrending
  }

  getSportsFeatured(sport: string): Observable<SportsFeatured[]> {
    return from(
      this.firestore
        .collection<any>(
          'features',
          ref => ref.where('sport', '==', sport)
        )
        .valueChanges()
        .pipe(
          map(
            featuredData => {
              return featuredData;
            }
          )
        )
    )
  }

  setSportsFeatured(sportFeaturedData: SportsFeatured): Observable<any> {
    return from(this.firestore.collection('features').add(sportFeaturedData))
  }

  deleteSportsFeatured(sport) {
    return from(
      this.firestore
        .collection(
          'features',
          ref => ref.where('sport', '==', sport)
        )
        .get()
        .forEach(data => {
          data.forEach(element => {
            element.ref.delete();
          })
        })
    )
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

  deleteSportsTopHeadlines(sport) {
    return from(
      this.firestore
        .collection(
          'headlines',
          ref => ref.where('sport', '==', sport)
        )
        .get()
        .forEach(data => {
          data.forEach(element => {
            element.ref.delete();
          })
        })
    )
  }

}
