import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressService {
  array: Array<any> = [];
  constructor(private http: Http) { }

  public saveAdresses(value: object): void {
    this.array.push(value);
  }

  public getAdresses() {
    return this.array;
  }

}






