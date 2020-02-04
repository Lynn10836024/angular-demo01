import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  name = 'Lynn';
  constructor() { }

  sayHello() {
    alert(this.name);
  }
}
