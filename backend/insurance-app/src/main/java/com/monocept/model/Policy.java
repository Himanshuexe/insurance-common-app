package com.monocept.model;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Policy extends com.monocept.model.Entity {
	
	private Timestamp createdDate;
	private Timestamp maturityDate;
	private String premiumType;
	private double premiumAmount;
	private double profitRatio;
	private double sumAssured;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn
	private InsurancePlan insurancePlan;
	
	@JsonIgnore
	@ManyToOne
	private Agent agent;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn
	private Customer customer;
	
	public Policy() {
		
	}

	public Policy(Timestamp createdDate, Timestamp maturityDate, String premiumType, double premiumAmount,
			double profitRatio, double sumAssured) {
		super();
		this.createdDate = createdDate;
		this.maturityDate = maturityDate;
		this.premiumType = premiumType;
		this.premiumAmount = premiumAmount;
		this.profitRatio = profitRatio;
		this.sumAssured = sumAssured;
	
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public Timestamp getMaturityDate() {
		return maturityDate;
	}

	public void setMaturityDate(Timestamp maturityDate) {
		this.maturityDate = maturityDate;
	}

	public String getPremiumType() {
		return premiumType;
	}

	public void setPremiumType(String premiumType) {
		this.premiumType = premiumType;
	}

	public double getPremiumAmount() {
		return premiumAmount;
	}

	public void setPremiumAmount(double premiumAmount) {
		this.premiumAmount = premiumAmount;
	}

	public double getProfitRatio() {
		return profitRatio;
	}

	public void setProfitRatio(double profitRatio) {
		this.profitRatio = profitRatio;
	}

	public double getSumAssured() {
		return sumAssured;
	}

	public void setSumAssured(double sumAssured) {
		this.sumAssured = sumAssured;
	}

	public InsurancePlan getInsurancePlan() {
		return insurancePlan;
	}

	public void setInsurancePlan(InsurancePlan insurancePlan) {
		this.insurancePlan = insurancePlan;
	}

	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}


	

}
