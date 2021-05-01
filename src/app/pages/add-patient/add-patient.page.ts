import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../Entity/Patient";
import {HttpErrorResponse} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AddLocationPage} from "../add-location/add-location.page";
import * as L from "leaflet";
import {Location} from "../../Entity/Location";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  map: L.Map;
  dataTest: any
  latitude: number
  longitude: number
  addPatientForm?: FormGroup;
  locationtId: number;
  constructor(private fb: FormBuilder, private patientService: PatientService,
              private datePipe: DatePipe, private modal: ModalController, private router: Router,
              private locationService: LocationService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.addPatientForm = this.fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      username : ['', [Validators.required]],
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
    const familyPhoneNumber1 = this.addPatientForm.get("familyPhoneNumber1").value;
    const familyPhoneNumber2 = this.addPatientForm.get("familyPhoneNumber2").value;


let patient = new Patient(firstName,lastName,username,sexe,birthDate,ville,address,
                  familyNumber,phoneNumber,familyPhoneNumber1,familyPhoneNumber2, this.locationtId);



    console.log(patient)

    console.log(this.addPatientForm.get("firstName").value)
    this.patientService.addPatient(patient).subscribe(
      (response: Patient) =>{

        console.log(response);

      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  async addLocation() {
    console.log("okk")
    const modal = await this.modal.create({
      component: AddLocationPage,
      // componentProps: {patientLocation: this.patientLocation}
    });
    modal.onDidDismiss().then((data) =>{
      this.dataTest = data;
      console.log(data.data.location)
      this.addPatientForm.controls["mapLocation"].setValue(data.data.location.latitude + ", "+data.data.location.longitude);
      this.latitude = data.data.location.latitude;
      this.longitude = data.data.location.longitude;
      this.locationtId = data.data.location.id;
    })
    return await modal.present();
  }
}
