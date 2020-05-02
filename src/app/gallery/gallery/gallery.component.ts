import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../service/gallery/gallery.service';
import {AngularFireStorage} from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imgSrc: string="assets/img/image_placeholder.jpg";
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })
  constructor(private _gallery:GalleryService,
    private storage:AngularFireStorage) { }
    
    showPreview(event: any) {
      if (event.target.files && event.target.files[0]) {
        //console.log(event.target.files,event.target.files[0])
        const reader = new FileReader();
        reader.onload = (e: any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
      }
      else {
        this.imgSrc = 'assets/img/image_placeholder.jpg';
        this.selectedImage = null;
      }
    }
    onSubmit(formValue) {
      this.isSubmitted = true;
      if (this.formTemplate.valid) {
        var filePath = `users/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
          finalize(() => {
            alert("success");
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['imageUrl'] = url;
              this._gallery.insertImageDetails(formValue);
              this.resetForm();
            })
          })
        ).subscribe();
      }
    }

    get formControls() {
      return this.formTemplate['controls'];
    }
  
    resetForm() {
      this.formTemplate.reset();
      this.formTemplate.setValue({
        caption: '',
        imageUrl: '',
      });
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
      this.isSubmitted = false;
    }
  ngOnInit(): void {
  }

}
