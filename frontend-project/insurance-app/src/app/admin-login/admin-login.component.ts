import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  credentials = {
    userId: '',
    password: ''
  }
  title: string = "Admin Login"
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }


  // onSubmit() {
  //   if ((this.credentials.userId != '' && this.credentials.password != '') &&
  //     (this.credentials.userId != null && this.credentials.password != null)) {
  //     this.loginService.loginUser(this.credentials).
  //       subscribe((response: any) => {
  //         console.log(response.token);
  //         this.loginService.loginUser(response.token);
  //         window.location.href = "/";

  //       },
  //         error => {
  //           console.log(error);
  //           alert("**Wrong Credentials Entered")
  //         })
  //   } else {
  //     alert("**Please Fill both Username and Password");
  //   }

  // }
  getUserFormData(data: any) {
    console.log(data);
    this.loginService.loginUser(data).
      subscribe((response: any) => {
        console.log(response.token);
        localStorage.setItem("token", response.token)
        localStorage.setItem("id", data.id)
        this.route.navigateByUrl("admin-dashboard")

      },
        error => {
          console.log(error);
          alert("**Wrong Credentials Entered")
        })
  }
}
