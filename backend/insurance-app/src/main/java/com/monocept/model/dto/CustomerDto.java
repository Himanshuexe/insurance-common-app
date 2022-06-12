package com.monocept.model.dto;

import java.sql.Date;

public class CustomerDto {
	
	private int id;
	private String name;
	private Date dob;
	private String address;
	private String city;
	private String state;
	private int pinCode;
	private String email;
	private String number;
	private String nominee;
	private String nomineeRelation;
	private boolean status;
	private boolean isDeleted;
	
	public CustomerDto() {
		
	}
	
	public CustomerDto(int id, String name, Date dob, String address, String city, String state, int pinCode,
			String email, String number, String nominee, String nomineeRelation, boolean status, boolean isDeleted) {
		super();
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.email = email;
		this.number = number;
		this.nominee = nominee;
		this.nomineeRelation = nomineeRelation;
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getNominee() {
		return nominee;
	}

	public void setNominee(String nominee) {
		this.nominee = nominee;
	}

	public String getNomineeRelation() {
		return nomineeRelation;
	}

	public void setNomineeRelation(String nomineeRelation) {
		this.nomineeRelation = nomineeRelation;
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
