import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers: [CartService] // hirarchical injection
})
export class ProductComponent {

  @Input("value")
  product: any;
  currentTab: number = 1
  reviews: Array<any> | null = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { } // dependency injection

  handleTabChange(index: number) {
    this.currentTab = index
    if (this.currentTab === 3) {
      this.productService.getReviews(this.product.id)
        .subscribe((reviews: any) => {
          this.reviews = reviews
        })
    }
  }

  isTabSelected(index: number): boolean {
    return this.currentTab === index
  }

  handleBuy(event: MouseEvent) {
    this.cartService.addToCart(this.product);
  }
}
