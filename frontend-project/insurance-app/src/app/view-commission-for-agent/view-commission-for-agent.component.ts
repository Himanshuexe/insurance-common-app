import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewCommission',
  templateUrl: './view-commission-for-agent.component.html',
  styleUrls: ['./view-commission-for-agent.component.css']
})
export class ViewCommissionForAgentComponent implements OnInit {
  title:string = "View Commission Records"
  insuranceNum : string = "";
  Agent: string = "";
  Date: string = "";
  customerName:string = "";
  insuranceSchame:string="";
  commissionAmt:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
