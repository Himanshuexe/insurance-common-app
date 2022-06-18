import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyClaimComponent } from './view-policy-claim.component';

describe('ViewPolicyClaimComponent', () => {
  let component: ViewPolicyClaimComponent;
  let fixture: ComponentFixture<ViewPolicyClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPolicyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
