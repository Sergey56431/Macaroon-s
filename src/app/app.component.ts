import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. ' +
        'Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: ' Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составенет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мыполучили 22.06.2016 г.'
    },
  ];

  public products: ProductType[] = [
    {
      title: 'Макарун с малиной',
      price: '1,70 руб.',
      quantity: '10 шт.',
      image: '1.png'
    },
    {
      title: 'Макарун с манго',
      price: '2,25 руб.',
      quantity: '14 шт.',
      image: '2.png'
    },
    {
      title: 'Пирог с ванилью',
      price: '1,90 руб.',
      quantity: '5 шт.',
      image: '3.png'
    },
    {
      title: 'Пирог с фисташками',
      price: '2,59 руб.',
      quantity: '8 шт.',
      image: '4.png'
    },
  ];

  public contacts = {
    phoneNumber: '+375 (29) 368-98-68',
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
    this.formValues.productTitle = product.title
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
