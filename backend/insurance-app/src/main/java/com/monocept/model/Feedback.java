package com.monocept.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Feedback extends com.monocept.model.Entity {
	
	private String title;
	private String message;
	private Date date;
	private String reply;
	
	@ManyToOne
	@JoinColumn
	private Customer customer;
	
	public Feedback() {
		
	}
	
	public Feedback(String title, String message, Date date) {
		super();
		this.title = title;
		this.message = message;
		this.date = date;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public void setReply(String reply) {
		this.reply = reply;
	}

	public String getTitle() {
		return title;
	}
	public String getMessage() {
		return message;
	}
	public Date getDate() {
		return date;
	}
	public String getReply() {
		return reply;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
}
