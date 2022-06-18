import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommissionWithdrawalComponent } from './view-commission-withdrawal.component';

describe('ViewCommissionWithdrawalComponent', () => {
  let component: ViewCommissionWithdrawalComponent;
  let fixture: ComponentFixture<ViewCommissionWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommissionWithdrawalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommissionWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
