import { Routes } from '@angular/router';
import { FormComponent } from './reactiveform/form/form.component';

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
        path: '**',
        component: FormComponent,
        title: 'Not Found'
    }
];
