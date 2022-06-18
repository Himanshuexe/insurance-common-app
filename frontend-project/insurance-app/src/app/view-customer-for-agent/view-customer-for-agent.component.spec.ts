import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerForAgentComponent } from './view-customer-for-agent.component';

describe('ViewCustomerForAgentComponent', () => {
  let component: ViewCustomerForAgentComponent;
  let fixture: ComponentFixture<ViewCustomerForAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerForAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerForAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
