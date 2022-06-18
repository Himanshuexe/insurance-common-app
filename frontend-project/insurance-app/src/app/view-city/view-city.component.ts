import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewCity',
  templateUrl: './view-city.component.html',
  styleUrls: ['./view-city.component.css']
})
export class ViewCityComponent implements OnInit {
  title:string = "VIEW CITY RECORDS"
   city: string="";
   status : string = "";
   action: string = "";
 
  constructor() { }

  ngOnInit(): void {
  }

}
