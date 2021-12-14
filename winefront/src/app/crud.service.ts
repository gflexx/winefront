import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Wine } from './wine.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  readonly APIurl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  // get all wines available
  getWinesAll():Observable<any>{
    return this.http.get(this.APIurl + 'wines/get/all');
  }

  //  get wine by passing id
  getWine(id: number):Observable<Wine>{
    return this.http.get(this.APIurl + 'wines/get/' + id);
  }

  deleteWine(id: number):Observable<any>{
    return this.http.delete(this.APIurl + 'wines/update/destroy/' + id);
  }

  updateWine(id: number, data: any):Observable<any>{
    return this.http.put(this.APIurl + 'wines/update/destroy/' + id, data);
  }

  createWine(data: any):Observable<any>{
    return this.http.post(this.APIurl + 'wines/create', data);
  }

}
