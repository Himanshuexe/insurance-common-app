import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';
import { EmployeeService } from '../services/services/employee.service';

@Component({
  selector: 'empRecords',
  templateUrl: './view-employee-records.component.html',
  styleUrls: ['./view-employee-records.component.css'],
  providers: [EmployeeService, AdminService]
})
export class ViewEmployeeRecordsComponent implements OnInit {
  title: string = "View Employee Records"
  empType: string = ""
  empName: string = ""
  login_id: string = ""
  password: string = ""
  status: string = ""
  employees: any[] = []

  constructor(private service: EmployeeService, private adminService: AdminService) {
    this.getEmployees()
  }

  ngOnInit(): void {
  }
  getEmployees() {
    this.service.getAllEmployees().subscribe(data => {
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } else if (!el.status) {
          el.status = 'inactive'
        }

        if (el.isDeleted) {
          el.isDeleted = 'Deleted'
        } else if (!el.isDeleted) {
          el.isDeleted = 'Not Deleted'
        }
        this.employees.push(el)
      })
    })
  }

  action(e: Event) {
    let button = e.target as HTMLInputElement
    let buttonValue = button.value
    console.log(button.name + ' ' + buttonValue)
    if (button.value == 'Not Deleted') {
      if (confirm("Are you sure you want to delete id: " + button.name + "?")) {
        this.adminService.deleteEmployee(Number(button.name)).subscribe(data => console.log(data.toString))
        button.textContent = 'Deleted'
      }
    }
  }

  
  changeStatus(e: Event) {
    let button = e.target as HTMLInputElement
    let buttonValue = button.value
    console.log(button.name + ' ' + buttonValue)
    if (button.value == 'active') {
      this.service.deactivateEmployee(Number(button.name)).subscribe()
      button.textContent = 'inactive'
      button.value = 'inactive'
    } else if (button.value == 'inactive') {
      this.service.activateEmployee(Number(button.name)).subscribe()
      button.textContent = 'active'
      button.value = 'active'
    }
  }

}

  // delete(e: Event) {
  //   let id = Number((e.target as HTMLLinkElement).getAttribute('name'))
  //   console.log(id)
  //   if (confirm("Are you sure you want to delete id: " + id + "?")) {
  //     this.adminService.deleteEmployee(id).subscribe(data => console.log(data))
  //   }
  // }

