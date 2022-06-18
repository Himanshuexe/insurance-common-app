import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyPaymentForAgentComponent } from './view-policy-payment-for-agent.component';

describe('ViewPolicyPaymentForAgentComponent', () => {
  let component: ViewPolicyPaymentForAgentComponent;
  let fixture: ComponentFixture<ViewPolicyPaymentForAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyPaymentForAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPolicyPaymentForAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
