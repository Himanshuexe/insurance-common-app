package com.monocept.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee extends com.monocept.model.Entity {
	
	private String name;
	private String type;
	private String password;
	
	public Employee() {
		super();
	}

	public Employee(String name, String type, String password, boolean status) {
		super();
		this.name = name;
		this.type = type;
		this.password = password;
		super.setStatus(status);

	}

	public void setName(String name) {
		this.name = name;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getName() {
		return name;
	}

	public String getType() {
		return type;
	}

	public String getPassword() {
		return password;
	}
	
}
