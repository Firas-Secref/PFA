import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPatientPageRoutingModule } from './show-patient-routing.module';

import { ShowPatientPage } from './show-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPatientPageRoutingModule
  ],
  declarations: [ShowPatientPage]
})
export class ShowPatientPageModule {}
