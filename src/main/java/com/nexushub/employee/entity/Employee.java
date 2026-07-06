package com.nexushub.employee.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Table(name = "employees")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Employee ID is required")
    private String employeeId;

    @Column(nullable = false)
    @NotBlank(message = "Employee name is required")
    private String name;

    @Column(nullable = false)
    @Email(message = "Invalid email")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Phone number is required")
    private String phone;

    @Column(nullable = false)
    @NotBlank(message = "Department is required")
    private String department;

    @Column(nullable = false)
    @NotBlank(message = "Designation is required")
    private String designation;

    @Column(nullable = false)
    @NotNull(message = "Salary is required")
    private Double salary;

    @Column(nullable = false)
    @NotBlank(message = "Status is required")
    private String status;

}