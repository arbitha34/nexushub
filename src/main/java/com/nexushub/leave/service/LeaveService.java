package com.nexushub.leave.service;

import com.nexushub.leave.dto.LeaveRequest;
import com.nexushub.leave.dto.LeaveResponse;

import java.util.List;

public interface LeaveService {

    LeaveResponse createLeave(LeaveRequest leaveRequest);

    LeaveResponse getLeaveById(Long id);

    List<LeaveResponse> getAllLeaves();

    LeaveResponse updateLeave(Long id, LeaveRequest leaveRequest);

    void deleteLeave(Long id);
}
