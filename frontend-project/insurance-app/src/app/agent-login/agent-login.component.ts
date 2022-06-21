import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';



@Component({
  selector: 'agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css'],
  providers: [LoginService]
})
export class AgentLoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  }
  token: any
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
      this.route.navigate(['/agent-dashboard'])
      document.body.style.backgroundColor = 'white'
    })
  }
}
