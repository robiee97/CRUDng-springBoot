import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/api/employees";
  constructor(private http : HttpClient) { }

  getEmpList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  createEmp(employee:Employee):Observable<Object>{
    return this.http.post(`${this.baseURL}`,employee);
  }

  getEmpById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmp(id:number, employee:Employee):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,employee);  
  }
  
  deleteEmp(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);  
  }
}
