import api from "./api";

const PROJECT_API = "/projects";

/*
|--------------------------------------------------------------------------
| Get All Projects
|--------------------------------------------------------------------------
*/
export const getAllProjects = async () => {
  try {
    const response = await api.get(PROJECT_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Project By ID
|--------------------------------------------------------------------------
*/
export const getProjectById = async (id) => {
  try {
    const response = await api.get(`${PROJECT_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Add Project
|--------------------------------------------------------------------------
*/
export const addProject = async (project) => {
  try {
    const response = await api.post(PROJECT_API, project);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Update Project
|--------------------------------------------------------------------------
*/
export const updateProject = async (id, project) => {
  try {
    const response = await api.put(`${PROJECT_API}/${id}`, project);
    return response.data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Delete Project
|--------------------------------------------------------------------------
*/
export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`${PROJECT_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Search Projects
|--------------------------------------------------------------------------
*/
export const searchProjects = async (keyword) => {
  try {
    const response = await api.get(
      `${PROJECT_API}/search?keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching projects:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Projects By Status
|--------------------------------------------------------------------------
*/
export const getProjectsByStatus = async (status) => {
  try {
    const response = await api.get(
      `${PROJECT_API}/status/${status}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects by status:", error);
    throw error;
  }
};