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

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const activities = [
    "John completed UI Design task",
    "Sarah applied for leave",
    "New employee Michael joined",
    "Project NexusHub created",
    "Attendance updated successfully",
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

          <Typography color="text.secondary" mb={4}>
            Welcome to NexusHub Employee & Project Management System
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard
                title="Employees"
                value="120"
                color="#1976d2"
                icon={<PeopleIcon />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard
                title="Projects"
                value="18"
                color="#2e7d32"
                icon={<WorkIcon />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard
                title="Tasks"
                value="245"
                color="#ed6c02"
                icon={<AssignmentIcon />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard
                title="Attendance"
                value="95%"
                color="#9c27b0"
                icon={<EventAvailableIcon />}
              />
            </Grid>
          </Grid>

          <Paper sx={{ mt: 4, p: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
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