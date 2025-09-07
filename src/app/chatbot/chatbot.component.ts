import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { Observable } from 'rxjs';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages$!: Observable<Message[]>;
  userInput: string = '';

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    this.messages$ = this.chatbotService.messages$;
  }

  sendMessage(): void {
    if (this.userInput.trim()) {
      this.chatbotService.handleUserInput(this.userInput);
      this.userInput = '';
    }
  }
}