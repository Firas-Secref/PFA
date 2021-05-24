import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientInterfacePageRoutingModule } from './patient-interface-routing.module';

import { PatientInterfacePage } from './patient-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientInterfacePageRoutingModule
  ],
  declarations: [PatientInterfacePage]
})
export class PatientInterfacePageModule {}
