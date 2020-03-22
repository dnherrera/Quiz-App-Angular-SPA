import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<any>(); //will hold reference to the question that we clicked on and selected.
  questionSelected = this.selectedQuestion.asObservable();  


  constructor(private http: HttpClient) { }

  postQuestion(question) {
    this.http.post('https://localhost:5001/api/questions', question).subscribe(res => {
    })
  }

  putQuestion(question) {
    this.http.put('https://localhost:5001/api/questions/' + question.id, question).subscribe(res => {
    })
  }

  getQuestions() {
    return this.http.get('https://localhost:5001/api/questions')
  }

  //function that will actually set question selected
  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }
}