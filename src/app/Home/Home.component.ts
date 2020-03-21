import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  template: '<app-Question></app-Question><app-Questions></app-Questions>',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
