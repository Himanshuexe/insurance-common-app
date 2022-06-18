import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './add-city/add-city.component';
import { AddInsuranceTypeComponent } from './add-insurance-type/add-insurance-type.component';
import { AddStateComponent } from './add-state/add-state.component';
import { AddingInsurancePlanComponent } from './adding-insurance-plan/adding-insurance-plan.component';
import { AddingInsuranceSchemeComponent } from './adding-insurance-scheme/adding-insurance-scheme.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentRegistrationComponent } from './agent-registration/agent-registration/agent-registration.component';
import { ChildPlanComponent } from './child-plan/child-plan.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { InsuranceAccountDetailsComponent } from './insurance-account-details/insurance-account-details.component';
import { InsuranceSettingComponent } from './insurance-setting/insurance-setting.component';
import { MarketingComponent } from './marketing/marketing/marketing.component';
import { PaymentSlipComponent } from './payment-slip/payment-slip.component';
import { PolicyPaymentComponent } from './policy-payment/policy-payment.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { TaxSettingComponent } from './tax-setting/tax-setting.component';
import { ViewAgentInsuranceAccountComponent } from './view-agent-insurance-account/view-agent-insurance-account/view-agent-insurance-account.component';
import { ViewAgentRecordsComponent } from './view-agent-records/view-agent-records.component';
import { ViewCityComponent } from './view-city/view-city.component';
import { ViewCommissionForAgentComponent } from './view-commission-for-agent/view-commission-for-agent.component';
import { ViewCommissionWithdrawalComponent } from './view-commission-withdrawal/view-commission-withdrawal.component';
import { ViewCustomerForAgentComponent } from './view-customer-for-agent/view-customer-for-agent.component';
import { ViewEmployeeRecordsComponent } from './view-employee-records/view-employee-records.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewInsuranceAccountDetailComponent } from './view-insurance-account-detail/view-insurance-account-detail.component';
import { ViewInsurancePlanRecordComponent } from './view-insurance-plan-record/view-insurance-plan-record.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { ViewInsuranceTypeComponent } from './view-insurance-type/view-insurance-type.component';
import { ViewPolicyClaimComponent } from './view-policy-claim/view-policy-claim.component';
import { ViewPolicyPaymentForAgentComponent } from './view-policy-payment-for-agent/view-policy-payment-for-agent.component';
import { ViewStateComponent } from './view-state/view-state.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'employee-login', component: EmployeeLoginComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'agent-login', component: AgentLoginComponent },
  { path: 'protection-plan', component: ProtectionPlanComponent },
  { path: 'child-plan', component: ChildPlanComponent },
  { path: 'customer-registration', component: CustomerRegistrationComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'customer-profile', component: CustomerProfileComponent },
  { path: 'customer-feedback', component: CustomerFeedbackComponent },
  { path: 'view-insurance-account-detail', component: ViewInsuranceAccountDetailComponent },
  { path: 'agent-dashboard', component: AgentDashboardComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'viewCustomer', component: ViewCustomerForAgentComponent },
  { path: 'viewCommission', component: ViewCommissionForAgentComponent },
  { path: 'viewPolicyPay', component: ViewPolicyPaymentForAgentComponent },
  { path: 'viewPolicyClaim', component: ViewPolicyClaimComponent },
  { path: 'viewCommWithdrawal', component: ViewCommissionWithdrawalComponent },
  { path: 'viewInsuranceScheme', component: ViewInsuranceSchemeComponent },
  { path: 'marketingAgent', component: MarketingComponent },
  { path: 'InsuranceAccountForAgent', component: ViewAgentInsuranceAccountComponent },
  { path: 'agentRegistration', component: AgentRegistrationComponent },
  { path: 'viewAgents', component: ViewAgentRecordsComponent },
  { path: 'viewFeedback', component: ViewFeedbackComponent },
  { path: 'addInsuranceType', component: AddInsuranceTypeComponent },
  { path: 'viewInsurancePlan', component: ViewInsurancePlanRecordComponent },
  { path: 'taxSetting', component: TaxSettingComponent },
  { path: 'insuranceSetting', component: InsuranceSettingComponent },
  { path: 'addState', component: AddStateComponent },
  { path: 'addCity', component: AddCityComponent },
  { path: 'viewState', component: ViewStateComponent },
  { path: 'viewCity', component: ViewCityComponent },
  { path: 'addInsuranceScheme', component: AddingInsuranceSchemeComponent },
  { path: 'addInsurancePlan', component: AddingInsurancePlanComponent },
  { path: 'empRecords', component: ViewEmployeeRecordsComponent },
  { path: 'empRegistration', component: EmployeeRegistrationComponent },
  { path: 'view-insurance-account-detail', component: ViewInsuranceAccountDetailComponent },
  { path: 'insuranceType', component: ViewInsuranceTypeComponent },
  { path: 'customerQueries', component: CustomerFeedbackComponent },
  { path: 'insurance-account-details', component: InsuranceAccountDetailsComponent },
  { path: 'policy-payment', component: PolicyPaymentComponent },
  { path: 'payment-slip', component: PaymentSlipComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
