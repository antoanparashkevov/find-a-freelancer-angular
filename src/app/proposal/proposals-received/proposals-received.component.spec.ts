import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsReceivedComponent } from './proposals-received.component';

describe('ProposalsReceivedComponent', () => {
  let component: ProposalsReceivedComponent;
  let fixture: ComponentFixture<ProposalsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalsReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
