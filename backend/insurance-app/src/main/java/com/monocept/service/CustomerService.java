package com.monocept.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.Customer;
import com.monocept.model.CustomerTransaction;
import com.monocept.model.Feedback;
import com.monocept.model.Policy;
import com.monocept.model.dto.CustomerDto;
import com.monocept.model.dto.CustomerTransactionDto;
import com.monocept.model.dto.SendFeedBackDto;
import com.monocept.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;

	public CustomerService() {

	}

	public List<CustomerDto> getAllCustomer() {
		return customerRepository.getAllCustomer().stream()
				.map(c -> new CustomerDto(c.getId(), c.getName(), c.getDob(), c.getAddress(), c.getCity(), c.getState(),
						c.getPinCode(), c.getEmail(), c.getNumber(), c.getNominee(), c.getNomineeRelation(),
						c.getStatus(), c.isDeleted()))
				.collect(Collectors.toList());

	}

	public Customer getSingleId(int id) {
		return customerRepository.getSingleCustomer(id);
	}

	public Customer addCustomer(Customer customer) {
		return customerRepository.addCustomer(customer);
	}

	public SendFeedBackDto addFeedBack(int customerId, SendFeedBackDto feedback) {
		return customerRepository.addFeedBack(customerId, feedback);
	}

	public Customer activateCustomer(int customerid) {
		return customerRepository.activateCustomer(customerid);
	}

	public Customer deactivateCustomer(int customerid) {
		return customerRepository.deactivateCustomer(customerid);
	}

	public Customer deleteCustomer(int customerid) {
		return customerRepository.deteleCustomer(customerid);
	}

	public String addPolicy(int customerId, int insurancePlanId, Policy policy) {
		return customerRepository.addPolicy(customerId, insurancePlanId, policy);
	}

	public String addPolicyViaAgent(int customerId, int insurancePlanId, int agentId, Policy policy) {
		return customerRepository.addPolicyViaAgent(customerId, insurancePlanId, agentId, policy);
	}

	public Customer addCustomerTransaction(int customerId, CustomerTransaction customerTransaction) {
		return customerRepository.customerTransaction(customerId, customerTransaction);
	}

	public List<CustomerTransactionDto> getSingleCustomerTransaction(int customerId) {
		return customerRepository.getSingleCustomerTransaction(customerId).stream()
				.map(c -> new CustomerTransactionDto(customerId,c.getCustomer().getName(), c.getTime(), c.getDescription(),c.getAmount(),c.getType())).collect(Collectors.toList());
	}
}
