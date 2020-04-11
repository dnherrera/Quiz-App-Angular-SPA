import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  questionsBaseUrl = 'https://localhost:5001/api/questions/';
  quizzesBaseUrl = 'https://localhost:5001/api/quizzes/';

  private selectedQuestion = new Subject<any>(); //will hold reference to the question that we clicked on and selected.
  questionSelected = this.selectedQuestion.asObservable();  

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  constructor(private http: HttpClient) {}

  postQuestion(question) {
    this.http.post(this.questionsBaseUrl, question).subscribe(res => {
    })
  }

  putQuestion(question) {
    this.http.put(this.questionsBaseUrl + question.id, question).subscribe(res => {
    })
  }

  getQuestions(quizId) {
    return this.http.get(this.questionsBaseUrl + quizId)
  }

  //function that will actually set question selected
  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  postQuiz(quiz) {
    this.http.post(this.quizzesBaseUrl, quiz, { 'headers': this.jwt() }).subscribe(res => {
    })
  }

  getQuizzes() {
    return this.http
      .get(this.quizzesBaseUrl, { 'headers': this.jwt() })
  }

  getAllQuizzes() {
    return this.http
      .get(this.quizzesBaseUrl + 'all')
  }

  putQuiz(quiz) {
    this.http.put(this.quizzesBaseUrl + quiz.id, quiz).subscribe(res => {
    })
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

  private jwt() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + token);
      return headers
    }
  }

}