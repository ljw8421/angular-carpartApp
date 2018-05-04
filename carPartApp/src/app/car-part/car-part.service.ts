import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

// service를 만들기 위해선 @Injectable()를 선언해줘야 한다.
@Injectable()
export class CarPartService {

  constructor(private http:HttpClient) {
    console.log(this.http);
  }

  /**
   * 반환 Type : Observable<any> 로 지정.
   * */
  getCarParts() : Observable<any> {
    // http://127.0.0.1:52274/products 이걸로 요청
    return this.http.get('assets/json/car-part.json', {responseType : 'json'} );
    // return this.http.get('assets/json/car-part.json', {responseType : 'json'} );
  }
}
