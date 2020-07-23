import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { MessageService } from "./service/message.service";
import { Message } from "./model/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: Message[];
  private subject$: Subject<string>;

  constructor(private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.messages = [];
    this.subject$ = this.messageService.connect();
    this.receiveMessages();
  }

  private messageBuilder(msg: string): Message {
    return { text: msg, timestamp: new Date() };
  }

  private receiveMessages() {
    this.subject$.subscribe(
      msg => {
        console.log(`[Subject] arrived message: ${msg}`);
        this.messages.push(this.messageBuilder(msg));
      },
      err => console.log('[Subject] got error:', err),
      () => console.log('[Subject] disconnected...')
    );
  }
}
