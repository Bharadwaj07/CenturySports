import { Injectable } from '@angular/core';
import {Live} from './live';
import {LIVE} from './liveData';
@Injectable({
  providedIn: 'root'
})
export class LiveService {
  live :any;

  constructor() { }
  getsportDetails(){
    //console.log("url is"+ url)
    this.live = LIVE;
    return this.live;
  }
}
