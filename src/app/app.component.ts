import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {AdvantagesType} from "./types/advantages.type";
import {AdvantagesService} from "./services/advantages.service";
import {CartGlobalService} from "./services/cart-global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService, AdvantagesService]
})
export class AppComponent implements OnInit{

  public commonPrice: number = 0
  public products: ProductType[] = [];
  public advantages: AdvantagesType[] =[]
  public title: string = 'Macaroons';

  constructor(private productService: ProductService,
              private advantagesService: AdvantagesService,
              public cartGlobal: CartGlobalService) {
  }

  ngOnInit() {
    this.advantages = this.advantagesService.getAdvantages();
    this.products = this.productService.getProducts();
  }


  public contacts = {
    // phoneNumber: '+375 (29) 368-98-68',
    phoneNumber: '375293689868',
    instagram: 'Мы в instagram',
  }

  public formValues = {
    productTitle: '',
    name: '',
    phone:''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({block: "center", behavior: "smooth"})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    alert("'" + product.title + "'" + ' добавлен в корзину!')
    this.formValues.productTitle = product.title.toUpperCase();
    this.commonPrice += product.price

  }

  public createOrder () {
    if (!this.formValues.productTitle){
      alert('Заполните заказ');
      return;
    }
    if (!this.formValues.name){
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.phone){
      alert('Заполните телефон');
      return;
    }
    alert('Спасибо за заказ!')

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

  public showPresent: boolean = true;


}
