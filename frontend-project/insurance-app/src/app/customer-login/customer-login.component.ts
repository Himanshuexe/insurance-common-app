import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/services/login.service';



@Component({
  selector: 'customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  title:string="Customer Login";
  token:any=[];
  constructor(private service:LoginService, private route:Router) { }

  ngOnInit(): void {
  }


getUserFormData(data:any){
  console.log(data);
  this.service.loginUser(data).subscribe(user=>{
    this.token=user
    console.log(this.token.token)
    console.log(data.id)
    localStorage.setItem("token",this.token.token);
    localStorage.setItem("userId",data.id);
    this.route.navigate(['/customer-dashboard'])
  })
}

}

