import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from '../cart/components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NttCardComponent } from './components/ntt-card/ntt-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NttCardComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    NotFoundComponent,
    NttCardComponent,
  ]
})
export class SharedModule { }
