package com.stage.employee.controller;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.context.annotation.Bean;

import com.stage.employee.model.Message;
import com.stage.employee.service.Receiver;

public class MessageSenderReceiverController {
	private static final String topicExchangeName = "spring-boot-exchange";
	public static final String queueName = "spring-boot";
	
	public static String getQueueName() {
		return queueName;
	}
	
	public static  String getTopicExchangeName() {
		return topicExchangeName;
	}

	@Bean
	public Queue queue(String queueName, Boolean durable) {
		return new Queue(queueName, durable);
	}
	
	@Bean
	public TopicExchange exchange(String topicExchangeName) {
		return new TopicExchange(topicExchangeName);
	}
	
	@Bean
	public Binding binding(Queue queue, TopicExchange exchange, String routingKey) {
		return BindingBuilder.bind(queue).to(exchange).with(routingKey);
	}
	
	public String generateQueueName(Message message) {
		return "employee"+message.getReceiverId()+message.getSenderId();
	}
	
//	@Bean
//	SimpleMessageListenerContainer container(ConnectionFactory connectionFactory, MessageListenerAdapter listenerAdapter) {
//		SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
//		container.setConnectionFactory(connectionFactory);
//		container.setQueueNames(queueName);
//		container.setMessageListener(listenerAdapter);
//		return container;
//	}
//	
//	@Bean
//	MessageListenerAdapter listenerAdapter(Receiver receiver) {	
//		return new MessageListenerAdapter(receiver, "receiveMessage");
//	}
}
