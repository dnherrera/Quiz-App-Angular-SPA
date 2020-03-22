import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-Questions',
  templateUrl: './Questions.component.html',
  styleUrls: ['./Questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question :  any = {};
  questionList

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getQuestions().subscribe(res => {
      this.questionList = res
    });
  }

}
