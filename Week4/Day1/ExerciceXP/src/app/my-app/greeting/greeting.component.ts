import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  public message : string = 'Hello, how are you doing ?';
  constructor() { }

  ngOnInit(): void {
  }

}
