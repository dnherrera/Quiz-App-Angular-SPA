import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  model   : any = {};
  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.model);
    this.authService.login(this.model).subscribe(data => {
      console.log('Logged in Successfully');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
