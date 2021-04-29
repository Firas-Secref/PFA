import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onPress(event: CustomEvent) {
    console.log(event.detail.value);
  }
}
