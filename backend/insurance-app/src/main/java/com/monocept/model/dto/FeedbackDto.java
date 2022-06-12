package com.monocept.model.dto;

import java.sql.Date;

import com.monocept.model.Customer;

public class FeedbackDto {
	
	private int id;
	private String title;
	private String message;
	private Date date;
	private String reply;
	private String customerName;
	private boolean status;
	private boolean isDeleted;
	
	public FeedbackDto() {
		
	}

	public FeedbackDto(int id, String title, String message, Date date, String reply, String customerName,
			boolean status, boolean isDeleted) {
		super();
		this.id = id;
		this.title = title;
		this.message = message;
		this.date = date;
		this.reply = reply;
		this.customerName = customerName;
		this.status = status;
		this.isDeleted = isDeleted;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
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
