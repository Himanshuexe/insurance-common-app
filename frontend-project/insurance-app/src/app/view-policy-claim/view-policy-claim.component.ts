import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewPolicyClaim',
  templateUrl: './view-policy-claim.component.html',
  styleUrls: ['./view-policy-claim.component.css']
})
export class ViewPolicyClaimComponent implements OnInit {
  title:string = "View Policy Claim Record"
  customerName : string = "";
  insuranceAccountNo: string = "";
  withdrawalDate: string = "";
  bankDetails:string = "";
  withdrawalAmount:string="";
  withdrawalStatus:string = "";
  action = "";

  constructor() { }

  ngOnInit(): void {
  }

}
