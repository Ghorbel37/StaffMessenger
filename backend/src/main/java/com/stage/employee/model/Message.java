package com.stage.employee.model;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Message implements Serializable{

	private long senderId;
	private long receiverId;
	private String uuid;
	private String messageBody;
	private Date dateSent;
	
	public Message() {
	}
	
	public Message(String messageBody,long senderId,long receiverId) {
		this.senderId=senderId;
		this.receiverId=receiverId;
		this.uuid= UUID.randomUUID().toString();
		this.messageBody = messageBody;
		this.dateSent= new Date();
	}

	public long getSenderId() {
		return senderId;
	}

	public void setSenderId(long senderId) {
		this.senderId = senderId;
	}

	public long getReceiverId() {
		return receiverId;
	}

	public void setReceiverId(long receiverId) {
		this.receiverId = receiverId;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getMessageBody() {
		return messageBody;
	}

	public void setMessageBody(String messageBody) {
		this.messageBody = messageBody;
	}

	public Date getDateSent() {
		return dateSent;
	}

	public void setDateSent(Date dateSent) {
		this.dateSent = dateSent;
	}
	
}
