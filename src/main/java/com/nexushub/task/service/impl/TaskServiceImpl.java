package com.nexushub.task.service.impl;

import com.nexushub.task.dto.TaskRequest;
import com.nexushub.task.dto.TaskResponse;
import com.nexushub.task.entity.Task;
import com.nexushub.task.repository.TaskRepository;
import com.nexushub.task.service.TaskService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public TaskResponse createTask(TaskRequest taskRequest) {

        if (taskRepository.findByTaskId(taskRequest.getTaskId()).isPresent()) {
            throw new RuntimeException("Task ID already exists.");
        }

        Task task = Task.builder()
                .taskId(taskRequest.getTaskId())
                .title(taskRequest.getTitle())
                .description(taskRequest.getDescription())
                .assignedEmployee(taskRequest.getAssignedEmployee())
                .projectName(taskRequest.getProjectName())
                .priority(taskRequest.getPriority())
                .dueDate(taskRequest.getDueDate())
                .status(taskRequest.getStatus())
                .build();

        Task savedTask = taskRepository.save(task);

        return mapToResponse(savedTask);
    }

    @Override
    public TaskResponse getTaskById(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Task not found with id: " + id));

        return mapToResponse(task);
    }

    @Override
    public List<TaskResponse> getAllTasks() {

        return taskRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public TaskResponse updateTask(Long id, TaskRequest taskRequest) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Task not found with id: " + id));

        task.setTaskId(taskRequest.getTaskId());
        task.setTitle(taskRequest.getTitle());
        task.setDescription(taskRequest.getDescription());
        task.setAssignedEmployee(taskRequest.getAssignedEmployee());
        task.setProjectName(taskRequest.getProjectName());
        task.setPriority(taskRequest.getPriority());
        task.setDueDate(taskRequest.getDueDate());
        task.setStatus(taskRequest.getStatus());

        Task updatedTask = taskRepository.save(task);

        return mapToResponse(updatedTask);
    }

    @Override
    public void deleteTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Task not found with id: " + id));

        taskRepository.delete(task);
    }

    private TaskResponse mapToResponse(Task task) {

        return TaskResponse.builder()
                .id(task.getId())
                .taskId(task.getTaskId())
                .title(task.getTitle())
                .description(task.getDescription())
                .assignedEmployee(task.getAssignedEmployee())
                .projectName(task.getProjectName())
                .priority(task.getPriority())
                .dueDate(task.getDueDate())
                .status(task.getStatus())
                .build();
    }
}
