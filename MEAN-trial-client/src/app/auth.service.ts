import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './interfaces'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiHead: String = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  login(): Observable<any>{
    return this.http.post( this.apiHead + 'login', {
      email: "kakak@ksdm.com",
      password: "123"
    })
    // should set the url in env for security issue
  }

}
