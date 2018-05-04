import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';
import {CarPart} from "./car-part";
import {Router} from "@angular/router";

@Component({
    selector: 'car-part-form',
    templateUrl: './car-part-form.component.html',
    styleUrls: ['./car-part.component.css']
})
export class CarPartFormComponent {

    carPartForm:FormGroup = new FormGroup({
        id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price:new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]')])),
        quantity:new FormControl('', Validators.required)
    })

    constructor(private router : Router) {

    }

    /**
     * Template 기반 Form Submit 처리
     * */
    onSubmit(form: NgForm){
        //FormGroup을 사용했을 때 Form의 값 가져오기
        //console.log(this.carPartForm.value);
        //console.log('>>id:' + this.carPartForm.controls['id'].value);

        // form.value -> Object임.
        let formData = form.value as CarPart;
        alert(formData.name);

        // Submit 클릭 후 화면 이동
        this.router.navigate(['/carPart']);

        console.log(form.value);
        console.log('id:' + form.controls['id'].value);
        console.log('name:' + form.controls['name'].value);
        console.log('description:' + form.controls['description'].value);
        console.log('price:' + form.controls['price'].value);
        console.log('quantity:' + form.controls['quantity'].value);
        console.log('Form Valid:' + form.valid);
        console.log('Form Submitted:' + form.submitted);
    }

    /**
     * Reactive 기반 Form Submit 처리
     * */
    onSubmit2() {
        console.log('>>i  d : ' + this.carPartForm.controls['id'].value);
        console.log('>>name : ' + this.carPartForm.controls['name'].value);
    }
}
