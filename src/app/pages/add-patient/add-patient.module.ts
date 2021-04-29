import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatientPageRoutingModule } from './add-patient-routing.module';

import { AddPatientPage } from './add-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatientPageRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddPatientPage
  ],
  declarations: [AddPatientPage]
})
export class AddPatientPageModule {}
