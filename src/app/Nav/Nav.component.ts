import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nav',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">Quiz</button>
      <button mat-button routerLink="/question">Question</button>
      <button mat-button routerLink="/questions">Question List</button>
    </mat-toolbar>`,
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
