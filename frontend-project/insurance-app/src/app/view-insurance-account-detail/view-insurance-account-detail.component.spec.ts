import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail.component';

describe('ViewInsuranceAccountDetailComponent', () => {
  let component: ViewInsuranceAccountDetailComponent;
  let fixture: ComponentFixture<ViewInsuranceAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsuranceAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInsuranceAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
