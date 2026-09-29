import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { MessageService } from '../services/message.service';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
    setInterval(() => {this.getMessages();
    }, 250);
  }

  clearMessages() {
    this.messageService.clearMessages().subscribe(data => {
      console.log(data);});
  }

  getMessages() {
    this.messageService.receiveMessage().subscribe(data => {
      this.messages = data}); 
  }

  // formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true });
  

}
