import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavParams, PopoverController} from "@ionic/angular";
import {ShowPatientPage} from "../../pages/show-patient/show-patient.page";
import {EventDrivenService} from "../../services/event-driven.service";
import {Patient} from "../../Entity/Patient";
import {log} from "util";
import {PatientService} from "../../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-pations-pop-over',
  templateUrl: './pations-pop-over.page.html',
  styleUrls: ['./pations-pop-over.page.scss'],
})
export class PationsPopOverPage implements OnInit {

  patient?: Patient;
  patients?: Patient[];
  constructor(private popoverCntroller: PopoverController, private navParams: NavParams,
              private modal: ModalController, private eventDriven: EventDrivenService,
              private alert: AlertController, private patientService: PatientService) { }

  ngOnInit() {
    console.log(this.patient.id)
  }

  tess() {
    console.log("okk")
    console.log(this.navParams.get("patient"))
  }

  async openShowPatientModal(){
    const modal = await this.modal.create({
      component: ShowPatientPage,
      componentProps: {
        patient : this.navParams.get("patient")
      }
    });
    return await modal.present();
  }
  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: 'Are you sure you want to delete this patient !?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            // console.log("enter", this.patient.id)
            this.patientService.deletePatient(this.patient.id).subscribe((response)=>{
              console.log(response);
            }, (error: HttpErrorResponse) =>
            console.log(error.message))
            this.popoverCntroller.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

  getAllPatient(){
    this.patientService.getPatients().subscribe((response: Patient[])=>{
        this.patients = response;
        console.log(response);
      },(error: HttpErrorResponse) =>
        alert(error.message)
    )
  }

}
