import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';
import { AgentService } from '../services/services/agent.service';

@Component({
  selector: 'viewAgents',
  templateUrl: './view-agent-records.component.html',
  providers: [AgentService, AdminService]
})
export class ViewAgentRecordsComponent implements OnInit {
  title: string = "VIEW AGENT RECORDS"
  agentName: string = "";
  agentCode: string = "";
  address: string = "";
  email: string = "";
  qualification: string = "";
  status: string = "";
  agents: any[] = []

  constructor(private service: AgentService, private adminService: AdminService) {
    this.getAgents()
  }

  ngOnInit(): void {
  }
  getAgents() {
    this.service.getAgents().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }

        if (el.isDeleted) {
          el.isDeleted = 'Deleted'
        } else if (!el.isDeleted) {
          el.isDeleted = 'Not Deleted'
        }
        this.agents.push(el)
      })
    })
  }

  action(e: Event) {
    let button = e.target as HTMLInputElement
    let buttonValue = button.value
    console.log(button.name + ' ' + buttonValue)
    if (button.value == 'Not Deleted') {
      if (confirm("Are you sure you want to delete id: " + button.name + "?")) {
        this.adminService.deleteAgent(Number(button.name)).subscribe(data => console.log(data.toString))
        button.textContent = 'Deleted'
      }
    }
  }

  changeStatus(e: Event) {
    let button = e.target as HTMLInputElement
    let buttonValue = button.value
    console.log(button.name + ' ' + buttonValue)
    if (button.value == 'active') {
      this.service.deactivateAgent(Number(button.name)).subscribe(data => console.log(data.toString))
      button.textContent = 'inactive'
      button.value = 'inactive'
    } else if (button.value == 'inactive') {
      this.service.activateAgent(Number(button.name)).subscribe(data => console.log(data.toString))
      button.textContent = 'active'
      button.value = 'active'
    }
  }
}
