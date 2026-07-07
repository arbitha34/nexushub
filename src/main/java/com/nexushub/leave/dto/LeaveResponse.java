package com.nexushub.leave.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LeaveResponse {

    private Long id;

    private String leaveId;

    private String employeeId;

    private String employeeName;

    private String department;

    private String leaveType;

    private String fromDate;

    private String toDate;

    private String reason;

    private String status;
}