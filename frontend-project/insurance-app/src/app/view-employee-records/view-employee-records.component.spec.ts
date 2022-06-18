import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeRecordsComponent } from './view-employee-records.component';

describe('ViewEmployeeRecordsComponent', () => {
  let component: ViewEmployeeRecordsComponent;
  let fixture: ComponentFixture<ViewEmployeeRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
