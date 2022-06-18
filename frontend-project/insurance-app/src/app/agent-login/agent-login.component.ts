import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {
credentials={
  username:'',
  password:''
}
  constructor() { }

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
    if(this.credentials.username.match("rohan") && this.credentials.password.match("pass")){
      window.location.href="/agent-dashboard"
      // this. router. navigate(['/customer-dashboard']); 
    }else{
      alert("wrong credentials");
    }
  }
}
