import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SportsService} from '../service/sports/sports.service';
import {Sports} from '../service/sports/sports';
@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.component.html',
  styleUrls: ['./sports-details.component.css']
})
export class SportsDetailsComponent implements OnInit {
  private routeSub:any;
  sports:Sports[];
  team:[any];
  url:string;
  constructor(private route: ActivatedRoute,private _sports:SportsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
    this.url = params['country']
    this.sports = this._sports.getSports(params['url'])
    var index = this.sports.findIndex(obj => obj.Country== this.url);
    this.team = this.sports[index]['Player']
  })
  }

}
