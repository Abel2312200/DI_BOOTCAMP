import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public copyright : string = 'This is my first application with Angular in 2023 .';
  
  constructor() { }

  ngOnInit(): void {
  }

}
