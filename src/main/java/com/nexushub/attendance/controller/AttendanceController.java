package com.nexushub.attendance.controller;

import com.nexushub.attendance.dto.AttendanceRequest;
import com.nexushub.attendance.dto.AttendanceResponse;
import com.nexushub.attendance.service.AttendanceService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:5173")
public class AttendanceController {

    private final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AttendanceResponse createAttendance(
            @Valid @RequestBody AttendanceRequest attendanceRequest) {

        return attendanceService.createAttendance(attendanceRequest);
    }

    @GetMapping
    public List<AttendanceResponse> getAllAttendance() {
        return attendanceService.getAllAttendance();
    }

    @GetMapping("/{id}")
    public AttendanceResponse getAttendanceById(@PathVariable Long id) {
        return attendanceService.getAttendanceById(id);
    }

    @PutMapping("/{id}")
    public AttendanceResponse updateAttendance(
            @PathVariable Long id,
            @Valid @RequestBody AttendanceRequest attendanceRequest) {

        return attendanceService.updateAttendance(id, attendanceRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAttendance(@PathVariable Long id) {
        attendanceService.deleteAttendance(id);
    }
}
