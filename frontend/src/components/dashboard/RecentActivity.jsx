import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function RecentActivity() {
  const activities = [
    "Employee added successfully",
    "Project created",
    "Task assigned",
    "Attendance updated",
    "Leave request submitted",
  ];

  return (
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
        mb={2}
      >
        Recent Activities
      </Typography>

      <List>

        {activities.map((activity, index) => (

          <ListItem key={index}>

            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>

            <ListItemText
              primary={activity}
            />

          </ListItem>

        ))}

      </List>

    </Paper>
  );
}

export default RecentActivity;