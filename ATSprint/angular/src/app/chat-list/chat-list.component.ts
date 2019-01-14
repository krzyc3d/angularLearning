import { Component, OnInit } from '@angular/core';
import { CHATLIST } from 'src/app/mock-chat-list';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  title="Chat list";
  chatList= CHATLIST;

  constructor() { }

  ngOnInit() {
  }

}
