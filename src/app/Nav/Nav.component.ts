import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Nav',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/" *ngIf="loggedIn()">My Quiz</button>
      <button mat-button routerLink="/play">Play</button>
      <span style="flex: 1 1 auto;"></span>
      <button mat-button *ngIf="!loggedIn()" routerLink="/register">Register</button>
      <button mat-button *ngIf="!loggedIn()" routerLink="/login">Login</button>
      <button mat-button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    </mat-toolbar>`,
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  mySubscription: any;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
   
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout(){
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.router.navigate(['/play']);
    console.log('Logged out');
  }

}
