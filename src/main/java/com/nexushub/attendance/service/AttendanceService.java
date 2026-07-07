package com.nexushub.attendance.service;

import com.nexushub.attendance.dto.AttendanceRequest;
import com.nexushub.attendance.dto.AttendanceResponse;

import java.util.List;

public interface AttendanceService {

    AttendanceResponse createAttendance(AttendanceRequest attendanceRequest);

    AttendanceResponse getAttendanceById(Long id);

    List<AttendanceResponse> getAllAttendance();

    AttendanceResponse updateAttendance(Long id, AttendanceRequest attendanceRequest);

    void deleteAttendance(Long id);
}