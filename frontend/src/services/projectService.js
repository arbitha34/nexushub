import api from "./api";

const PROJECT_API = "/projects";

export const getAllProjects = async () => {
  const response = await api.get(PROJECT_API);
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`${PROJECT_API}/${id}`);
  return response.data;
};

export const addProject = async (project) => {
  const response = await api.post(PROJECT_API, project);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await api.put(`${PROJECT_API}/${id}`, project);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`${PROJECT_API}/${id}`);
  return response.data;
};