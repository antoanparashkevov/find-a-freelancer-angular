import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersListComponent } from './freelancers-list.component';

describe('FreelancersListComponent', () => {
  let component: FreelancersListComponent;
  let fixture: ComponentFixture<FreelancersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
