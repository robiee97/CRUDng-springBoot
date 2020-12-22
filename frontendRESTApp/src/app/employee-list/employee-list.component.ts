import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private es: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.es.getEmpList().subscribe(data=>{
      this.employees=data;
      console.log(data);
    });
  }

  onUpdate(id:number){
    this.router.navigate(['update-employee', id]);
  }

  onDelete(id:number){
    this.es.deleteEmp(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    },error=>console.log(error));
  }

  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }
}
