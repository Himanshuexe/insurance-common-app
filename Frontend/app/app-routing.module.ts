import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { ChildPlanComponent } from './child-plan/child-plan.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { InsuranceAccountDetailsComponent } from './insurance-account-details/insurance-account-details.component';
import { PaymentSlipComponent } from './payment-slip/payment-slip.component';
import { PolicyPaymentComponent } from './policy-payment/policy-payment.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-home',component:HomeComponent},
 {path:'admin-login', component:AdminLoginComponent},
 {path:'agent-login', component:AgentLoginComponent},
 {path:'employee-login', component:EmployeeLoginComponent},
 {path:'customer-login', component:CustomerLoginComponent},
 {path:'customer-dashboard', component:CustomerDashboardComponent},
 {path:'customer-registration', component:CustomerRegistrationComponent},
 {path:'child-plan', component:ChildPlanComponent},
 {path:'protection-plan', component:ProtectionPlanComponent},
 {path:'insurance-account-details', component:InsuranceAccountDetailsComponent},
 {path:'policy-payment',component:PolicyPaymentComponent},
 {path:'payment-slip',component:PaymentSlipComponent},
 {path:'customer-feedback',component:CustomerFeedbackComponent},
 {path:'view-feedback',component:ViewFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
