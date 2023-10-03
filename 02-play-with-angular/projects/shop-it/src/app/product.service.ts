import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get("http://localhost:3000/api/products")// XHR
  }

  getReviews(productId: number) {
    return this.httpClient.get(`http://localhost:3000/api/products/${productId}/reviews`)// XHR
  }

}
