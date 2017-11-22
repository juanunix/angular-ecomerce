import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryAndProductsService } from '../../services/category-and-products.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  pro: any;
  constructor(private route: ActivatedRoute, private cps: CategoryAndProductsService) {
    this.getEachProducts();
  }

  ngOnInit() {
  }

  getEachProducts(): void {
    this.cps.getEachProduct(this.route.snapshot.params['id']).subscribe(data => {
      setTimeout(function () {
        $('.gif-container').css('display', 'none');
      }, 1000);
      this.pro = data.product;
    });
  }

}
