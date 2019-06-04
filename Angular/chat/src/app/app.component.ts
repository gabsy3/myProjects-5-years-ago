import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { chat } from './chat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  @ViewChild('username') username: ElementRef;
  chat: chat[];
  id: number;
  constructor() {
    this.chat = [];
    this.id = null;
  }
  ngOnInit() {
    const delay = 2000;
    const url = "http://localhost:8000";
    setInterval(async () => {
      this.chat = await fetch(url).then(res => res.json());
    }, delay);
  }
  postMessage(e: Event) {
    e.preventDefault();
    this.generateId();
    const message = this.message.nativeElement.value;
    const username = this.username.nativeElement.value;
    const msg = { username, message }
    const url = "http://localhost:8000/?id=" + this.id;
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msg)
    }).then(res => res.json());
  }
  generateId() {
    this.id = Math.floor(Math.random() * 10000000);
  }
}
