import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../Entity/login";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  formData = new FormData();
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  logIn() {
    console.log(this.loginForm.value)
    let loginUser = new Login(this.loginForm.get("username").value, this.loginForm.get("password").value);
    this.formData.append("loginUser", JSON.stringify(loginUser))
    this.loginService.login(this.formData).subscribe((data)=>{
      console.log(data);
      if(data){
        localStorage.setItem("username", this.loginForm.get("username").value);
        this.router.navigateByUrl("dashboard")
      }
    },
      error => alert(error.message))
    this.formData.delete("loginUser");
  }
}
