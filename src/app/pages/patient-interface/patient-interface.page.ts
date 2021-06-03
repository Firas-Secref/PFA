import { Component, OnInit } from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation/ngx";


import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-interface',
  templateUrl: './patient-interface.page.html',
  styleUrls: ['./patient-interface.page.scss'],
})
export class PatientInterfacePage implements OnInit {

  private stompClient = null;
  disabled = true;
  greetings: string[] = [];
  name: any;

  constructor(private geolocation: Geolocation, private patientService: PatientService) { }

  ngOnInit() {
    this.connect();
  }

  start() {

  }

  connect() {
    const socket = new SockJS('http://localhost:8080/pfa-stomp-endpoint');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      // _this.stompClient.subscribe('/topic/loc', function (hello) {
      //   _this.showGreeting(JSON.parse(hello.body).greeting);
      //   console.log('kskks',JSON.parse(hello.body).greeting)
      //   console.log('aaaa',JSON.parse(hello.body).lat)
      //
      // });
    });
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  sendCurrentPosition(lat: number, lng: number) {
    this.patientService.getPatientId(localStorage.getItem("username")).subscribe((data: number) =>{
      let patientId = data;
      this.stompClient.send(
        '/pfa/location',
        {},
        JSON.stringify(
          { 'latitude': lat,
                  'longitude': lng,
                  'patientId': patientId
                }
        )
      );
    })

  }

  showGreeting(message) {
    this.greetings.push(message);
  }

  watchPosition(){
    const subscription = this.geolocation.watchPosition()
      .subscribe((position: any) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.log(lat)
        this.sendCurrentPosition(lat, lng);
      });
  }

}
