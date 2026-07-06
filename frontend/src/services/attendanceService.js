import api from "./api";

const ATTENDANCE_API = "/attendance";

/*
|--------------------------------------------------------------------------
| Get All Attendance Records
|--------------------------------------------------------------------------
*/
export const getAllAttendance = async () => {
  try {
    const response = await api.get(ATTENDANCE_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Attendance By ID
|--------------------------------------------------------------------------
*/
export const getAttendanceById = async (id) => {
  try {
    const response = await api.get(`${ATTENDANCE_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance record:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Add Attendance
|--------------------------------------------------------------------------
*/
export const addAttendance = async (attendance) => {
  try {
    const response = await api.post(
      ATTENDANCE_API,
      attendance
    );
    return response.data;
  } catch (error) {
    console.error("Error adding attendance:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Update Attendance
|--------------------------------------------------------------------------
*/
export const updateAttendance = async (
  id,
  attendance
) => {
  try {
    const response = await api.put(
      `${ATTENDANCE_API}/${id}`,
      attendance
    );
    return response.data;
  } catch (error) {
    console.error("Error updating attendance:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Delete Attendance
|--------------------------------------------------------------------------
*/
export const deleteAttendance = async (id) => {
  try {
    const response = await api.delete(
      `${ATTENDANCE_API}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting attendance:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Attendance By Employee
|--------------------------------------------------------------------------
*/
export const getAttendanceByEmployee = async (
  employeeId
) => {
  try {
    const response = await api.get(
      `${ATTENDANCE_API}/employee/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching employee attendance:",
      error
    );
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Attendance By Date
|--------------------------------------------------------------------------
*/
export const getAttendanceByDate = async (date) => {
  try {
    const response = await api.get(
      `${ATTENDANCE_API}/date/${date}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching attendance by date:",
      error
    );
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Attendance Between Dates
|--------------------------------------------------------------------------
*/
export const getAttendanceBetweenDates = async (
  startDate,
  endDate
) => {
  try {
    const response = await api.get(
      `${ATTENDANCE_API}/range?startDate=${startDate}&endDate=${endDate}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching attendance range:",
      error
    );
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Mark Check-In
|--------------------------------------------------------------------------
*/
export const checkIn = async (employeeId) => {
  try {
    const response = await api.post(
      `${ATTENDANCE_API}/checkin/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during check-in:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Mark Check-Out
|--------------------------------------------------------------------------
*/
export const checkOut = async (employeeId) => {
  try {
    const response = await api.post(
      `${ATTENDANCE_API}/checkout/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during check-out:", error);
    throw error;
  }
};