import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router : Router, private employeeService : EmployeeService ) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    let employee : Employee = {
      id: form.value.id,
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      phone: form.value.phone,
    }

    this.employeeService.onAdd(employee);

    this.router.navigateByUrl('')


  }

}
