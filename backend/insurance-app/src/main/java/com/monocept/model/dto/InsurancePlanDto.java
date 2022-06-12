package com.monocept.model.dto;

public class InsurancePlanDto {

	private int id;
	private String name;
	private String insuranceTypeName;
	private String description;
	private int newRegistrationCommission;
	private int installmentPaymentCommission;
	private int policyTermMin;
	private int policyTermMax;
	private int minAge;
	private int maxAge;
	private double sumAssuredMin;
	private double sumAssuredMax;
	private double profitRatio;
	private boolean status;
	private boolean isDeleted;
	
	public InsurancePlanDto() {
		
	}

	public InsurancePlanDto(int id, String name, String insuranceTypeName, String description,
			int newRegistrationCommission, int installmentPaymentCommission, int policyTermMin, int policyTermMax,
			int minAge, int maxAge, double sumAssuredMin, double sumAssuredMax, double profitRatio, boolean status,
			boolean isDeleted) {
		super();
		this.id = id;
		this.name = name;
		this.insuranceTypeName = insuranceTypeName;
		this.description = description;
		this.newRegistrationCommission = newRegistrationCommission;
		this.installmentPaymentCommission = installmentPaymentCommission;
		this.policyTermMin = policyTermMin;
		this.policyTermMax = policyTermMax;
		this.minAge = minAge;
		this.maxAge = maxAge;
		this.sumAssuredMin = sumAssuredMin;
		this.sumAssuredMax = sumAssuredMax;
		this.profitRatio = profitRatio;
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

	public String getInsuranceTypeName() {
		return insuranceTypeName;
	}

	public void setInsuranceTypeName(String insuranceTypeName) {
		this.insuranceTypeName = insuranceTypeName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNewRegistrationCommission() {
		return newRegistrationCommission;
	}

	public void setNewRegistrationCommission(int newRegistrationCommission) {
		this.newRegistrationCommission = newRegistrationCommission;
	}

	public int getInstallmentPaymentCommission() {
		return installmentPaymentCommission;
	}

	public void setInstallmentPaymentCommission(int installmentPaymentCommission) {
		this.installmentPaymentCommission = installmentPaymentCommission;
	}

	public int getPolicyTermMin() {
		return policyTermMin;
	}

	public void setPolicyTermMin(int policyTermMin) {
		this.policyTermMin = policyTermMin;
	}

	public int getPolicyTermMax() {
		return policyTermMax;
	}

	public void setPolicyTermMax(int policyTermMax) {
		this.policyTermMax = policyTermMax;
	}

	public int getMinAge() {
		return minAge;
	}

	public void setMinAge(int minAge) {
		this.minAge = minAge;
	}

	public int getMaxAge() {
		return maxAge;
	}

	public void setMaxAge(int maxAge) {
		this.maxAge = maxAge;
	}

	public double getSumAssuredMin() {
		return sumAssuredMin;
	}

	public void setSumAssuredMin(double sumAssuredMin) {
		this.sumAssuredMin = sumAssuredMin;
	}

	public double getSumAssuredMax() {
		return sumAssuredMax;
	}

	public void setSumAssuredMax(double sumAssuredMax) {
		this.sumAssuredMax = sumAssuredMax;
	}

	public double getProfitRatio() {
		return profitRatio;
	}

	public void setProfitRatio(double profitRatio) {
		this.profitRatio = profitRatio;
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
