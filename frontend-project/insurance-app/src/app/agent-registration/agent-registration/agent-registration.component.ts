import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/services/employee.service';

@Component({
  selector: 'agentRegistration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css'],
  providers: [EmployeeService]
})
export class AgentRegistrationComponent implements OnInit {
  title: string = "AGENT REGISTRATION";
  id: any

  constructor(private service: EmployeeService, private route: Router) { }
  exform: any;
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'qualification': new FormControl(null, Validators.required)
    });
  }

  addAgentData() {
    this.service.addAgentData(this.exform.value).subscribe(result => {
      console.log(result)
      this.id = result;
      alert("Successfully Registered. Your User-Id is: " + this.id.id);
      setTimeout(() => {
        this.route.navigate(['/agent-login']);
      }, 5000)
    })
    this.exform.reset();
  }
}

