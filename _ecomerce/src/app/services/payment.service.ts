import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {

  array: Array<any> = [];
  constructor(private http: Http) { }

  public savePayment(value: object): void {
    this.array.push(value);
  }

  public getPayment() {
    return this.array;
  }

}
