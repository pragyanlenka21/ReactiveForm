import { HttpClient, HttpParams } from '@angular/common/http';
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

  getProducts(): Observable<any> {
    let params = new HttpParams()
    .set('limit', '100');

    const apiUrl = 'https://dummyjson.com/products';
    return this.http.get(apiUrl,{ params: params});
  }

  getProductBySearch(search:any): Observable<any> {
    let params = new HttpParams()
    .set('q', search);

    const apiUrl = 'https://dummyjson.com/products/search';
    return this.http.get(apiUrl,{ params: params});
  }

   getProductByCategories(category:any) {
    const apiUrl = 'https://dummyjson.com/products/category/' + category;
    return this.http.get(apiUrl);
  }

  getCategory(): Observable<any> {
    const apiUrl = 'https://dummyjson.com/products/categories';
    return this.http.get(apiUrl);
  }

}
