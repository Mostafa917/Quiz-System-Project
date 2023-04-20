import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelAllSubjectsComponent } from './del-all-subjects.component';

describe('DelAllSubjectsComponent', () => {
  let component: DelAllSubjectsComponent;
  let fixture: ComponentFixture<DelAllSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelAllSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelAllSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
