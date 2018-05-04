import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {CarPartComponent} from "./car-part/car-part.component";
import {RacesComponent} from "./car-race/races.component";
import {CarPartFormComponent} from "./car-part/car-part-form.component";

// routes를 상수로 선언
// 경로와 컴포넌트를 json 형식으로 선언
export  const MYROUTES : Routes = [
  {
    path : '',
    component : AboutComponent
  },
  {
    path : 'carPart',
    component : CarPartComponent
  },
  {
    path : 'races',
    component : RacesComponent
  },
  {
    path : 'carpartform',
    component : CarPartFormComponent
  }
]

// Module을 선언할 때에는 @NgModule()를 사용한다.
// imports와 exports는 여러개를 선언하기 때문에 [] 배열로 표시해야한다.
@NgModule({
  imports : [RouterModule.forRoot(MYROUTES)],
  exports : [RouterModule]
})

export class AppRoutingModule {


}
