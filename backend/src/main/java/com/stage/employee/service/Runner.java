package com.stage.employee.service;


import java.util.Date;
import java.util.UUID;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.stage.employee.model.Message;

@Component
public class Runner {
	private final RabbitTemplate rabbitTemplate;
	public Runner(RabbitTemplate rabbitTemplate) {
		this.rabbitTemplate = rabbitTemplate;
	}
	
	public void send(@RequestBody Message message) {
		message.setUuid(UUID.randomUUID().toString());
		message.setDateSent(new Date());
		rabbitTemplate.convertAndSend("spring-boot-exchange","foo.bar.baz", message);		
	}
}
