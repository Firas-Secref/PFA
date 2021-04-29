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

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  map: L.Map;
  patientLocation: Location;
  addPatientForm?: FormGroup;
  constructor(private fb: FormBuilder, private patientService: PatientService,
              private datePipe: DatePipe, private modal: ModalController, private router: Router) { }

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
    console.log(this.addPatientForm.value)
    this.patientService.addPatient(this.addPatientForm.value).subscribe(
      (response: Patient) =>{
        console.log(response);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
    this.modal.dismiss({
      'dismissed' : true
    })
  }

  async addLocation() {
    console.log("okk")
    const modal = await this.modal.create({
      component: AddLocationPage,
      // componentProps: {patientLocation: this.patientLocation}
    });
    modal.onDidDismiss().then((data) =>{
      console.log(data.data.location)
      this.addPatientForm.controls["mapLocation"].setValue(data.data.location.latitude + ", "+data.data.location.longitude);
    })
    return await modal.present();
  }
}
