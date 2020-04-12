import { Iperson } from './http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  private url:string = '/assets/data.json';
  getData() : Observable<Iperson[]> {
    return this.http.get<Iperson[]>(this.url);
  }
}
