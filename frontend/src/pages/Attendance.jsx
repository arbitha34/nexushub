import { useEffect, useState } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AttendanceTable from "../components/AttendanceTable";

import {
  getAllAttendance,
  addAttendance,
  updateAttendance,
  deleteAttendance,
} from "../services/attendanceService";

function Attendance() {

  const [attendance, setAttendance] = useState([]);

  const [open, setOpen] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [record, setRecord] = useState({
    id: "",
    attendanceId: "",
    employeeId: "",
    employeeName: "",
    department: "",
    date: "",
    checkIn: "",
    checkOut: "",
    status: "Present",
  });

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {

    try {

      const data = await getAllAttendance();

      setAttendance(Array.isArray(data) ? data : []);

    } catch (error) {

      console.error(error);

      setAttendance([]);

      setSnackbar({
        open: true,
        message: "Failed to load attendance",
        severity: "error",
      });

    }

  };
    const handleOpen = () => {

      setRecord({
        id: "",
        attendanceId: "",
        employeeId: "",
        employeeName: "",
        department: "",
        date: "",
        checkIn: "",
        checkOut: "",
        status: "Present",
      });

      setOpen(true);
    };

    const handleClose = () => {

      setOpen(false);

      setRecord({
        id: "",
        attendanceId: "",
        employeeId: "",
        employeeName: "",
        department: "",
        date: "",
        checkIn: "",
        checkOut: "",
        status: "Present",
      });

    };

    const handleChange = (e) => {

      setRecord({
        ...record,
        [e.target.name]: e.target.value,
      });

    };

    const handleSave = async () => {

      try {

        const requestBody = {
          attendanceId: record.attendanceId.trim(),
          employeeId: record.employeeId.trim(),
          employeeName: record.employeeName.trim(),
          department: record.department.trim(),
          date: record.date,
          checkIn: record.checkIn.trim(),
          checkOut: record.checkOut.trim(),
          status: record.status.trim(),
        };

        if (record.id) {

          await updateAttendance(record.id, requestBody);

          setSnackbar({
            open: true,
            message: "Attendance Updated Successfully",
            severity: "success",
          });

        } else {

          await addAttendance(requestBody);

          setSnackbar({
            open: true,
            message: "Attendance Added Successfully",
            severity: "success",
          });

        }

        handleClose();

        loadAttendance();

      } catch (error) {

        console.error(error);

        console.log(error.response);
        console.log(error.response?.data);

        setSnackbar({
          open: true,
          message: "Operation Failed",
          severity: "error",
        });

      }

    };

    const handleEdit = (attendanceRecord) => {

      setRecord(attendanceRecord);

      setOpen(true);

    };

    const handleDelete = async (id) => {

      if (!window.confirm("Delete this attendance record?")) return;

      try {

        await deleteAttendance(id);

        loadAttendance();

        setSnackbar({
          open: true,
          message: "Attendance Deleted Successfully",
          severity: "success",
        });

      } catch (error) {

        console.error(error);

        setSnackbar({
          open: true,
          message: "Delete Failed",
          severity: "error",
        });

      }

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
              onClick={handleOpen}
            >
              Mark Attendance
            </Button>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <AttendanceTable
              attendance={attendance}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Paper>

          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle>
              {record.id ? "Update Attendance" : "Mark Attendance"}
            </DialogTitle>

            <DialogContent>

              <Grid container spacing={2} sx={{ mt: 1 }}>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Attendance ID"
                    name="attendanceId"
                    value={record.attendanceId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Employee ID"
                    name="employeeId"
                    value={record.employeeId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Employee Name"
                    name="employeeName"
                    value={record.employeeName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={record.department}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Date"
                    name="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={record.date}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Check In"
                    name="checkIn"
                    value={record.checkIn}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Check Out"
                    name="checkOut"
                    value={record.checkOut}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={record.status}
                    onChange={handleChange}
                  />
                </Grid>

              </Grid>

            </DialogContent>

            <DialogActions>

              <Button
                color="error"
                onClick={handleClose}
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
                    <Snackbar
                      open={snackbar.open}
                      autoHideDuration={3000}
                      onClose={() =>
                        setSnackbar({
                          ...snackbar,
                          open: false,
                        })
                      }
                    >
                      <Alert
                        severity={snackbar.severity}
                        variant="filled"
                      >
                        {snackbar.message}
                      </Alert>
                    </Snackbar>

                  </Box>
                </Box>
              </Box>
            );
          }

          export default Attendance;