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

}
