package com.nexushub.attendance.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttendanceRequest {

    @NotBlank(message = "Attendance ID is required")
    private String attendanceId;

    @NotBlank(message = "Employee ID is required")
    private String employeeId;

    @NotBlank(message = "Employee Name is required")
    private String employeeName;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Date is required")
    private String date;

    @NotBlank(message = "Check In is required")
    private String checkIn;

    @NotBlank(message = "Check Out is required")
    private String checkOut;

    @NotBlank(message = "Status is required")
    private String status;
}