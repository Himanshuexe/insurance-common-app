import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';



@Component({
  selector: 'customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  providers: [LoginService]
})
export class CustomerLoginComponent implements OnInit {

  title: string = "Customer Login";
  token: any = [];
  constructor(private service: LoginService, private route: Router) {
    document.body.style.backgroundColor = '#1434A4'
  }

  ngOnInit(): void {
  }


  getUserFormData(data: any) {
    // console.log('user data ' + data);
    this.service.loginUser(data).subscribe(user => {
      console.log(user)
      this.token = user
      console.log(this.token.token)
      console.log(data.id)
      // console.log(this.token['name'])
      localStorage.setItem("token", this.token.token);
      localStorage.setItem("userId", data.id);
      // localStorage.setItem("username", this.token.name)
      this.route.navigate(['/customer-dashboard'])
      document.body.style.backgroundColor = 'white'
    })
  }

}

