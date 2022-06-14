import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
credentials={
  username:'',
  password:''
}
  constructor(private loginService: AdminLoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='') && 
    (this.credentials.username!=null && this.credentials.password!=null)){
      this.loginService.generateToken(this.credentials).
      subscribe((response:any)=>{
       console.log(response.token);
       this.loginService.loginUser(response.token);
       window.location.href="/";

      },
      error=>{
      console.log(error);
      alert("**Wrong Credentials Entered")
      })
    }else{
      alert("**Please Fill both Username and Password");
    }
    
  }
}
