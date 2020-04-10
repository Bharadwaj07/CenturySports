import { Component, OnInit } from '@angular/core';
import {SportsService} from '../service/sports/sports.service';
import {Sports} from '../service/sports/sports';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sports:Sports[];
  url:string;
  photos:any[]=["sp1.jpeg","sp2.jpeg","sp3.jpeg","sp4.jpeg"]

  constructor(private route:ActivatedRoute,private _sport:SportsService) { }
  
  ngOnInit(): void {
      this.route.params.subscribe(params =>{
      this.url = params['url'];
      console.log(params['url'])
      this.sports = this._sport.getSports(this.url)
      console.log(this.sports[0]['Player'])
    
    })
  }

}
