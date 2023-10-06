import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CartBadgeComponent,
    CartViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NavbarComponent,
    CartBadgeComponent,
    CartViewComponent
  ]
})
export class CartModule { }
