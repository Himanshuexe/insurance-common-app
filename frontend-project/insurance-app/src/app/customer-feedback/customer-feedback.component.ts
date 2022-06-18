import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../services/services/customer.service";

@Component({
  selector: "customerQueries",
  templateUrl: "./customer-feedback.component.html",
  styleUrls: ["./customer-feedback.component.css"],
})
export class CustomerFeedbackComponent implements OnInit {
  title: string = "FeedBack";
  constructor(private service: CustomerService) {}

  ngOnInit(): void {}
  sendFeedback(data: any) {
    console.log(data);
    this.service.sendFeedback(data).subscribe(resp=>{
      console.log(resp);
      alert("feed back send successfully");
    });
  }
}
