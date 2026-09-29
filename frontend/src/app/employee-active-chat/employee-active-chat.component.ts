import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../model/message';
import { EmployeeService } from '../services/employee.service';
import { MessageService } from '../services/message.service';
import { formatDistanceToNow } from 'date-fns';


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
  date: Date = new Date();
  string = formatDistanceToNow(this.date);
  

  constructor(private messageService: MessageService, router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message.senderId=this.senderId = this.route.snapshot.params['senderId'];
    this.message.receiverId=this.receiverId = this.route.snapshot.params['receiverId'];
    setInterval(() => {this.getMessages();
    }, 250);
    console.log(this.date);
  }

  clearMessages() {
    this.messageService.clearMessages().subscribe(data => {
    console.log(data);
  });
  }

  getMessages() {
    this.messageService.receiveMessage().subscribe(data => {
      this.messages = data
    }); 
    //console.log(Object.values(this.messages)[1].dateSent);
    //console.log(this.messages[0].dateSent);

    //this.messages.forEach(msg => msg.dateSent = formatDistanceToNow(msg.dateSent));
  }

  onSubmit() {
    console.log(this.message);
    this.messageService.sendMessage(this.message).subscribe(data =>
      console.log(data), error => console.log(error));
    this.message.messageBody = "";
  }


  determineClassForMessageDiv(senderId) {
    if (senderId == this.senderId)
      return "d-flex flex-row justify-content-start"
    return "d-flex flex-row justify-content-end"
  }

  determineColorForMessageDiv(senderId) {
    if (senderId == this.senderId)
      return "#f5f6f7";
    return null;
  }
}