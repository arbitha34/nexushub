package com.nexushub.employee.service.impl;

import com.nexushub.employee.dto.EmployeeRequest;
import com.nexushub.employee.dto.EmployeeResponse;
import com.nexushub.employee.entity.Employee;
import com.nexushub.employee.repository.EmployeeRepository;
import com.nexushub.employee.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeResponse createEmployee(EmployeeRequest employeeRequest) {

        if (employeeRepository.existsByEmployeeId(employeeRequest.getEmployeeId())) {
            throw new RuntimeException("Employee ID already exists.");
        }

        if (employeeRepository.existsByEmail(employeeRequest.getEmail())) {
            throw new RuntimeException("Email already exists.");
        }

        Employee employee = Employee.builder()
                .employeeId(employeeRequest.getEmployeeId())
                .name(employeeRequest.getName())
                .email(employeeRequest.getEmail())
                .phone(employeeRequest.getPhone())
                .department(employeeRequest.getDepartment())
                .designation(employeeRequest.getDesignation())
                .salary(employeeRequest.getSalary())
                .status(employeeRequest.getStatus())
                .build();

        Employee savedEmployee = employeeRepository.save(employee);

        return mapToResponse(savedEmployee);
    }

    @Override
    public EmployeeResponse getEmployeeById(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Employee not found with id: " + id));

        return mapToResponse(employee);
    }

    @Override
    public List<EmployeeResponse> getAllEmployees() {

        return employeeRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public EmployeeResponse updateEmployee(Long id, EmployeeRequest employeeRequest) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Employee not found with id: " + id));

        employee.setEmployeeId(employeeRequest.getEmployeeId());
        employee.setName(employeeRequest.getName());
        employee.setEmail(employeeRequest.getEmail());
        employee.setPhone(employeeRequest.getPhone());
        employee.setDepartment(employeeRequest.getDepartment());
        employee.setDesignation(employeeRequest.getDesignation());
        employee.setSalary(employeeRequest.getSalary());
        employee.setStatus(employeeRequest.getStatus());

        Employee updatedEmployee = employeeRepository.save(employee);

        return mapToResponse(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Employee not found with id: " + id));

        employeeRepository.delete(employee);
    }

    private EmployeeResponse mapToResponse(Employee employee) {

        EmployeeResponse response = new EmployeeResponse();

        response.setId(employee.getId());
        response.setEmployeeId(employee.getEmployeeId());
        response.setName(employee.getName());
        response.setEmail(employee.getEmail());
        response.setPhone(employee.getPhone());
        response.setDepartment(employee.getDepartment());
        response.setDesignation(employee.getDesignation());
        response.setSalary(employee.getSalary());
        response.setStatus(employee.getStatus());

        return response;
    }
}