package com.nexushub.employee.service;

import com.nexushub.employee.dto.EmployeeRequest;
import com.nexushub.employee.dto.EmployeeResponse;

import java.util.List;

public interface EmployeeService {

    EmployeeResponse createEmployee(EmployeeRequest employeeRequest);

    EmployeeResponse getEmployeeById(Long id);

    List<EmployeeResponse> getAllEmployees();

    EmployeeResponse updateEmployee(Long id, EmployeeRequest employeeRequest);

    void deleteEmployee(Long id);
}