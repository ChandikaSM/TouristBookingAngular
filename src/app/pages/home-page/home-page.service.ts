import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Interface} from "./interface";


@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private apiUrl = "http://10.10.10.114/web/spots";


  constructor(private http: HttpClient) { }
 
}
