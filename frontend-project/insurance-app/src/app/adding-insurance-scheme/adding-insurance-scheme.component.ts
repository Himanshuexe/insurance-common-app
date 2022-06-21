import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'addInsuranceScheme',
  templateUrl: './adding-insurance-scheme.component.html',
  styleUrls: ['./adding-insurance-scheme.component.css']
})
export class AddingInsuranceSchemeComponent implements OnInit {
  title:string="Adding Insurance Scheme";
  insuranceType:string="";
  insuranceScheme:string="";
  image:any="";
  commissionNewReg:string="";
  commissionInstallementPay:string="";
  note:string="";
  status:string="";
 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let data={
      "insuranceType":this.insuranceType,
      "insuranceScheme":this.insuranceScheme,
      "image":this.image,
      "commissionNewReg":this.commissionInstallementPay,
      "commissionInstallmentPay":this.commissionInstallementPay,
      "note":this.note,
      "status":this.status,
      
    }

  }
}
 
