package com.nexushub.task.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String taskId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String assignedEmployee;

    @Column(nullable = false)
    private String projectName;

    @Column(nullable = false)
    private String priority;

    @Column(nullable = false)
    private String dueDate;

    @Column(nullable = false)
    private String status;
}