package com.monocept.model.dto;

import java.sql.Date;

public class SendFeedBackDto {
	private String title;
	private String message;
	private String reply;
	
	public SendFeedBackDto() {
		
	}

	public SendFeedBackDto(String title, String message, String reply) {
		super();
		this.title = title;
		this.message = message;
		this.reply = reply;
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



	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}
}
