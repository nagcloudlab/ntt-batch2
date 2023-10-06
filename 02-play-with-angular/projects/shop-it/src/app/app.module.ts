import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartViewComponent } from './cart/components/cart-view/cart-view.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products/:category', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent },
  // { 
  //   path: 'orders', 
  //   component: OrdersComponent ,
  //   canActivate: [authGuard],
  //   canDeactivate: [deactivateGuard]
  // },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    CartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
