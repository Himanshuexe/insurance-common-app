import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'protection-plan',
  templateUrl: './protection-plan.component.html',
  styleUrls: ['./protection-plan.component.css']
})
export class ProtectionPlanComponent implements OnInit {

  noOfYear: string = "";
  amount: string = "";
  months: string = "";

  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  
  interestCalculator() {
    if (this.months == "1 month") {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 12) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
    }
    else if (this.months == "3 month") {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 6) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
    }
    else if (this.months == "6 month") {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 2) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
    }
    else if (this.months == "1 year") {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 1) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
    }
  }
}
