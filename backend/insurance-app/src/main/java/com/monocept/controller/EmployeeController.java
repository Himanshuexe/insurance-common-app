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

import com.monocept.model.Employee;
import com.monocept.service.EmployeeService;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ADMIN') || hasAuthority('NORMAL') ")
	public ResponseEntity<List<Employee>> getEmployees(){
		return ResponseEntity.ok(employeeService.getEmployees()); 
	}
	
	@PostMapping("/addEmployee")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		employeeService.addEmployee(employee);
		return ResponseEntity.ok(employee);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int id){
		return ResponseEntity.ok(employeeService.getEmployeeById(id));
	}
	
	@GetMapping("/{id}/activate")
	public ResponseEntity<String> activateEmployee(@PathVariable("id") int id){
		return ResponseEntity.ok(employeeService.activateEmployee(id));
	}

	@GetMapping("/{id}/deactivate")
	public ResponseEntity<String> deactivateEmployee(@PathVariable("id") int id){
		return ResponseEntity.ok(employeeService.deactivateEmployee(id));
	}

	@GetMapping("/{id}/delete")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id){
		return ResponseEntity.ok(employeeService.deleteEmployee(id));
	}
}
