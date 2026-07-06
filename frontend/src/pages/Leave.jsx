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
import LeaveTable from "../components/LeaveTable";

function Leave() {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      employee: "John Doe",
      leaveType: "Casual Leave",
      fromDate: "2026-07-10",
      toDate: "2026-07-12",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Sarah",
      leaveType: "Sick Leave",
      fromDate: "2026-07-15",
      toDate: "2026-07-16",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Michael",
      leaveType: "Vacation",
      fromDate: "2026-07-20",
      toDate: "2026-07-25",
      status: "Rejected",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [leave, setLeave] = useState({
    id: "",
    employee: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setLeaves([
      ...leaves,
      {
        ...leave,
        id: leaves.length + 1,
      },
    ]);

    setLeave({
      id: "",
      employee: "",
      leaveType: "",
      fromDate: "",
      toDate: "",
      status: "Pending",
    });

    setOpen(false);
  };

  const handleApprove = (selectedLeave) => {
    setLeaves(
      leaves.map((item) =>
        item.id === selectedLeave.id
          ? { ...item, status: "Approved" }
          : item
      )
    );
  };

  const handleReject = (selectedLeave) => {
    setLeaves(
      leaves.map((item) =>
        item.id === selectedLeave.id
          ? { ...item, status: "Rejected" }
          : item
      )
    );
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
              onClick={() => setOpen(true)}
            >
              Apply Leave
            </Button>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <LeaveTable
              leaves={leaves}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </Paper>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Apply Leave</DialogTitle>

            <DialogContent>

              <TextField
                fullWidth
                margin="normal"
                label="Employee Name"
                name="employee"
                value={leave.employee}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Leave Type"
                name="leaveType"
                value={leave.leaveType}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                type="date"
                label="From Date"
                name="fromDate"
                InputLabelProps={{ shrink: true }}
                value={leave.fromDate}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                type="date"
                label="To Date"
                name="toDate"
                InputLabelProps={{ shrink: true }}
                value={leave.toDate}
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
                Submit
              </Button>

            </DialogActions>

          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default Leave;