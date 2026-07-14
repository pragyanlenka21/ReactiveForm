import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {
  myFormGroup: any;


  // suppose the response came from backend here
  studentDeatils = [
    {
      name: 'test',
      roll: '123',
      address: ''
    },
    {
      name: 'test2',
      roll: '789',
      address: ''
    },
    {
      name: 'test3',
      roll: '456',
      address: ''
    },
  ]

  myData: any[] = [];

  constructor(private formBuilder: FormBuilder, private common: CommonService) {

    this.myFormGroup = this.formBuilder.group({
      name: [''],
      skills: this.formBuilder.array([
        // if want add intial formgroup
        this.formBuilder.group({
          name: [''],
          class: ['']
        })
      ]),
      studentInfo: this.formBuilder.array([]),
      posts: this.formBuilder.array([]),
    })

  }


  ngOnInit(): void {
    console.log("Student Info Before Modified");
    console.log(this.studentDeatils);
    this.populateForm();
  
    this.getPosts();
    
  }


   getPosts() {
    this.common.getPost().subscribe({
      next: (response) => {
        console.log(response);
        // this.showLoader = false;
        this.myData = response.posts;

        this.populatePostForm();

      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }


  populateForm() {
    this.studentDeatils.forEach(e => {
      this.studentInfo.push(
        this.formBuilder.group({
          name: [e.name || ''],
          roll: [e.roll || ''],
          address: [e.address || '']
        })
      )
    })
  }

   populatePostForm() {
    this.myData.forEach(e => {
      this.allPosts.push(
        this.formBuilder.group({
          title: [e.title || ''],
          body: [e.body || ''],
          views: [e.views || ''],
          slug: [''],
        })
      )
    })
  }


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

  get studentInfo() {
    return this.myFormGroup.get('studentInfo') as FormArray;
  }

  get allPosts() {
    return this.myFormGroup.get('posts') as FormArray;
  }

  submitForm() {
    if (this.myFormGroup.invalid) {
      this.myFormGroup.markAllAsTouched();
      return
    }

    const name1 = this.myFormGroup.get('name')?.value;

    console.log(name1);
    console.log(this.myFormGroup.value);

    console.log("Student Info After Modified");
    console.log(this.myFormGroup.value.studentInfo);
  }
}
