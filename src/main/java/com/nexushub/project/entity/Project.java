package com.nexushub.project.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String projectId;

    @Column(nullable = false)
    private String projectName;

    @Column(nullable = false)
    private String clientName;

    @Column(nullable = false)
    private String manager;

    @Column(nullable = false)
    private String startDate;

    @Column(nullable = false)
    private String endDate;

    @Column(nullable = false)
    private Double budget;

    @Column(nullable = false)
    private String status;
}