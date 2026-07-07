package com.nexushub.task.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskResponse {

    private Long id;

    private String taskId;

    private String title;

    private String description;

    private String assignedEmployee;

    private String projectName;

    private String priority;

    private String dueDate;

    private String status;
}
