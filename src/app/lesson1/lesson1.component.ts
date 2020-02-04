import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss'],
  providers: [BmiService] //自己要用的service
})
export class Lesson1Component implements OnInit {
  @Output() twMoneyChange: EventEmitter<number> = new EventEmitter<number>();

  twMoney = 100;

  title = 'demo01';
  url = 'https://www.google.com';
  age = 10;

  isShow = true;

  sayHi(val: string = '') {
    alert(val);
  }

  moneyChang(money: number) {
    this.twMoneyChange.emit(money);
  }
  constructor(
    public bmiService: BmiService
  ) { }

  ngOnInit() {
  }

  callService() {
    this.bmiService.sayHello();
  }

  changeService() {
    this.bmiService.name = 'lesson1 change';
  }
}
