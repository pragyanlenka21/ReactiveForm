import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-form',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {

  myFormGroup: any;
  storeData: any[] = [
  ];

  index!: number;
  myEditFormGroup: any;
  filterForm: any;

  constructor(formBuilder: FormBuilder, private modalService: NgbModal, private toastr2: ToastrService) {
    this.myFormGroup = formBuilder.group({
      name: [''],
      department: [''],
      salary: [''],
    })

    this.myEditFormGroup = formBuilder.group({
      name: [''],
      department: [''],
      salary: [''],
    })

    this.filterForm = formBuilder.group({
      search: [''],
    })


  }

  ngOnInit(): void {
    this.filterForm.get('search')?.valueChanges.subscribe((value: string) => {

      console.log(value);
      // this.storeData = this.storeData.filter((data) => {
      //   return data.department.toLowerCase().includes(value.toLowerCase());
      // });
    });
  }

  submitForm() {
    this.storeData.push(this.myFormGroup.value);
    this.toastr2.error(
      'Form Submitted Successfully!',
      'Success',
      {
        timeOut: 5000,
        extendedTimeOut: 1000,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing', // 'increasing' | 'decreasing'
        tapToDismiss: true,
        disableTimeOut: false,
        easeTime: 300,
        easing: 'ease-in',
        enableHtml: false,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        // preventDuplicates: false,
        // resetTimeoutOnDuplicate: false,
        // countDuplicates: false,
        // includeTitleDuplicates: false,
        // toastClass: 'ngx-toastr custom-toast',
        // titleClass: 'toast-title',
        // messageClass: 'toast-message',
        // iconClasses: {
        //   error: 'toast-error',
        //   info: 'toast-info',
        //   success: 'toast-success',
        //   warning: 'toast-warning'
        // },
        // onActivateTick: false
      }
    );
    this.myFormGroup.reset();
  }

  deleteRow(index: number) {
    this.storeData.splice(index, 1);
  }

  open(content: any, index: number) {

    this.index = index;

    const val = this.storeData[index];

    console.log(val);

    this.myEditFormGroup.patchValue({
      name: val.name,
      department: val.department,
      salary: val.salary
    });

    this.modalService.open(content, { size: 'lg' });
  }

  editFormSubmit() {
    this.storeData[this.index] = this.myEditFormGroup.value;
    this.modalService.dismissAll();
    this.myEditFormGroup.reset();
  }

  valueChanges(event: any) {
    // console.log(event.target.value);
    // this.storeData = this.storeData.filter((data) => {
    //   return data.department.toLowerCase().includes(event.target.value.toLowerCase());
    // })
    // const searchValue = event.target.value.toLowerCase();
  }

}
