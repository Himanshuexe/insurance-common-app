import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgentInsuranceAccountComponent } from './view-agent-insurance-account.component';

describe('ViewAgentInsuranceAccountComponent', () => {
  let component: ViewAgentInsuranceAccountComponent;
  let fixture: ComponentFixture<ViewAgentInsuranceAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAgentInsuranceAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgentInsuranceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
