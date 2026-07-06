import api from "./api";

const LEAVE_API = "/leave";

/*
|--------------------------------------------------------------------------
| Get All Leave Requests
|--------------------------------------------------------------------------
*/
export const getAllLeaves = async () => {
  try {
    const response = await api.get(LEAVE_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching leave requests:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Leave By ID
|--------------------------------------------------------------------------
*/
export const getLeaveById = async (id) => {
  try {
    const response = await api.get(`${LEAVE_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching leave:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Apply Leave
|--------------------------------------------------------------------------
*/
export const applyLeave = async (leave) => {
  try {
    const response = await api.post(LEAVE_API, leave);
    return response.data;
  } catch (error) {
    console.error("Error applying leave:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Update Leave
|--------------------------------------------------------------------------
*/
export const updateLeave = async (id, leave) => {
  try {
    const response = await api.put(`${LEAVE_API}/${id}`, leave);
    return response.data;
  } catch (error) {
    console.error("Error updating leave:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Delete Leave
|--------------------------------------------------------------------------
*/
export const deleteLeave = async (id) => {
  try {
    const response = await api.delete(`${LEAVE_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting leave:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Approve Leave
|--------------------------------------------------------------------------
*/
export const approveLeave = async (id) => {
  try {
    const response = await api.put(
      `${LEAVE_API}/${id}/approve`
    );
    return response.data;
  } catch (error) {
    console.error("Error approving leave:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Reject Leave
|--------------------------------------------------------------------------
*/
export const rejectLeave = async (id) => {
  try {
    const response = await api.put(
      `${LEAVE_API}/${id}/reject`
    );
    return response.data;
  } catch (error) {
    console.error("Error rejecting leave:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Leaves By Employee
|--------------------------------------------------------------------------
*/
export const getLeavesByEmployee = async (employeeId) => {
  try {
    const response = await api.get(
      `${LEAVE_API}/employee/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee leaves:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Leaves By Status
|--------------------------------------------------------------------------
*/
export const getLeavesByStatus = async (status) => {
  try {
    const response = await api.get(
      `${LEAVE_API}/status/${status}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leaves by status:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Leaves Between Dates
|--------------------------------------------------------------------------
*/
export const getLeavesBetweenDates = async (
  startDate,
  endDate
) => {
  try {
    const response = await api.get(
      `${LEAVE_API}/range?startDate=${startDate}&endDate=${endDate}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave records:", error);
    throw error;
  }
};