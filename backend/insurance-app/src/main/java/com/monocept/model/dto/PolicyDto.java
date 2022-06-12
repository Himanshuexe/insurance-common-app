package com.monocept.model.dto;

import java.sql.Date;

public class PolicyDto {
	
	private int id;
	private String customerName;
	private String agentName;
	private String insuranceTypeName;
	private String insurancePlanName;
	private Date createdDate;
	private Date maturityDate;
	private String premiumType;
	private double premiumAmount;
	private double profitRatio;
	private double sumAssured;
	private boolean status;
	private boolean isDeleted;
	
	public PolicyDto() {
		
	}
	
	public PolicyDto(int id, String customerName, String insuranceTypeName, String insurancePlanName, Date createdDate,
			Date maturityDate, String premiumType, double premiumAmount, double profitRatio, double sumAssured,
			boolean status, boolean isDeleted) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.insuranceTypeName = insuranceTypeName;
		this.insurancePlanName = insurancePlanName;
		this.createdDate = createdDate;
		this.maturityDate = maturityDate;
		this.premiumType = premiumType;
		this.premiumAmount = premiumAmount;
		this.profitRatio = profitRatio;
		this.sumAssured = sumAssured;
		this.status = status;
		this.isDeleted = isDeleted;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getInsuranceTypeName() {
		return insuranceTypeName;
	}

	public void setInsuranceTypeName(String insuranceTypeName) {
		this.insuranceTypeName = insuranceTypeName;
	}

	public String getInsurancePlanName() {
		return insurancePlanName;
	}

	public void setInsurancePlanName(String insurancePlanName) {
		this.insurancePlanName = insurancePlanName;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getMaturityDate() {
		return maturityDate;
	}

	public void setMaturityDate(Date maturityDate) {
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
