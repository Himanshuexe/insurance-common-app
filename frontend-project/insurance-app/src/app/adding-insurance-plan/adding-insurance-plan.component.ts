import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'addInsurancePlan',
  templateUrl: './adding-insurance-plan.component.html',
  styleUrls: ['./adding-insurance-plan.component.css']
})
export class AddingInsurancePlanComponent implements OnInit {
  title:string="Adding Insurance Plan";
  insuranceType:string="";
  insuranceScheme:string="";
  policyTerm:string="";
  minimumTerm:string="";
  maximumTerm:string="";
  age:string="";
  minimumAge:string="";
  maximumAge:string="";
  totalInvestment:string="";
  minimumInvestment:string="";
  maximumInvestment:string="";
  profitRatio:string="";
  status:string="";
 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let data={
      "insuranceType":this.insuranceType,
      "insuranceScheme":this.insuranceScheme,
      "policyTerm":this.policyTerm,
      "minimumTerm":this.minimumTerm,
      "maximumTerm":this.maximumTerm,
      "age":this.age,
      "minimumAge":this.minimumAge,
      "maximumAge":this.maximumAge,
      "totalInvestment":this.totalInvestment,
      "minimumInvestment":this.minimumInvestment,
      "maximumInvestment": this.maximumInvestment,
      "profitRatio": this.profitRatio,
      "status": this.status
    }

  }
}
 

