import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class NotesService {

  private apiHead: String = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any>{
    return this.http.get ( this.apiHead + 'profile' )
    // should set the url in env for security issue
  }

}
