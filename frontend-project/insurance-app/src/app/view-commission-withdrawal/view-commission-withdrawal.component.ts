import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewCommWithdrawal',
  templateUrl: './view-commission-withdrawal.component.html',
  styleUrls: ['./view-commission-withdrawal.component.css']
})
export class ViewCommissionWithdrawalComponent implements OnInit {
  title:string = "View Customers Record"
  accountNo:string="";
  requestDate : string = "";
  particulars: string = "";
  withAmt: string = "";
  status:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
