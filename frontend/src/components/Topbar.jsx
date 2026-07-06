import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: "240px",
        width: "calc(100% - 240px)",
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: 2,
      }}
    >
      <Toolbar>

        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          Employee & Project Management System
        </Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#1976d2",
            }}
          >
            A
          </Avatar>

          <Typography
            sx={{
              ml: 1,
              fontWeight: "bold",
            }}
          >
            Admin
          </Typography>
        </Box>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default Topbar;