import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form3',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  AssignmentForm: any;
  storeData: any[] = [
  ];
  myEditFormGroup: any;
  index!: number;


  constructor(formBuilder: FormBuilder, private modalService: NgbModal, private toastr2: ToastrService) {
    this.AssignmentForm = formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z ]+$')
        ]
      ],
      rollno: ['',
        [Validators.required,
        Validators.pattern('^[0-9]+$')
        ]
      ],
      course: ['', Validators.required],

   
    })
    this.myEditFormGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      rollno: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      course: ['', Validators.required],

   
    });

  }
  submit() {
    if (this.AssignmentForm.invalid) {
      this.AssignmentForm.markAllAsTouched();
      // markallastouched mean when any field not fill the form will never submitted
      return;
    }
    this.storeData.push(this.AssignmentForm.value);
    this.toastr2.success(
      'Form Submitted Successfully!',
      'Success',
      {
        timeOut: 5000,
        extendedTimeOut: 1000,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
        tapToDismiss: true,
        disableTimeOut: false,
        easeTime: 300,
        easing: 'ease-in',
        enableHtml: false,
        newestOnTop: true,
        positionClass: 'toast-top-right',

      }
    );
    this.AssignmentForm.reset();



  }
  deleteFormData(index: any) {
    this.storeData.splice(index, 1);
    this.toastr2.error(
      'Data deleted Successfully!',
      'Deleted',
      {
        timeOut: 5000,
        extendedTimeOut: 1000,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
        tapToDismiss: true,
        disableTimeOut: false,
        easeTime: 300,
        easing: 'ease-in',
        enableHtml: false,
        newestOnTop: true,
        positionClass: 'toast-top-right',

      }
    );
  }

 



  open(content: any, index: number) {

    this.index = index;

    const val = this.storeData[index];

    // console.log(val);

    this.myEditFormGroup.patchValue({
      name: val.name,
      rollno: val.rollno
    });


    this.modalService.open(content, { size: 'lg' });
  }


  editFormSubmit() {
    this.storeData[this.index] = this.myEditFormGroup.value;
    this.toastr2.info(
      'Data edited Successfully!',
      'Edited',
      {
        timeOut: 5000,
        extendedTimeOut: 1000,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
        tapToDismiss: true,
        disableTimeOut: false,
        easeTime: 300,
        easing: 'ease-in',
        enableHtml: false,
        newestOnTop: true,
        positionClass: 'toast-top-right',

      }
    );

    this.modalService.dismissAll();
    this.myEditFormGroup.reset();

  }

}
