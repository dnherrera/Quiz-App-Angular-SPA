import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req, next){
      console.log(req)
      return next.handle(req)
  }
}