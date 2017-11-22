import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryAndProductsService {
  array: Array<any> = [];
  array1: Array<any> = [];
  domain = 'http://localhost:3000';
  constructor(private http: Http) { }

  public saveCategoryandProducts(value: object): void {
    this.array.push(value);
    this.array1.push(value);
  }

  public getCategoryandProducts() {
    return this.array;
  }
  public getCategoryandProducts1() {
    return this.array1;
  }
  public createProductsandCats(productsandCats) {
    return this.http.post(this.domain + '/productApi/insertProducts', productsandCats).map(res => res.json());
  }
  public getProductsandCats() {
    return this.http.get(this.domain + '/productApi/getProducts').map(res => res.json());
  }
  public getEachProduct(id) {
    return this.http.get(this.domain + '/productApi/getEachProducts' + id).map(res => res.json());
  }
}
