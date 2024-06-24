import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataPlacesService {
  private apiUrl = 'http://10.10.10.114';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/web/spots`).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }

  getDataWithId(urlParam: any): Observable<any> {
    return this.http.get<any>('http://10.10.10.114/web/spots', {
      params: urlParam,
    });
  }

  getPlacesByDistrict(district: string):Observable<any> {
    const url = `http://10.10.10.114/web/district?district=West Tripura`;
    return this.http.get<any>(url);
  }

  // getDistrictList(): Observable<any> {
  //   return this.http.get<any>('http://10.10.10.114/web/district',);
  // }

  getDistrictDetails(urlParams: any): Observable<any> {
    return this.http.get<any>('http://10.10.10.114/web/district',{
      params: urlParams,
    });
  }
}
