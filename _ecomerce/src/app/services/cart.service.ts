import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {
  sendCart;
  constructor(private http: Http) {

  }

  public saveCart(cart: object): void {
    this.sendCart = cart;
  }
  public getCart() {
    return this.sendCart;
  }

}







