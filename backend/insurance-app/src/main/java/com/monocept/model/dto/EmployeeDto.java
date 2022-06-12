package com.monocept.model.dto;

public class EmployeeDto {
	
	private int id;
	private String name;
	private String type;
	private boolean status;
	private boolean isDeleted;
	
	public EmployeeDto() {
		
	}

	public EmployeeDto(int id, String name, String type, boolean status, boolean isDeleted) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.status = status;
		this.isDeleted = isDeleted;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
}
