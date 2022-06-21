import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/services/customer.service';

@Component({
  selector: 'viewCustomer',
  templateUrl: './view-customer-for-agent.component.html',
  styleUrls: ['./view-customer-for-agent.component.css']
})
export class ViewCustomerForAgentComponent implements OnInit {
  title: string = "View Customers Record"
  customerName: string = "";
  DOB: string = "";
  LoginId: string = "";
  Address: string = "";
  mobileNo: string = "";
  nominee: string = "";
  nomineeRelation = "";
  status: string = "";
  customers: any[] = [];

  actionButton:boolean=false;

  constructor(private customerService: CustomerService) {
    this.getAllCustomers()
  }

  ngOnInit(): void {
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.customers.push(el)
      })
    })
  }
  changeStatus(e: Event) {
    let button = e.target as HTMLInputElement
    let buttonValue = button.value
    console.log(button.name + ' ' + buttonValue)
    if (button.value == 'active') {
      this.customerService.deactivateCustomer(Number(button.name)).subscribe(data => console.log(data.toString))
      button.textContent = 'inactive'
      button.value = 'inactive'
    } else if (button.value == 'inactive') {
      this.customerService.activateCustomer(Number(button.name)).subscribe(data => console.log(data.toString))
      button.textContent = 'active'
      button.value = 'active'
    }
  }
}
