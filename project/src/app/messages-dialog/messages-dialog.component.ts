import { Component, OnInit, ElementRef, ViewChild, AfterContentChecked, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-messages-dialog',
  templateUrl: './messages-dialog.component.html',
  styleUrls: ['./messages-dialog.component.scss']
})
export class MessagesDialogComponent implements OnInit, AfterContentChecked {
  conversation: Message[] = [];
  conversationSelected = false;
  allConversations: { conversation: Message[] }[] = [];
  loggedInUser: User;
  newMessage = '';
  @ViewChild('messagesDiv') messagesDiv: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private siteData: DataService) { }

  ngOnInit() {
    this.loggedInUser = this.data;
    this.createConversations();
  }

  ngAfterContentChecked() {
    if (this.messagesDiv) {
      this.messagesDiv.nativeElement.scrollTop = this.messagesDiv.nativeElement.scrollHeight;
    }
  }

  createConversations() {
    const usedIds: string[] = [];
    let usedIdIndex = 0;
    this.loggedInUser.messages.forEach(messageIteration => {
      if (!usedIds.includes(messageIteration.conversationWithId)) {
        usedIds.push(messageIteration.conversationWithId);
        this.loggedInUser.messages.forEach(message => {
          if (usedIds[usedIdIndex].includes(message.conversationWithId)) {
            message.dateTime = new Date(message.dateTime);
            this.conversation.push(message);
          }
        });
        this.conversation.sort((first, second) => {
          if (first.dateTime < second.dateTime) {
            return -1;
          } else if (first.dateTime > second.dateTime) {
            return 1;
          } else {
            return 0;
          }
        });
        this.allConversations.push({ conversation: this.conversation });
        usedIdIndex++;
      }
    });
  }

  parseDate(date: Date): string {
    return (date.getMonth() + 1) + '/' +
      date.getDate() + '/' +
      date.getFullYear() + ' at ' +
      (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ':' +
      date.getMinutes() + ':' +
      date.getSeconds();
  }

  showConversation(conversation: Message[]) {
    this.conversation = conversation;
    this.conversationSelected = true;
  }

  sendNewMessage() {
    if (this.newMessage.length > 0) {
      const message = new Message();
      message.conversationWithId = this.conversation[0].conversationWithId;
      message.conversationWithFirstName = this.conversation[0].conversationWithFirstName;
      message.conversationWithLastName = this.conversation[0].conversationWithLastName;
      message.dateTime = new Date();
      message.from = this.loggedInUser._id;
      message.read = false;
      message.text = this.newMessage;
      message.to = this.conversation[0].conversationWithId;
      this.siteData.sendMessage(message);
      this.newMessage = '';
      this.conversation.push(message);
    }

  }

  unShowConversation() {
    this.conversation = [];
    this.conversationSelected = false;
  }
}
