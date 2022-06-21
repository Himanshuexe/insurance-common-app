import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addCity',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  title:string="CITY"
  city:string=""
  status:string=""
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  
  }
}
