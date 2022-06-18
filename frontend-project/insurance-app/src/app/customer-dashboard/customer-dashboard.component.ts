import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InsuranceService } from '../services/services/insurance.service';
import { LoginService } from '../services/services/login.service';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
  providers: [LogoutService, InsuranceService]
})
export class CustomerDashboardComponent implements OnInit {
  username: any;
  title: string = "e-Insurance";
  insuranceTypes: any[] = []

  constructor(private logoutService: LogoutService, private insuranceService: InsuranceService, private router: Router) {
    if (localStorage.getItem("token") == null) {
      router.navigateByUrl('/app-home')
    }
    this.getInsuranceTypes()
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName')
  }
  customerLogout() {
    this.logoutService.logout();
  }

  getInsuranceTypes() {
    this.insuranceService.getInsuranceType().subscribe(data => {
      console.log(data)
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
