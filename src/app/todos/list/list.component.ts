import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { from } from 'rxjs';
import { Employee } from 'src/app/Model/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees : Employee [];

  constructor( private employeeService : EmployeeService ) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getAll();
  }

}
