import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee.model'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : Employee[] = [
    {
      id : 1,
      name : 'Badin',
      surname : 'Mulamba',
      email : 'badibangamulamba@gmail.com',
      phone : 399494
    },
    {
      id : 2,
      name : 'Angel',
      surname : 'Ntumba',
      email : 'angelntumba@gmail.com',
      phone : 453737
    }
  ]

  constructor() { }

  getAll(){
    return this.employees;
  }

  onAdd( employee : Employee ){
    this.employees.push(employee);
  }

  


}
