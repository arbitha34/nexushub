package com.nexushub.leave.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LeaveRequest {

    @NotBlank(message = "Leave ID is required")
    private String leaveId;

    @NotBlank(message = "Employee ID is required")
    private String employeeId;

    @NotBlank(message = "Employee Name is required")
    private String employeeName;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Leave Type is required")
    private String leaveType;

    @NotBlank(message = "From Date is required")
    private String fromDate;

    @NotBlank(message = "To Date is required")
    private String toDate;

    @NotBlank(message = "Reason is required")
    private String reason;

    @NotBlank(message = "Status is required")
    private String status;
}
