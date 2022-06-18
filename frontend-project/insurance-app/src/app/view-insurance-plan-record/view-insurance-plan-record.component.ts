import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewInsurancePlan',
  templateUrl: './view-insurance-plan-record.component.html',
  styleUrls: ['./view-insurance-plan-record.component.css']
})
export class ViewInsurancePlanRecordComponent implements OnInit {
title:string="View Insurance Plan Records"
insuranceType:string=""
insuranceScheme:string=""
policyMin:number=0
policyMax:number=0
minAge:number=0
maxAge:number=0
sumMin:number=0
sumMax:number=0
profitRatio:number=0
status:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
