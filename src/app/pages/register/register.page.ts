import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../Entity/User";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    })
  }

  onSubmit(){

    console.log(this.form.value)
    this.userService.addUser(this.form.value).subscribe((data: User) =>{
      console.log(data)
    },
      (error: HttpErrorResponse) =>{
      alert(error.message)
      })
  }

}
