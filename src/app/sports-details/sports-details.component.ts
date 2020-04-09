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
  team:any;
  country:string;
  overview:any;
  players:any[];
  tabName:string;
  embed:any;
  news:any[] =['ind1.jpeg','ind2.jpeg','ind3.jpeg','ind4.jpeg']
  constructor(private route: ActivatedRoute,private _sports:SportsService) { }
  selectedTab(tabName:string){
    console.log(tabName);
    this.tabName =tabName;
  }
  selectVenue(item:any){
    this.embed =item.embed;
  }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      
     this.country = params['country']
     this.sports = this._sports.getSports(params['url'])
     var index = this.sports.findIndex(obj => obj.Country== this.country);
     this.team = this.sports[index]
     this.players = this.team.Player
     
    })
  }

}
