import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingInsurancePlanComponent } from './adding-insurance-plan.component';

describe('AddingInsurancePlanComponent', () => {
  let component: AddingInsurancePlanComponent;
  let fixture: ComponentFixture<AddingInsurancePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingInsurancePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingInsurancePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
