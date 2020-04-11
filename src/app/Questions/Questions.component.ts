import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Questions',
  templateUrl: './Questions.component.html',
  styleUrls: ['./Questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionList
  quizId

  constructor(public api: ApiService, private route : ActivatedRoute ) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId')
    if(this.quizId != null){
      this.api.getQuestions(this.quizId)
      .subscribe(res => {this.questionList = res});
    }
  }
}
