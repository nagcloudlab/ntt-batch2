import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Array<any> = [];
  cart$ = new BehaviorSubject<Array<any>>(this._cart); // observable

  constructor() {
    console.log("Cart service instance created");
  }

  addToCart(item: any) {
    this._cart.push(item);
    this.cart$.next(this._cart);// publish 
  }

  getCart(): Array<any> {
    return this._cart;
  }

}
