import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon-2x.png'
import {marker} from "leaflet";
import {ModalController, NavParams} from "@ionic/angular";
import {Location} from "../../Entity/Location";
import {LocationService} from "../../services/location.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {

  map: L.Map;
  position: any;
  posMarker: any;
  newMarker: any;
  constructor(private geolocation: Geolocation, private navParams: NavParams,
              private modal: ModalController, private locationService: LocationService) {
  }

  ngOnInit() {
    this.showMap();
  }

  getLocation() {
    this.geolocation.getCurrentPosition({enableHighAccuracy: true})
      .then(pos =>{
        this.position = [
          pos.coords.latitude,
          pos.coords.longitude
        ];
      }).then(pos =>{
      console.log(this.position)
      this.showMarker(this.position)
    })
      .catch(e =>{alert(JSON.stringify(e))})
  }

  showMap(){
    setTimeout(()=>{

      this.map = new L.Map('map', {
        center: [33.892166, 9.561555],
        zoom: 7,
        renderer: L.canvas()
      })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '£copy: <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a>'
      }).addTo(this.map)

      this.map.invalidateSize();

      this.map.on("click", <LeafletMouseEvent>(event) => {
        // get the coordinates
        this.newMarker = L.marker(event.latlng, {draggable : true}).addTo(this.map);
        const c =  L.circle(event.latlng, {
          color: 'red',
          radius: 350,
          fillColor: 'red',
          opacity: 0.5
        }).addTo(this.map)
      });

    },1000)
  }

  showMarker(pos){
    this.posMarker = L.marker(pos);
    this.posMarker.addTo(this.map)
      .bindPopup("hey im here")

    console.log(this.posMarker.getLatLng().lat)
  }

  validateLocation(){

    let   patientLocation:Location = {id: null, latitude: null, longitude: null, radius: null};

    patientLocation.latitude = this.newMarker.getLatLng().lat;
    patientLocation.longitude = this.newMarker.getLatLng().lng;
    patientLocation.radius = 350;

    this.locationService.addLocation(patientLocation).subscribe((response: Location) =>{
      console.log(response.id)
      patientLocation.id = response.id;
    },
    (error: HttpErrorResponse) => {
      alert(error.message)
    })

    this.modal.dismiss({
      location : patientLocation
    })
  }
}
