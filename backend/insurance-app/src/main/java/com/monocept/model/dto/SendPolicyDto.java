package com.monocept.model.dto;

public class SendPolicyDto {
	@Override
	public String toString() {
		return "SendPolicyDto [insurancePlanId=" + insurancePlanId + ", customerId=" + customerId + ", agentId="
				+ agentId + ", amount=" + amount + ", timeSpan=" + timeSpan + ", premiumType=" + premiumType + "]";
	}

	private int insurancePlanId;
	private int customerId;
	private int agentId;
	private double amount;
	private int timeSpan;
	private String premiumType;

	public SendPolicyDto(int insurancePlanId, int customerId, int agentId, double amount, int timeSpan,
			String premiumType) {
		super();
		this.insurancePlanId = insurancePlanId;
		this.customerId = customerId;
		this.agentId = agentId;
		this.amount = amount;
		this.timeSpan = timeSpan;
		this.premiumType = premiumType;
	}

	public SendPolicyDto(int insurancePlanId, int customerId, int agentId, double amount, int timeSpan) {
		super();
		this.insurancePlanId = insurancePlanId;
		this.customerId = customerId;
		this.agentId = agentId;
		this.amount = amount;
		this.timeSpan = timeSpan;
	}

	public String getPremiumType() {
		return premiumType;
	}

	public void setPremiumType(String premiumType) {
		this.premiumType = premiumType;
	}

	public SendPolicyDto() {
		super();

	}

	public int getTimeSpan() {
		return timeSpan;
	}

	public void setTimeSpan(int timeSpan) {
		this.timeSpan = timeSpan;
	}



	public int getInsurancePlanId() {
		return insurancePlanId;
	}

	public void setInsurancePlanId(int insurancePlanId) {
		this.insurancePlanId = insurancePlanId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getAgentId() {
		return agentId;
	}

	public void setAgentId(int agentId) {
		this.agentId = agentId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

}
