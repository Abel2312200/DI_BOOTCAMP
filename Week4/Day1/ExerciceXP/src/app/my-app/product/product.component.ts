import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public product : object = {
    name : 'Orange',
    price : 350
  }
  constructor() { }

  ngOnInit(): void {
  }

}
