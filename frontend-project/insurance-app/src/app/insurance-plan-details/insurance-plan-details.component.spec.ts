import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePlanDetailsComponent } from './insurance-plan-details.component';

describe('InsurancePlanDetailsComponent', () => {
  let component: InsurancePlanDetailsComponent;
  let fixture: ComponentFixture<InsurancePlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
