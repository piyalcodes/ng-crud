import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  uri = 'http://dummy.restapiexample.com/api/v1';
  
    constructor(private http: HttpClient) { }
  
    addEmployee(name, salary, age) { 
      const obj = {
        name: name,
        salary: age,
        age: salary
      };
     return this.http.post(`${this.uri}/create`, obj)
          .subscribe(res => {
            
          } );
    }
    
    getEmployee() {
      return this
             .http
             .get(`${this.uri}/employees`);
    }
  
    editEmployee(id) {
      return this
              .http
              .get(`${this.uri}/employee/${id}`);
    }
  
    updateEmployee(name, salary, age, id) {
      const obj = {
        name: name,
        salary: age,
        age: salary
      };
      this
        .http
        .put(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Update Complete'));
    }
  
    deleteEmployee(id) {
 
      return this
                .http
                .delete(`${this.uri}/delete/${id}`);
    }
}
