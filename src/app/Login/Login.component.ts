import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  model   : any = {};
  constructor(public authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.model);
    this.authService.login(this.model).subscribe(data => {
      this.router.navigate(['/']);
      console.log('Logged in Successfully');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
