import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { QuestionComponent } from './Question/Question.component';
import { QuestionsComponent } from './Questions/Questions.component';
import { HomeComponent } from './Home/Home.component';
import { NavComponent } from './Nav/Nav.component';
import { QuizComponent } from './Quiz/Quiz.component';
import { QuizzesComponent } from './Quizzes/Quizzes.component';
import { RegisterComponent } from './Register/Register.component';

import { ApiService } from './_service/api.service';
import { AuthService } from './_service/auth.service';
import { AuthInterceptor } from './_service/auth.interceptor';
import { LoginComponent } from './Login/Login.component';


const routes = [
   {  path: '', component: HomeComponent },
   {  path: 'question', component: QuestionComponent },
   {  path: 'question/:quizId', component: QuestionComponent },
   {  path: 'register', component: RegisterComponent },
   {  path: 'login', component: LoginComponent },
   {  path: 'quiz', component: QuizComponent },
   {  path: 'quizzes', component: QuizzesComponent }
]
@NgModule({
   declarations: [
      AppComponent,
      QuestionComponent,
      QuestionsComponent,
      HomeComponent,
      NavComponent,
      QuizComponent,
      QuizzesComponent,
      RegisterComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatToolbarModule
   ],
   providers: [
      ApiService,
      AuthService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
