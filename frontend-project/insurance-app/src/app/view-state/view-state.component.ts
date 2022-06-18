import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewState',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {
  title:string = "VIEW STATE RECORDS"
  state: string="";
   status : string = "";
   action: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
