package com.stage.employee.service;


import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import com.stage.employee.config.RabbitMQConfig;
import com.stage.employee.model.Message;

@Component
public class Runner {
	private final RabbitTemplate rabbitTemplate;
	public Runner(RabbitTemplate rabbitTemplate) {
		this.rabbitTemplate = rabbitTemplate;
	}
	
	public void send(Message message) {
		rabbitTemplate.convertAndSend(RabbitMQConfig.getTopicexchangename(),"foo.bar.baz", message.getMessageBody());
		
	}
}
