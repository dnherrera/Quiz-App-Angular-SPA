import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-Nav',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">Quiz</button>
      <span style="flex: 1 1 auto;"></span>
      <button mat-button routerLink="/register">Register</button>
      <button mat-button *ngIf="!loggedIn()" routerLink="/login">Login</button>
      <button mat-button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    </mat-toolbar>`,
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout(){
    this.authService.userToken = null;
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
