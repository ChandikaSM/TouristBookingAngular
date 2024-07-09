import { Injectable } from '@angular/core';
import { PrivateUrl } from '../../privateUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { authConst } from '../authentication/authConst';

@Injectable({
  providedIn: 'root'
})
export class StatusBarService {
  private auth: string;
  headers: any;

  constructor(private http: HttpClient) { 

  this.auth = PrivateUrl.apiUrl;
  const token = localStorage.getItem(authConst.authToken);
  console.log('token' , token);
  this.headers = {
    'Authorization': 'Bearer ' + token
  }

  }


  getStatusUpcoming(): Observable<any>{
    return this.http.get<any>(`${this.auth}/upcoming`, {
      headers: this.headers,
    });
  }
  
}
