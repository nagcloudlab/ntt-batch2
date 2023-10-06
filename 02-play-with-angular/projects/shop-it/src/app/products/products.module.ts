import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiscountPipe } from './pipes/discount.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ReviewComponent,
    ReviewFormComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductListComponent,
  ]
})
export class ProductsModule { }
