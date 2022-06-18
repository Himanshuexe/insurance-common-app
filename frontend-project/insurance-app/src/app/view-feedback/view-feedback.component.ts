import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewFeedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
title:string="View Feedback"
customerName:string="";
Qtitle:string="";
message:string="";
contactDate:string=""
reply:string=""
action:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
