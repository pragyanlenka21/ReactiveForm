import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-assignment2',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {
  myFormGroup: any;
  submittedData: any[] = [];

  // Suppose this data comes from the backend
  hobbies = [
    { name: 'Singing' },
    { name: 'Dancing' },
    { name: 'Reading' }
  ];

  constructor(private formBuilder: FormBuilder) {

    this.myFormGroup = this.formBuilder.group({
      name: [''],
      hobbyList: this.formBuilder.array([])
    });

  }

  ngOnInit() {
    this.populateHobbies();
  }


  //here we are populating the hobbies into the form array because we want to display the hobbies in the form and allow the user to select them.
  //Angular cannot directly use the hobbies array as a FormArray. You must convert each hobby into a FormGroup.
  populateHobbies() {
    this.hobbies.forEach(hobby => {
      this.hobbyLists.push(
        this.formBuilder.group({

          name: [hobby.name],
          selected: [false],
        })
      );
    });
  }

  // Getter method
  get hobbyLists() {
    return this.myFormGroup.get('hobbyList') as FormArray;

  }


  addHobbies() {
    this.hobbyLists.push(
      this.formBuilder.group({
        name: ['New Hobby'],
        selected: [false],
      })
    );
  }


  removeHobby(index: number) { 
    this.hobbyLists.removeAt(index);
  }

  submitForm() {
    this.submittedData.push(this.myFormGroup.value);
    console.log('Submitted Data:', this.submittedData);

  }

}
