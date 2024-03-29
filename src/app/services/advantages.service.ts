import { Injectable } from '@angular/core';
import {AdvantagesType} from "../types/advantages.type";

@Injectable()
export class AdvantagesService {

  constructor() { }

  getAdvantages(): AdvantagesType[] {
    return [
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
  }
}
