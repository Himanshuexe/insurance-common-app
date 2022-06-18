import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewInsuranceScheme',
  templateUrl: './view-insurance-scheme.component.html',
  styleUrls: ['./view-insurance-scheme.component.css']
})
export class ViewInsuranceSchemeComponent implements OnInit {
  title:string = "View Insurance Scheme"
  constructor() { }

  ngOnInit(): void {
  }

}
