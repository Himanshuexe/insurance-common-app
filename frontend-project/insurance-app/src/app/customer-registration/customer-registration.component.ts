import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/services/customer.service';


@Component({
  selector: 'customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  id: any;
  title: string = "CUSTOMER REGISTRATION";
  constructor(private service: CustomerService, private route: Router) {
  }

  exform: any;
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl('', Validators.required),
      'dob': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'state': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'number': new FormControl('', Validators.required),
      'nominee': new FormControl('', Validators.required),
      'nomineeRelation': new FormControl('', Validators.required)
    });
  }

  addCustomerData() {
    console.log(this.exform.value)
    this.service.addCustomerData(this.exform.value).subscribe(result => {
      console.log(result)
      this.id = result;
      alert("Successfully Registered. Your User-Id is: " + this.id.id);
      setTimeout(() => {
        this.route.navigate(['/customer-login']);
      }, 5000)
    })
    this.exform.reset();
  }

}
