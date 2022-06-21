package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Customer;
import com.monocept.model.CustomerTransaction;
import com.monocept.model.Feedback;
import com.monocept.model.Policy;
import com.monocept.model.dto.CustomerDto;
import com.monocept.model.dto.CustomerTransactionDto;
import com.monocept.model.dto.SendFeedBackDto;
import com.monocept.service.CustomerService;

@RestController
@RequestMapping(path = "/api/v1/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	public CustomerController() {
	}

	@GetMapping(path = "/all")
	public ResponseEntity<List<CustomerDto>> allCustomer() {
		return ResponseEntity.ok(customerService.getAllCustomer());
	}

	@PostMapping(path = "/addCustomer")
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
		return ResponseEntity.ok(customerService.addCustomer(customer));
	}

	@GetMapping(path = "/single/{id}")
	public ResponseEntity<Customer> singleCustomer(@PathVariable("id") int id) {
		System.out.println(id);
		return ResponseEntity.ok(customerService.getSingleId(id));
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping(path = "/{id}/activate")
	public ResponseEntity<Customer> activateCustomer(@PathVariable("id") int id) {
		System.out.println(id);
		return ResponseEntity.ok(customerService.activateCustomer(id));
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping(path = "/{id}/deactivate")
	public ResponseEntity<Customer> deactivateCustomer(@PathVariable("id") int id) {
		System.out.println(id);
		return ResponseEntity.ok(customerService.deactivateCustomer(id));
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping(path = "/{id}/delete")
	public ResponseEntity<Customer> deleteCustomer(@PathVariable("id") int id) {
		System.out.println(id);
		return ResponseEntity.ok(customerService.deleteCustomer(id));
	}

	@PostMapping(path = "/{customerId}/addFeedback")
	public ResponseEntity<SendFeedBackDto> addFeedBack(@PathVariable("customerId") int customerId,
			@RequestBody SendFeedBackDto feedback) {
		return ResponseEntity.ok(customerService.addFeedBack(customerId, feedback));
	}

	@PostMapping("/{customerId}/addPolicy/{insurancePlanId}/")
	public ResponseEntity<String> addPolicy(@RequestBody Policy policy, @PathVariable("customerId") int customerId,
			@PathVariable("insurancePlanId") int insurancePlanId) {
		return ResponseEntity.ok(customerService.addPolicy(customerId, insurancePlanId, policy));
	}

	@PostMapping("/{customerId}/addCustomerTransaction")
	public ResponseEntity<Customer> addCustomerTransaction(@PathVariable("customerId") int customerId,
			@RequestBody CustomerTransaction customerTransaction) {
		return ResponseEntity.ok(customerService.addCustomerTransaction(customerId, customerTransaction));
	}

	@GetMapping(path = "/{customerId}/transactions")
	public ResponseEntity<List<CustomerTransactionDto>> getSingleCustomerTransaction(
			@PathVariable("customerId") int customerId) {
		return ResponseEntity.ok(customerService.getSingleCustomerTransaction(customerId));
	}
}
