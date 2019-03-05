import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Payload, Note } from './interfaces'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AppService {

  private apiHead: String = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  userRegister(payload: Payload): Observable<any> {
    return this.http.post(this.apiHead + 'register', payload)
  }

  userLogin(payload: Payload): Observable<any> {
    return this.http.post(this.apiHead + 'login', payload)
  }

  getProfile(id:string): Observable<any> {
    const params = new HttpParams().set('searchId', id)
    return this.http.get(this.apiHead + 'profile', { params } )
  }

  getIdFromToken(token: String): string {
    let profile = JSON.parse(window.atob(token.split('.')[1]))
    return profile.id
  }

  updateNote(id:string, notes: Note[]){
    let noteObj = { id, notes }
    return this.http.put(this.apiHead + 'update', noteObj)
  }
}
