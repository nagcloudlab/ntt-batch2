import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { NttCardComponent } from './ntt-card/ntt-card.component';
import { HighlightDirective } from './highlight.directive';
import { DiscountPipe } from './discount.pipe';
import { CartService } from './cart.service';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartViewComponent,
    NttCardComponent,
    HighlightDirective,
    DiscountPipe,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
