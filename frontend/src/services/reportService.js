import api from "./api";

const REPORT_API = "/reports";

/*
|--------------------------------------------------------------------------
| Dashboard Summary
|--------------------------------------------------------------------------
*/
export const getDashboardSummary = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/dashboard`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard summary:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Employee Report
|--------------------------------------------------------------------------
*/
export const getEmployeeReport = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/employees`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee report:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Project Report
|--------------------------------------------------------------------------
*/
export const getProjectReport = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/projects`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project report:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Task Report
|--------------------------------------------------------------------------
*/
export const getTaskReport = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/tasks`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching task report:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Attendance Report
|--------------------------------------------------------------------------
*/
export const getAttendanceReport = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/attendance`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance report:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Leave Report
|--------------------------------------------------------------------------
*/
export const getLeaveReport = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/leave`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave report:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Export Employee Report (PDF)
|--------------------------------------------------------------------------
*/
export const exportEmployeePdf = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/employees/pdf`,
      {
        responseType: "blob",
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error exporting employee PDF:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Export Employee Report (Excel)
|--------------------------------------------------------------------------
*/
export const exportEmployeeExcel = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/employees/excel`,
      {
        responseType: "blob",
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error exporting employee Excel:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Export Project Report (PDF)
|--------------------------------------------------------------------------
*/
export const exportProjectPdf = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/projects/pdf`,
      {
        responseType: "blob",
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error exporting project PDF:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Export Project Report (Excel)
|--------------------------------------------------------------------------
*/
export const exportProjectExcel = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/projects/excel`,
      {
        responseType: "blob",
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error exporting project Excel:", error);
    throw error;
  }
};