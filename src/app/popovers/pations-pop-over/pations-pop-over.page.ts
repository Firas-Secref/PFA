import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-pations-pop-over',
  templateUrl: './pations-pop-over.page.html',
  styleUrls: ['./pations-pop-over.page.scss'],
})
export class PationsPopOverPage implements OnInit {

  constructor(private popoverCntroller: PopoverController) { }

  ngOnInit() {
  }

}
