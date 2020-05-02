import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {Image} from './image';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  imageData:[Image];
  constructor(
    private firestore:AngularFirestore,
    private authencationService:AuthenticationService
    ) { }

    insertImageDetails(formValue){
      this.firestore.collection('uploads').add(formValue);
    }
    getImageDetails(){
      return this.firestore.collection('uploads').get()
}
}
