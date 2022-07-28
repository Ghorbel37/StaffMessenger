import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Message } from '../model/message';
import { EmployeeService } from '../services/employee.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-employee-active-chat',
  templateUrl: './employee-active-chat.component.html',
  styleUrls: ['./employee-active-chat.component.css']
})
export class EmployeeActiveChatComponent implements OnInit {
  messages: Message[];
  message: Message = new Message();
  senderId:number;
  receiverId: number;

  constructor(private messageService: MessageService, router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message.senderId=this.senderId = this.route.snapshot.params['senderId'];
    this.message.receiverId=this.receiverId = this.route.snapshot.params['receiverId'];
    setInterval(() => {this.getMessages();
    }, 250);
  }

  clearMessages() {
    this.messageService.clearMessages().subscribe(data => {
    console.log(data);
  });
  }

  getMessages() {
    this.messageService.receiveMessage().subscribe(data => {
      this.messages = data
      // for (let i = 0; i < this.messages.length; i++){
      //   this.messages[i].senderId = this.employeeService.getEmployeeById(this.messages[i].senderId).firstName;
      //   this.messages[i].dateSent = formatDistanceToNow(this.messages[i].dateSent);
      // }
    }); 
  
    //this.messages.forEach(msg => msg.dateSent = formatDistanceToNow(msg.dateSent));
  }

  onSubmit() {
    console.log(this.message);
    this.messageService.sendMessage(this.message).subscribe(data =>
      console.log(data), error => console.log(error));
  }
}
