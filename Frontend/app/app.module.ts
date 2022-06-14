import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ChildPlanComponent } from './child-plan/child-plan.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { InsuranceAccountDetailsComponent } from './insurance-account-details/insurance-account-details.component';
import { PolicyPaymentComponent } from './policy-payment/policy-payment.component';
import { PaymentSlipComponent } from './payment-slip/payment-slip.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    AgentLoginComponent,
    EmployeeLoginComponent,
    CustomerLoginComponent,
    CustomerDashboardComponent,
    CustomerRegistrationComponent,
    ChildPlanComponent,
    ProtectionPlanComponent,
    InsuranceAccountDetailsComponent,
    PolicyPaymentComponent,
    PaymentSlipComponent,
    CustomerFeedbackComponent,
    ViewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
