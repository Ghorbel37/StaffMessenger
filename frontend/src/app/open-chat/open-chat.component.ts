import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { MessageService } from '../services/message.service';
import { formatDistanceToNow } from 'date-fns'

@Component({
  selector: 'app-open-chat',
  templateUrl: './open-chat.component.html',
  styleUrls: ['./open-chat.component.css']
})
export class OpenChatComponent implements OnInit {
  messages: Message[];
  message: Message = new Message();
  date: Date = new Date();
  // stringAgo: String;

  constructor(private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
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
    }); 
    //this.messages.forEach(msg => msg.dateSent = formatDistanceToNow(msg.dateSent));
  }

  onSubmit() {
    console.log(this.message);
    this.messageService.sendMessage(this.message).subscribe(data =>
      console.log(data), error => console.log(error));
    // this.stringAgo = formatDistanceToNow(this.date);
  }

}
