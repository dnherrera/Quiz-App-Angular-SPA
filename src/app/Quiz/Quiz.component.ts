import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz : any = {}

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz)
  }

}
