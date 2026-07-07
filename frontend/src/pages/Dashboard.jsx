import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";

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
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {

    try {

      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {

      console.error(error);

    }

  };

  const activities = [
    "Employee record updated",
    "Project created",
    "Task assigned",
    "Attendance marked",
    "Leave request submitted",
  ];
    return (
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1 }}>
          <Topbar />

          <Box
            sx={{
              mt: 8,
              p: 4,
              backgroundColor: "#f5f5f5",
              minHeight: "100vh",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Dashboard
            </Typography>

            <Typography
              color="text.secondary"
              mb={4}
            >
              Welcome to NexusHub Employee & Project Management System
            </Typography>

            <Grid container spacing={3}>

              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Employees"
                  value={stats.totalEmployees}
                  color="#1976d2"
                  icon={<PeopleIcon />}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Projects"
                  value={stats.totalProjects}
                  color="#2e7d32"
                  icon={<WorkIcon />}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Tasks"
                  value={stats.totalTasks}
                  color="#ed6c02"
                  icon={<AssignmentIcon />}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Attendance"
                  value={stats.totalAttendance}
                  color="#9c27b0"
                  icon={<EventAvailableIcon />}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Leaves"
                  value={stats.totalLeaves}
                  color="#d32f2f"
                  icon={<EventNoteIcon />}
                />
              </Grid>

            </Grid>

            <Paper sx={{ mt: 4, p: 3 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                Recent Activities
              </Typography>

              <List>

                {activities.map((activity, index) => (

                  <ListItem key={index}>
                    <ListItemText primary={activity} />
                  </ListItem>

                ))}

              </List>

            </Paper>

          </Box>
        </Box>
      </Box>
    );
  }

  export default Dashboard;