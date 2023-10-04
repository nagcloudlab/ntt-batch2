import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cart: Array<any> = []
  // cart$ = this.cartService.cart$

  @ContentChild("comp")
  comp!: ElementRef;

  @ViewChild("cardBody")
  cardBody!: ElementRef;

  constructor(private cartService: CartService) {
    console.log("CartViewComponent->constructor");
    // why we need -> todo one-time initialization
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("CartViewComponent->ngOnChanges");
    console.log(changes);
    // why we need -> // todo any side-effects when component receiving changes
  }
  ngOnInit() {
    console.log("CartViewComponent->ngOnInit");
    // why we need -> todo one-time initialization
    // this.cart = this.cartService.getCart();
    this.cartService.cart$.subscribe(cart=>{
      this.cart = cart;
    })
  }
  ngAfterContentInit() {
    console.log("CartViewComponent->ngAfterContentInit");
    this.comp.nativeElement.style.color = "tomato";
  }
  ngAfterViewInit() {
    console.log("CartViewComponent->ngAfterViewInit");
    this.cardBody.nativeElement.addEventListener("mouseenter", (e: any) => {
      e.target.style.cursor = "pointer";
    })
  }
  ngOnDestroy() {
    console.log("CartViewComponent->ngOnDestroy");
    // why we need -> todo one-time cleanup
  }
}
