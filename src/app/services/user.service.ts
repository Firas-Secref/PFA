import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../Entity/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrlUser = environment.apiBaseUrlUser;


  constructor(private http: HttpClient) { }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrlUser}/addUser`, user);
  }

  public getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrlUser}/getUser/${id}`);
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrlUser}/updateUser`,user);
  }
}
