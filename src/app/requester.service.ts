import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment.development';
import { Stock } from './types/stock';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) { }



  get(url: string, options: object) {

    url = environment.mainUrl + 'classes/products'
    return this.http.get<Stock[]>(url, options);

  }
}
