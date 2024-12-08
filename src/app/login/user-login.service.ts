import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  loginUser(url: string, data: {}, options: {}) {

    const resp = this.http.post<User[]>(url, data, options);
    console.log(resp);

    return resp


  }


}
