package com.nexushub.project.service.impl;

import com.nexushub.project.dto.ProjectRequest;
import com.nexushub.project.dto.ProjectResponse;
import com.nexushub.project.entity.Project;
import com.nexushub.project.repository.ProjectRepository;
import com.nexushub.project.service.ProjectService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public ProjectResponse createProject(ProjectRequest projectRequest) {

        if (projectRepository.findByProjectId(projectRequest.getProjectId()).isPresent()) {
            throw new RuntimeException("Project ID already exists.");
        }

        Project project = Project.builder()
                .projectId(projectRequest.getProjectId())
                .projectName(projectRequest.getProjectName())
                .clientName(projectRequest.getClientName())
                .manager(projectRequest.getManager())
                .startDate(projectRequest.getStartDate())
                .endDate(projectRequest.getEndDate())
                .budget(projectRequest.getBudget())
                .status(projectRequest.getStatus())
                .build();

        Project savedProject = projectRepository.save(project);

        return mapToResponse(savedProject);
    }

    @Override
    public ProjectResponse getProjectById(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Project not found with id: " + id));

        return mapToResponse(project);
    }

    @Override
    public List<ProjectResponse> getAllProjects() {

        return projectRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public ProjectResponse updateProject(Long id, ProjectRequest projectRequest) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Project not found with id: " + id));

        project.setProjectId(projectRequest.getProjectId());
        project.setProjectName(projectRequest.getProjectName());
        project.setClientName(projectRequest.getClientName());
        project.setManager(projectRequest.getManager());
        project.setStartDate(projectRequest.getStartDate());
        project.setEndDate(projectRequest.getEndDate());
        project.setBudget(projectRequest.getBudget());
        project.setStatus(projectRequest.getStatus());

        Project updatedProject = projectRepository.save(project);

        return mapToResponse(updatedProject);
    }

    @Override
    public void deleteProject(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Project not found with id: " + id));

        projectRepository.delete(project);
    }

    private ProjectResponse mapToResponse(Project project) {

        return ProjectResponse.builder()
                .id(project.getId())
                .projectId(project.getProjectId())
                .projectName(project.getProjectName())
                .clientName(project.getClientName())
                .manager(project.getManager())
                .startDate(project.getStartDate())
                .endDate(project.getEndDate())
                .budget(project.getBudget())
                .status(project.getStatus())
                .build();
    }
}
