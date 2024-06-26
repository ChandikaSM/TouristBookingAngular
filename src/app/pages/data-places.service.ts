import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { authConst } from './authentication/authConst';

@Injectable({
  providedIn: 'root',
})
export class DataPlacesService {

  headers: any;
  private apiUrl = 'http://10.10.10.132';

  constructor(private http: HttpClient) {
    const authToken = localStorage.getItem(authConst.authToken)
    console.log(authToken)
    this.headers = authToken
  }

  getData(): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any[]>(`${this.apiUrl}/web/spots`
    )
  }

  getDataWithId(urlParam: any): Observable<any> {
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any>(`${this.apiUrl}/web/spots`, {
        params: urlParam,
        headers: this.headers
      })
  }

  getDistrictDetails(urlParams: any): Observable<any> {
    console.log('headers',this.headers)
    if (!navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any>(`${this.apiUrl}/web/district`, {
        params: urlParams,
        headers: this.headers
      })
  }
  searchDistrictsByName(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/web/search`, {
      params: { name: query },
      headers: this.headers
    });
  }
  getDistrictId(urlParam: any): Observable<any> {
    if (navigator.onLine) {
      return throwError('Offline');
    }
    return this.http.get<any>(`${this.apiUrl}/web/`, {
        params: urlParam,
        headers: this.headers
      })
  }
}
