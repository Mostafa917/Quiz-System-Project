import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelSubjectComponent } from './del-subject.component';

describe('DelSubjectComponent', () => {
  let component: DelSubjectComponent;
  let fixture: ComponentFixture<DelSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
