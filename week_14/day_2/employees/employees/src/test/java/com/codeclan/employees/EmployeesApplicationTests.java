package com.codeclan.employees;

import com.codeclan.employees.models.Department;
import com.codeclan.employees.models.Employee;
import com.codeclan.employees.repositories.DepartmentRepository;
import com.codeclan.employees.repositories.EmployeeRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeesApplicationTests {

	@Autowired
	DepartmentRepository departmentRepository;
	@Autowired
	EmployeeRepository employeeRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canCreateEmployee() {
		Department dept = new Department("Sales");
		Employee employee = new Employee("Chris", "Fraser", 101, dept);
		departmentRepository.save(dept);
		employeeRepository.save(employee);
	}

}
