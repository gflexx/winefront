import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  readonly APIurl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getWinesAll():Observable<any>{
    return this.http.get(this.APIurl + 'wines/get/all');
  }

  getWine(id: number):Observable<any>{
    return this.http.get(this.APIurl + 'wines/get/' + id);
  }

}
