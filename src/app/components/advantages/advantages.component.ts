import {Component, Input} from '@angular/core';
import {AdvantagesType} from "../../types/advantages.type";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {

  @Input() advantage: AdvantagesType = {} as AdvantagesType;
  @Input() i!: number;

  constructor() { }

  public advantages: AdvantagesType[] = []

}
