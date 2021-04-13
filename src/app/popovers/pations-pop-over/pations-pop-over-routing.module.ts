import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PationsPopOverPage } from './pations-pop-over.page';

const routes: Routes = [
  {
    path: '',
    component: PationsPopOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PationsPopOverPageRoutingModule {}
