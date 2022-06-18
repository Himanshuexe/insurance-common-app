import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = "http://localhost:8080/api/v1/login/tokenlogin";
  }

  loginUser(data: any) {
    return this.http.post(this.url, data);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token')
    console.log(token);
    if (token == '' || token == null || token == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  customerLogout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    this.router.navigateByUrl("/app-home")
  }
}
