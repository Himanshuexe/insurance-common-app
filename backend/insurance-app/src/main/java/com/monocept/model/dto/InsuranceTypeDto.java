package com.monocept.model.dto;

public class InsuranceTypeDto {
	
	private int id;
	private String name;
	private boolean status;
	private boolean isDeleted;
	
	public InsuranceTypeDto() {
		
	}

	public InsuranceTypeDto(int id, String name, boolean status, boolean isDeleted) {
		super();
		this.id = id;
		this.name = name;
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
