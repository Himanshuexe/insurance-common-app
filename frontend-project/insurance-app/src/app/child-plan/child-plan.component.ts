import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/services/customer.service';
import { LoginService } from '../services/services/login.service';


@Component({
  selector: 'child-plan',
  templateUrl: './child-plan.component.html',
  styleUrls: ['./child-plan.component.css']
})
export class ChildPlanComponent implements OnInit {

  noOfYear: string = "";
  amount: string = "";
  months: string = "";

  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";
  buttonSubmit: boolean = false;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }
  interestCalculator() {
    if (this.months.match("1 month")) {
      this.installAmt = String(Number(this.amount) / 12) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      this.buttonSubmit = this.service.isLoggedIn();

    }
    else if (this.months.match("3 month")) {
      this.installAmt = String(Number(this.amount) / 4) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      this.buttonSubmit = this.service.isLoggedIn();
    }
    else if (this.months.match("6 month")) {
      this.installAmt = String(Number(this.amount) / 2) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      this.buttonSubmit = this.service.isLoggedIn();
    }
    else if (this.months.match("1 year")) {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 1) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      this.buttonSubmit = this.service.isLoggedIn();
    }
  }

}
