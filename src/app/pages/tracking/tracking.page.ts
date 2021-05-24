import { Component, OnInit } from '@angular/core';

import * as L from "leaflet";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon-2x.png'
import {marker} from "leaflet";
import {map, mergeMap} from "rxjs/operators";
import {Patient} from "../../Entity/Patient";
import {PatientService} from "../../services/patient.service";

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
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.showMap();
  }

  showMap(){
    setTimeout(() =>{

      this.map = new L.Map('map', {
        center: [33.892166, 9.561555],
        zoom: 6,
        renderer: L.canvas()
      })


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
                let latLng = {lat: x.location.latitude, lng: x.location.longitude}
                console.log(latLng)
                L.marker(latLng).addTo(this.map);
              }
            })
          })

        )
      })
    ).subscribe();
  }

}
