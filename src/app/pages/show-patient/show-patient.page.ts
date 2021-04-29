import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular";
import {Patient} from "../../Entity/Patient";
import {EventDrivenService} from "../../services/event-driven.service";

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.page.html',
  styleUrls: ['./show-patient.page.scss'],
})
export class ShowPatientPage implements OnInit {

patient: Patient;
  constructor(private navParams: NavParams, private eventDriven: EventDrivenService) {
    this.patient = this.navParams.get("patient");
  }

  ngOnInit() {
    // this.eventDriven.sourceEventSubjectObservable.subscribe(data =>{
    //   console.log("workk")
    //   console.log(data)
    // })

    console.log("b gggvg",this.patient)
  }

}
