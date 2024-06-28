import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBgService {
  search:any[]=[];

  private apiUrl = "http://10.10.10.114/web/search";

  constructor(private http: HttpClient) { }
  // postSearch(): Observable<any>{
  //   return this.http.post<any[]>(`${this.apiUrl}/search`).pipe(
  //     catchError((error) => {
  //       console.error('Error fetching data:', error);
  //       return throwError(error);
  //     }
  //   ))
  // }
}
