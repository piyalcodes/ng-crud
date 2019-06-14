import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  angForm: FormGroup;
  employee: any = {}; 

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private ps: EmployeeService, 
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      salary: ['', Validators.required ],
      age: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editEmployee(params.id).subscribe(res => {
          this.employee = res;
          console.log(res)
      });
    });
  }

  updateEmployee(name, salary, age, id) {
    this.route.params.subscribe(params => {
      this.ps.updateEmployee(name, salary, age, params.id);
      this.router.navigate(['products']);
    });
  }
}
