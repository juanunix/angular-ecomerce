import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<any> = [];
  constructor(private cs: CartService) { }

  ngOnInit() {
    this.getCartObjects();

  }

  getCartObjects() {
    if (this.cs.getCart()) {
      this.cart.push(this.cs.getCart());
    }
  }

}
