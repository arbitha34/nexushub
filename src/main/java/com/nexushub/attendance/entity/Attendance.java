package com.nexushub.attendance.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "attendance")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String attendanceId;

    @Column(nullable = false)
    private String employeeId;

    @Column(nullable = false)
    private String employeeName;

    @Column(nullable = false)
    private String department;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String checkIn;

    @Column(nullable = false)
    private String checkOut;

    @Column(nullable = false)
    private String status;
}
