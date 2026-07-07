package com.nexushub.dashboard.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardStatsResponse {

    private long totalEmployees;

    private long totalProjects;

    private long totalTasks;

    private long totalAttendance;

    private long totalLeaves;

}
