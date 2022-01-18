import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL="https://reqres.in";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url):Observable<any>{
    return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
  }
}