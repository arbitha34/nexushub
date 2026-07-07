package com.nexushub.attendance.service.impl;

import com.nexushub.attendance.dto.AttendanceRequest;
import com.nexushub.attendance.dto.AttendanceResponse;
import com.nexushub.attendance.entity.Attendance;
import com.nexushub.attendance.repository.AttendanceRepository;
import com.nexushub.attendance.service.AttendanceService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceServiceImpl(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public AttendanceResponse createAttendance(AttendanceRequest attendanceRequest) {

        if (attendanceRepository.findByAttendanceId(attendanceRequest.getAttendanceId()).isPresent()) {
            throw new RuntimeException("Attendance ID already exists.");
        }

        Attendance attendance = Attendance.builder()
                .attendanceId(attendanceRequest.getAttendanceId())
                .employeeId(attendanceRequest.getEmployeeId())
                .employeeName(attendanceRequest.getEmployeeName())
                .department(attendanceRequest.getDepartment())
                .date(attendanceRequest.getDate())
                .checkIn(attendanceRequest.getCheckIn())
                .checkOut(attendanceRequest.getCheckOut())
                .status(attendanceRequest.getStatus())
                .build();

        Attendance savedAttendance = attendanceRepository.save(attendance);

        return mapToResponse(savedAttendance);
    }

    @Override
    public AttendanceResponse getAttendanceById(Long id) {

        Attendance attendance = attendanceRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Attendance not found with id: " + id));

        return mapToResponse(attendance);
    }

    @Override
    public List<AttendanceResponse> getAllAttendance() {

        return attendanceRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public AttendanceResponse updateAttendance(Long id, AttendanceRequest attendanceRequest) {

        Attendance attendance = attendanceRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Attendance not found with id: " + id));

        attendance.setAttendanceId(attendanceRequest.getAttendanceId());
        attendance.setEmployeeId(attendanceRequest.getEmployeeId());
        attendance.setEmployeeName(attendanceRequest.getEmployeeName());
        attendance.setDepartment(attendanceRequest.getDepartment());
        attendance.setDate(attendanceRequest.getDate());
        attendance.setCheckIn(attendanceRequest.getCheckIn());
        attendance.setCheckOut(attendanceRequest.getCheckOut());
        attendance.setStatus(attendanceRequest.getStatus());

        Attendance updatedAttendance = attendanceRepository.save(attendance);

        return mapToResponse(updatedAttendance);
    }

    @Override
    public void deleteAttendance(Long id) {

        Attendance attendance = attendanceRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Attendance not found with id: " + id));

        attendanceRepository.delete(attendance);
    }

    private AttendanceResponse mapToResponse(Attendance attendance) {

        return AttendanceResponse.builder()
                .id(attendance.getId())
                .attendanceId(attendance.getAttendanceId())
                .employeeId(attendance.getEmployeeId())
                .employeeName(attendance.getEmployeeName())
                .department(attendance.getDepartment())
                .date(attendance.getDate())
                .checkIn(attendance.getCheckIn())
                .checkOut(attendance.getCheckOut())
                .status(attendance.getStatus())
                .build();
    }
}
