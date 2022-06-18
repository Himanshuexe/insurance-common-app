import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { ChildPlanComponent } from './child-plan/child-plan.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail/view-insurance-account-detail.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewCustomerForAgentComponent } from './view-customer-for-agent/view-customer-for-agent.component';
import { ViewCommissionForAgentComponent } from './view-commission-for-agent/view-commission-for-agent.component';
import { ViewPolicyPaymentForAgentComponent } from './view-policy-payment-for-agent/view-policy-payment-for-agent.component';
import { ViewPolicyClaimComponent } from './view-policy-claim/view-policy-claim.component';
import { ViewCommissionWithdrawalComponent } from './view-commission-withdrawal/view-commission-withdrawal.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { ViewAgentRecordsComponent } from './view-agent-records/view-agent-records.component';
import { MarketingComponent } from './marketing/marketing/marketing.component';
import { ViewAgentInsuranceAccountComponent } from './view-agent-insurance-account/view-agent-insurance-account/view-agent-insurance-account.component';
import { AgentRegistrationComponent } from './agent-registration/agent-registration/agent-registration.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AddInsuranceTypeComponent } from './add-insurance-type/add-insurance-type.component';
import { ViewInsuranceTypeComponent } from './view-insurance-type/view-insurance-type.component';
import { ViewInsurancePlanRecordComponent } from './view-insurance-plan-record/view-insurance-plan-record.component';
import { TaxSettingComponent } from './tax-setting/tax-setting.component';
import { InsuranceSettingComponent } from './insurance-setting/insurance-setting.component';
import { AddStateComponent } from './add-state/add-state.component';
import { AddingInsuranceSchemeComponent } from './adding-insurance-scheme/adding-insurance-scheme.component';
import { ViewEmployeeRecordsComponent } from './view-employee-records/view-employee-records.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { AddingInsurancePlanComponent } from './adding-insurance-plan/adding-insurance-plan.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { InsuranceAccountDetailsComponent } from './insurance-account-details/insurance-account-details.component';
import { PaymentSlipComponent } from './payment-slip/payment-slip.component';
import { PolicyPaymentComponent } from './policy-payment/policy-payment.component';
import { AddCityComponent } from './add-city/add-city.component';
import { ViewCityComponent } from './view-city/view-city.component';
import { ViewStateComponent } from './view-state/view-state.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    CustomerLoginComponent,
    AgentLoginComponent,
    ProtectionPlanComponent,
    ChildPlanComponent,
   CustomerRegistrationComponent,
    CustomerDashboardComponent,
    CustomerProfileComponent,
    ViewInsuranceAccountDetailComponent,
    AgentDashboardComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    ViewCustomerForAgentComponent,
    ViewCommissionForAgentComponent,
    ViewPolicyPaymentForAgentComponent,
    ViewPolicyClaimComponent,
    ViewCommissionWithdrawalComponent,
    ViewInsuranceSchemeComponent,
    ViewAgentRecordsComponent,
    ViewAgentInsuranceAccountComponent,
    MarketingComponent,
    AgentRegistrationComponent,
    ViewFeedbackComponent,
    AddInsuranceTypeComponent,
    ViewInsuranceTypeComponent,
    ViewInsurancePlanRecordComponent,
    TaxSettingComponent,
    InsuranceSettingComponent,
    AddStateComponent,
    AddingInsuranceSchemeComponent,
    ViewEmployeeRecordsComponent,
    EmployeeRegistrationComponent,
    AddingInsurancePlanComponent,
    CustomerFeedbackComponent,
    InsuranceAccountDetailsComponent,
    PaymentSlipComponent,
    PolicyPaymentComponent,
    AddCityComponent,
    ViewCityComponent,
    ViewStateComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
