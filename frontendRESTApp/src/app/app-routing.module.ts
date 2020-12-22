import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
const routes: Routes = [
    {path:"", redirectTo:"employees", pathMatch:"full"},
    {path:"employees", component: EmployeeListComponent},
    {path:"create-employee" , component: CreateEmployeeComponent},
    {path:"update-employee/:id" , component: UpdateEmployeeComponent},
    {path:"employee-details/:id", component:EmployeeDetailsComponent},
    {path:"**",redirectTo:"page-not-found"},
    {path:"page-not-found" ,component:PageNotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }