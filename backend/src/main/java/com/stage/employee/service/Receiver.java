package com.stage.employee.service;

import java.util.ArrayList;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import com.stage.employee.config.RabbitMQConfig;
import com.stage.employee.model.Message;


@Component
public class Receiver {
	
	private final RabbitTemplate rabbitTemplate;
	
	public Receiver(RabbitTemplate rabbitTemplate) {
		this.rabbitTemplate = rabbitTemplate;	
	}

	
	ArrayList<Message> messages= new ArrayList<>();
	
	@RabbitListener(queues = RabbitMQConfig.queueName)
	public void receiveMessage(Message message) {
		messages.add(message);
		System.out.println(messages);
		System.out.println("Received <"+ message.getMessageBody()+">");
	}

	public void setMessages(ArrayList<Message> messages) {
		this.messages = messages;
	}

	public ArrayList<Message> getMessages(){
		return messages;
	}
	
//	public Object getSingleMessage() {
//		return rabbitTemplate.receiveAndConvert(RabbitMQConfig.queueName);
//	}
	
	public ArrayList<Message> getAllMessages(){
		return getMessages();
	}
	
	public void clearMessages(){
		this.messages.clear();
	}
	
}
