import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerRegistrationComponent } from './freelancer-registration.component';

describe('FreelancerRegistrationComponent', () => {
  let component: FreelancerRegistrationComponent;
  let fixture: ComponentFixture<FreelancerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
