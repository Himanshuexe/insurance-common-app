import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from '../services/services/admin.service';
import { CustomerService } from '../services/services/customer.service';
import { EmployeeService } from '../services/services/employee.service';
import { InsuranceService } from '../services/services/insurance.service';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [LogoutService, InsuranceService, AdminService, EmployeeService]
})
export class AdminDashboardComponent implements OnInit {
  username: string = "admin";
  agentRecords: number = 0;
  employeeRecords: number = 0;
  customerRecords: number = 0;
  customerDocRecords: number = 7;
  insuranceTypeRecords: number = 0;
  insurancePlanRecords: number = 0;
  insuranceAccountRecords: number = 8;
  policyPaymentRecords: number = 17;
  policyClaimRecords: number = 2;
  commissionRecords: number = 8;
  queryRecords: number = 1;
  stateRecords: number = 4;
  insuranceSchemeRecords: number = 11;
  cityRecords: number = 5;

  constructor(private insuranceService: InsuranceService, private router: Router, private logoutService: LogoutService, private adminService: AdminService, private customerService: CustomerService, private employeeService: EmployeeService) {
    if (localStorage.getItem("token") == null) {
      this.router.navigateByUrl('/app-home')
    }
    this.getCustomerRecord();
    this.getAllInsuranceType();
    this.getAllEmployee();
    this.getAllAgent();
  }

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout()
  }

  getCustomerRecord() {
    this.customerService.getAllCustomers().subscribe((result) => {
      this.customerRecords = result.length;
    })
  }
  getAllInsuranceType() {
    this.insuranceService.getInsuranceType().subscribe((result) => {
      this.insuranceTypeRecords = result.length;
    })
  }
  getAllEmployee() {
    this.employeeService.getAllEmployees().subscribe((result) => {
      this.employeeRecords = result.length;
    })
  }
  getAllAgent() {
    this.employeeService.getAllAgent().subscribe((result) => {
      this.agentRecords = result.length;
    })
  }
}
