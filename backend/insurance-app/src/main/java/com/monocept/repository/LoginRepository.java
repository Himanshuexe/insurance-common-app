package com.monocept.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.monocept.model.Agent;
import com.monocept.model.Customer;
import com.monocept.model.Employee;
import com.monocept.model.dto.LoginDto;

@Repository
public class LoginRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public LoginRepository() {

	}

	public String login(LoginDto loginDto) throws NullPointerException {
		Employee employee = null;
		Agent agent = null;
		Customer customer = null;

		try {
			employee = (Employee) entityManager.createQuery("From Employee where id = " + loginDto.getId()
					+ " AND  password = '" + loginDto.getPassword() + "'").getSingleResult();
			if (employee != null)
				return employee.toString();
		} catch (Exception e) {

		}

		try {
			customer = (Customer) entityManager.createQuery("From Customer where id = " + loginDto.getId()
					+ " AND  password = '" + loginDto.getPassword() + "'").getSingleResult();
			if (customer != null)
				return customer.toString();
		} catch (Exception e) {

		}
		try {

			agent = (Agent) entityManager.createQuery(
					"From Agent where id = " + loginDto.getId() + " AND  password = '" + loginDto.getPassword() + "'")
					.getSingleResult();
			if (agent != null)
				return agent.toString();
		} catch (Exception e) {

		}

		return "authenication failed";

	}
}
