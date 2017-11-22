import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryAndProductsService } from '../../services/category-and-products.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  pro:any;
  constructor(private route: ActivatedRoute, private cps: CategoryAndProductsService) {
    this.getEachProducts();
  }

  ngOnInit() {
    this.getEachProducts();
  }

  getEachProducts(): void {
    this.cps.getEachProduct(this.route.snapshot.params['id']).subscribe(data => {
      this.pro = data.product;
    });
  }

}
