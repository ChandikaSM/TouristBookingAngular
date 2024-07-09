import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
 private apiUrl = 'http://10.10.10.136/web'
 
  constructor() { }
}
