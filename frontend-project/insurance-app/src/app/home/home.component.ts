import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/services/insurance.service';
import { LoginService } from '../services/services/login.service';
import { LogoutService } from '../services/services/logout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [InsuranceService, LogoutService, LoginService]
})
export class HomeComponent implements OnInit {
  title = "e-Insurance";
  insuranceTypes: any[] = []
  isloggedIn: boolean = false

  constructor(private loginService: LoginService, private logoutService: LogoutService, private service: InsuranceService) {
    this.getInsuranceTypes()
    this.isloggedIn = this.loginService.isLoggedIn();
  }

  ngOnInit(): void {

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
    this.logoutService.logout();
  }

}
