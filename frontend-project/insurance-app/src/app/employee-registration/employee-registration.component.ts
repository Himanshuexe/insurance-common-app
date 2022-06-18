import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empRegistration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  title:string="AGENT REGISTRATION";
  emp_name:string="";
  emp_code:string="";
  password:string="";
  confirmPassword:string="";
  address:string="";
  email:string="";
  qualification:string="";
  status:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    let data={
      "emp_name":this.emp_name,
      "emp_code":this.emp_code,
      "password":this.password,
      "confirmPassword":this.confirmPassword,
      "address":this.address,
      "email":this.email,
      "qualification":this.qualification,
      "status":this.status,
    }
 
  }
}
