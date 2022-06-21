import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/services/customer.service';
import { InsuranceService } from '../services/services/insurance.service';
import { LoginService } from '../services/services/login.service';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'app-insurance-plan-details',
  templateUrl: './insurance-plan-details.component.html',
  styleUrls: ['./insurance-plan-details.component.css'],
  providers: [InsuranceService, LoginService, LogoutService, CustomerService, InsuranceService]
})
export class InsurancePlanDetailsComponent implements OnInit {
  title: string = 'e-Insurance'
  insuranceTypes: any[] = []
  insurancePlan: any
  insurancePlanName: string = '';
  noOfYear: string = "";
  amount: string = "";
  months: string = "";
  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";
  profitRatio: string = '';
  buttonSubmit: boolean = false;
  isloggedIn: boolean = false
  accountDetails: string = 'hidden'
  cardHolderName: string = ''
  cardNumber: string = ''
  cvvNumber: string = ''
  expDate: string = ''
  premiumType: string = ''

  constructor(private route: Router, private logoutService: LogoutService, private insuranceService: InsuranceService, private activatedRoute: ActivatedRoute, private service: InsuranceService, private customerService: CustomerService, private loginService: LoginService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.getInsurancePlanById(params['id'])
    })
    this.isloggedIn = this.loginService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  getInsurancePlanById(id: number) {
    this.service.getInsurancePlanById(id).subscribe(data => {
      console.log(data)
      this.insurancePlan = data
    })
  }

  calculateInterest() {
    if ((Number(this.noOfYear) < Number(this.insurancePlan.policyTermMin)) || (Number(this.noOfYear) > Number(this.insurancePlan.policyTermMax))) {
      alert("Invalid value for Number of years")
      return
    }
    if ((Number(this.amount) < Number(this.insurancePlan.sumAssuredMin)) || (Number(this.amount) > Number(this.insurancePlan.sumAssuredMax))) {
      alert("Invalid value for Investment Amount")
      return
    }
    this.insterestAmt = String(Number(this.amount) * Number(this.insurancePlan.profitRatio) / 100);
    this.totalAmt = String(Number(this.amount) + Number(this.insterestAmt));

    if (this.months.match("1 month")) {
      this.installAmt = String((Number(this.amount) / 12) / Number(this.noOfYear));
      this.premiumType = 'monthly'
    }
    else if (this.months.match("3 month")) {
      this.installAmt = String((Number(this.amount) / 4) / Number(this.noOfYear));
      this.premiumType = 'quarterly'
    }
    else if (this.months.match("6 month")) {
      this.installAmt = String((Number(this.amount) / 2) / Number(this.noOfYear));
      this.premiumType = 'half yearly'
    }
    else if (this.months.match("1 year")) {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 1);
      this.premiumType = 'annual'
    }
    this.buttonSubmit = this.loginService.isLoggedIn();
  }

  submit(event: Event) {
    event.preventDefault()
    if (this.loginService.isLoggedIn()) {
      this.accountDetails = 'show'
      this.insurancePlanName = this.insurancePlan.name
      this.profitRatio = this.insurancePlan.profitRatio
      return true
    } else {
      if (confirm("You need to login first to buy this plan. Do you want to continue?")) {
        this.route.navigateByUrl("/customer-login")
      }
      return false
    }
  }

  buyPolicy() {
    let expiryDate = new Date(this.expDate)
    let date = new Date
    let diff = expiryDate.getTime() - date.getTime()
    let daydiff = diff / (1000 * 60 * 60 * 24);
    if (this.cardHolderName.length == 0) {
      alert("Enter Card Holder Name")
      return
    }
    if (this.cardNumber.length < 16 || this.cardNumber.length > 16) {
      alert("Card Number invalid")
      return
    }
    if (this.cvvNumber.length < 3 || this.cvvNumber.length > 3) {
      alert("Cvv Number invalid")
      return
    }
    if (daydiff <= 0) {
      alert("Expiry Date invalid")
      return
    }
    let data = {
      "insurancePlanId": this.insurancePlan.id,
      "customerId": localStorage.getItem("userId"),
      "timeSpan": this.noOfYear,
      "amount": this.amount,
      "premiumType": this.months
    }
    this.insuranceService.buyPolicy(data).subscribe(data =>
      alert("Policy Bought")
    )
  }

  saveData(): any {
    // let data = {
    //   'insurancePlanId': this.insurancePlan.id,
    //   'customerId': Number(localStorage.getItem("id")),
    //   'agentId': null,
    //   'timeSpan': Number(this.months) / 12,
    //   'amount': this.amount,
    //   'premiumType': this.premiumType
    // }
    // let data = [
    //   this.insurancePlan.id,
    //   Number(localStorage.getItem("id")),
    //   null,
    //   Number(this.months) / 12,
    //   this.amount,
    //   this.premiumType
    // ]
    // return data
  }

  logout() {
    this.logoutService.logout();
  }

}
