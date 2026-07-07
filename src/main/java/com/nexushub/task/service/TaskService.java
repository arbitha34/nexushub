package com.nexushub.task.service;

import com.nexushub.task.dto.TaskRequest;
import com.nexushub.task.dto.TaskResponse;

import java.util.List;

public interface TaskService {

    TaskResponse createTask(TaskRequest taskRequest);

    TaskResponse getTaskById(Long id);

    List<TaskResponse> getAllTasks();

    TaskResponse updateTask(Long id, TaskRequest taskRequest);

    void deleteTask(Long id);

}