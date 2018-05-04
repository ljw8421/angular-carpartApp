import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// 사용자 생성 import
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutComponent} from "./about.component";
import {SharedModule} from "./common/shared.module";
import {CarPartModule} from "./car-part/car-part.module";
import {RacesModule} from "./car-race/races.module";


@NgModule({
  // 추가되는 component를 이어서 써주면 된다.
  declarations : [
    AppComponent,
    AboutComponent
  ]
  ,
  // HttpClientModule : http 통신을 하기 위한 모듈
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, SharedModule, CarPartModule, RacesModule
  ],
  // 서비스를 만들면 provoders에 등록해줘야 한다.
  // 따로 Module을 만들었다면 그 Module에 있는 providers에 서비스를 써주면 된다.
  providers: [

  ],
  // root component를 써준다.
  bootstrap: [AppComponent]
})
export class AppModule { }
