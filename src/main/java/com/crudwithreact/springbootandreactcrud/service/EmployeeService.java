package com.crudwithreact.springbootandreactcrud.service;
import com.crudwithreact.springbootandreactcrud.model.Employee;
import com.crudwithreact.springbootandreactcrud.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;

    public List<Employee> getAllEmployee(){
        List<Employee> employeeList= employeeRepo.findAll();
        return employeeList;
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(int id) {
        employeeRepo.deleteById(id);
    }

    public Employee findEmployeeById(int id) {
        Employee employee=employeeRepo.findById(id).get();
        return employee;
    }

    public Employee updateEmployee(int id, Employee employeeDetails) {
        Employee employee=findEmployeeById(id);
        employee.setFirstname(employeeDetails.getFirstname());
        employee.setLastname(employeeDetails.getLastname());
        employee.setEmail(employeeDetails.getEmail());
        employeeRepo.save(employee);
        return employee;
    }
}
