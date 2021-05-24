import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientInterfacePage } from './patient-interface.page';

const routes: Routes = [
  {
    path: '',
    component: PatientInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientInterfacePageRoutingModule {}
