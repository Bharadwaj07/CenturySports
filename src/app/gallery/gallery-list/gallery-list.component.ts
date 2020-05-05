import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../service/gallery/gallery.service';
@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  imageList=[];
  index:number[];
  constructor(private _gallery:GalleryService) { }

  ngOnInit(){

    this._gallery.getImageDetails().toPromise()
    .then(snapshot =>{
      snapshot.forEach(doc =>{
        //console.log(doc.data())
        this.imageList.push(doc.data())
        //console.log(Array(Math.ceil((this.imageList.length + 1)/3)).keys())
        this.index = Array.from(Array(Math.ceil((this.imageList.length + 1)/4)).keys())
        // console.log(this.index)
        
      })
      this.getDetails()
    })
    
    
  }
  getDetails(){
   console.log(this.index)
  }

}
