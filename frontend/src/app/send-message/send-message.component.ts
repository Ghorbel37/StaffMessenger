import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  message: Message = new Message();

  constructor(private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.message);
    this.messageService.sendMessage(this.message).subscribe(data =>
      console.log(data), error => console.log(error));
  }
}
