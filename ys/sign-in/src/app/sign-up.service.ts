import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url: string;
  constructor(private http: HttpClient) {}
  create(userInfo: UserInfo) {
    console.log(userInfo);
    return this.http.post<UserInfo>(this.url, userInfo)
  }
}
