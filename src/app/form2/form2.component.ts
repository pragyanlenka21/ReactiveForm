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
  emailMismatch: boolean = false;
  passwordMismatch: boolean = false;

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
      ],
      // Account Information
      email: ['',
        [
          Validators.required, Validators.email
        ]
      ],
      confirmEmail: [
        '',
        [
          Validators.required,
          Validators.email
          // this is the built in validator for email pattern matching it has its own regex pattern for email validation
        ]
      ],
      accountPassword: ['',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/~`])[A-Za-z\d@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/~`]{8,}$/
          )
        ]
      ],
      confirmPassword: ['', Validators.required],
      securityQuestion: ['', Validators.required],
      securityAnswer: ['', Validators.required],


      // contact information
      address: ['', Validators.required],

      city: ['', Validators.required],

      state: ['', Validators.required],

      zipCode: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{6}$/)
        ]
      ],

      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9][0-9]{9}$/)
        ]
      ]

    });
  }

  // setValue() {

  //   this.registerForm.setValue({
  //     firstName: 'John',
  //   })
  // }
  // patchValue() {
  //   this.registerForm.patchValue({
  //     firstName: 'John',
  //   })
  // }

  registerFormSubmit() {
    this.emailMismatch = false;
    // here the previous value of emailMismatch is set to false so that if the user corrects the email and submits the form again then the error message will not be shown again.
    this.passwordMismatch = false;
    
    if (this.registerForm.invalid) {
      //  alert("Form is Invalid");
      this.registerForm.markAllAsTouched();
      return;
    }
    // console.log(this.registerForm.value.email);
    // console.log(this.registerForm.value.confirmEmail);
    // console.log(this.registerForm.value.email === this.registerForm.value.confirmEmail);


    if (this.registerForm.value.email !== this.registerForm.value.confirmEmail) {
      this.emailMismatch = true;
      return;
    }
    if (this.registerForm.value.accountPassword !== this.registerForm.value.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }



    console.log(this.registerForm.value);


    this.storeData.push(this.registerForm.value);
    this.registerForm.reset();


    // if (this.registerForm.value.accountPassword !== this.registerForm.value.confirmPassword) {
    //   alert('Password does not match');
    //   return;
    // }

    // this.registerForm.get('firstName').disable();
  }

}
