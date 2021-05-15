import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;
  constructor() { }

  login(){

  }

  logout(){
    this.authenticated = false
  }

  loggedIn(){
    return !!localStorage.getItem("username");
  }
}
