package com.stage.employee.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.stage.employee.controller.MessageSenderReceiverController;

// Declares the exchange, queue and binding used by Runner and Receiver,
// so RabbitMQ creates them on startup instead of needing manual setup.
@Configuration
public class RabbitMQConfig {

	@Bean
	Queue queue() {
		return new Queue(MessageSenderReceiverController.getQueueName(), true);
	}

	@Bean
	TopicExchange exchange() {
		return new TopicExchange(MessageSenderReceiverController.getTopicExchangeName());
	}

	@Bean
	Binding binding(Queue queue, TopicExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with("foo.bar.#");
	}
}
