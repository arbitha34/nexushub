import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AttendanceTable from "../components/AttendanceTable";

function Attendance() {
  const [attendance, setAttendance] = useState([
    {
      id: 1,
      employeeId: "EMP001",
      employeeName: "John Doe",
      date: "2026-06-30",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      id: 2,
      employeeId: "EMP002",
      employeeName: "Sarah",
      date: "2026-06-30",
      checkIn: "09:15 AM",
      checkOut: "06:10 PM",
      status: "Present",
    },
    {
      id: 3,
      employeeId: "EMP003",
      employeeName: "Michael",
      date: "2026-06-30",
      checkIn: "--",
      checkOut: "--",
      status: "Absent",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [record, setRecord] = useState({
    employeeId: "",
    employeeName: "",
    date: "",
    checkIn: "",
    checkOut: "",
    status: "Present",
  });

  const handleChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setAttendance([
      ...attendance,
      {
        ...record,
        id: attendance.length + 1,
      },
    ]);

    setOpen(false);

    setRecord({
      employeeId: "",
      employeeName: "",
      date: "",
      checkIn: "",
      checkOut: "",
      status: "Present",
    });
  };

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
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h4" fontWeight="bold">
              Attendance
            </Typography>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpen(true)}
            >
              Mark Attendance
            </Button>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <AttendanceTable attendance={attendance} />
          </Paper>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Mark Attendance</DialogTitle>

            <DialogContent>

              <TextField
                fullWidth
                margin="normal"
                label="Employee ID"
                name="employeeId"
                value={record.employeeId}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Employee Name"
                name="employeeName"
                value={record.employeeName}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                type="date"
                label="Date"
                name="date"
                InputLabelProps={{ shrink: true }}
                value={record.date}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Check In"
                name="checkIn"
                value={record.checkIn}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Check Out"
                name="checkOut"
                value={record.checkOut}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Status"
                name="status"
                value={record.status}
                onChange={handleChange}
              />

            </DialogContent>

            <DialogActions>

              <Button
                color="error"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={handleSave}
              >
                Save
              </Button>

            </DialogActions>

          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default Attendance;