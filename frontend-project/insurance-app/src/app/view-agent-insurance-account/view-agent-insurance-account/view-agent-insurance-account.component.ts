import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'InsuranceAccountForAgent',
  templateUrl: './view-agent-insurance-account.component.html',
  styleUrls: ['./view-agent-insurance-account.component.css']
})
export class ViewAgentInsuranceAccountComponent implements OnInit {
  title:string = "View Insurance Account Details"
  customer: string="";
  accountNo : string = "";
  insuranceType: string = "";
  insuranceScheme: string = "";
  dateCreate:string = "";
  maturityDate:string="";
  premiumType:string = "";
  totalPremiumAmount = "";
  profitRatio:string="";
  sumAssured:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
