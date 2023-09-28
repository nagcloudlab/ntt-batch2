import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT';
  product: any = {
    id: 1,
    name: 'Laptop',
    price: 1000000,
    description: 'Laptop Description',
    image: 'assets/Laptop.png'
  }
  handleBuy(event: MouseEvent) {
    console.log(event);
  }
}


