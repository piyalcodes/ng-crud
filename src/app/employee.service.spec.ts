import { TestBed } from '@angular/core/testing';
 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

describe('EmployeeService', () => {

  let httpTestingController: HttpTestingController;
  let service: EmployeeService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
      
    })

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EmployeeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created employee service', () => {
    expect(service).toBeTruthy();
  });

  it('should have add employee method', () => {
      expect(service.addEmployee).toBeTruthy();
  })
 
  it('should have add employee method', () => {
      expect(service.addEmployee).toBeTruthy();
  })

  it('should have edit employee method', () => {
      expect(service.editEmployee).toBeTruthy();
  })

  it('should have delete employee method', () => {
      expect(service.deleteEmployee).toBeTruthy();
  })
});
