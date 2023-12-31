import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './myvalidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  form!: FormGroup
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidator.restrictedEmails]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      skills: new FormArray([])
   })
   }

   setCapital() {
    const mapCity = {
      ua: "Київ",
      pl: "Варшава",
      de: "Берлін"
    }
      const getCity = this.form.get('address').value.country
      this.form.get('address').patchValue({city: mapCity[getCity]});
    }
  
   submit() {
    const formControl = {...this.form.value}
    console.log(formControl);
    this.form.reset();
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
     (<FormArray>this.form.get('skills')).push(control); 
   }

   get favskills() {
    return this.form.get('skills') as FormArray;
  }

   removePost(id){
    this.favskills.removeAt(id);
 }
 
}
 