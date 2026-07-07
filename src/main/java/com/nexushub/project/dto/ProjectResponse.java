package com.nexushub.project.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectResponse {

    private Long id;

    private String projectId;

    private String projectName;

    private String clientName;

    private String manager;

    private String startDate;

    private String endDate;

    private Double budget;

    private String status;
}
