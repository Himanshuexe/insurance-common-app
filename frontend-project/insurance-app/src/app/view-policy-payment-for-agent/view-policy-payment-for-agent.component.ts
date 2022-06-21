import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewPolicyPay',
  templateUrl: './view-policy-payment-for-agent.component.html',
  styleUrls: ['./view-policy-payment-for-agent.component.css']
})
export class ViewPolicyPaymentForAgentComponent implements OnInit {
  title:string = "View Policy Payment"
  customerName : string = "";
  insuranceAccountNo: string = "";
  paidAmount: string = "";
  taxAmount:string = "";
  totalAmount:string="";
  paidDate:string = "";
  transType = "";
  status:string="";
  Action:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
