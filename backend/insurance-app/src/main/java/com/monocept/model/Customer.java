package com.monocept.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Customer extends com.monocept.model.Entity{

	private String password;
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
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<Policy> policies;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<Feedback> feedbacks;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<CustomerTransaction> transactions;
	
	public Customer() {
		super();
		policies = new ArrayList<>();
		feedbacks = new ArrayList<>();
		transactions = new ArrayList<>();
	}

	public Customer(String password, String name, Date dob, String address, String city, String state, int pinCode,
			String email, String number, String nominee, String nomineeRelation, List<Policy> policies,
			List<Feedback> feedbacks, List<CustomerTransaction> transactions) {
		super();
		this.password = password;
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
		this.policies = policies;
		this.feedbacks = feedbacks;
		this.transactions = transactions;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public List<Policy> getPolicies() {
		return policies;
	}

	public void setPolicies(List<Policy> policies) {
		this.policies = policies;
	}

	public List<Feedback> getFeedbacks() {
		return feedbacks;
	}

	public void setFeedbacks(List<Feedback> feedbacks) {
		this.feedbacks = feedbacks;
	}

	public List<CustomerTransaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<CustomerTransaction> transactions) {
		this.transactions = transactions;
	}
	
	public void addPolicy(Policy policy) {
		policies.add(policy);
	}
	
	public void addTransaction(CustomerTransaction transaction) {
		transactions.add(transaction);
	}
	
	public void customerAddFeedBacks(Feedback feedback) {
	   feedbacks.add(feedback);
   }
	@Override
	public String toString() {
		return "Customer [name=" + name + ", dob=" + dob + ", address=" + address + ", city=" + city + ", state="
				+ state + ", pinCode=" + pinCode + ", email=" + email + ", number=" + number + ", nominee=" + nominee
				+ ", nomineeRelation=" + nomineeRelation + ", policies=" + policies + ", feedbacks=" + feedbacks
				+ ", transactions=" + transactions + "]";
	}
}
