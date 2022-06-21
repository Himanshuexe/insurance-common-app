import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommissionForAgentComponent } from './view-commission-for-agent.component';

describe('ViewCommissionForAgentComponent', () => {
  let component: ViewCommissionForAgentComponent;
  let fixture: ComponentFixture<ViewCommissionForAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommissionForAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommissionForAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
