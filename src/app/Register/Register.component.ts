import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  form : any;
  constructor(private fb: FormBuilder, public authService : AuthService) { 
    this.form = fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(res => {
    });
  }

}
