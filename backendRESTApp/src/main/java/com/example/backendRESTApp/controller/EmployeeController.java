package com.example.backendRESTApp.controller;

import com.example.backendRESTApp.exception.ResourceNotFound;
import com.example.backendRESTApp.model.Employee;
import com.example.backendRESTApp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get req
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    //post req
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee=employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Employee Not Exist with this id"+id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails){
        Employee employee=employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Employee Not Exist with this id"+id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        Employee updatedEmployee=employeeRepository.save(employee);

        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployeeById(@PathVariable Long id){
        Employee employee=employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Employee Not Exist with this id"+id));
        employeeRepository.delete(employee);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

