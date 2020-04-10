import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Question',
  templateUrl: './Question.component.html',
  styleUrls: ['./Question.component.css']
})
export class QuestionComponent implements OnInit {
  title='my App';
  question : any = {}; 
  quizId

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId')
    console.log(this.quizId)
    this.api.questionSelected.subscribe(question => this.question = question)
  }

  post(question){
   question.quizId = Number(this.quizId)
   this.api.postQuestion(question);
  }
}
