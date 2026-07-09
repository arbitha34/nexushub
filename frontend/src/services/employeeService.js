import api from "./api";

const EMPLOYEE_API = "/employees";

export const getAllEmployees = async () => {
  const response = await api.get(EMPLOYEE_API);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await api.get(`${EMPLOYEE_API}/${id}`);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await api.post(EMPLOYEE_API, employee);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await api.put(`${EMPLOYEE_API}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await api.delete(`${EMPLOYEE_API}/${id}`);
  return response.data;
};