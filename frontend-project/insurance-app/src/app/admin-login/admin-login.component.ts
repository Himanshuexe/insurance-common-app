import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [LoginService]
})
export class AdminLoginComponent implements OnInit {
  credentials = {
    userId: '',
    password: ''
  }
  token: any = [];
  title: string = "Admin Login"
  constructor(private loginService: LoginService, private route: Router) {
    document.body.style.backgroundColor = '#1434A4'
  }

  ngOnInit(): void {
  }

  getUserFormData(data: any) {
    // console.log('user data ' + data);
    this.loginService.loginUser(data).subscribe(user => {
      this.token = user
      console.log(this.token.token)
      console.log(data.id)
      localStorage.setItem("token", this.token.token);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("username", data.name)
      this.route.navigate(['/admin-dashboard'])
      document.body.style.backgroundColor = 'white'
    })
  }
}
