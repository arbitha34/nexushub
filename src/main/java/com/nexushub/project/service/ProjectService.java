package com.nexushub.project.service;

import com.nexushub.project.dto.ProjectRequest;
import com.nexushub.project.dto.ProjectResponse;

import java.util.List;

public interface ProjectService {

    ProjectResponse createProject(ProjectRequest projectRequest);

    ProjectResponse getProjectById(Long id);

    List<ProjectResponse> getAllProjects();

    ProjectResponse updateProject(Long id, ProjectRequest projectRequest);

    void deleteProject(Long id);

}
