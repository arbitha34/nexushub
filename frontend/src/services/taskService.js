import api from "./api";

const TASK_API = "/tasks";

/*
|--------------------------------------------------------------------------
| Get All Tasks
|--------------------------------------------------------------------------
*/
export const getAllTasks = async () => {
  try {
    const response = await api.get(TASK_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Task By ID
|--------------------------------------------------------------------------
*/
export const getTaskById = async (id) => {
  try {
    const response = await api.get(`${TASK_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Add Task
|--------------------------------------------------------------------------
*/
export const addTask = async (task) => {
  try {
    const response = await api.post(TASK_API, task);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Update Task
|--------------------------------------------------------------------------
*/
export const updateTask = async (id, task) => {
  try {
    const response = await api.put(`${TASK_API}/${id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Delete Task
|--------------------------------------------------------------------------
*/
export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`${TASK_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Search Tasks
|--------------------------------------------------------------------------
*/
export const searchTasks = async (keyword) => {
  try {
    const response = await api.get(
      `${TASK_API}/search?keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching tasks:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Tasks By Status
|--------------------------------------------------------------------------
*/
export const getTasksByStatus = async (status) => {
  try {
    const response = await api.get(
      `${TASK_API}/status/${status}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by status:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Tasks By Priority
|--------------------------------------------------------------------------
*/
export const getTasksByPriority = async (priority) => {
  try {
    const response = await api.get(
      `${TASK_API}/priority/${priority}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by priority:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Tasks By Employee
|--------------------------------------------------------------------------
*/
export const getTasksByEmployee = async (employeeId) => {
  try {
    const response = await api.get(
      `${TASK_API}/employee/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee tasks:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Tasks By Project
|--------------------------------------------------------------------------
*/
export const getTasksByProject = async (projectId) => {
  try {
    const response = await api.get(
      `${TASK_API}/project/${projectId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project tasks:", error);
    throw error;
  }
};