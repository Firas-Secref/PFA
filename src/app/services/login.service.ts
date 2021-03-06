import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUser = environment.loginUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public login(formData: FormData):Observable<any>{
    return this.http.post<FormData>(`${this.loginUser}`, formData)
  }

  loggedIn(){
    return !!localStorage.getItem("username");
  }

}
