import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/services/customer.service';
import { LoginService } from '../services/services/login.service';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  title:string="CUSTOMER PROFILE";
  data:any;
  constructor(private service:CustomerService) {
   
   }

  ngOnInit(): void {
    this.service.userProfile().subscribe((result)=>{
      this.data = result;
      localStorage.setItem('userName',this.data.name)
      console.log(result);
    });
  }

}
