import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authConst } from '../../pages/authentication/authConst';

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService {
  headers: any;
  private apiUrl = "http://10.10.10.136/web";

  constructor(private http: HttpClient) {
    const token = localStorage.getItem(authConst.authToken);
    console.log('token' , token);
    this.headers = {
      'Authorization': 'Bearer ' + token
    }
  }

 

  postSpotData(spot: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/spots`, spot, {
      headers: this.headers
    });
  }

  getSpot(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/spots`);
  }

  deleteSpot(urlParam: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/spots`,{
      params: urlParam,
      headers: this.headers
    })
    

  }

  updatespot(urlParam: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/spots`, {
      params: urlParam,
      headers: this.headers
    })
  }
}