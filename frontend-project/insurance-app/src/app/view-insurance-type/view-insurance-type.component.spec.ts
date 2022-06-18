import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsuranceTypeComponent } from './view-insurance-type.component';

describe('ViewInsuranceTypeComponent', () => {
  let component: ViewInsuranceTypeComponent;
  let fixture: ComponentFixture<ViewInsuranceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsuranceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInsuranceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
