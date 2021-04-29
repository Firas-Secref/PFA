import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AgmCoreModule} from "@agm/core";
import {HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {Geolocation} from "@ionic-native/geolocation/ngx";




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AgmCoreModule, HttpClientModule, ReactiveFormsModule],
  providers: [Geolocation,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, DatePipe],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
