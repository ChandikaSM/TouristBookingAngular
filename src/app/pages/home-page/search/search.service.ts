import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  getSearchResult(urlParam: any): Observable<any> {
    return this.http.get<any>('http://10.10.10.114/web/search', {
      params: urlParam,
    });
  }
}
