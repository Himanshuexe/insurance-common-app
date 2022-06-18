import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
username:string="Agent"
  constructor() { }

  ngOnInit(): void {
  }

}
