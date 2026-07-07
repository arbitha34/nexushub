import api from "./api";

const DASHBOARD_API = "/dashboard";

/*
|--------------------------------------------------------------------------
| Get Dashboard Statistics
|--------------------------------------------------------------------------
*/

export const getDashboardStats = async () => {
  try {
    const response = await api.get(`${DASHBOARD_API}/stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard statistics:", error);
    throw error;
  }
};