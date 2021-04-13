import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TestMapPageRoutingModule } from './test-map-routing.module';

import { TestMapPage } from './test-map.page';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey : "AIzaSyD4mkradLUurkgjN-JjXoSx5eveo0RqkC8"
    }),
    TestMapPageRoutingModule
  ],
  declarations: [TestMapPage]
})
export class TestMapPageModule {}
