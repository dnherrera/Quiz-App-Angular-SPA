import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  template: '<app-Quiz></app-Quiz><app-Quizzes></app-Quizzes>',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
