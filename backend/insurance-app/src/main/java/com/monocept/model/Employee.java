package com.monocept.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee extends com.monocept.model.Entity implements UserDetail {
	
	private String name;

	private String password;
	
	public Employee() {
		super();
	}

	public Employee(String name, String password, boolean status) {
		super();
		this.name = name;
	
		this.password = password;
		super.setStatus(status);

	}

	public void setName(String name) {
		this.name = name;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getName() {
		return name;
	}


	public String getPassword() {
		return password;
	}
	
}
