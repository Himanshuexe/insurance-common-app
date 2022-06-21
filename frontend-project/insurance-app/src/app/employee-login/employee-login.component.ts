import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';

@Component({
  selector: 'employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css'],
  providers: [LoginService]
})
export class EmployeeLoginComponent implements OnInit {
  token: any = [];
  credentials = {
    userId: '',
    password: ''
  }

  constructor(private service: LoginService, private route: Router) {
    document.body.style.backgroundColor = '#1434A4'
  }

  ngOnInit(): void {
  }

  getUserFormData(data: any) {
    this.service.loginUser(data).subscribe(user => {
      this.token = user
      console.log(this.token.token)
      console.log(data.id)
      localStorage.setItem("token", this.token.token);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("username", data.name)
      this.route.navigate(['/employee-dashboard'])
      document.body.style.backgroundColor = 'white'
    })
  }
}

