import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

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
  reviews: Array<any> = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { } // dependency injection

  handleTabChange(index: number,event:MouseEvent) {
    event.preventDefault();
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

  handleNewReview(event:any) {
    let {formData} = event
    this.productService.postNewReview(this.product.id,formData)
    .subscribe((review:any) => this.reviews.push(review))
  }
}
