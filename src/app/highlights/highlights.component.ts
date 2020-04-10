import { Component, OnInit } from '@angular/core';
import {HighlightsService} from '../service/highlights/highlights.service';
import {Highlights} from '../service/highlights/highlights'
@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  highlighs: Highlights[];
  highlightsSelected: Highlights;
  sportSelected: number;
  constructor(private _highlights: HighlightsService) { }

  ngOnInit(): void {
    this.getHighlights(this.sportSelected);
  }
  getHighlights(index: number): void {
    this.highlighs = this._highlights.getHighlights(index);
  }
  select(highlight: Highlights) {
    this.highlightsSelected = highlight;
  }

  onChange($event: any) {
    this.sportSelected = $event.target.value;
    this.highlighs = this._highlights.getHighlights(this.sportSelected);
    this.highlightsSelected = null;
  }
}
