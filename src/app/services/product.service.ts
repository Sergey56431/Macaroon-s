import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType[] {

    return [
      {
        title: 'Макарун с малиной',
        price: 1.70,
        quantity: '10 шт.',
        image: '1.png'
      },
      {
        title: 'Макарун с манго',
        price: 2.25,
        quantity: '14 шт.',
        image: '2.png'
      },
      {
        title: 'Пирог с ванилью',
        price: 1.90,
        quantity: '5 шт.',
        image: '3.png'
      },
      {
        title: 'Пирог с фисташками',
        price: 2.59,
        quantity: '8 шт.',
        image: '4.png'
      },
    ];
  }
}
