package com.stage.employee.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stage.employee.model.Employee;
import com.stage.employee.model.Message;
import com.stage.employee.service.Receiver;
import com.stage.employee.service.Runner;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/")
public class MessageRestAPIController {
	
	@Autowired
	private Runner runner;
	@Autowired
	private Receiver receiver;
	
	@CrossOrigin(origins =  "http://localhost:4200")
	
	//rest api send message to exchange
	@PostMapping("/employees/message")
	public ResponseEntity<Message> send(@RequestBody Message message) {
		System.out.println(message.getReceiverId());
		runner.send(message);
		return ResponseEntity.ok(message);
	}
	
	//rest api get all messages
	@GetMapping("/employees/message")
	public ResponseEntity<ArrayList<Message>> receiveMessage(){
		return ResponseEntity.ok(receiver.getAllMessages()) ;
	}
	
	//rest api delete messages
	@DeleteMapping("/employees/message")
	public ResponseEntity<Map<String,Boolean>> clearMessages(){
		receiver.clearMessages();
		Map<String,Boolean> response= new HashMap<>();
		response.put("Inbox cleared",Boolean.TRUE);
		return ResponseEntity.ok(response);
		}
	
	@GetMapping("/employees/message/{senderId}/{receiverId}")
	public ResponseEntity<ArrayList<Message>> login(@PathVariable Long senderId,@PathVariable Long receiverId){
		
		return null;
	}
	
	//generate message queue using employee name and id
	public String generateQueue(Employee employee) {
		//return UUID.fromString(employee.getFirstName()+employee.getId()).toString();
		return employee.getFirstName()+employee.getId();
	}
}
