import { Injectable } from '@angular/core';
import {Highlights} from './highlights';
import {HIGHLIGHTS} from './highlightsData';
@Injectable({
  providedIn: 'root'
})
export class HighlightsService {
  highlights : Highlights[];
  constructor() { }

  getHighlights(index: number): Highlights[] {
    //console.log(index)
    //console.log(HIGHLIGHTS[index])
    this.highlights = HIGHLIGHTS[index - 1].items;
    return this.highlights;
  }
}
