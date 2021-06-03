import { Component, OnInit } from '@angular/core';

import * as L from "leaflet";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon-2x.png'
import {marker} from "leaflet";
import {map, mergeMap} from "rxjs/operators";
import {Patient} from "../../Entity/Patient";
import {PatientService} from "../../services/patient.service";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Markers} from "../../Entity/Marker";
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  map: L.Map;
  position: any;
  posMarker: any;
  newMarker: any;
  patients: Patient[] = [];
  greetings: string[] = [];
  stompClient = null;
  disabled = true;
  markers: Markers[] = [];
  markerGroup: any

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.showMap();
    this.startTracking();


  }

  showMap(){
    setTimeout(() =>{

      this.map = new L.Map('map', {
        center: [33.892166, 9.561555],
        zoom: 6,
        renderer: L.canvas()
      })

      this.markerGroup = L.layerGroup().addTo(this.map);
      this.getAllPatients2();

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '£copy: <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a>'
      }).addTo(this.map)

      this.map.invalidateSize();

      // this.map.on("click", <LeafletMouseEvent>(event) => {
      //   // get the coordinates
      //   console.log(event.latlng)
      //   this.newMarker = L.marker(event.latlng, {draggable : true}).addTo(this.map);
      // });

    },1500)
  }

  getAllPatients2(){
    //recperer l'id de l'admin pour recuperer ses patients
    this.patientService.getUserId(localStorage.getItem("username")).pipe(
      mergeMap((data1)=>{
        return this.patientService.getMyPatients(data1).pipe(
          map(data2 =>{
            data2.forEach((x: any)=>{
                let latLng = {patientId:""+x.id, lat: x.location.latitude, lng: x.location.longitude}
                this.markers.push(latLng)
            })
            this.displayPatients(this.markers)
            console.log(this.markers)
          })

        )
      })
    ).subscribe();
  }

  displayPatients(list: Markers[]){
    if(this.markerGroup != null){
      this.map.removeLayer(this.markerGroup)
    }
    this.markerGroup = L.layerGroup().addTo(this.map);
    list.forEach((m: any) =>{
      L.marker(m).addTo(this.markerGroup);
    })
  }


  startTracking() {
    console.log("first",this.markers)
    this.markers.push({patientId:""+3, lat: 7.23, lng: 8.45})
    console.log(this.markers)
    const socket = new SockJS('http://localhost:8080/pfa-stomp-endpoint');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, (frame)=> {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/loc', (hello)=> {
        // _this.showGreeting(JSON.parse(hello.body).greeting);
        // this.markers.push(JSON.parse(hello.body))
        console.log("before", this.markers);

        for(var x in this.markers){
          if (this.markers[x].patientId == JSON.parse(hello.body).patientId){
            console.log(x)
            this.markers[x].lat = JSON.parse(hello.body).latitude;
            this.markers[x].lng = JSON.parse(hello.body).longitude
          }
        }
        console.log("after", this.markers);
        this.displayPatients(this.markers)

        console.log('latitude',JSON.parse(hello.body).latitude)

        console.log('latitude',JSON.parse(hello.body))

        console.log('longitude',JSON.parse(hello.body).longitude)
        console.log('id',JSON.parse(hello.body).patientId)
      });
    });
  }

  startTracking2() {
    const socket = new SockJS('http://localhost:8080/pfa-stomp-endpoint');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, (frame)=> {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/loc', (hello)=> {
        // _this.showGreeting(JSON.parse(hello.body).greeting);
        console.log('latitude',JSON.parse(hello.body).latitude)
        console.log('longitude',JSON.parse(hello.body).longitude)
        console.log('id',JSON.parse(hello.body).patientId)
      });
    });
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }


}
