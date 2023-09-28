import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'shop-IT';

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000000,
      description: 'Laptop Description',
      image: 'assets/Laptop.png',
      isAvailable: true
    },
    // {
    //   id: 2,
    //   name: 'Mobile',
    //   price: 1000,
    //   description: 'Mobile Description',
    //   image: 'assets/Mobile.png',
    //   isAvailable: true
    // }
  ]

  currentTab: number = 1

  handleTabChange(index: number) {
    this.currentTab = index
  }

  isTabSelected(index: number): boolean {
    return this.currentTab === index
  }

  handleBuy(event: MouseEvent) {
    console.log(event);
  }
}


