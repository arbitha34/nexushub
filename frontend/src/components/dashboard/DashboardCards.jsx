import { Grid } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";

import DashboardCard from "../DashboardCard";

function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Employees",
      value: stats.totalEmployees,
      color: "#2563EB",
      icon: <PeopleIcon sx={{ fontSize: 38 }} />,
    },
    {
      title: "Projects",
      value: stats.totalProjects,
      color: "#16A34A",
      icon: <WorkIcon sx={{ fontSize: 38 }} />,
    },
    {
      title: "Tasks",
      value: stats.totalTasks,
      color: "#EA580C",
      icon: <AssignmentIcon sx={{ fontSize: 38 }} />,
    },
    {
      title: "Attendance",
      value: stats.totalAttendance,
      color: "#9333EA",
      icon: <EventAvailableIcon sx={{ fontSize: 38 }} />,
    },
    {
      title: "Leaves",
      value: stats.totalLeaves,
      color: "#DC2626",
      icon: <EventNoteIcon sx={{ fontSize: 38 }} />,
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{
        mb: 4,
      }}
    >
      {cards.map((card, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          key={index}
          sx={{
            display: "flex",
          }}
        >
          <DashboardCard
            title={card.title}
            value={card.value}
            color={card.color}
            icon={card.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardCards;