import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee: Employee= new Employee();
  constructor(private es: EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  getEmployeeById(){
    this.id=this.route.snapshot.params['id'];
    this.es.getEmpById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.es.updateEmp(this.id,this.employee).subscribe(data=>{
      this.gotToEmployeesList();
      console.log(data);
    },error=>console.log(error));
  }

  gotToEmployeesList(){
    this.router.navigate(['/employees']);
  }
}
