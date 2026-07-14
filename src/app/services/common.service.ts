import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    const apiUrl = 'https://dummyjson.com/posts';
    return this.http.get(apiUrl);
  }

}
