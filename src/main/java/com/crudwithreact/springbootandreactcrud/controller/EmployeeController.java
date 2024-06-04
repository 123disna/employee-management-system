package com.crudwithreact.springbootandreactcrud.controller;

import com.crudwithreact.springbootandreactcrud.model.Employee;
import com.crudwithreact.springbootandreactcrud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RequestMapping("/api/v1/employee")
@RestController
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/all-employees")
    private List<Employee> getAllList(){
       List<Employee> employees=employeeService.getAllEmployee();
       return employees;
    }

    @PostMapping("/save-employee")
    public Employee addEmployee(@RequestBody Employee employee){
        Employee employee1=employeeService.addEmployee(employee);
        return employee1;
    }

    @DeleteMapping("/delete-employee/{id}")
    public void deleteEmployee(@PathVariable int id){
        employeeService.deleteEmployee(id);
    }

    @GetMapping("/find-by-id/{id}")
    public Employee findEmployeeById(@PathVariable int id){
        Employee employee=employeeService.findEmployeeById(id);
        return employee;
    }

    @PutMapping("/update-employee/{id}")
    public Employee updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
        Employee employee=employeeService.updateEmployee(id,employeeDetails);
        return employee;
    }
}
