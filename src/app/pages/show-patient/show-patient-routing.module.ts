import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPatientPage } from './show-patient.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPatientPageRoutingModule {}
