import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-Quizzes',
  templateUrl: './Quizzes.component.html',
  styleUrls: ['./Quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizList
  constructor(public api : ApiService) { }

  ngOnInit() {
    this.api.getQuizzes().subscribe(res => {
      this.quizList = res
    });
  }
}