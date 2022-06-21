package com.monocept.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.monocept.model.Employee;

@Repository
public class EmployeeRepository {
	@PersistenceContext
	private EntityManager em;
	
	public EmployeeRepository() {
		
	}
	
	@Transactional
	public void addEmployee(Employee employee) {
		em.persist(employee);
	}
	
	public List<Employee> getEmployees() {
		return em.createQuery("From Employee Where type="+"\'normal\'").getResultList();
	}
	
	public Employee getEmployeeById(int id) {
		return (Employee) em.createQuery("FROM Employee WHERE id = "+id+" ").getSingleResult();
	}
	
	@Transactional
	public String activateEmployee(int id) {
		Employee employee = getEmployeeById(id);
		employee.setStatus(true);
		em.merge(employee);
		return "activated";
	}
	
	@Transactional
	public String deactivateEmployee(int id) {
		Employee employee = getEmployeeById(id);
		employee.setStatus(false);
		em.merge(employee);
		return "deactivated";
	}
	
	@Transactional
	public String deleteEmployee(int id) {
		Employee employee = getEmployeeById(id);
		employee.setDeleted(true);
		em.merge(employee);
		return "deleted";
	}
}
