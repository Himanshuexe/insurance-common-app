import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/services/insurance.service';

@Component({
  selector: 'viewInsurancePlan',
  templateUrl: './view-insurance-plan-record.component.html',
  styleUrls: ['./view-insurance-plan-record.component.css'],
  providers: [InsuranceService]
})
export class ViewInsurancePlanRecordComponent implements OnInit {
  title: string = "View Insurance Plan Records"
  insuranceType: string = ""
  insuranceScheme: string = ""
  policyMin: number = 0
  policyMax: number = 0
  minAge: number = 0
  maxAge: number = 0
  sumMin: number = 0
  sumMax: number = 0
  profitRatio: number = 0
  status: string = ""
  insuranceTypes: any[] = []
  constructor(private insuranceService: InsuranceService) {
    this.getInsuranceRecords()
  }

  ngOnInit(): void {
  }

  getInsuranceRecords() {
    this.insuranceService.getInsurnacePlanList().subscribe(data => {
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.insuranceTypes.push(el)
      })
    })
  }
}
