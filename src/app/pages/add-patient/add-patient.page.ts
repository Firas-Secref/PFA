import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../Entity/Patient";
import {HttpErrorResponse} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {IonContent, ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AddLocationPage} from "../add-location/add-location.page";
import * as L from "leaflet";
import {Location} from "../../Entity/Location";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import {LocationService} from "../../services/location.service";
import {UserService} from "../../services/user.service";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  imgurl:string;
  map: L.Map;
  dataTest: any
  locationObject: Location;
  latitude: number
  longitude: number
  addPatientForm?: FormGroup;
  locationtId: number;
  selctedFile: File;
  avatar: any;
  BackgroundAvatar: any

  @ViewChild(IonContent, {static: false}) content: IonContent;
  constructor(private fb: FormBuilder, private patientService: PatientService,
              private datePipe: DatePipe, public modal: ModalController,
              private locationService: LocationService, private userService: UserService,
              private camera: Camera, private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.addPatientForm = this.fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      username : ['', [Validators.required]],
      password : ['', [Validators.required]],
      email : ['', [Validators.required]],
      sexe : ['', [Validators.required]],
      birthDate : ['', [Validators.required]],
      ville : ['', [Validators.required]],
      address : ['', [Validators.required]],
      mapLocation: ['', [Validators.required]],
      familyNumber : ['', [Validators.required]],
      phoneNumber : ['', [Validators.required]],
      familyPhoneNumber1 : ['', [Validators.required]],
      familyPhoneNumber2 : ['', [Validators.required]],
    })
  }


  onSubmit() {
   let formData = new FormData();

    console.log(this.locationObject)
    const firstName = this.addPatientForm.get("firstName").value;
    const lastName = this.addPatientForm.get("lastName").value;
    const username = this.addPatientForm.get("username").value;
    const email = this.addPatientForm.get("email").value;
    const sexe = this.addPatientForm.get("sexe").value;
    const birthDate = this.addPatientForm.get("birthDate").value;
    const ville = this.addPatientForm.get("ville").value;
    const address = this.addPatientForm.get("address").value;
    const mapLocation = this.addPatientForm.get("mapLocation").value;
    const familyNumber = this.addPatientForm.get("familyNumber").value;
    const phoneNumber = this.addPatientForm.get("phoneNumber").value;
    const phoneNumber1 = this.addPatientForm.get("familyPhoneNumber1").value;
    const phoneNumber2 = this.addPatientForm.get("familyPhoneNumber2").value;
    const password = this.addPatientForm.get("password").value;

    let patient = new Patient(firstName,lastName,username, email,password, birthDate, sexe, ville,address,
                  phoneNumber,familyNumber,phoneNumber1, phoneNumber2);

    formData.append("imageFile", this.selctedFile);
    formData.append("location", JSON.stringify(this.locationObject));
    formData.append("patient", JSON.stringify(patient));

    this.userService.getUserByUsername(localStorage.getItem("username")).subscribe(data => {
    })


    this.userService.getUserByUsername(localStorage.getItem("username")).pipe(
          mergeMap((data1) =>{
            console.log(data1)
            formData.append("user", JSON.stringify(data1));
            return this.patientService.addPatient(formData).pipe(
              map(data2 =>{
                // console.log(data1)
                console.log(data2)
                this.router.navigateByUrl("dashboard")
              })
            )
          })
    ).subscribe();
  }

  async addLocation() {
    console.log("okk")
    const modal = await this.modal.create({
      component: AddLocationPage,
    });
    modal.onDidDismiss().then((data) =>{
      this.dataTest = data;
      console.log(data.data.location);
      this.locationObject = data.data.location;
      this.addPatientForm.controls["mapLocation"].setValue(data.data.location.latitude + ", "+data.data.location.longitude);
      this.latitude = data.data.location.latitude;
      this.longitude = data.data.location.longitude;
      this.locationtId = data.data.location.id;
    })
    return await modal.present();
  }




  openGalerie() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL

    }).then((res: any)=>{
      this.imgurl ='data:image/jpeg:base64,'+res;
    }).catch(e =>{
      console.log(e)
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
      console.log(s)
    }
  }

  scrollDown() {
    this.content.scrollToBottom();
  }

  getLocation() {

  }

  validateLocation() {

  }
}
