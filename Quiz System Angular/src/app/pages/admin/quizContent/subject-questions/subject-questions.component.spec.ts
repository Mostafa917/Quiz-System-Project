import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectQuestionsComponent } from './subject-questions.component';

describe('SubjectQuestionsComponent', () => {
  let component: SubjectQuestionsComponent;
  let fixture: ComponentFixture<SubjectQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
