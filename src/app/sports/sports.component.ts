import { Component, OnInit } from '@angular/core';
import { SportsService } from '../service/sports/sports.service';
import { Sports } from '../service/sports/sports';
import { ActivatedRoute } from '@angular/router';
import { SportsTrending } from '../service/sports/sportsTrendingModel';
import { SportsTopHeadLinesField } from '../service/sports/sportsTopHeadLinesModel';
import { SportsFeatured } from '../service/sports/sportsFeatured';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sports: Sports[];
  url: string;
  photos: any[] = ["sp1.jpeg", "sp2.jpeg", "sp3.jpeg", "sp4.jpeg"];
  sportsTrending: SportsTrending[];
  sportsTopHeadLines: SportsTopHeadLinesField[];
  sportsFeatured: SportsFeatured[]

  constructor(
    private route: ActivatedRoute, 
    private _sport: SportsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.url = params['url'];
      this.sportsTrending = this._sport.getSportsTrending(this.url)
      this.sportsFeatured = this._sport.getSportsFeatured(this.url)
      this.sports = this._sport.getSports(this.url)
      this.getSportsHeadlinesData(this.url)
    })
  }

  getSportsHeadlinesData(sport: string): void {
    this._sport.getSportsTopHeadlines(sport)
      .subscribe(
        data => {
          this.sportsTopHeadLines = data && data[0] && data[0].headlines;
        }
      )
  }

  saveHeadlinesData(headlinesData) {
    this._sport.setHeadlines(headlinesData).subscribe( data => {
      this.getSportsHeadlinesData('cricket')
    })
  }

}
