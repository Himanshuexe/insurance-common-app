import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {

  url="http://localhost:8080";

  constructor(private http:HttpClient, private router: Router) { }

generateToken(credentials:any){
return this.http.post(`${this.url}`,credentials)
}


  loginUser(token:any){
    localStorage.setItem('token',token)
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined && token=='' && token==null){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    alert("You are logged out");
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
