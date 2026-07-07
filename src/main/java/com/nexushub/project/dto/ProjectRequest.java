package com.nexushub.project.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectRequest {

    @NotBlank(message = "Project ID is required")
    private String projectId;

    @NotBlank(message = "Project Name is required")
    private String projectName;

    @NotBlank(message = "Client Name is required")
    private String clientName;

    @NotBlank(message = "Manager is required")
    private String manager;

    @NotBlank(message = "Start Date is required")
    private String startDate;

    @NotBlank(message = "End Date is required")
    private String endDate;

    @NotNull(message = "Budget is required")
    private Double budget;

    @NotBlank(message = "Status is required")
    private String status;
}
