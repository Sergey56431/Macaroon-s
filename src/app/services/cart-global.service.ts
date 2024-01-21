import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartGlobalService {
  price: number = 0;
  count: number = 0;

  constructor() { }

}
