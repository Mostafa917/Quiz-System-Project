import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingAdminRequestsComponent } from './managing-admin-requests.component';

describe('ManagingAdminRequestsComponent', () => {
  let component: ManagingAdminRequestsComponent;
  let fixture: ComponentFixture<ManagingAdminRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagingAdminRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagingAdminRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
