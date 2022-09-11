import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private _http: HttpClient,
  ) {}

  public getList(spinnerId: string): Observable<any> {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const headers = new HttpHeaders({
      spinnerId,
    });

    return this._http.get(url, { headers });
  }
}
