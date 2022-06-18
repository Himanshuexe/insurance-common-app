import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionPlanComponent } from './protection-plan.component';

describe('ProtectionPlanComponent', () => {
  let component: ProtectionPlanComponent;
  let fixture: ComponentFixture<ProtectionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectionPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
