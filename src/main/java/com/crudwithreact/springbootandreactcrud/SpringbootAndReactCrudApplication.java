package com.crudwithreact.springbootandreactcrud;

import com.crudwithreact.springbootandreactcrud.model.Employee;
import com.crudwithreact.springbootandreactcrud.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootAndReactCrudApplication {

	@Autowired
	static EmployeeRepo employeeRepo;


	public static void main(String[] args) {

		SpringApplication.run(SpringbootAndReactCrudApplication.class, args);

	}

}
