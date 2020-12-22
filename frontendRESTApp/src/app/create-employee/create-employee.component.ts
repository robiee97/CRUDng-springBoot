import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor( private es: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  gotToEmployeesList(){
    this.router.navigate(['/employees']);
  }
  saveEmployee(){
    this.es.createEmp(this.employee).subscribe(data=>{
      console.log(data);
      this.gotToEmployeesList();

    },error=>console.log(error));
  }
  onSubmit(){
    this.saveEmployee();
  }
}
