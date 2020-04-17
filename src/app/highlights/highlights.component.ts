import { Component, OnInit } from '@angular/core';
import { HighlightsService } from '../service/highlights/highlights.service';
import { Highlights } from '../service/highlights/highlights'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  highlights: Highlights[];
  highlightsSelected: Highlights;
  sportSelected: string = '';

  constructor(private _highlights: HighlightsService) { }

  ngOnInit(): void {}

  deleteHighlights() {
    this._highlights.deleteHighlights('hockey').subscribe()
  }

  getHighlights(sport: string): void {
    this._highlights.getHighlights(sport)
      .subscribe(
        data => {
          this.highlights = data && data[0] && data[0].items;
        }
      )
  }

  select(highlight: Highlights) {
    this.highlightsSelected = highlight;
  }

  onChange($event: any) {
    this.sportSelected = $event.target.value;
    this.getHighlights(this.sportSelected);
    this.highlightsSelected = null;
  }

  saveHighlightData(highlightData) {
    this._highlights.setHighlights(highlightData).subscribe()
  }

}
