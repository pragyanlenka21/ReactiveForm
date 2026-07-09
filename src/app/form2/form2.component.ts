import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  registerForm: any;

  storeData: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]
      ],
      lastName: [
        '',
        [
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/~`])[A-Za-z\d@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/~`]{8,}$/
          )
        ]
      ],
      month: [
        '',
        [
          Validators.required
        ]
      ],
      day: [
        '',
        [
          Validators.required
        ]
      ],
      year: [
        '',
        [
          Validators.required
        ]
      ],
      gender: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  setValue() {
    debugger
    this.registerForm.setValue({
      firstName: 'John',
    })
  }
  patchValue() {
    this.registerForm.patchValue({
      firstName: 'John',
    })
  }

  registerFormSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);

    this.storeData.push(this.registerForm.value);
    this.registerForm.reset();

    // this.registerForm.get('firstName').disable();
  }

}
