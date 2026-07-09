import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
  InputBase,
  Paper,
  Menu,
  MenuItem,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem as MuiMenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PaletteRoundedIcon from "@mui/icons-material/PaletteRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";

const drawerWidth = 270;

function Topbar() {

  // Notification

  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const openNotification = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const closeNotification = () => {
    setNotificationAnchor(null);
  };

  // Mail

  const [mailAnchor, setMailAnchor] = useState(null);

  const openMail = (event) => {
    setMailAnchor(event.currentTarget);
  };

  const closeMail = () => {
    setMailAnchor(null);
  };

  // Settings

  const [openSettings, setOpenSettings] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [emailNotification, setEmailNotification] =
    useState(true);

  const [desktopNotification, setDesktopNotification] =
    useState(true);

  const [language, setLanguage] =
    useState("English");

  return (

    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: "#fff",
        color: "#000",
        borderBottom: "1px solid #E5E7EB",
      }}
    >

      <Toolbar sx={{ minHeight: 72 }}>

        <Box sx={{ flexGrow: 1 }}>

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            Dashboard
          </Typography>

          <Typography
            color="text.secondary"
          >
            Welcome back 👋
          </Typography>

        </Box>

        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            width: 320,
            px: 2,
            py: .7,
            mr: 4,
            borderRadius: 10,
            bgcolor: "#F3F4F6",
          }}
        >

          <SearchIcon
            sx={{
              color: "gray",
              mr: 1,
            }}
          />

          <InputBase
            placeholder="Search..."
            fullWidth
          />

        </Paper>

        {/* Notification */}

        <IconButton onClick={openNotification}>
          <Badge
            badgeContent={5}
            color="error"
          >
            <NotificationsNoneRoundedIcon />
          </Badge>
        </IconButton>

        {/* Mail */}

        <IconButton
          sx={{ ml: 1 }}
          onClick={openMail}
        >
          <Badge
            badgeContent={3}
            color="primary"
          >
            <MailOutlineRoundedIcon />
          </Badge>
        </IconButton>

        {/* Settings */}

        <IconButton
          sx={{ ml: 1 }}
          onClick={() => setOpenSettings(true)}
        >
          <SettingsRoundedIcon />
        </IconButton>

        {/* Admin */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 3,
            pl: 3,
            borderLeft: "1px solid #E5E7EB",
          }}
        >

          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 45,
              height: 45,
              fontWeight: "bold",
            }}
          >
            A
          </Avatar>

          <Box sx={{ ml: 2 }}>

            <Typography fontWeight="bold">
              Admin
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Administrator
            </Typography>

          </Box>

        </Box>
      </Toolbar>

      {/* Notification Menu */}

      <Menu
        anchorEl={notificationAnchor}
        open={Boolean(notificationAnchor)}
        onClose={closeNotification}
        PaperProps={{
          sx: {
            width: 320,
            borderRadius: 3,
            mt: 1,
          },
        }}
      >
        <MenuItem>
          👨 John Doe joined the company
        </MenuItem>

        <Divider />

        <MenuItem>
          📄 Leave request approved
        </MenuItem>

        <Divider />

        <MenuItem>
          📁 New Project Created
        </MenuItem>

        <Divider />

        <MenuItem>
          📋 Task assigned successfully
        </MenuItem>

      </Menu>

      {/* Mail Menu */}

      <Menu
        anchorEl={mailAnchor}
        open={Boolean(mailAnchor)}
        onClose={closeMail}
        PaperProps={{
          sx: {
            width: 320,
            borderRadius: 3,
            mt: 1,
          },
        }}
      >
        <MenuItem>
          📧 Welcome to NexusHub
        </MenuItem>

        <Divider />

        <MenuItem>
          📅 Team Meeting Today - 10:00 AM
        </MenuItem>

        <Divider />

        <MenuItem>
          📢 HR Announcement
        </MenuItem>

      </Menu>

      {/* Settings Dialog */}

      <Dialog
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
          },
        }}
      >

        <DialogTitle
          sx={{
            bgcolor: "#2563EB",
            color: "white",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          ⚙ NexusHub Settings
        </DialogTitle>

        <DialogContent sx={{ mt: 2 }}>

          {/* Profile */}

          <Paper
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
            }}
          >
            <Box display="flex" alignItems="center">

              <PersonRoundedIcon
                color="primary"
              />

              <Typography
                ml={1}
                fontWeight="bold"
              >
                Profile
              </Typography>

            </Box>

            <Typography mt={2}>
              Name : Admin
            </Typography>

            <Typography>
              Role : Administrator
            </Typography>

          </Paper>

          {/* Company */}

          <Paper
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
            }}
          >
            <Box display="flex" alignItems="center">

              <BusinessRoundedIcon
                color="success"
              />

              <Typography
                ml={1}
                fontWeight="bold"
              >
                Company
              </Typography>

            </Box>

            <Typography mt={2}>
              NexusHub Enterprise Workspace
            </Typography>

          </Paper>

          {/* Theme */}

          <Paper
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
            }}
          >
            <Box display="flex" alignItems="center">

              <PaletteRoundedIcon
                color="warning"
              />

              <Typography
                ml={1}
                fontWeight="bold"
              >
                Theme
              </Typography>

            </Box>

            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) =>
                    setDarkMode(e.target.checked)
                  }
                />
              }
              label={
                darkMode
                  ? "Dark Mode"
                  : "Light Mode"
              }
            />

          </Paper>

          {/* Language */}

          <Paper
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
            }}
          >
            <Box display="flex" alignItems="center">

              <LanguageRoundedIcon
                color="secondary"
              />

              <Typography
                ml={1}
                fontWeight="bold"
              >
                Language
              </Typography>

            </Box>

            <Select
              fullWidth
              value={language}
              sx={{ mt: 2 }}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
            >
              <MuiMenuItem value="English">
                English
              </MuiMenuItem>

              <MuiMenuItem value="Tamil">
                Tamil
              </MuiMenuItem>

            </Select>

          </Paper>

          {/* Notifications */}

          <Paper
            sx={{
              p: 2,
              borderRadius: 3,
            }}
          >
            <Box display="flex" alignItems="center">

              <NotificationsActiveRoundedIcon
                color="error"
              />

              <Typography
                ml={1}
                fontWeight="bold"
              >
                Notifications
              </Typography>

            </Box>

            <FormControlLabel
              control={
                <Switch
                  checked={emailNotification}
                  onChange={(e) =>
                    setEmailNotification(
                      e.target.checked
                    )
                  }
                />
              }
              label="Email Notification"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={desktopNotification}
                  onChange={(e) =>
                    setDesktopNotification(
                      e.target.checked
                    )
                  }
                />
              }
              label="Desktop Notification"
            />

          </Paper>

        </DialogContent>

        <DialogActions sx={{ p: 2 }}>

          <Button
            onClick={() =>
              setOpenSettings(false)
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              setOpenSettings(false)
            }
          >
            Save Changes
          </Button>

        </DialogActions>

      </Dialog>

    </AppBar>

  );
}

export default Topbar;