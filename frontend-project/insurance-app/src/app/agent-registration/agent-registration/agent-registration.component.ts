import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/services/employee.service';

@Component({
  selector: 'agentRegistration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {
  title:string="AGENT REGISTRATION";

  constructor(private service:EmployeeService) { }
  exform:any;
  ngOnInit(): void {
    this.exform=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'qualification':new FormControl(null,Validators.required)
    });
  }

  addAgentData(){
    this.service.addAgentData(this.exform.value)
  }
}

