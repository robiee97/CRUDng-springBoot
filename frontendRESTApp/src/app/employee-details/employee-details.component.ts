import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;
  employee:Employee;
  constructor(private route: ActivatedRoute, private es:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee==new Employee();
    this.es.getEmpById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));
  }


}
