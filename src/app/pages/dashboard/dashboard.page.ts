import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, PopoverController} from "@ionic/angular";
import {PationsPopOverPage} from "../../popovers/pations-pop-over/pations-pop-over.page";
import {AddPatientPage} from "../add-patient/add-patient.page";
import {EventDrivenService} from "../../services/event-driven.service";
import {ActionEvent, AppDataState, DataStateEnum, PatientActionsType} from "../../states/State";
import {PatientService} from "../../services/patient.service";
import {Observable, of} from "rxjs";
import {Patient} from "../../Entity/Patient";
import {catchError, filter, map, mergeMap, startWith} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {ShowPatientPage} from "../show-patient/show-patient.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{

  patients: Patient[] = [];
  constructor(private popoverController: PopoverController, private modal: ModalController,
              private eventDriven: EventDrivenService, private patientService: PatientService,
              private alert: AlertController, private router: Router) { }

  ngOnInit() {
    console.log(this.patients)
    this.getAllPatients2();
  }


  async openPopover(ev, patient) {
    this.eventDriven.publishEvent(patient);
    console.log("clicked",ev);
    const popover = await this.popoverController.create({
      component: PationsPopOverPage,
      componentProps:{
        patient: patient
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,

    });
    await popover.present();
    console.log(patient)
    popover.onDidDismiss().then(()=>{
      this.getAllPatients2();
    })
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }

  addPatient() {
    console.log("okk")
    this.router.navigateByUrl("add-patient");
  }

  getAllPatients2(){
    console.log("aaa",this.patients)
    this.patientService.getUserId(localStorage.getItem("username")).pipe(
      mergeMap((data1)=>{
        console.log(data1)
        return this.patientService.getPatients().pipe(
          map(data2 =>{
            console.log(data2)
            data2.forEach((x: any)=>{
              console.log(x.user.id)
              if (x.user.id == data1){
                this.patients.push(x)
              }
            })
          })

        )
      })
    ).subscribe();
  }

  // const getPatient = (pat: Patient)=>{ pat.user = }

  // getAllPatient(){
  //   this.patientService.getPatients().subscribe((response: Patient[])=>{
  //     this.patients = response;
  //       console.log(response[1].user)
  //     this.patients.filter(()=>{
  //       this.patients.forEach((x)=>{
  //         if (x.user == 2)
  //           console.log("qqq",x.username)
  //       })
  //     })
  //     console.log(this.patients);
  //     // this.patients.filter(filterByUsername())
  //   },(error: HttpErrorResponse) =>
  //     alert(error.message)
  //     )
  // }



}
