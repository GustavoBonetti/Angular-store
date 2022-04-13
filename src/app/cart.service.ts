import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "./products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
      private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems() {
    return this.items;
  }

  getSubtotalValue() {
    return this.items.reduce((n, {price}) => n + price, 0);
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
