import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo01';
  url = 'https://www.google.com';
  age = 10 ;

  isShow = true;

  sayHi(val: string = 'ohhhh') {
    alert(val);
  }
  weeks =[ '星期1' , '星期2','星期3'];

}
