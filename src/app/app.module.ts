import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { ApiService } from './_service/api.service';

const routes = [
   {  path: '', component: HomeComponent },
   {  path: 'question', component: QuestionComponent },
   {  path: 'question/:quizId', component: QuestionComponent },
   {  path: 'questions', component: QuestionsComponent },
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
      QuizzesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatListModule,
      MatToolbarModule
   ],
   providers: [
      ApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
