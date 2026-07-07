package com.nexushub.leave.service.impl;

import com.nexushub.leave.dto.LeaveRequest;
import com.nexushub.leave.dto.LeaveResponse;
import com.nexushub.leave.entity.Leave;
import com.nexushub.leave.repository.LeaveRepository;
import com.nexushub.leave.service.LeaveService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;

    public LeaveServiceImpl(LeaveRepository leaveRepository) {
        this.leaveRepository = leaveRepository;
    }

    @Override
    public LeaveResponse createLeave(LeaveRequest leaveRequest) {

        if (leaveRepository.findByLeaveId(leaveRequest.getLeaveId()).isPresent()) {
            throw new RuntimeException("Leave ID already exists.");
        }

        Leave leave = Leave.builder()
                .leaveId(leaveRequest.getLeaveId())
                .employeeId(leaveRequest.getEmployeeId())
                .employeeName(leaveRequest.getEmployeeName())
                .department(leaveRequest.getDepartment())
                .leaveType(leaveRequest.getLeaveType())
                .fromDate(leaveRequest.getFromDate())
                .toDate(leaveRequest.getToDate())
                .reason(leaveRequest.getReason())
                .status(leaveRequest.getStatus())
                .build();

        Leave savedLeave = leaveRepository.save(leave);

        return mapToResponse(savedLeave);
    }

    @Override
    public LeaveResponse getLeaveById(Long id) {

        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Leave not found with id: " + id));

        return mapToResponse(leave);
    }

    @Override
    public List<LeaveResponse> getAllLeaves() {

        return leaveRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public LeaveResponse updateLeave(Long id, LeaveRequest leaveRequest) {

        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Leave not found with id: " + id));

        leave.setLeaveId(leaveRequest.getLeaveId());
        leave.setEmployeeId(leaveRequest.getEmployeeId());
        leave.setEmployeeName(leaveRequest.getEmployeeName());
        leave.setDepartment(leaveRequest.getDepartment());
        leave.setLeaveType(leaveRequest.getLeaveType());
        leave.setFromDate(leaveRequest.getFromDate());
        leave.setToDate(leaveRequest.getToDate());
        leave.setReason(leaveRequest.getReason());
        leave.setStatus(leaveRequest.getStatus());

        Leave updatedLeave = leaveRepository.save(leave);

        return mapToResponse(updatedLeave);
    }

    @Override
    public void deleteLeave(Long id) {

        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Leave not found with id: " + id));

        leaveRepository.delete(leave);
    }

    private LeaveResponse mapToResponse(Leave leave) {

        return LeaveResponse.builder()
                .id(leave.getId())
                .leaveId(leave.getLeaveId())
                .employeeId(leave.getEmployeeId())
                .employeeName(leave.getEmployeeName())
                .department(leave.getDepartment())
                .leaveType(leave.getLeaveType())
                .fromDate(leave.getFromDate())
                .toDate(leave.getToDate())
                .reason(leave.getReason())
                .status(leave.getStatus())
                .build();
    }
}
