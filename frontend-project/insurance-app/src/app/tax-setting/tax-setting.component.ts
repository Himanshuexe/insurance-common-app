import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taxSetting',
  templateUrl: './tax-setting.component.html',
  styleUrls: ['./tax-setting.component.css']
})
export class TaxSettingComponent implements OnInit {
title:string="Tax Panel"
taxPercentage:number=0
  constructor() { }

  ngOnInit(): void {
  }

}
