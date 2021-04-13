import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PationsPopOverPageRoutingModule } from './pations-pop-over-routing.module';

import { PationsPopOverPage } from './pations-pop-over.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PationsPopOverPageRoutingModule
  ],
  declarations: [PationsPopOverPage]
})
export class PationsPopOverPageModule {}
