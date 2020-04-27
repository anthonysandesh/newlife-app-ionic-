import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBulletin } from './bulletin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  private _url: string = "http://app.newlifeag.in/app/bulletinListApp";

  constructor(private http: HttpClient) {}

  getBulletin(): Observable<IBulletin[]>{
    return this.http.get<IBulletin[]>(this._url);
  }
}
