import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EmployeeTable from "../components/EmployeeTable";

import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const [open, setOpen] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [employee, setEmployee] = useState({
    id: "",
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    status: "Active",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        message: "Failed to load employees",
        severity: "error",
      });
    }
  };

  const handleOpen = () => {
    setEmployee({
      id: "",
      employeeId: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
      status: "Active",
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const requestBody = {
        employeeId: employee.employeeId.trim(),
        name: employee.name.trim(),
        email: employee.email.trim(),
        phone: employee.phone.trim(),
        department: employee.department.trim(),
        designation: employee.designation.trim(),
        salary: Number(employee.salary),
        status: employee.status.trim(),
      };

      console.log(requestBody);

      if (employee.id) {
        await updateEmployee(employee.id, requestBody);

        setSnackbar({
          open: true,
          message: "Employee Updated Successfully",
          severity: "success",
        });
      } else {
        await addEmployee(requestBody);

        setSnackbar({
          open: true,
          message: "Employee Added Successfully",
          severity: "success",
        });
      }

      handleClose();
      loadEmployees();
    } catch (error) {
      console.log(error.response);
      console.log(error.response?.data);
      console.log(error.response?.status);

      console.error(error);

      setSnackbar({
        open: true,
        message: "Operation Failed",
        severity: "error",
      });
    }
  };

  const handleEdit = (emp) => {
    setEmployee(emp);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    try {
      await deleteEmployee(id);

      loadEmployees();

      setSnackbar({
        open: true,
        message: "Employee Deleted Successfully",
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
              Employees
            </Typography>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add Employee
            </Button>
          </Grid>

          <Paper sx={{ p: 2 }}>
            <EmployeeTable
              employees={employees}
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
              {employee.id ? "Update Employee" : "Add Employee"}
            </DialogTitle>

            <DialogContent>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Employee ID"
                    name="employeeId"
                    value={employee.employeeId}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Employee Name"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={employee.phone}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={employee.designation}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Salary"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={employee.status}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button color="error" onClick={handleClose}>
                Cancel
              </Button>

              <Button variant="contained" onClick={handleSave}>
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
            <Alert severity={snackbar.severity} variant="filled">
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}

export default Employees;