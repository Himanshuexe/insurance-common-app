package com.monocept.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Agent extends Entity implements UserDetail{
	
	private String name;
	private String password;
	private String address;
	private String email;
	private String qualification;
	
	@OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
	private List<AgentTransaction> transactions;
	
	public Agent() {
		transactions = new ArrayList<>();
	}

	public Agent(String name, String password, String address, String email, String qualification) {
		super();
		this.name = name;
		this.password = password;
		this.address = address;
		this.email = email;
		this.qualification = qualification;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	
	public void addTransaction(AgentTransaction transaction) {
		transactions.add(transaction);
	}
}
