import { Box, Grid, Paper, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ReportCard from "../components/ReportCard";

function Reports() {
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
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            Reports
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            mb={4}
          >
            Organization Performance Summary
          </Typography>

          <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={3}>
              <ReportCard
                title="Employees"
                value="120"
                subtitle="Total Employees"
                color="#1976d2"
                icon={<PeopleIcon fontSize="large" />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ReportCard
                title="Projects"
                value="18"
                subtitle="Running Projects"
                color="#2e7d32"
                icon={<WorkIcon fontSize="large" />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ReportCard
                title="Tasks"
                value="245"
                subtitle="Assigned Tasks"
                color="#ed6c02"
                icon={<AssignmentIcon fontSize="large" />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ReportCard
                title="Attendance"
                value="95%"
                subtitle="Overall Attendance"
                color="#9c27b0"
                icon={<EventAvailableIcon fontSize="large" />}
              />
            </Grid>

          </Grid>

          <Grid container spacing={3} sx={{ mt: 2 }}>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  Employee Report
                </Typography>

                <Typography>
                  Total Employees : 120
                </Typography>

                <Typography>
                  Active Employees : 110
                </Typography>

                <Typography>
                  On Leave : 6
                </Typography>

                <Typography>
                  Inactive : 4
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  Project Report
                </Typography>

                <Typography>
                  Completed Projects : 10
                </Typography>

                <Typography>
                  In Progress : 6
                </Typography>

                <Typography>
                  Planning : 2
                </Typography>

                <Typography>
                  Success Rate : 82%
                </Typography>
              </Paper>
            </Grid>

          </Grid>

          <Grid container spacing={3} sx={{ mt: 2 }}>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  Attendance Report
                </Typography>

                <Typography>
                  Present Today : 114
                </Typography>

                <Typography>
                  Absent : 6
                </Typography>

                <Typography>
                  Average Attendance : 95%
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  Leave Report
                </Typography>

                <Typography>
                  Pending Requests : 4
                </Typography>

                <Typography>
                  Approved : 18
                </Typography>

                <Typography>
                  Rejected : 3
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </Box>
      </Box>
    </Box>
  );
}

export default Reports;