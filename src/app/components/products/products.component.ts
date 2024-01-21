import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {ProductService} from "../../services/product.service";
import {CartGlobalService} from "../../services/cart-global.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})

export class ProductsComponent {

  @Input() product: ProductType = {} as ProductType;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  public products: ProductType[] = [];

  constructor(public cartGlobal: CartGlobalService) {

  }

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
    this.cartGlobal.count++
  }

}
