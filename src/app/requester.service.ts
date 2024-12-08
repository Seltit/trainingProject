import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './types/stock';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) { }



  get(url: string, options: object) {

    url = environment.mainUrl + 'classes/products'
    return this.http.get<Stock[]>(url, options);

  }
  /*post = (mainUrl: string, data: object) => request('post', url, data);
  put = (mainUrl: string, data: object) => request('put', url, data);
  del = (mainUrl: string) => request('delete', url);*/
}
