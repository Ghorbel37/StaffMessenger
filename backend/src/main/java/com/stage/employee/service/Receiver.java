package com.stage.employee.service;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stage.employee.config.RabbitMQConfig;
import com.stage.employee.controller.EmployeeController;
import com.stage.employee.controller.MessageSenderReceiverController;
import com.stage.employee.model.Message;
import com.stage.employee.repository.EmployeeRepository;


@Component
public class Receiver {
	
	private final RabbitTemplate rabbitTemplate;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Receiver(RabbitTemplate rabbitTemplate) {
		this.rabbitTemplate = rabbitTemplate;	
	}

	
	ArrayList<Message> messages= new ArrayList<>();
	
	@RabbitListener(queues = MessageSenderReceiverController.queueName)
	public void receiveMessage(Message message) {
//		for(Message msg : messages) {
//			employeeRepository.getById(message.getSenderId()).getFirstName();
//			msg.setSenderId();
//		}
		
		messages.add(message);
		System.out.println("Received <"+ message.getMessageBody()+">"+message.getSenderId()+message.getReceiverId());
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
