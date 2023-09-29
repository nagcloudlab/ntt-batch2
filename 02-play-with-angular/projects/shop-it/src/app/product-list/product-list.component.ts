import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Output()
  buy = new EventEmitter<any>();

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000000,
      description: 'Laptop Description',
      image: 'assets/Laptop.png',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Mobile',
      price: 1000,
      description: 'Mobile Description',
      image: 'assets/Mobile.png',
      isAvailable: true
    }
  ]

  handleBuy(event:Event){
    this.buy.emit(event);
  }

}
