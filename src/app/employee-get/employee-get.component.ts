import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  employees: Employee[];
  constructor(private ps: EmployeeService) { }

  ngOnInit() {
    this.ps
      .getEmployee()
      .subscribe((data: Employee[]) => {
        this.employees = data;
    });
  }
 

  deleteEmployee(id) {
    this.ps.deleteEmployee(id).subscribe(res => {
      this.employees.splice(id, 1);
    });
  }
}
