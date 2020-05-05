import { Injectable } from '@angular/core';
import { Highlights } from './highlights';
import { HIGHLIGHTS } from './highlightsData';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {
  highlights: Highlights[];

  constructor(
    private firestore: AngularFirestore
  ) { }

  getHighlights(sport: string) {
    return from(this.firestore
      .collection<any>(
        'highlights',
        ref => ref.where('sport', '==', sport)
      )
      .valueChanges()
      .pipe(
        map(
          highlightsData => {
            console.log(highlightsData)
            return highlightsData;
          }
        )
      )
    )
  }

  setHighlights(highlightData) {
    return from(this.firestore.collection('highlights').add(highlightData))
  }

  deleteHighlights(sport) {
    return from(
      this.firestore
        .collection(
          'highlights',
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
