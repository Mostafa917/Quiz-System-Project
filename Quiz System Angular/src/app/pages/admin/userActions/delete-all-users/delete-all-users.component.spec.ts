import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllUsersComponent } from './delete-all-users.component';

describe('DeleteAllUsersComponent', () => {
  let component: DeleteAllUsersComponent;
  let fixture: ComponentFixture<DeleteAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
