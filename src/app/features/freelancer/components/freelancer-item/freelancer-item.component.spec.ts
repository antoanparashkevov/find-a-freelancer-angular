import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerItemComponent } from './freelancer-item.component';

describe('FreelancerItemComponent', () => {
  let component: FreelancerItemComponent;
  let fixture: ComponentFixture<FreelancerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
