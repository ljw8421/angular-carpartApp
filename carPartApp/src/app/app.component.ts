import { Component } from '@angular/core';

/**
 * template    : 태그를 직접 써준다.
 * templateUrl : 화면 파일을 써준다.
 * */
@Component({
  selector: 'app-root',
  // template : `<h1> {{ title }} </h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = Date.now();

  constructor() {
    console.log('AppComponent constructor called');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit() called');
  }

  ngOnDestroy() {
    console.log('AppComponent ngOnDestroy() called');
  }


  /*
  imageUrl = 'assets/images/angular.jpg';

  // function : myHandler
  myHandler(evt) {
    alert("버튼 클릭 OK~!! " + evt.target.textContent);
  }
*/

}
