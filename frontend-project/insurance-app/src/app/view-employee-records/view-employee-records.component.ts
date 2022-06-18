import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empRecords',
  templateUrl: './view-employee-records.component.html',
  styleUrls: ['./view-employee-records.component.css']
})
export class ViewEmployeeRecordsComponent implements OnInit {
title:string="View Employee Records"
empType:string=""
empName:string=""
login_id:string=""
password:string=""
status:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
