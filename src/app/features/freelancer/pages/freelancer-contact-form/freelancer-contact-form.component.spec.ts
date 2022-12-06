import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerContactFormComponent } from './freelancer-contact-form.component';

describe('FreelancerContactFormComponent', () => {
  let component: FreelancerContactFormComponent;
  let fixture: ComponentFixture<FreelancerContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
