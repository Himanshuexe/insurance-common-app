package com.monocept.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MasterTransaction extends TransactionEntity {

	public MasterTransaction() {
		super();
	}

	public MasterTransaction(Timestamp time, String description, double amount, String type) {
		super(time, type, amount, type);
	}
	public MasterTransaction( String type, double amount, String description) {
		super(type, amount, description);
	}

}
