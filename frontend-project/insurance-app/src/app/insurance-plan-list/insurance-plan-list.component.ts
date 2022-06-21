import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from '../services/services/insurance.service';
import { LoginService } from '../services/services/login.service';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'app-insurance-plan-list',
  templateUrl: './insurance-plan-list.component.html',
  styleUrls: ['./insurance-plan-list.component.css'],
  providers: [InsuranceService, LogoutService, LoginService]
})
export class InsurancePlanListComponent implements OnInit {
  insurancePlans: any[] = []
  title: string = 'e-insurance'
  insuranceType: any
  planType: string = ''
  insuranceTypes: any[] = []
  isloggedIn: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private service: InsuranceService, private logoutService: LogoutService, private loginService: LoginService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.getPlansByTypeId(params['id'])
      this.getInsuranceTypes()
      this.insuranceTypes
      this.insuranceType = this.insuranceTypes.filter(type => type.id == params['id'])
      console.log(this.insuranceType)
      this.planType = this.insuranceType.name
      console.log(this.planType)
      this.isloggedIn = this.loginService.isLoggedIn();
    })

  }

  ngOnInit(): void {
  }

  getPlansByTypeId(id: number) {
    this.service.getInsurancePlanByTypeId(id).subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.insurancePlans.push(el)
      })
    })
  }

  getInsuranceTypes() {
    this.service.getInsuranceType().subscribe(data => {
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

  logout() {
    this.logoutService.logout()
  }
}
