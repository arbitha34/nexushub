package com.nexushub.leave.controller;

import com.nexushub.leave.dto.LeaveRequest;
import com.nexushub.leave.dto.LeaveResponse;
import com.nexushub.leave.service.LeaveService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin(origins = "http://localhost:5173")
public class LeaveController {

    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LeaveResponse createLeave(
            @Valid @RequestBody LeaveRequest leaveRequest) {

        return leaveService.createLeave(leaveRequest);
    }

    @GetMapping
    public List<LeaveResponse> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

    @GetMapping("/{id}")
    public LeaveResponse getLeaveById(@PathVariable Long id) {
        return leaveService.getLeaveById(id);
    }

    @PutMapping("/{id}")
    public LeaveResponse updateLeave(
            @PathVariable Long id,
            @Valid @RequestBody LeaveRequest leaveRequest) {

        return leaveService.updateLeave(id, leaveRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLeave(@PathVariable Long id) {
        leaveService.deleteLeave(id);
    }
}