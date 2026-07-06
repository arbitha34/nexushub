import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Employees",
    icon: <PeopleIcon />,
    path: "/employees",
  },
  {
    text: "Projects",
    icon: <WorkIcon />,
    path: "/projects",
  },
  {
    text: "Tasks",
    icon: <AssignmentIcon />,
    path: "/tasks",
  },
  {
    text: "Attendance",
    icon: <EventAvailableIcon />,
    path: "/attendance",
  },
  {
    text: "Leave",
    icon: <CalendarMonthIcon />,
    path: "/leave",
  },
  {
    text: "Reports",
    icon: <AssessmentIcon />,
    path: "/reports",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1976d2",
          color: "white",
        },
      }}
    >
      <Toolbar
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          justifyContent: "center",
        }}
      >
        NexusHub
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: "white",
              "&.Mui-selected": {
                backgroundColor: "#1565c0",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;