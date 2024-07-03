import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authConst } from '../../authentication/authConst';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceListService {
  headers: any;
  private apiUrl = 'http://10.10.10.136';
  constructor(private http: HttpClient) {
    const authToken = localStorage.getItem(authConst.authToken);
    this.headers = authToken;
  }

  getData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/web/spots`);
  }

  getDataWithId(urlParam: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/web/spots`, {
      params: urlParam,
      headers: this.headers,
    });
  }
}
