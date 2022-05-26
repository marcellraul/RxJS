import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { albums } from 'src/app/models/albums/albums';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(public _http: HttpClient,) { }

  GetAll(): Observable<albums[]> {
    //let params = this.getParams(arrayParams);
    return this._http.get<albums[]>(this.url).pipe(
      map(data => { return data }));
  }

  private getParams(arrayParams) {
    let params = new HttpParams();
    arrayParams.map((element) => {
      let param = element.split(",");
      params = params.append(param[0], param[1]);
    });
    return params;
  }
}
