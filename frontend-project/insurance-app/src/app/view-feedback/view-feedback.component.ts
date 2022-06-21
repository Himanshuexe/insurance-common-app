import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/services/admin.service';

@Component({
  selector: 'viewFeedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css'],
  providers: [AdminService]
})
export class ViewFeedbackComponent implements OnInit {
  title: string = "View Feedback"
  customerName: string = "";
  Qtitle: string = "";
  message: string = "";
  contactDate: string = ""
  reply: string = ""
  action: string = ""

  feedbacks: any[] = []

  constructor(private adminService: AdminService) { this.getFeedbacks() }

  ngOnInit(): void {
  }

  getFeedbacks() {
    this.adminService.viewFeedback().subscribe(data => {
      data.map(el => {
        this.feedbacks.push(el)
      })
    })
  }
}
