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
  selctedFile: File;
  avatar: any;
  formData = new FormData();
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    })
  }

  onSubmit(){
    const firstName = this.form.get("firstName").value;
    const lastName = this.form.get("lastName").value;
    const username = this.form.get("username").value;
    const password = this.form.get("password").value;
    const sexe = this.form.get("sexe").value;
    const birthDate = this.form.get("birthDate").value;
    const ville = this.form.get("ville").value;
    const address = this.form.get("address").value;
    const email = this.form.get("email").value;
    const phoneNumber = this.form.get("phoneNumber").value;

    console.log(username)
    let user = new User(firstName, lastName, username, sexe, birthDate, ville, address, email, phoneNumber, password);
    console.log(user)
    this.formData.append("user", JSON.stringify(user));
    this.formData.append("file", this.selctedFile);

    console.log(JSON.stringify(user))
    this.userService.addUser(this.formData).subscribe((data: FormData) =>{
      console.log(data)
    },
      (error: HttpErrorResponse) =>{
      alert(error.message)
      })
  }

  onFileChanged(event) {
    let  fileIn = document.getElementById("fileInput");
    this.selctedFile = event.target.files[0];
    console.log(this.selctedFile)
    const reader = new FileReader();
    reader.readAsDataURL(this.selctedFile);
    reader.onload = ()=>{
      this.avatar = reader.result;
      const s = this.avatar;
      fileIn.style.backgroundImage = 'url("'+s+'")';
    }
  }
}
