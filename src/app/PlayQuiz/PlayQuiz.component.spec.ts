/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayQuizComponent } from './PlayQuiz.component';

describe('PlayQuizComponent', () => {
  let component: PlayQuizComponent;
  let fixture: ComponentFixture<PlayQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
