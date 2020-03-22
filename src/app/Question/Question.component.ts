import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-Question',
  templateUrl: './Question.component.html',
  styleUrls: ['./Question.component.css']
})
export class QuestionComponent implements OnInit {
  title='my App';
  question : any = {};
  
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.questionSelected.subscribe(question => this.question = question)
  }

  post(question){
   this.api.postQuestion(question);
  }
}
