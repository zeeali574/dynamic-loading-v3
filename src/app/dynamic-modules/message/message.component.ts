import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: '<h2>This is Dynamic!!</h2>',
})
export class MessageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}