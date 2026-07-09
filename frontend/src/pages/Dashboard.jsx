import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import DashboardCards from "../components/dashboard/DashboardCards";
import DashboardBarChart from "../components/dashboard/DashboardBarChart";
import DashboardPieChart from "../components/dashboard/DashboardPieChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import LatestEmployees from "../components/dashboard/LatestEmployees";
import QuickStats from "../components/dashboard/QuickStats";

import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {

  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalProjects: 0,
    totalTasks: 0,
    totalAttendance: 0,
    totalLeaves: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await getDashboardStats();
      setStats(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#F4F7FC",
      }}
    >

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >

        <Topbar />

        <Box
          sx={{
            mt: "90px",
            px: 4,
            pb: 4,
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Dashboard
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            Welcome back, Admin 👋
          </Typography>

          <DashboardCards
            stats={stats}
          />

          <Grid
            container
            spacing={3}
            sx={{
              mt: 1,
            }}
          >

            <Grid
              item
              xs={12}
              lg={8}
            >

              <Paper
                elevation={2}
                sx={{
                  borderRadius: 4,
                  p: 3,
                  height: 430,
                }}
              >

                <DashboardBarChart
                  employees={stats.totalEmployees}
                  projects={stats.totalProjects}
                  tasks={stats.totalTasks}
                />

              </Paper>

            </Grid>

            <Grid
              item
              xs={12}
              lg={4}
            >

              <Paper
                elevation={2}
                sx={{
                  borderRadius: 4,
                  p: 3,
                  height: 430,
                }}
              >

                <DashboardPieChart
                  attendance={stats.totalAttendance}
                  leaves={stats.totalLeaves}
                />

              </Paper>

            </Grid>

          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2,
            }}
          >

            <Grid
              item
              xs={12}
              lg={7}
            >

              <Paper
                elevation={2}
                sx={{
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                }}
              >

                <RecentActivity />

              </Paper>

            </Grid>

            <Grid
              item
              xs={12}
              lg={5}
            >

              <Paper
                elevation={2}
                sx={{
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                }}
              >

                <LatestEmployees />

              </Paper>

            </Grid>

          </Grid>

          <Box
            sx={{
              mt: 4,
            }}
          >

            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
            >
              Quick Statistics
            </Typography>

            <QuickStats
              stats={stats}
            />

          </Box>
        </Box>

      </Box>

    </Box>
  );
}

export default Dashboard;