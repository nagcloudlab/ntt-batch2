import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  product:any;
  @Output()
  buy: EventEmitter<any> = new EventEmitter<any>();

  currentTab: number = 1
  reviews: Array<any> = [
    {stars:5,body:"sample review-1",author:"who-1"},
    {stars:5,body:"sample review-2",author:"who-2"},
  ];

  handleTabChange(index: number) {
    this.currentTab = index
  }

  isTabSelected(index: number): boolean {
    return this.currentTab === index
  }

  handleBuy(event: MouseEvent) {
    this.buy.emit({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price
    })
  }
}
