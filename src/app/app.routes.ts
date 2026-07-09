import { Routes } from '@angular/router';
import { FormComponent } from './reactiveform/form/form.component';
import { Form2Component } from './form2/form2.component';

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
        component:Form2Component,
        title: 'Form2'
    },
    
    {
        path: '**',
        component: FormComponent,
        title: 'Not Found'
    }
];
