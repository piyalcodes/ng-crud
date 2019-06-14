import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmployeeService,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      FullName: ['', Validators.required ],
      Salary: ['', Validators.required ],
      Age: ['', Validators.required ]
    });
  }
 
  addEmployee(FullName, Salary, Age) {
    this.es.addEmployee(FullName, Salary, Age);
    this.router.navigate(['employee/']);
  }

  ngOnInit() {
  }

}
