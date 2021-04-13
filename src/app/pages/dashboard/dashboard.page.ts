import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {PationsPopOverPage} from "../../popovers/pations-pop-over/pations-pop-over.page";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async openPopover(ev) {
    console.log("clicked");
    const popover = await this.popoverController.create({
      component: PationsPopOverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }
}
