import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBadgeComponent } from './shared-badge.component';

describe('SharedBadgeComponent', () => {
  let component: SharedBadgeComponent;
  let fixture: ComponentFixture<SharedBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
