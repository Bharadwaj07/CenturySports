import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner'
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  getData(_url): Observable<any> {
    this.spinner.show();
    return this.http.get<any>(_url)
      .pipe(
        first(
          res => {
            this.spinner.hide();
            return res;
          }
        )
      )
  }

  getDataWithoutSpinner(_url): Observable<any> {
    return this.http.get<any>(_url)
    .pipe(
      first(
        res => {
          return res;
        }
      )
    )
  }

  postData(_url: string, data: object): Observable<any> {
    this.spinner.show();
    return this.http.post<any>(_url, data)
      .pipe(
        first(
          res => {
            this.spinner.hide();
            return res;
          }
        )
      )
  }

  postDataWithoutSpinner(_url: string, data: object): Observable<any> {
    return this.http.post<any>(_url, data)
      .pipe(
        first(
          res => {
            return res;
          }
        )
      )
  }
}
