import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [LogoutService]
})
export class AdminDashboardComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }
  username: string = "admin";
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

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout()
  }
}
