import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  p:any;

  currentTab: number = 1

  handleTabChange(index: number) {
    this.currentTab = index
  }

  isTabSelected(index: number): boolean {
    return this.currentTab === index
  }

  handleBuy(event: MouseEvent) {
    console.log(event);
  }
}
