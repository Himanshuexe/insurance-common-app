import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addInsuranceType',
  templateUrl: './add-insurance-type.component.html',
  styleUrls: ['./add-insurance-type.component.css']
})
export class AddInsuranceTypeComponent implements OnInit {
title:string="Add Insurance Type"
insuranceType:string=""
status:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
