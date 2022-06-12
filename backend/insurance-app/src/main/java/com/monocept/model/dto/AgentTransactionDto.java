package com.monocept.model.dto;

import java.sql.Timestamp;

public class AgentTransactionDto {
	
	private int id;
	private String agentName;
	private Timestamp time;
	private String description;
	private double amount;
	private String type;
	
	public AgentTransactionDto() {
		
	}

	public AgentTransactionDto(int id, String agentName, Timestamp time, String description, double amount,
			String type) {
		super();
		this.id = id;
		this.agentName = agentName;
		this.time = time;
		this.description = description;
		this.amount = amount;
		this.type = type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAgentName() {
		return agentName;
	}

	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}

	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
}
