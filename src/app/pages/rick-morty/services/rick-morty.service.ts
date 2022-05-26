import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { character } from 'src/app/models/rick-morty/character';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  url = environment.characters;

  constructor(public _http: HttpClient,) { }

  GetAllCharacters(arrayParams): Observable<character[]> {
    let params = this.getParams(arrayParams);
    return this._http.get<character[]>(this.url, { params })
  }

  private getParams(arrayParams) {
    let params = new HttpParams();
    arrayParams.map((element) => {
      let param = element.split(",");
      params = params.append(param[0], param[1]);
    });
    return params;
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
