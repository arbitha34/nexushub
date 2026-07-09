import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Divider,
  Avatar,
  Chip,
  Paper,
  Button,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { Link, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 270;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
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
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/", { replace: true });
};
  return (

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {

          width: drawerWidth,

          border: "none",

          background:
            "linear-gradient(180deg,#0F172A 0%, #1E3A8A 100%)",

          color: "#fff",

          overflowX: "hidden",

        },
      }}
    >

      <Toolbar
        sx={{
          minHeight: 95,
          justifyContent: "center",
        }}
      >

        <Box
          sx={{
            textAlign: "center",
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
            letterSpacing={1}
          >
            NexusHub
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: .75,
            }}
          >
            Enterprise Workspace
          </Typography>

          <Chip
            label="ADMIN"
            size="small"
            sx={{
              mt: 2,
              bgcolor: "#22C55E",
              color: "#fff",
              fontWeight: "bold",
            }}
          />

        </Box>

      </Toolbar>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,.12)",
        }}
      />
      <List
        sx={{
          px: 2,
          py: 2,
          flexGrow: 1,
        }}
      >

        {menuItems.map((item) => {

          const active =
            location.pathname.startsWith(item.path);

          return (

            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "14px",
                mb: 1,
                py: 1.3,
                px: 2,

                color: "#fff",

                transition: "all .3s ease",

                backgroundColor: active
                  ? "rgba(255,255,255,.18)"
                  : "transparent",

                "&:hover": {
                  backgroundColor:
                    "rgba(255,255,255,.12)",

                  transform: "translateX(6px)",
                },
              }}
            >

              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 45,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: active
                    ? 700
                    : 500,
                  fontSize: 16,
                }}
              />

            </ListItemButton>

          );

        })}

      </List>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,.12)",
        }}
      />
      <Box
        sx={{
          p: 2,
        }}
      >

        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            p: 2,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            color: "#fff",
          }}
        >

          <Box
            display="flex"
            alignItems="center"
          >

            <Avatar
              sx={{
                width: 55,
                height: 55,
                bgcolor: "#fff",
                color: "#1E3A8A",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              A
            </Avatar>

            <Box sx={{ ml: 2 }}>

              <Typography
                fontWeight="bold"
                fontSize={17}
              >
                Admin
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: .8,
                }}
              >
                System Administrator
              </Typography>

            </Box>

          </Box>

          <Button
            fullWidth
            startIcon={<SettingsRoundedIcon />}
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#2563EB",
              borderRadius: 2,
              textTransform: "none",

              "&:hover": {
                bgcolor: "#1D4ED8",
              },
            }}
          >
            Settings
          </Button>

          <Button
            fullWidth
            startIcon={<LogoutRoundedIcon />}
            variant="outlined"
            onClick={handleLogout}
            sx={{
              mt: 1.5,
              borderColor: "#fff",
              color: "#fff",
              borderRadius: 2,
              textTransform: "none",

              "&:hover": {
                borderColor: "#fff",
                bgcolor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            Logout
          </Button>

        </Paper>

      </Box>
    </Drawer>

  );
}

export default Sidebar;