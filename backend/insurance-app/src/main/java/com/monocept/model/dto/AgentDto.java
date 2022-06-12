package com.monocept.model.dto;

public class AgentDto {
	
	private int id;
	private String name;
	private String address;
	private String email;
	private String qualification;
	private boolean status;
	private boolean isDeleted;
	
	public AgentDto() {
		
	}

	public AgentDto(int id, String name, String address, String email, String qualification, boolean status,
			boolean isDeleted) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.email = email;
		this.qualification = qualification;
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
