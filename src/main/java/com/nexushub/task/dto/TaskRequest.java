package com.nexushub.task.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskRequest {

    @NotBlank(message = "Task ID is required")
    private String taskId;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotBlank(message = "Assigned Employee is required")
    private String assignedEmployee;

    @NotBlank(message = "Project Name is required")
    private String projectName;

    @NotBlank(message = "Priority is required")
    private String priority;

    @NotBlank(message = "Due Date is required")
    private String dueDate;

    @NotBlank(message = "Status is required")
    private String status;
}