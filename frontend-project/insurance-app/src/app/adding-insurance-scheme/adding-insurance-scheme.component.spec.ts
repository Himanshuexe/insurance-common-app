import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingInsuranceSchemeComponent } from './adding-insurance-scheme.component';

describe('AddingInsuranceSchemeComponent', () => {
  let component: AddingInsuranceSchemeComponent;
  let fixture: ComponentFixture<AddingInsuranceSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingInsuranceSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingInsuranceSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
