import { Component, OnInit } from '@angular/core';
import {LiveService} from '../service/live/live.service';
import {Live} from '../service/live/live';
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  live :any;
  sportdetail:Live[]
  mapType = 'roadmap';
  longitude:Number;
  latitude:number;
  selectedSport:string
  sport:string[] =['Cricket','Football','Tennis','Hockey','Basketball']
    constructor(private _live:LiveService) { }
    ngOnInit(): void {
      this.getLive();
    }
    getLive(){
      this.live = this._live.getsportDetails();
    }
    select(s:string){
      //console.log(s)
      this.selectedSport = s;
      this.getDetails(s);
    }
    getDetails(s:string){
      this.sportdetail = this.live[s]
      this.longitude = this.live[s]['longitude']
      this.latitude = this.live[s]['latitude']
      // console.log(this.latitude)
    }
}
