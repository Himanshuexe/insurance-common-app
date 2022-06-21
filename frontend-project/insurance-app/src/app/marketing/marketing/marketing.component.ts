import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marketingAgent',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  credentials = {
    email_id: '',
    subject: '',
    message: '',

  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
