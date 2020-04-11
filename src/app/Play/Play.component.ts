import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-Play',
  templateUrl: './Play.component.html',
  styleUrls: ['./Play.component.css']
})
export class PlayComponent implements OnInit {

  quizList
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getAllQuizzes()
      .subscribe(res => {this.quizList = res});
  }

}
