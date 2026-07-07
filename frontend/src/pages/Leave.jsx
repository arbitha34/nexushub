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
import LeaveTable from "../components/LeaveTable";

import {
  getAllLeaves,
  applyLeave,
  updateLeave,
  deleteLeave,
} from "../services/leaveService";

function Leave() {

  const [leaves, setLeaves] = useState([]);

  const [open, setOpen] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [leave, setLeave] = useState({
    id: "",
    leaveId: "",
    employeeId: "",
    employeeName: "",
    department: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
    status: "Pending",
  });

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {

    try {

      const data = await getAllLeaves();

      setLeaves(Array.isArray(data) ? data : []);

    } catch (error) {

      console.error(error);

      setLeaves([]);

      setSnackbar({
        open: true,
        message: "Failed to load leave records",
        severity: "error",
      });

    }

  };
    const handleOpen = () => {

      setLeave({
        id: "",
        leaveId: "",
        employeeId: "",
        employeeName: "",
        department: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
        status: "Pending",
      });

      setOpen(true);
    };

    const handleClose = () => {

      setOpen(false);

      setLeave({
        id: "",
        leaveId: "",
        employeeId: "",
        employeeName: "",
        department: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
        status: "Pending",
      });

    };

    const handleChange = (e) => {

      setLeave({
        ...leave,
        [e.target.name]: e.target.value,
      });

    };

    const handleSave = async () => {

      try {

        const requestBody = {
          leaveId: leave.leaveId.trim(),
          employeeId: leave.employeeId.trim(),
          employeeName: leave.employeeName.trim(),
          department: leave.department.trim(),
          leaveType: leave.leaveType.trim(),
          fromDate: leave.fromDate,
          toDate: leave.toDate,
          reason: leave.reason.trim(),
          status: leave.status.trim(),
        };

        if (leave.id) {

          await updateLeave(leave.id, requestBody);

          setSnackbar({
            open: true,
            message: "Leave Updated Successfully",
            severity: "success",
          });

        } else {

          await applyLeave(requestBody);

          setSnackbar({
            open: true,
            message: "Leave Applied Successfully",
            severity: "success",
          });

        }

        handleClose();

        loadLeaves();

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

    const handleEdit = (selectedLeave) => {

      setLeave(selectedLeave);

      setOpen(true);

    };

    const handleDelete = async (id) => {

      if (!window.confirm("Delete this leave request?")) return;

      try {

        await deleteLeave(id);

        loadLeaves();

        setSnackbar({
          open: true,
          message: "Leave Deleted Successfully",
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
              Leave Management
            </Typography>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Apply Leave
            </Button>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <LeaveTable
              leaves={leaves}
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
              {leave.id ? "Update Leave" : "Apply Leave"}
            </DialogTitle>

            <DialogContent>

              <Grid container spacing={2} sx={{ mt: 1 }}>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Leave ID"
                    name="leaveId"
                    value={leave.leaveId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Employee ID"
                    name="employeeId"
                    value={leave.employeeId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Employee Name"
                    name="employeeName"
                    value={leave.employeeName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={leave.department}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Leave Type"
                    name="leaveType"
                    value={leave.leaveType}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="From Date"
                    name="fromDate"
                    InputLabelProps={{ shrink: true }}
                    value={leave.fromDate}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="To Date"
                    name="toDate"
                    InputLabelProps={{ shrink: true }}
                    value={leave.toDate}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Reason"
                    name="reason"
                    value={leave.reason}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={leave.status}
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

          export default Leave;