import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'NG-shop-IT';
  isCartOpen = false;
  cart:Array<any> = [];

  toggleCart(){
    this.isCartOpen =!this.isCartOpen;
  }

  addToCart(event:Event){
    let cartLine=event;
    //this.cart.push(cartLine); // mutable
    this.cart=this.cart.concat(cartLine); // immutable
  }


}


