package com.nexushub.dashboard.service.impl;

import com.nexushub.attendance.repository.AttendanceRepository;
import com.nexushub.dashboard.dto.DashboardStatsResponse;
import com.nexushub.dashboard.service.DashboardService;
import com.nexushub.employee.repository.EmployeeRepository;
import com.nexushub.leave.repository.LeaveRepository;
import com.nexushub.project.repository.ProjectRepository;
import com.nexushub.task.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final EmployeeRepository employeeRepository;
    private final ProjectRepository projectRepository;
    private final TaskRepository taskRepository;
    private final AttendanceRepository attendanceRepository;
    private final LeaveRepository leaveRepository;

    public DashboardServiceImpl(
            EmployeeRepository employeeRepository,
            ProjectRepository projectRepository,
            TaskRepository taskRepository,
            AttendanceRepository attendanceRepository,
            LeaveRepository leaveRepository) {

        this.employeeRepository = employeeRepository;
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
        this.attendanceRepository = attendanceRepository;
        this.leaveRepository = leaveRepository;
    }

    @Override
    public DashboardStatsResponse getDashboardStats() {

        return DashboardStatsResponse.builder()
                .totalEmployees(employeeRepository.count())
                .totalProjects(projectRepository.count())
                .totalTasks(taskRepository.count())
                .totalAttendance(attendanceRepository.count())
                .totalLeaves(leaveRepository.count())
                .build();
    }
}