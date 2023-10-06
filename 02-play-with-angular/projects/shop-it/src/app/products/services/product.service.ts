import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/api/products';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(this.baseUrl)// XHR
  }

  getReviews(productId: number) {
    return this.httpClient.get(`${this.baseUrl}/${productId}/reviews`)// XHR
  }

  postNewReview(productId:number,formData: any) {
    return this.httpClient.post(`${this.baseUrl}/${productId}/reviews`, formData)// XHR
  }
  
}
