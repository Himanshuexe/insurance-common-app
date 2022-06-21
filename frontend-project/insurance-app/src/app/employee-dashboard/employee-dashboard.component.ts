import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
  providers: [LogoutService]
})
export class EmployeeDashboardComponent implements OnInit {
  username: string = "employee";
  agentRecords: number = 4;
  employeeRecords: number = 3;
  customerRecords: number = 4;
  customerDocRecords: number = 4;
  insuranceTypeRecords: number = 5;
  insurancePlanRecords: number = 8;
  insuranceAccountRecords: number = 8;
  policyPaymentRecords: number = 17;
  policyClaimRecords: number = 2;
  commissionRecords: number = 8;
  queryRecords: number = 1;
  stateRecords: number = 4;
  insuranceSchemeRecords: number = 11;
  cityRecords: number = 5;

  constructor(private logoutService: LogoutService, private route: Router) {
    if (localStorage.getItem('token') == null) {
      this.route.navigateByUrl('/app-home')
    }
    document.body.style.backgroundColor = 'white'
  }

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout()
  }
}
