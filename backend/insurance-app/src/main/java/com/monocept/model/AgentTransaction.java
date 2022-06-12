package com.monocept.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class AgentTransaction extends TransactionEntity{
	
	@ManyToOne
	@JoinColumn
	private Agent agent;
	
	public AgentTransaction() {
		
	}
	
	public AgentTransaction(Timestamp time, String description, double amount, String type) {
		super(time, description, amount, type);
	}
	
}
