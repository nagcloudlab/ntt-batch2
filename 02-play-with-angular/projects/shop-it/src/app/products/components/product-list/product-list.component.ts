import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<any> = []

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const category=this.route.paramMap.subscribe(params => {
      const category=params.get("category");
      console.log(category)
      if(category=="elec"){
      this.productService.getProducts()
        .subscribe((products: any) => this.products = products)
      }
      else{
      this.products=[]
      }
    })
  }


}
