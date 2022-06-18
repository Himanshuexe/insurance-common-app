import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addState',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {
  title:string="STATE";
  state:string="";
  status:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  
  }
}
