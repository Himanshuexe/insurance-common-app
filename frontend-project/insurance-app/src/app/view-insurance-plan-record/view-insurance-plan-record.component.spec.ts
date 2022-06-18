import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsurancePlanRecordComponent } from './view-insurance-plan-record.component';

describe('ViewInsurancePlanRecordComponent', () => {
  let component: ViewInsurancePlanRecordComponent;
  let fixture: ComponentFixture<ViewInsurancePlanRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsurancePlanRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInsurancePlanRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
