import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
  title: string = 'e-Insurance'
  username: string | null = localStorage.getItem("username")
  constructor(private router: Router) {
    if (localStorage.getItem("token") == null) {
      this.router.navigateByUrl('/app-home')
    }
  }

  ngOnInit(): void {
  }

}
