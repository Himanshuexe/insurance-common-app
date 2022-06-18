import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/services/insurance.service';

@Component({
  selector: 'insuranceType',
  templateUrl: './view-insurance-type.component.html',
  styleUrls: ['./view-insurance-type.component.css'],
  providers: [InsuranceService]
})
export class ViewInsuranceTypeComponent implements OnInit {
  title: string = "View Insurance Type"
  insuranceType: string = ""
  status: string = ""
  insuranceTypes: any[] = []
  constructor(private service: InsuranceService) {
    this.getInsuranceTypes()
  }

  ngOnInit(): void {
  }

  getInsuranceTypes() {
    this.service.getInsuranceType().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.insuranceTypes.push(el)
      })
    })
  }
}
