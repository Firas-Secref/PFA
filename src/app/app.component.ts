import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Patients', url: 'dashboard', icon: 'people' },
    { title: 'Current Positions', url: 'tracking', icon: 'map' },
    { title: 'Profile', url: 'show-profile', icon: 'person-circle' }
  ];
  constructor(private router: Router) {}


  logOut() {
    this.router.navigate(["login"]);
    localStorage.removeItem("username");
  }
}
