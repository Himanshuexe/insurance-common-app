import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/services/insurance.service';

@Component({
  selector: 'app-insurance-account-details',
  templateUrl: './insurance-account-details.component.html',
  styleUrls: ['./insurance-account-details.component.css'],
  providers: [InsuranceService]
})
export class InsuranceAccountDetailsComponent implements OnInit {
  insurancePlan: any
  insurancePlanName: string = "";
  noOfYear: string = "";
  profitRatio: string = "";
  amount: string = "";
  months: string = "";
  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";


  title: string = "Insurance Account details";
  constructor(private insuranceService: InsuranceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param: { [x: string]: number; }) => {
      console.log(param['id'])
      this.insuranceService.getInsurancePlanById(param['id']).subscribe(data =>
        this.insurancePlanName = data.name)
    })
    this.insurancePlan = insuranceService.getData()
    // this.insurancePlan = localStorage.getItem('policyData')
    console.log(this.insurancePlan)
  }

  ngOnInit(): void {
  }

  getData() {
    // this.insurancePlan = this.insuranceService.getData()
    // console.log(this.insurancePlan)
  }

  getformData() {


  }
}
