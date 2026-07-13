import { Routes } from '@angular/router';
import { FormComponent } from './reactiveform/form/form.component';
import { Form2Component } from './form2/form2.component';
import { NewFormComponent } from './new-form/new-form.component';
import { Form3Component } from './assignment/form3/form3.component';
import { FormArrayComponent } from './form-array/form-array.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: 'form',
        component: FormComponent,
        title: 'Form'
    },
    {
        path: 'form2',
        component: Form2Component,
        title: 'Form2'
    },
    {
        path: 'new-form',
        component: NewFormComponent,
        title: 'New-Form'
    },
    {
        path: 'form3',
        component: Form3Component,
        title: 'New-Form'
    },
    {
        path: 'form-array',
        component: FormArrayComponent,
        title: 'New-Form'
    },
    {
        path: '**',
        component: FormComponent,
        title: 'Not Found'
    }
];
