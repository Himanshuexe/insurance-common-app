import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginService } from '../services/customer-login.service';

@Component({
  selector: 'customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
credentials={
  username:'',
  password:''
}
  router: any;
  title:string="Customer Login";
  constructor(private loginService: CustomerLoginService,router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // if((this.credentials.username!='' && this.credentials.password!='') && 
    // (this.credentials.username!=null && this.credentials.password!=null)){
    //   this.loginService.generateToken(this.credentials).
    //   subscribe((response:any)=>{
    //    console.log(response.token);
    //    this.loginService.loginUser(response.token);
    //    window.location.href="/";

    //   },
    //   error=>{
    //   console.log(error);
    //   alert("**Wrong Credentials Entered")
    //   })
    // }else{
    //   alert("**Please Fill both Username and Password");
    // }
    if(this.credentials.username=="vineet" && this.credentials.password=="vineet"){
      window.location.href="/customer-dashboard"
      // this. router. navigate(['/customer-dashboard']); 
    }else{
      alert("wrong credentials");
    }
    
  }
}

