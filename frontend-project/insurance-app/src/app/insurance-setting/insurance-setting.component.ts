import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insuranceSetting',
  templateUrl: './insurance-setting.component.html',
  styleUrls: ['./insurance-setting.component.css']
})
export class InsuranceSettingComponent implements OnInit {
title:string="Insurance Settings"
claimDeduction:number=0
penaltyAmount:number=0
  constructor() { }

  ngOnInit(): void {
  }

}
