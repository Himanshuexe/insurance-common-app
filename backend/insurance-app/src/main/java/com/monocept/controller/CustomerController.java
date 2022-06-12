package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Customer;
import com.monocept.model.Feedback;
import com.monocept.model.dto.CustomerDto;
import com.monocept.model.dto.SendFeedBackDto;
import com.monocept.service.CustomerService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping(path = "/api/v1/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	public CustomerController() {
	}

	@GetMapping
	public ResponseEntity<List<CustomerDto>> allCustomer() {
		return ResponseEntity.ok(customerService.getAllCustomer());
	}
	
	@PostMapping(path = "/addCustomer")
	public ResponseEntity<Customer> addCustomer(@org.springframework.web.bind.annotation.RequestBody Customer customer) {
		return ResponseEntity.ok(customerService.addCustomer(customer));
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<Customer> singleCustomer(@PathVariable("id") int id){
		System.out.println(id);
		return ResponseEntity.ok(customerService.getSingleId(id));
	}

	@GetMapping(path = "/{id}/activate")
	public ResponseEntity<Customer> activateCustomer(@PathVariable("id") int id){
		System.out.println(id);
		return ResponseEntity.ok(customerService.activateCustomer(id));
	}
	@GetMapping(path = "/{id}/deactivate")
	public ResponseEntity<Customer> deactivateCustomer(@PathVariable("id") int id){
		System.out.println(id);
		return ResponseEntity.ok(customerService.deactivateCustomer(id));
	}
	@GetMapping(path = "/{id}/delete")
	public ResponseEntity<Customer> deleteCustomer(@PathVariable("id") int id){
		System.out.println(id);
		return ResponseEntity.ok(customerService.deleteCustomer(id));
	}

	@PostMapping(path="/{customerId}/addFeedback")
	public ResponseEntity<SendFeedBackDto> addFeedBack(@PathVariable("customerId") int customerId, @org.springframework.web.bind.annotation.RequestBody SendFeedBackDto feedback){
		return ResponseEntity.ok(customerService.addFeedBack(customerId, feedback));
	}
	
}
