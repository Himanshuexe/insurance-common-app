package com.monocept.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Agent;
import com.monocept.model.AgentTransaction;
import com.monocept.model.Customer;
import com.monocept.model.CustomerTransaction;
import com.monocept.model.InsurancePlan;
import com.monocept.model.MasterTransaction;
import com.monocept.model.Policy;
import com.monocept.model.dto.InsurancePlanDto;
import com.monocept.model.dto.PolicyDto;
import com.monocept.model.dto.SendPolicyDto;
import com.monocept.service.AgentService;
import com.monocept.service.CustomerService;
import com.monocept.service.InsuranceService;
import com.monocept.service.MasterTransactionService;
import com.monocept.service.PolicyService;

@RestController
@RequestMapping("/api/v1/policy")
public class PolicyController {
	@Autowired
	private PolicyService policyService;
	@Autowired
	private InsuranceService insuranceService;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private AgentService agentService;
	@Autowired
	private MasterTransactionService masterService;

	@PostMapping("/addPolicy")
	public ResponseEntity<SendPolicyDto> addPolicy(@RequestBody SendPolicyDto sendPolicy) {
		System.out.println(sendPolicy.toString());
		Date date = new Date();
		Timestamp time = new Timestamp(date.getTime());

		Timestamp maturityTime = new Timestamp(date.getTime());

		maturityTime.setYear(time.getYear() + sendPolicy.getTimeSpan());

		InsurancePlan insurnacePlan = insuranceService.getInsurancePlanByIdFull(sendPolicy.getInsurancePlanId());
		Customer customer = customerService.getSingleId(sendPolicy.getCustomerId());
		Policy policy = new Policy(time, maturityTime, sendPolicy.getPremiumType(), sendPolicy.getAmount(),
				insurnacePlan.getProfitRatio(), insurnacePlan.getSumAssuredMax());
		double agentCommission = (insurnacePlan.getNewRegistrationCommission() / 100.00) * sendPolicy.getAmount();
		System.err.println(insurnacePlan.getNewRegistrationCommission());
		try {
			Agent agent = agentService.getAgentById(sendPolicy.getAgentId());
			policy.setAgent(agent);
			masterService.addTransaction(new MasterTransaction("debit", agentCommission, "commision to agent"));
			agentService.addAgentTransaction(agent.getId(),
					new AgentTransaction("commission on cutomer", agentCommission, "credit"));
		} catch (Exception e) {

		}

		masterService.addTransaction(new MasterTransaction("credit", sendPolicy.getAmount(), "customer buy policy"));// customer
		customerService.addCustomerTransaction(customer.getId(),
				new CustomerTransaction("debit", sendPolicy.getAmount(), "you but policy"));

		policy.setInsurancePlan(insurnacePlan);
		policy.setCustomer(customer);
		System.out.println("Inside add policy post mapping: ");
		System.out.println(sendPolicy.toString());
		policyService.addPolicy(policy);
		return ResponseEntity.ok(sendPolicy);
	}

	@GetMapping("/{id}/activate")
	public ResponseEntity<String> activatePolicy(@PathVariable("id") int id) {
		return ResponseEntity.ok(policyService.activatePolicy(id));
	}

	@GetMapping("/{id}/deactivate")
	public ResponseEntity<String> deactivatePolicy(@PathVariable("id") int id) {
		return ResponseEntity.ok(policyService.deactivatePolicy(id));
	}

	@GetMapping("/{id}/delete")
	public ResponseEntity<String> deletePolicy(@PathVariable("id") int id) {
		return ResponseEntity.ok(policyService.deletePolicy(id));
	}

}
