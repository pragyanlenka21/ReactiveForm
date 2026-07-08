import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myFormGroup: any;

  constructor(private formBuilder: FormBuilder) {

    // this.myFormGroup = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl('')
    // })
    this.myFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      myNumber: ['', [
        Validators.required,
        Validators.max(10)
      ]
      ]
    })

    // Validators.maxLength(10),Validators.minLength(3)

  }



  submitForm() {
    if (this.myFormGroup.invalid) {
      this.myFormGroup.markAllAsTouched();
      return
    }

    const name1 = this.myFormGroup.get('name')?.value;
    const email = this.myFormGroup.controls['email'].value;
    // const name2 = this.myFormGroup.controls.name.value;

    console.log(name1);
    console.log(email);
    // console.log(name2);
  }


}
