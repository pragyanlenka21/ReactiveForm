import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {
  myFormGroup: any;

  mySkills = [
    {
      name: 'test',
      class: 'test'
    },
    {
      name: 'test2',
      class: 'test2'
    },
    {
      name: 'test3',
      class: 'test3'
    }
  ]

  constructor(private formBuilder: FormBuilder) {

    this.myFormGroup = this.formBuilder.group({
      name: [''],
      skills: this.formBuilder.array([
        // if want add intial formgroup
        // this.formBuilder.group({
        //   name: [''],
        //   class: ['']
        // })
      ])
    })

  }

  ngOnInit(): void {
    // this.populateForm();
  }


  // populateForm(){
  //   this.skill.push(this.createForm(this.mySkills));
  // }

  // createForm(value:any){
  //   return this.formBuilder.group({
  //     name: [value.name],
  //     class: [value.class],
  //   })
  // }


  // This is array
  get skill() {
    return this.myFormGroup.get('skills') as FormArray;
  }

  addSkill() {
    // this.skill.push(this.formBuilder.control(''))
    this.skill.push(
      this.formBuilder.group({
        name: [''],
        class: ['']
      })
    )
  }

  removeArray(index: number) {
    this.skill.removeAt(index);
  }

  // get name(){
  //   return this.myFormGroup.get('name')?.value;
  // }

  submitForm() {
    if (this.myFormGroup.invalid) {
      this.myFormGroup.markAllAsTouched();
      return
    }

    const name1 = this.myFormGroup.get('name')?.value;

    console.log(name1);
    console.log(this.myFormGroup.value)
  }
}
