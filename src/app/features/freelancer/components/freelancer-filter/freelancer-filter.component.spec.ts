import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerFilterComponent } from './freelancer-filter.component';

describe('FreelancerFilterComponent', () => {
  let component: FreelancerFilterComponent;
  let fixture: ComponentFixture<FreelancerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
