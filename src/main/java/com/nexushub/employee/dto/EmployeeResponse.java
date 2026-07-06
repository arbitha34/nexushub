package com.nexushub.employee.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeResponse {

    private Long id;

    private String employeeId;

    private String name;

    private String email;

    private String phone;

    private String department;

    private String designation;

    private Double salary;

    private String status;

}