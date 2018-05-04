import {Component, OnInit} from '@angular/core';
import {CarPart} from "./car-part";
import {CarPartService} from "./car-part.service";

@Component({
  selector: 'app-car-part',
  templateUrl: './car-part.component.html',
  styleUrls: ['./car-part.component.css']
})
export class CarPartComponent implements OnInit {

  title = 'Ultra Racing';
  carParts : CarPart[];

  // 생성자에 만든 서비스를 써주면 된다.
  constructor(private carPartService:CarPartService) {
    console.log('CarPartComponent constructor called');
}

  ngOnInit() {
    /**
     * response['data'] : data는 json 파일에서 선언한 이름을 써준다.
     * */
    this.carPartService.getCarParts().subscribe(response => this.carParts = response['data']);
    // this.carParts = this.carPartService.getCarParts();
  }

  ngOnDestroy() {
    console.log('CarPartComponent ngOnDestroy() called');
  }



  totalCarParts()
  {
    /*
    // 1. for문을 이용한 방법
    let sum = 0;

    for(let carPart of this.carParts) // 위에 선언된 변수를 사용할려면 this 를 이용해서 사용하면 된다.
    {
    sum += carPart.inStock;
  }

  return sum;
*/

    // this.carParts가 배열인지 확인해주는 조건문.
    if(Array.isArray(this.carParts)) {
      // 2. lambda식 방법으로 하는 방법
      return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
    }
  }

  /** Quantity 증가 */
  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock)
      carPart.quantity++;
  }

  /** Quantity 감소 */
  downQuantity(carPart) {
    if(carPart.quantity != 0)
      carPart.quantity--;
  }

  keyupQuantity(event, carPart) {
    if(event.target.value < carPart.inStock)
      carPart.quantity = event.target.value;
  }

}
