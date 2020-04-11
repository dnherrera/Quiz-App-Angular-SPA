import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'https://localhost:5001/api/auth/';
userToken: any;

options = {
  headers: new HttpHeaders().append('content-type', 'application/json')
}

constructor(private http: HttpClient, private router : Router) { }

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model, this.options).pipe(catchError(this.handleError));
}

login(model: any) {
  return this.http
  .post(this.baseUrl + 'login', model, this.options)
  .pipe(map((response:any) => {
    const user  = response
    if(user) {
      localStorage.setItem('token', user.tokenString);
      this.userToken = user.tokenString;
    }
  }))
  .pipe(catchError(this.handleError));
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}



private handleError(error: any) {
  const applicationError = error.headers.get('Application-Error');
  if (applicationError) {
    return Observable.throw(applicationError);
  }
  const serverError = error;
  let modelStateErrors = '';
  if (serverError) {
    for (const key in serverError) {
      if (serverError[key]) {
        modelStateErrors += serverError[key] + '\n';
      }
    }
  }
  return throwError(
    modelStateErrors || 'Server error'
  );
}




}


