import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from 'src/app/employee-add/employee-add.component';
import { EmployeeEditComponent } from 'src/app/employee-edit/employee-edit.component';
import { EmployeeGetComponent } from 'src/app/employee-get/employee-get.component';

const routes: Routes = [
  {
    path: 'employee/add',
    component: EmployeeAddComponent
  },
  {
    path: 'edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employee',
    component: EmployeeGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



