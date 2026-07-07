package com.nexushub.attendance.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttendanceResponse {

    private Long id;

    private String attendanceId;

    private String employeeId;

    private String employeeName;

    private String department;

    private String date;

    private String checkIn;

    private String checkOut;

    private String status;
}