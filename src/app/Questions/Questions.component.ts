import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Questions',
  templateUrl: './Questions.component.html',
  styleUrls: ['./Questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question :  any = {};
  questionList
  quizId

  constructor(public api: ApiService, private route : ActivatedRoute ) { }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId');

    this.api.getQuestions(quizId).subscribe(res => {
      this.questionList = res;this.questionList = Array.of(this.questionList); 
    });
  }

}
