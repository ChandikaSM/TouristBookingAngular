import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private apiUrl = 'http://10.10.10.136/web';
  constructor(private http: HttpClient) { }
  logOutApi(): void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      

    });
     this.http.post(`${this.apiUrl}/sign-out`, {headers});
  }
}
