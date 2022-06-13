package com.monocept.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.Employee;
import com.monocept.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository repo;
	
	public EmployeeService() {
		
	}
	
	public void addEmployee(Employee employee) {
		repo.addEmployee(employee);
	}
	
	public List<Employee> getEmployees() {
		return repo.getEmployees();
	}
	
	public Employee getEmployeeById(int id) {
		return repo.getEmployeeById(id);
	}
	
	public String activateEmployee(int id) {
		return repo.activateEmployee(id);
	}
	
	public String deactivateEmployee(int id) {
		return repo.deactivateEmployee(id);
	}

	public String deleteEmployee(int id) {
		return repo.deleteEmployee(id);
	}
}
