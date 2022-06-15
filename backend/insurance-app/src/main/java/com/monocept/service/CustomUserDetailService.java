package com.monocept.service;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.monocept.config.CustomUserDetails;
import com.monocept.model.Agent;
import com.monocept.model.Customer;
import com.monocept.model.Employee;
import com.monocept.repository.AgentRepository;
import com.monocept.repository.CustomerRepository;
import com.monocept.repository.EmployeeRepository;

@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	AgentRepository agentRepository;

	public CustomUserDetailService() {

	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Employee employee = null;
		Customer customer = null;
		Agent agent=null;
		System.err.println("user name is " + username);

		try {
			employee = employeeRepository.getEmployeeById(Integer.valueOf(username));
		} catch (Exception e) {
			System.err.println(e);
		}
		try {
			customer = customerRepository.getSingleCustomer(Integer.valueOf(username));
		} catch (Exception e) {
			System.err.println(e);
		}
		try {
			agent = agentRepository.getAgentById(Integer.valueOf(username));
		} catch (Exception e) {
			System.err.println(e);
		}

		if (employee != null) {
			CustomUserDetails cus= new CustomUserDetails(employee);
			return cus;
		} else if (customer != null) {
			CustomUserDetails cus= new CustomUserDetails(customer);
			return cus;
			
		}else if(agent!=null) {
			CustomUserDetails cus= new CustomUserDetails(agent);
			return cus;		
			} 
		else {
			System.out.println("not enter--------------------------");
			throw new UsernameNotFoundException("bad credenatials");
		}
	}

}
